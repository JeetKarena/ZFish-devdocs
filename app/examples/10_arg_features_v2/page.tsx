import { DocsLayout } from "@/components/docs-layout";
import { CodeBlock } from "@/components/code-block";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Example10Page() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline">Example 10</Badge>
            <Badge>Advanced</Badge>
          </div>
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Advanced Argument Features v0.2.1</h1>
          <p className="text-lg text-muted-foreground mt-2">
            Demonstrates all v0.2.1 advanced argument parsing features
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
            <CardDescription>Learn advanced CLI argument parsing patterns</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              This example showcases the most advanced features of ZFish's argument parsing system:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Positional arguments (<code className="text-xs bg-muted px-1 py-0.5 rounded">&lt;FILE&gt;</code>, <code className="text-xs bg-muted px-1 py-0.5 rounded">[OUTPUT]</code>)</li>
              <li>Variadic positional arguments (<code className="text-xs bg-muted px-1 py-0.5 rounded">[FILES]...</code>)</li>
              <li>Environment variable fallbacks (<code className="text-xs bg-muted px-1 py-0.5 rounded">.env("VAR_NAME")</code>)</li>
              <li>Argument dependencies (<code className="text-xs bg-muted px-1 py-0.5 rounded">.requires("other")</code>)</li>
              <li>Argument conflicts (<code className="text-xs bg-muted px-1 py-0.5 rounded">.conflicts_with("other")</code>)</li>
              <li>Value delimiters (<code className="text-xs bg-muted px-1 py-0.5 rounded">.value_delimiter(',')</code>)</li>
              <li>Command aliases (<code className="text-xs bg-muted px-1 py-0.5 rounded">.alias("short")</code>)</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Complete Code</CardTitle>
          </CardHeader>
          <CardContent>
            <CodeBlock
              code={`// Argument Features v0.2.1 Example
// Demonstrates all v0.2.1 advanced argument parsing features

use zfish::Color;
use zfish::command::{App, Arg, Command};

fn main() {
    let app = App::new("myapp")
        .version("2.0.0")
        .about("Advanced CLI with v0.2.1 features")
        .arg(
            Arg::new("config")
                .short('c')
                .long("config")
                .about("Configuration file path")
                .env("MYAPP_CONFIG") // Falls back to MYAPP_CONFIG environment variable
                .default_value("config.toml"),
        )
        .arg(
            Arg::new("verbose")
                .short('v')
                .long("verbose")
                .about("Enable verbose output")
                .takes_value(false)
                .conflicts_with("quiet"), // Cannot be used with --quiet
        )
        .arg(
            Arg::new("quiet")
                .short('q')
                .long("quiet")
                .about("Suppress output")
                .takes_value(false)
                .conflicts_with("verbose"), // Cannot be used with --verbose
        )
        .subcommand(
            Command::new("process")
                .alias("proc") // Alias: can use "proc" instead of "process"
                .alias("p")
                .about("Process files with advanced options")
                .arg(
                    Arg::new("input")
                        .index(0) // Positional argument at position 0
                        .about("Input file to process")
                        .required(true),
                )
                .arg(
                    Arg::new("output")
                        .short('o')
                        .long("output")
                        .about("Output file")
                        .requires("format"), // Requires --format to be specified
                )
                .arg(
                    Arg::new("format")
                        .short('f')
                        .long("format")
                        .about("Output format")
                        .possible_values(&["json", "xml", "yaml"]),
                )
                .arg(
                    Arg::new("tags")
                        .short('t')
                        .long("tags")
                        .about("Comma-separated tags")
                        .value_delimiter(','), // Parses "rust,cli,tool" into ["rust", "cli", "tool"]
                ),
        )
        .subcommand(
            Command::new("convert")
                .alias("cv")
                .about("Convert files with multiple inputs")
                .arg(
                    Arg::new("files")
                        .index(0)
                        .last(true) // Variadic positional: captures all remaining args
                        .about("Files to convert")
                        .required(true),
                )
                .arg(
                    Arg::new("target")
                        .long("target")
                        .about("Target format")
                        .required(true)
                        .possible_values(&["pdf", "png", "svg"]),
                ),
        );

    let matches = app.get_matches();

    // Check config (from CLI, env var, or default)
    if let Some(config) = matches.value_of("config") {
        println!("→ Using config: {}", Color::Cyan.paint(config));
    }

    // Check verbose/quiet
    if matches.is_present("verbose") {
        println!("→ Verbose mode enabled");
    } else if matches.is_present("quiet") {
        println!("→ Quiet mode enabled");
    }

    // Handle subcommands
    match matches.subcommand() {
        Some(("process", sub_matches)) | Some(("proc", sub_matches)) | Some(("p", sub_matches)) => {
            println!("\\n{} Processing file", Color::Green.paint("✓"));

            if let Some(input) = sub_matches.value_of("input") {
                println!("  Input: {}", Color::Yellow.paint(input));
            }

            if let Some(output) = sub_matches.value_of("output") {
                println!("  Output: {}", Color::Yellow.paint(output));

                if let Some(format) = sub_matches.value_of("format") {
                    println!("  Format: {}", Color::Yellow.paint(format));
                }
            }

            if let Some(tags) = sub_matches.values_of("tags") {
                println!("  Tags: {}", tags.join(", "));
            }
        }
        Some(("convert", sub_matches)) | Some(("cv", sub_matches)) => {
            println!("\\n{} Converting files", Color::Green.paint("✓"));

            if let Some(files) = sub_matches.values_of("files") {
                println!("  Files: {}", files.join(", "));
            }

            if let Some(target) = sub_matches.value_of("target") {
                println!("  Target format: {}", Color::Yellow.paint(target));
            }
        }
        _ => {
            println!("\\n{} No subcommand specified", Color::Yellow.paint("⚠"));
            println!("Run with --help for usage information");
        }
    }
}`}
              language="rust"
              title="10_arg_features_v2.rs"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Key Features Explained</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2">1. Environment Variable Fallback</h4>
              <CodeBlock
                code={`Arg::new("config")
    .long("config")
    .env("MYAPP_CONFIG") // Falls back to environment variable
    .default_value("config.toml")`}
                language="rust"
              />
              <p className="text-sm text-muted-foreground mt-2">
                Priority: CLI argument → Environment variable → Default value
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">2. Conflicting Arguments</h4>
              <CodeBlock
                code={`Arg::new("verbose")
    .long("verbose")
    .conflicts_with("quiet") // Cannot be used together`}
                language="rust"
              />
              <p className="text-sm text-muted-foreground mt-2">
                Prevents --verbose and --quiet from being used simultaneously
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">3. Argument Dependencies</h4>
              <CodeBlock
                code={`Arg::new("output")
    .long("output")
    .requires("format") // Must specify --format if --output is used`}
                language="rust"
              />
              <p className="text-sm text-muted-foreground mt-2">
                Ensures required arguments are provided together
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">4. Value Delimiters</h4>
              <CodeBlock
                code={`Arg::new("tags")
    .long("tags")
    .value_delimiter(',') // Parses "rust,cli,tool" into array`}
                language="rust"
              />
              <p className="text-sm text-muted-foreground mt-2">
                Automatically splits values: --tags=rust,cli,tool → ["rust", "cli", "tool"]
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">5. Command Aliases</h4>
              <CodeBlock
                code={`Command::new("process")
    .alias("proc")
    .alias("p") // Can use "process", "proc", or "p"`}
                language="rust"
              />
              <p className="text-sm text-muted-foreground mt-2">
                Create short aliases for convenience
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">6. Variadic Positional Arguments</h4>
              <CodeBlock
                code={`Arg::new("files")
    .index(0)
    .last(true) // Captures all remaining arguments`}
                language="rust"
              />
              <p className="text-sm text-muted-foreground mt-2">
                Accepts multiple files: file1.txt file2.txt file3.txt
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Usage Examples</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Process a file with tags</h4>
              <CodeBlock
                code={`cargo run --example 10_arg_features_v2 -- process input.txt -o output.json -f json -t rust,cli,tool`}
                language="bash"
                showOutput={true}
                output={`→ Using config: config.toml

✓ Processing file
  Input: input.txt
  Output: output.json
  Format: json
  Tags: rust, cli, tool`}
              />
            </div>

            <div>
              <h4 className="font-semibold mb-2">Convert multiple files</h4>
              <CodeBlock
                code={`cargo run --example 10_arg_features_v2 -- convert file1.md file2.md file3.md --target pdf`}
                language="bash"
                showOutput={true}
                output={`→ Using config: config.toml

✓ Converting files
  Files: file1.md, file2.md, file3.md
  Target format: pdf`}
              />
            </div>

            <div>
              <h4 className="font-semibold mb-2">Use command alias</h4>
              <CodeBlock
                code={`cargo run --example 10_arg_features_v2 -- p input.txt  # "p" is alias for "process"`}
                language="bash"
                showOutput={true}
                output={`→ Using config: config.toml

✓ Processing file
  Input: input.txt`}
              />
            </div>

            <div>
              <h4 className="font-semibold mb-2">Environment variable fallback</h4>
              <CodeBlock
                code={`export MYAPP_CONFIG=/etc/myapp.toml
cargo run --example 10_arg_features_v2 -- --help`}
                language="bash"
                showOutput={true}
                output={`→ Using config: /etc/myapp.toml`}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Next Steps</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <Button variant="outline" asChild>
                <Link href="/examples/11_core_features_demo">
                  Next: Example 11 - Core Features Demo →
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/components/args">
                  Learn More About Argument Parsing →
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://github.com/JeetKarena/ZFish/blob/main/examples/10_arg_features_v2.rs" target="_blank">
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
