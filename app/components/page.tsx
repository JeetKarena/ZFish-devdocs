import { DocsLayout } from "@/components/docs-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/code-block";
import Link from "next/link";

const components = [
	{
		name: "Argument Parsing",
		description: "Command-line argument parsing with flags, options, and subcommands",
		href: "/components/args",
		icon: "⚙️",
		example: `use zfish::args::Args;

let mut args = Args::new();
args.add_flag("verbose", "Verbose output");
let matches = args.parse()?;`,
		output: "Usage: program [OPTIONS]",
	},
	{
		name: "Colors & Styles",
		description: "Rich terminal coloring with 16, 256, and true color support",
		href: "/components/colors",
		icon: "🎨",
		example: `use zfish::style::Color;

print("Hello", Color::Red);
print("World", Color::Green.bold());`,
		output: "HelloWorld",
	},
	{
		name: "Progress Bars",
		description: "Beautiful progress bars with multiple styles and real-time updates",
		href: "/components/progress",
		icon: "📊",
		example: `use zfish::progress::Progress;

let mut progress = Progress::new(100);
progress.set_position(50);`,
		output: "[=========================                     ] 50.0% (50/100)",
	},
	{
		name: "Tables",
		description: "Automated table rendering with Unicode support and custom styling",
		href: "/components/tables",
		icon: "📋",
		example: `use zfish::table::Table;

let mut table = Table::new();
table.add_row(["Name", "Age", "City"]);
table.add_row(["Alice", "25", "NYC"]);
table.print();`,
		output: `┌───────┬─────┬─────┐
│ Name  │ Age │ City│
├───────┼─────┼─────┤
│ Alice │ 25  │ NYC │
└───────┴─────┴─────┘`,
	},
	{
		name: "Interactive Prompts",
		description: "User-friendly prompts for input, confirmation, and selection",
		href: "/components/prompts",
		icon: "❓",
		example: `use zfish::prompt::Confirm;

let answer = Confirm::new("Continue?")
    .prompt()?;`,
		output: "? Continue? (y/N) y",
	},
	{
		name: "Logger",
		description: "Structured logging with levels, colors, and flexible output",
		href: "/components/logger",
		icon: "📝",
		example: `use zfish::log::{Logger, Level};

let logger = Logger::new();
logger.info("Application started");`,
		output: "[INFO] Application started",
	},
	{
		name: "Terminal Control",
		description: "Full terminal manipulation with cursor control and screen management",
		href: "/components/terminal",
		icon: "🖥️",
		example: `use zfish::term;

term::clear_screen()?;
term::move_cursor(10, 5)?;`,
		output: "(Terminal screen cleared and cursor moved to position 10,5)",
	},
];

export default function Components() {
	return (
		<DocsLayout>
			<div className="space-y-6">
				<div>
					<h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
						Components
					</h1>
					<p className="text-lg text-muted-foreground">
						Explore all ZFish components and learn how to use them in your
						applications.
					</p>
				</div>

				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{components.map((component) => (
						<Card
							key={component.name}
							className="group hover:shadow-lg transition-shadow"
						>
							<CardHeader>
								<div className="flex items-center justify-between">
									<CardTitle className="flex items-center gap-2">
										<span className="text-2xl">{component.icon}</span>
										{component.name}
									</CardTitle>
									<Badge variant="secondary">Component</Badge>
								</div>
								<CardDescription>
									{component.description}
								</CardDescription>
							</CardHeader>
							<CardContent>
								<CodeBlock
									code={component.example}
									language="rust"
									title={`${component.name} Example`}
									showOutput={true}
									output={component.output}
									className="mb-4"
								/>
								<Button asChild className="w-full">
									<Link href={component.href}>Learn More</Link>
								</Button>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Architecture Note */}
				<div className="mt-16">
					<Card>
						<CardHeader>
							<CardTitle>Zero Dependencies</CardTitle>
							<CardDescription>
								ZFish is built on top of Rust's standard library only
							</CardDescription>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground mb-4">
								Unlike other CLI frameworks, ZFish has zero external
								dependencies. This ensures fast compile times, small binary
								sizes, and maximum compatibility.
							</p>
							<div className="flex items-center gap-4 text-sm text-muted-foreground">
								<span>✅ No dependencies</span>
								<span>✅ Fast compilation</span>
								<span>✅ Small binaries</span>
								<span>✅ Maximum compatibility</span>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</DocsLayout>
	);
}