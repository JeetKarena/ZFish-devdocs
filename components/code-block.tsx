"use client";

import { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark, oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Button } from "@/components/ui/button";
import { Copy, Check, Play } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  showOutput?: boolean;
  output?: string;
  className?: string;
  title?: string;
}

export function CodeBlock({
  code,
  language = "rust",
  showOutput = false,
  output,
  className,
  title
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  // Use dark theme as default during SSR to prevent hydration mismatch
  const syntaxTheme = mounted && theme === "light" ? oneLight : oneDark;

  return (
    <div className={cn("relative group rounded-lg border bg-card", className)}>
      <div className="flex items-center justify-between px-4 py-2 border-b bg-muted/50">
        {title && <span className="text-sm font-medium">{title}</span>}
        <div className="flex items-center gap-2 ml-auto">
          {showOutput && output && (
            <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
              <Play className="h-3 w-3 mr-1" />
              Run
            </Button>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={copyToClipboard}
            className="h-6 w-6 p-0"
          >
            {copied ? (
              <Check className="h-3 w-3 text-green-500" />
            ) : (
              <Copy className="h-3 w-3" />
            )}
          </Button>
        </div>
      </div>
      <div className="overflow-hidden [&_pre]:!bg-transparent [&_code]:!bg-transparent">
        <div className="overflow-x-auto">
          <SyntaxHighlighter
            language={language}
            style={syntaxTheme}
            customStyle={{
              margin: 0,
              padding: "0.75rem 1rem",
              background: "transparent",
              fontSize: "0.75rem sm:0.8rem md:0.875rem",
              lineHeight: "1.5",
            }}
            showLineNumbers={false}
            PreTag="div"
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
      {showOutput && output && (
        <div className="border-t bg-muted/30">
          <div className="px-4 py-2 text-sm text-muted-foreground border-b">
            Output
          </div>
          <pre className="px-4 py-3 text-sm font-mono bg-muted/20 overflow-x-auto">
            {output}
          </pre>
        </div>
      )}
    </div>
  );
}