import { DocsLayout } from "@/components/docs-layout";
import { CodeBlock } from "@/components/code-block";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ArgsPage() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        <div>
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Argument Parsing</h1>
          <p className="text-lg text-muted-foreground mt-2">
            Command-line argument parsing with flags, options, and subcommands
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Basic Argument Parsing</CardTitle>
            <CardDescription>Parse command-line arguments with Args</CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock
              code={`use zfish::Args;

// Parse command-line arguments
let args = Args::parse();

println!("Command: {}", args.command);

// Check for flags
if args.has_flag("verbose") || args.has_flag("v") {
    println!("Verbose mode enabled");
}

if args.has_flag("help") || args.has_flag("h") {
    println!("Help requested");
}

// Get positional arguments
if !args.positional.is_empty() {
    println!("Files: {:?}", args.positional);
}`}
              language="rust"
              title="Basic Args Example"
              showOutput={true}
              output={'Command: myapp\nVerbose mode enabled\nFiles: ["input.txt", "output.txt"]'}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Options with Values</CardTitle>
            <CardDescription>Parse options that accept values</CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock
              code={`use zfish::Args;

let args = Args::parse();

// Get option values
if let Some(output) = args.get_option("output").or_else(|| args.get_option("o")) {
    println!("Output file: {}", output);
}

if let Some(config) = args.get_option("config") {
    println!("Config: {}", config);
}

if let Some(count) = args.get_option("count") {
    let count: usize = count.parse().unwrap();
    println!("Count: {}", count);
}

// Usage: myapp --output file.txt --count 5`}
              language="rust"
              title="Options Example"
              showOutput={true}
              output="Output file: file.txt\nCount: 5"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Subcommands</CardTitle>
            <CardDescription>Create CLI apps with subcommands like git</CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock
              code={`use zfish::command::{App, Command};

let app = App::new("myapp")
    .version("0.1.0")
    .about("My awesome CLI tool");

// Add subcommands
let build_cmd = Command::new("build")
    .about("Build the project")
    .arg("--release", "Build in release mode");

let run_cmd = Command::new("run")
    .about("Run the application")
    .arg("--debug", "Run in debug mode");

app.command(build_cmd)
    .command(run_cmd)
    .parse();

match app.matches()?.subcommand() {
    Some(("build", matches)) => {
        let release = matches.get_flag("release");
        println!("Building in {} mode", 
            if release { "release" } else { "debug" });
    }
    Some(("run", matches)) => {
        println!("Running application...");
    }
    _ => println!("No subcommand specified"),
}`}
              language="rust"
              title="Subcommands Example"
              showOutput={true}
              output="Building in release mode"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Short Flags</CardTitle>
            <CardDescription>Support short single-letter flags</CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock
              code={`use zfish::args::Args;

let mut args = Args::new();

// Add flags with short versions
args.add_flag_with_short("verbose", 'v', "Verbose output");
args.add_flag_with_short("quiet", 'q', "Quiet mode");
args.add_flag_with_short("force", 'f', "Force operation");

let matches = args.parse()?;

// Can use either --verbose or -v
if matches.get_flag("verbose") {
    println!("Verbose mode");
}

// Can combine: -vf for --verbose --force
if matches.get_flag("force") {
    println!("Force mode");
}`}
              language="rust"
              title="Short Flags Example"
              showOutput={true}
              output="Verbose mode\nForce mode"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Help Generation</CardTitle>
            <CardDescription>Automatic help text generation</CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock
              code={`use zfish::command::App;

let app = App::new("myapp")
    .version("0.1.0")
    .author("Your Name <email@example.com>")
    .about("Description of your app")
    .arg("--config", "Configuration file path")
    .arg("--verbose", "Enable verbose output")
    .arg("-h, --help", "Print help information");

// Running with --help will print:
app.parse();`}
              language="rust"
              title="Help Generation"
              showOutput={true}
              output={`myapp 0.1.0
Your Name <email@example.com>
Description of your app

USAGE:
    myapp [OPTIONS]

OPTIONS:
    --config <CONFIG>    Configuration file path
    --verbose            Enable verbose output
    -h, --help           Print help information
    -V, --version        Print version information`}
            />
          </CardContent>
        </Card>
      </div>
    </DocsLayout>
  );
}
