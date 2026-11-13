"use client";

import { useState, useEffect, memo } from "react";
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

export const CodeBlock = memo(function CodeBlock({
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
    <div className={cn("relative group rounded-md border bg-card overflow-hidden", className)}>
      {title && (
        <div className="flex items-center justify-between px-3 py-2 border-b bg-muted/30">
          <span className="text-xs font-medium text-muted-foreground">{title}</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={copyToClipboard}
            className="h-5 w-5 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            {copied ? (
              <Check className="h-3 w-3 text-green-500" />
            ) : (
              <Copy className="h-3 w-3" />
            )}
          </Button>
        </div>
      )}
      <div className="overflow-hidden [&_pre]:!bg-transparent [&_code]:!bg-transparent">
        <div className="overflow-x-auto">
          <SyntaxHighlighter
            language={language}
            style={syntaxTheme}
            wrapLongLines={false}
            customStyle={{
              margin: 0,
              padding: "0.5rem 0.75rem",
              background: "transparent",
              fontSize: "0.875rem",
              lineHeight: "1.4",
              whiteSpace: "pre",
              overflowWrap: "normal",
              wordBreak: "normal",
              width: "max-content",
              minWidth: "100%",
              maxHeight: showOutput ? "120px" : "100px",
            }}
            showLineNumbers={false}
            PreTag="div"
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
      {showOutput && output && (
        <div className="border-t bg-muted/20">
          <div className="px-3 py-1.5 text-xs text-muted-foreground border-b bg-muted/30">
            Output
          </div>
          <pre className="px-3 py-2 text-xs font-mono bg-muted/10 overflow-x-auto max-h-16">
            {output}
          </pre>
        </div>
      )}
      {!title && (
        <Button
          variant="ghost"
          size="sm"
          onClick={copyToClipboard}
          className="absolute top-2 right-2 h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          {copied ? (
            <Check className="h-3 w-3 text-green-500" />
            ) : (
            <Copy className="h-3 w-3" />
          )}
        </Button>
      )}
    </div>
  );
});
