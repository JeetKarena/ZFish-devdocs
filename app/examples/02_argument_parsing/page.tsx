import { DocsLayout } from "@/components/docs-layout";
import { CodeBlock } from "@/components/code-block";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Example02Page() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline">Example 02</Badge>
            <Badge>Beginner</Badge>
          </div>
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Argument Parsing</h1>
          <p className="text-lg text-muted-foreground mt-2">
            Parse CLI arguments without dependencies - flags, options, and positional args
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Complete Code</CardTitle>
          </CardHeader>
          <CardContent>
            <CodeBlock
              code={`use zfish::Args;

fn main() {
    // Parse command-line arguments
    let args = Args::parse();

    println!("Command: {}", args.command);

    // Check for flags
    if args.has_flag("verbose") || args.has_flag("v") {
        println!("Verbose mode enabled");
    }

    if args.has_flag("help") || args.has_flag("h") {
        print_help();
        return;
    }

    // Get option values
    if let Some(output) = args.get_option("output").or_else(|| args.get_option("o")) {
        println!("Output file: {}", output);
    }

    if let Some(count) = args.get_option("count") {
        println!("Count: {}", count);
    }

    // Get positional arguments
    if !args.positional.is_empty() {
        println!("Files: {:?}", args.positional);
    }
}

fn print_help() {
    println!("Usage: {} [OPTIONS] [FILES...]", std::env::args().next().unwrap());
    println!();
    println!("Options:");
    println!("  -h, --help              Show this help message");
    println!("  -v, --verbose           Enable verbose output");
    println!("  -o, --output <FILE>     Output file path");
    println!("  --count <N>             Number of iterations");
}`}
              language="rust"
              title="02_argument_parsing.rs"
              showOutput={true}
              output={`Command: ./program
Output file: result.txt
Count: 5
Files: ["input.txt", "data.json"]`}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Running the Example</CardTitle>
          </CardHeader>
          <CardContent>
            <CodeBlock
              code={`# Run with various arguments
cargo run --example 02_argument_parsing -- --verbose --output result.txt --count 5 input.txt data.json

# Show help
cargo run --example 02_argument_parsing -- --help`}
              language="bash"
              title="Terminal"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Next Steps</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-2">
            <Button variant="outline" asChild>
              <Link href="/examples/03_colored_text">Next: Example 03 →</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="https://github.com/JeetKarena/ZFish/blob/main/examples/02_argument_parsing.rs" target="_blank">
                View Source
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </DocsLayout>
  );
}
