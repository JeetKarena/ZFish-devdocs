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
			<div className="space-y-8">
				<div className="space-y-4">
					<h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
						Components
					</h1>
					<p className="text-lg text-muted-foreground max-w-3xl">
						Explore all ZFish components and learn how to use them in your
						applications. Each component is designed for simplicity and performance.
					</p>
				</div>

				{/* Featured Components Grid */}
				<div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
					{components.map((component) => (
						<Card
							key={component.name}
							className="group hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
						>
							<CardHeader className="pb-4">
								<div className="flex items-start justify-between gap-3">
									<div className="flex items-center gap-3 flex-1 min-w-0">
										<div className="text-3xl flex-shrink-0">{component.icon}</div>
										<div className="min-w-0 flex-1">
											<CardTitle className="text-lg leading-tight truncate">
												{component.name}
											</CardTitle>
											<Badge variant="secondary" className="mt-1 text-xs">
												Component
											</Badge>
										</div>
									</div>
								</div>
								<CardDescription className="text-sm leading-relaxed mt-3">
									{component.description}
								</CardDescription>
							</CardHeader>
							<CardContent className="pt-0">
								<div className="space-y-4">
									{/* Compact Code Example */}
									<div className="relative">
										<CodeBlock
											code={component.example}
											language="rust"
											title={`${component.name} Example`}
											showOutput={true}
											output={component.output}
											className="text-sm"
										/>
									</div>

									{/* Action Button */}
									<Button asChild className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
										<Link href={component.href} className="flex items-center justify-center gap-2">
											Learn More
											<span className="text-sm">→</span>
										</Link>
									</Button>
								</div>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Architecture Section */}
				<div className="mt-16">
					<div className="grid gap-8 lg:grid-cols-2 items-start">
						{/* Zero Dependencies Card */}
						<Card className="border-primary/10 bg-gradient-to-br from-primary/5 to-transparent">
							<CardHeader>
								<CardTitle className="flex items-center gap-2 text-xl">
									<span className="text-2xl">⚡</span>
									Zero Dependencies
								</CardTitle>
								<CardDescription className="text-base">
									ZFish is built on top of Rust's standard library only
								</CardDescription>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground mb-6 leading-relaxed">
									Unlike other CLI frameworks, ZFish has zero external
									dependencies. This ensures fast compile times, small binary
									sizes, and maximum compatibility.
								</p>
								<div className="grid grid-cols-2 gap-3">
									<div className="flex items-center gap-2 text-sm">
										<span className="text-green-500">✅</span>
										<span>No dependencies</span>
									</div>
									<div className="flex items-center gap-2 text-sm">
										<span className="text-green-500">✅</span>
										<span>Fast compilation</span>
									</div>
									<div className="flex items-center gap-2 text-sm">
										<span className="text-green-500">✅</span>
										<span>Small binaries</span>
									</div>
									<div className="flex items-center gap-2 text-sm">
										<span className="text-green-500">✅</span>
										<span>Maximum compatibility</span>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Quick Start Card */}
						<Card className="border-blue-500/10 bg-gradient-to-br from-blue-500/5 to-transparent">
							<CardHeader>
								<CardTitle className="flex items-center gap-2 text-xl">
									<span className="text-2xl">🚀</span>
									Quick Start
								</CardTitle>
								<CardDescription className="text-base">
									Get started with ZFish in minutes
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="space-y-4">
									<div className="bg-muted/50 rounded-lg p-4">
										<div className="text-sm font-medium mb-2">Add to Cargo.toml</div>
										<code className="text-xs bg-background px-2 py-1 rounded border">
											zfish = "0.1.0"
										</code>
									</div>
									<div className="bg-muted/50 rounded-lg p-4">
										<div className="text-sm font-medium mb-2">Basic Usage</div>
										<code className="text-xs bg-background px-2 py-1 rounded border block">
											use zfish::prelude::*;<br/>
											println!("Hello, ZFish!");
										</code>
									</div>
									<Button asChild className="w-full mt-4">
										<Link href="/getting-started">
											Get Started →
										</Link>
									</Button>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</DocsLayout>
	);
}