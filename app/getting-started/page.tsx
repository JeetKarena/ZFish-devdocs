import { DocsLayout } from "@/components/docs-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/code-block";
import Link from "next/link";

export default function GettingStarted() {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <div>
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Getting Started</h1>
          <p className="text-lg text-muted-foreground">
            Learn how to install and start using ZFish in your Rust projects.
          </p>
        </div>

        {/* Installation */}
        <section id="installation" className="space-y-4">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Installation</h2>
          <Tabs defaultValue="cargo-add" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="cargo-add">Cargo Add</TabsTrigger>
              <TabsTrigger value="manual">Manual</TabsTrigger>
            </TabsList>
            <TabsContent value="cargo-add">
              <Card>
                <CardHeader>
                  <CardTitle>Using cargo add</CardTitle>
                  <CardDescription>The easiest way to add ZFish to your project</CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock
                    code="cargo add zfish"
                    language="bash"
                    title="Terminal"
                    showOutput={true}
                    output="    Updating crates.io index
      Adding zfish v0.1.10 to dependencies"
                  />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="manual">
              <Card>
                <CardHeader>
                  <CardTitle>Manual Installation</CardTitle>
                  <CardDescription>Add ZFish to your Cargo.toml</CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock
                    code={`[dependencies]
zfish = "0.1"`}
                    language="toml"
                    title="Cargo.toml"
                  />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Your First App */}
        <section id="quick-start" className="space-y-4">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Your First App</h2>
          <Card>
            <CardHeader>
              <CardTitle>Hello World</CardTitle>
              <CardDescription>Create a simple colored output application</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <CodeBlock
                code={`use zfish::{style::Color, print};

fn main() {
    print("Hello, ", Color::Green);
    print("ZFish!", Color::Blue.bold());
    println!(); // New line
}`}
                language="rust"
                title="main.rs"
                showOutput={true}
                output="Hello, ZFish!"
              />
              <div className="flex gap-2">
                <Button asChild>
                  <Link href="/examples/01_hello_world">View Full Example</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="https://github.com/JeetKarena/ZFish/tree/main/examples/01_hello_world.rs">
                    Source Code
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Core Concepts */}
        <section id="core-concepts" className="space-y-4">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Core Concepts</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Colors & Styles</CardTitle>
                <CardDescription>
                  ZFish provides rich terminal coloring with 16 colors,
                  256 colors, and true color support.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CodeBlock
                  code={`use zfish::style::Color;

// Basic colors
print("Red text", Color::Red);
print("Green text", Color::Blue.bold());

// Styles
print("Bold text", Color::Blue.bold());
print("Italic text", Color::Yellow.italic());`}
                  language="rust"
                  title="Colors Example"
                  showOutput={true}
                  output="Red textGreen textBold textItalic text"
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Progress Bars</CardTitle>
                <CardDescription>
                  Create beautiful progress bars with multiple styles and real-time updates.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CodeBlock
                  code={`use zfish::progress::Progress;

let mut progress = Progress::new(100);
progress.set_message("Processing...");

for i in 0..=100 {
    progress.set_position(i);
    std::thread::sleep(std::time::Duration::from_millis(50));
}

progress.finish_with_message("Done!");`}
                  language="rust"
                  title="Progress Bar Example"
                  showOutput={true}
                  output="[========================================] 100.0% (100/100) Processing...
Done!"
                />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Next Steps */}
        <section className="space-y-4">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Next Steps</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Examples</CardTitle>
                <CardDescription>
                  Explore 18 comprehensive examples covering all ZFish features.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/examples">View Examples</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Components</CardTitle>
                <CardDescription>
                  Learn about all available components and their APIs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/components">Browse Components</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>API Reference</CardTitle>
                <CardDescription>
                  Complete API documentation for all ZFish modules.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/api">View API Docs</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>📋 Roadmap & Status</CardTitle>
                <CardDescription>
                  See what's implemented and what's coming in future releases.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link href="https://sprinkle-toque-13b.notion.site/ZFish-29d4eaaebc9d80bd82f3c27833a92232" target="_blank">
                    View on Notion
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </DocsLayout>
  );
}