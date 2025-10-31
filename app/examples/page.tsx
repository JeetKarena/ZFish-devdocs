import { DocsLayout } from "@/components/docs-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/code-block";
import Link from "next/link";

const examples = [
	{
		number: "01",
		name: "Hello World",
		description: "Basic usage with colored output",
		tags: ["beginner", "colors"],
		href: "/examples/01_hello_world",
		code: `use zfish::{style::Color, print};

fn main() {
    print("Hello, ", Color::Green);
    print("ZFish!", Color::Blue.bold());
    println!();
}`,
		output: "Hello, ZFish!",
	},
	{
		number: "02",
		name: "Argument Parsing",
		description: "CLI argument handling and validation",
		tags: ["intermediate", "args"],
		href: "/examples/02_argument_parsing",
		code: `use zfish::args::{Args, Command};

let mut args = Args::new();
args.add_positional("name", "Your name");
args.add_flag("verbose", "Enable verbose output");

let matches = args.parse()?;
let name = matches.get_positional("name")?;
let verbose = matches.get_flag("verbose");`,
		output:
			"Usage: program [OPTIONS] <name>\n\nArguments:\n  <name>  Your name\n\nOptions:\n  --verbose  Enable verbose output",
	},
	{
		number: "03",
		name: "Colored Text",
		description: "16 + 256 color palette showcase",
		tags: ["colors", "styling"],
		href: "/examples/03_colored_text",
		code: `use zfish::style::Color;

// 16 basic colors
print("Red", Color::Red);
print("Green", Color::Green);
print("Blue", Color::Blue);

// 256 colors
print("Orange", Color::from_256(208));
print("Purple", Color::from_256(129));`,
		output: "RedGreenBlueOrangePurple",
	},
	{
		number: "04",
		name: "Progress Bar",
		description: "Beautiful progress bars with animations",
		tags: ["progress", "ui"],
		href: "/examples/04_progress_bar",
		code: `use zfish::progress::Progress;

let mut progress = Progress::new(100);
progress.set_message("Downloading...");

for i in 0..=100 {
    progress.set_position(i);
    std::thread::sleep(std::time::Duration::from_millis(20));
}

progress.finish_with_message("Download complete!");`,
		output:
			"[========================================] 100.0% (100/100) Downloading...\nDownload complete!",
	},
	{
		number: "05",
		name: "Logger",
		description: "Structured logging with colors",
		tags: ["logging", "debug"],
		href: "/examples/05_logger",
		code: `use zfish::log::{Logger, Level};

let logger = Logger::new();

// Different log levels
logger.info("Application started");
logger.warn("This is a warning");
logger.error("This is an error");
logger.debug("Debug information");`,
		output:
			"[INFO] Application started\n[WARN] This is a warning\n[ERROR] This is an error\n[DEBUG] Debug information",
	},
	{
		number: "06",
		name: "Terminal Control",
		description: "Cursor movement and screen manipulation",
		tags: ["terminal", "control"],
		href: "/examples/06_terminal_control",
		code: `use zfish::term;

// Clear screen and move cursor
term::clear_screen()?;
term::move_cursor(5, 10)?;
print("Hello at position 5,10!", Color::Green);

// Get terminal size
let (width, height) = term::size()?;
println!("Terminal size: {}x{}", width, height);`,
		output: "Hello at position 5,10!\nTerminal size: 80x24",
	},
	{
		number: "07",
		name: "Interactive Prompts",
		description: "User input and confirmation prompts",
		tags: ["interactive", "input"],
		href: "/examples/07_interactive_prompts",
		code: `use zfish::prompt::{Confirm, Input, Select};

let confirmed = Confirm::new("Do you want to continue?")
    .default(true)
    .prompt()?;

let name = Input::new("What is your name?")
    .placeholder("Enter your name")
    .prompt()?;

let choice = Select::new("Choose an option:")
    .items(&["Option 1", "Option 2", "Option 3"])
    .default(0)
    .prompt()?;`,
		output:
			"? Do you want to continue? (Y/n) y\n? What is your name? John Doe\n? Choose an option: (1) Option 1\n  (2) Option 2\n  (3) Option 3\n> 1",
	},
	{
		number: "08",
		name: "Complete CLI",
		description: "Full-featured CLI application",
		tags: ["advanced", "complete"],
		href: "/examples/08_complete_cli",
		code: `use zfish::{args::Args, style::Color, progress::Progress};

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut args = Args::new();
    args.add_positional("file", "File to process");
    args.add_flag("verbose", "Verbose output");

    let matches = args.parse()?;
    let file = matches.get_positional("file")?;
    let verbose = matches.get_flag("verbose");

    if verbose {
        println!("Processing file: {}", file);
    }

    let mut progress = Progress::new(100);
    for i in 0..=100 {
        progress.set_position(i);
        std::thread::sleep(std::time::Duration::from_millis(10));
    }

    progress.finish_with_message("Processing complete!");
    Ok(())
}`,
		output:
			"Processing file: data.txt\n[========================================] 100.0% (100/100)\nProcessing complete!",
	},
];

export default function Examples() {
	return (
		<DocsLayout>
			<div className="space-y-6">
				<div>
					<h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
						Examples
					</h1>
					<p className="text-lg text-muted-foreground">
						Explore 18 comprehensive examples covering all ZFish features.
						Each example includes runnable code and detailed explanations.
					</p>
				</div>

				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{examples.map((example) => (
						<Card
							key={example.number}
							className="group hover:shadow-lg transition-shadow"
						>
							<CardHeader>
								<div className="flex items-center justify-between">
									<CardTitle className="flex items-center gap-2">
										<Badge variant="outline" className="font-mono">
											{example.number}
										</Badge>
										{example.name}
									</CardTitle>
								</div>
								<CardDescription>
									{example.description}
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="flex flex-wrap gap-1 mb-4">
									{example.tags.map((tag) => (
										<Badge key={tag} variant="secondary" className="text-xs">
											{tag}
										</Badge>
									))}
								</div>
								<CodeBlock
									code={example.code}
									language="rust"
									title={`${example.name} Example`}
									showOutput={true}
									output={example.output}
									className="mb-4"
								/>
								<div className="flex gap-2">
									<Button asChild className="flex-1">
										<Link href={example.href}>View Full Example</Link>
									</Button>
									<Button
										variant="outline"
										asChild
										className="flex-1"
									>
										<Link
											href={`https://github.com/JeetKarena/ZFish/tree/main/examples/${example.number}_${example.name
												.toLowerCase()
												.replace(/\s+/g, "_")}.rs`}
										>
											Source
										</Link>
									</Button>
								</div>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Getting Started Note */}
				<div className="mt-16">
					<Card>
						<CardHeader>
							<CardTitle>Running Examples</CardTitle>
							<CardDescription>
								All examples are available in the ZFish repository
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								<p className="text-muted-foreground">
									Clone the repository and run any example:
								</p>
								<CodeBlock
									code={`git clone https://github.com/JeetKarena/ZFish.git
cd ZFish
cargo run --example 01_hello_world`}
									language="bash"
									title="Terminal"
									showOutput={true}
									output={`   Compiling zfish v0.1.10
    Finished dev [unoptimized + debuginfo] target(s) in 2.34s
     Running \`target/debug/examples/01_hello_world\`
Hello, ZFish!`}
								/>
								<div className="flex gap-2">
									<Button variant="outline" asChild>
										<Link href="https://github.com/JeetKarena/ZFish/tree/main/examples">
											View All Examples on GitHub
										</Link>
									</Button>
									<Button asChild>
										<Link href="/getting-started">Get Started</Link>
									</Button>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</DocsLayout>
	);
}