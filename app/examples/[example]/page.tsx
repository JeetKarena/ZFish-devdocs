import { DocsLayout } from "@/components/docs-layout";
import { CodeBlock } from "@/components/code-block";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const examples = [
  { num: "03", title: "Colored Text", desc: "16 + 256 color palette showcase", difficulty: "Beginner", github: "03_colored_text.rs" },
  { num: "04", title: "Progress Bar", desc: "Beautiful progress bars with animations", difficulty: "Intermediate", github: "04_progress_bar.rs" },
  { num: "05", title: "Logger", desc: "Structured logging with colors", difficulty: "Beginner", github: "05_logger.rs" },
  { num: "06", title: "Terminal Control", desc: "Cursor movement and screen manipulation", difficulty: "Intermediate", github: "06_terminal_control.rs" },
  { num: "07", title: "Interactive Prompts", desc: "User input and confirmation prompts", difficulty: "Intermediate", github: "07_interactive_prompts.rs" },
  { num: "08", title: "Complete CLI", desc: "Full-featured CLI application", difficulty: "Advanced", github: "08_complete_cli.rs" },
  { num: "09", title: "Subcommands", desc: "Subcommands like git", difficulty: "Advanced", github: "09_subcommands.rs" },
  { num: "11", title: "Core Features Demo", desc: "Demonstration of core features", difficulty: "Intermediate", github: "11_core_features_demo.rs" },
  { num: "12", title: "Beautiful Reports", desc: "Generate beautiful CLI reports", difficulty: "Advanced", github: "12_beautiful_reports.rs" },
  { num: "13", title: "Table Examples", desc: "Table rendering with various styles", difficulty: "Intermediate", github: "13_table_examples.rs" },
  { num: "14", title: "Alignment Test", desc: "Text alignment and formatting", difficulty: "Intermediate", github: "14_alignment_test.rs" },
  { num: "15", title: "Debug Emoji Width", desc: "Unicode emoji width calculation", difficulty: "Advanced", github: "15_debug_emoji_width.rs" },
  { num: "16", title: "Comprehensive Unicode Test", desc: "Complete Unicode support testing", difficulty: "Advanced", github: "16_comprehensive_unicode_test.rs" },
  { num: "17", title: "Unicode Edge Cases", desc: "Handle Unicode edge cases", difficulty: "Advanced", github: "17_unicode_edge_cases.rs" },
  { num: "18", title: "Manual Table Drawing", desc: "Draw tables manually with box chars", difficulty: "Advanced", github: "18_manual_table_drawing.rs" },
];

export default function ExamplePlaceholderPage({ params }: { params: { example: string } }) {
  const example = examples.find(e => params.example.endsWith(e.num));
  
  if (!example) {
    return (
      <DocsLayout>
        <div>Example not found</div>
      </DocsLayout>
    );
  }

  return (
    <DocsLayout>
      <div className="space-y-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline">Example {example.num}</Badge>
            <Badge>{example.difficulty}</Badge>
          </div>
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">{example.title}</h1>
          <p className="text-lg text-muted-foreground mt-2">{example.desc}</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>About This Example</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              This example demonstrates {example.desc.toLowerCase()}. View the complete source code on GitHub.
            </p>
            <div className="flex gap-2">
              <Button asChild>
                <Link href={`https://github.com/JeetKarena/ZFish/blob/main/examples/${example.github}`} target="_blank">
                  View Source Code on GitHub
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/examples">Back to Examples</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Running the Example</CardTitle>
          </CardHeader>
          <CardContent>
            <CodeBlock
              code={`# Clone the repository
git clone https://github.com/JeetKarena/ZFish.git
cd ZFish

# Run this example
cargo run --example ${example.github.replace('.rs', '')}`}
              language="bash"
              title="Terminal"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Related Resources</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="outline" asChild className="w-full">
              <Link href="/components">Explore Components</Link>
            </Button>
            <Button variant="outline" asChild className="w-full">
              <Link href="/getting-started">Getting Started Guide</Link>
            </Button>
            <Button variant="outline" asChild className="w-full">
              <Link href="/api">API Reference</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </DocsLayout>
  );
}
