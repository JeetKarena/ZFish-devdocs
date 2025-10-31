import { DocsLayout } from "@/components/docs-layout";
import { CodeBlock } from "@/components/code-block";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Example01Page() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline">Example 01</Badge>
            <Badge>Beginner</Badge>
          </div>
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Hello World</h1>
          <p className="text-lg text-muted-foreground mt-2">
            The simplest ZFish program - basic colored terminal output
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
            <CardDescription>Learn the basics of colored terminal output with ZFish</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              This example demonstrates how to create colored terminal output using ZFish's Color module.
              It shows basic colors, bright variants, and the 256-color palette.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Complete Code</CardTitle>
          </CardHeader>
          <CardContent>
            <CodeBlock
              code={`// Example 1: Hello World - The simplest zfish program

use zfish::style::Color;

fn main() {
    println!("{}", Color::Green.paint("Hello, zfish! 🐟"));

    // Multiple colors
    println!(
        "{} {} {}",
        Color::Red.paint("Red"),
        Color::Yellow.paint("Yellow"),
        Color::Blue.paint("Blue")
    );

    // Bright colors
    println!("{}", Color::BrightCyan.paint("Bright Cyan Text"));

    // Custom 256 colors
    println!("{}", Color::Custom(208).paint("Orange (256-color palette)"));
}`}
              language="rust"
              title="01_hello_world.rs"
              showOutput={true}
              output={`Hello, zfish! 🐟
Red Yellow Blue
Bright Cyan Text
Orange (256-color palette)`}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How It Works</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">1. Import the Color Module</h4>
              <CodeBlock
                code={`use zfish::style::Color;`}
                language="rust"
              />
              <p className="text-sm text-muted-foreground mt-2">
                Import the Color type to use terminal colors
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">2. Use Basic Colors</h4>
              <CodeBlock
                code={`Color::Green.paint("Hello, zfish! 🐟")`}
                language="rust"
              />
              <p className="text-sm text-muted-foreground mt-2">
                The <code className="text-xs bg-muted px-1 py-0.5 rounded">paint()</code> method applies color to text
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">3. Combine Multiple Colors</h4>
              <CodeBlock
                code={`println!(
    "{} {} {}",
    Color::Red.paint("Red"),
    Color::Yellow.paint("Yellow"),
    Color::Blue.paint("Blue")
);`}
                language="rust"
              />
              <p className="text-sm text-muted-foreground mt-2">
                Use format strings to combine multiple colored texts
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">4. Bright Color Variants</h4>
              <CodeBlock
                code={`Color::BrightCyan.paint("Bright Cyan Text")`}
                language="rust"
              />
              <p className="text-sm text-muted-foreground mt-2">
                Use <code className="text-xs bg-muted px-1 py-0.5 rounded">Bright*</code> variants for lighter colors
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">5. 256-Color Palette</h4>
              <CodeBlock
                code={`Color::Custom(208).paint("Orange (256-color palette)")`}
                language="rust"
              />
              <p className="text-sm text-muted-foreground mt-2">
                Use <code className="text-xs bg-muted px-1 py-0.5 rounded">Custom(n)</code> for 256-color palette (0-255)
              </p>
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

# Run the example
cargo run --example 01_hello_world`}
              language="bash"
              title="Terminal"
              showOutput={true}
              output={`   Compiling zfish v0.1.10
    Finished dev [unoptimized + debuginfo] target(s) in 2.34s
     Running \`target/debug/examples/01_hello_world\`
Hello, zfish! 🐟
Red Yellow Blue
Bright Cyan Text
Orange (256-color palette)`}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Next Steps</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <Button variant="outline" asChild>
                <Link href="/examples/02_argument_parsing">
                  Next: Example 02 - Argument Parsing →
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/components/colors">
                  Learn More About Colors →
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://github.com/JeetKarena/ZFish/blob/main/examples/01_hello_world.rs" target="_blank">
                  View Source on GitHub
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DocsLayout>
  );
}
