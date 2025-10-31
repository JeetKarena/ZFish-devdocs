import { DocsLayout } from "@/components/docs-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const modules = [
	{
		name: "style",
		description: "Color and text styling utilities",
		items: ["Color", "Style", "print", "println"],
		href: "https://docs.rs/zfish/latest/zfish/style/index.html",
	},
	{
		name: "progress",
		description: "Progress bar components",
		items: ["Progress", "ProgressStyle"],
		href: "https://docs.rs/zfish/latest/zfish/progress/index.html",
	},
	{
		name: "table",
		description: "Table rendering and formatting",
		items: ["Table", "TableStyle", "draw_box"],
		href: "https://docs.rs/zfish/latest/zfish/table/index.html",
	},
	{
		name: "prompt",
		description: "Interactive user prompts",
		items: ["Confirm", "Input", "Select"],
		href: "https://docs.rs/zfish/latest/zfish/prompt/index.html",
	},
	{
		name: "log",
		description: "Structured logging system",
		items: ["Logger", "Level", "Record"],
		href: "https://docs.rs/zfish/latest/zfish/log/index.html",
	},
	{
		name: "term",
		description: "Terminal control and manipulation",
		items: ["clear_screen", "move_cursor", "get_size"],
		href: "https://docs.rs/zfish/latest/zfish/term/index.html",
	},
	{
		name: "args",
		description: "Command-line argument parsing",
		items: ["Args", "Command", "Arg"],
		href: "https://docs.rs/zfish/latest/zfish/args/index.html",
	},
	{
		name: "unicode",
		description: "Unicode text width calculation",
		items: ["display_width", "is_wide_character"],
		href: "https://docs.rs/zfish/latest/zfish/unicode/index.html",
	},
];

export default function API() {
	return (
		<DocsLayout>
			<div className="space-y-6">
				<div>
					<h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
						API Reference
					</h1>
					<p className="text-lg text-muted-foreground">
						Complete API documentation for all ZFish modules and functions.
					</p>
					<div className="mt-6">
						<Button asChild>
							<Link
								href="https://docs.rs/zfish/latest/zfish/"
								target="_blank"
							>
								View Full API Docs →
							</Link>
						</Button>
					</div>
				</div>

				<div className="grid gap-6 md:grid-cols-2">
					{modules.map((module) => (
						<Card
							key={module.name}
							className="group hover:shadow-lg transition-shadow"
						>
							<CardHeader>
								<div className="flex items-center justify-between">
									<CardTitle className="font-mono">
										zfish::{module.name}
									</CardTitle>
									<Badge variant="secondary">Module</Badge>
								</div>
								<CardDescription>
									{module.description}
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="mb-4">
									<h4 className="text-sm font-medium mb-2">
										Key Items:
									</h4>
									<div className="flex flex-wrap gap-1">
										{module.items.map((item) => (
											<Badge
												key={item}
												variant="outline"
												className="text-xs font-mono"
											>
												{item}
											</Badge>
										))}
									</div>
								</div>
								<Button
									variant="outline"
									asChild
									className="w-full"
								>
									<Link
										href={module.href}
										target="_blank"
									>
										View Module Docs
									</Link>
								</Button>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Additional Resources */}
				<div className="mt-16">
					<h2 className="text-2xl font-bold tracking-tight mb-6">
						Additional Resources
					</h2>
					<div className="grid gap-4 md:grid-cols-3">
						<Card>
							<CardHeader>
								<CardTitle>Getting Started</CardTitle>
								<CardDescription>
									Quick start guide and basic usage examples
								</CardDescription>
							</CardHeader>
							<CardContent>
								<Button
									variant="outline"
									asChild
									className="w-full"
								>
									<Link href="/getting-started">Get Started</Link>
								</Button>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle>Examples</CardTitle>
								<CardDescription>
									18 comprehensive examples with runnable code
								</CardDescription>
							</CardHeader>
							<CardContent>
								<Button
									variant="outline"
									asChild
									className="w-full"
								>
									<Link href="/examples">View Examples</Link>
								</Button>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle>Source Code</CardTitle>
								<CardDescription>
									View the complete source code on GitHub
								</CardDescription>
							</CardHeader>
							<CardContent>
								<Button
									variant="outline"
									asChild
									className="w-full"
								>
									<Link
										href="https://github.com/JeetKarena/ZFish"
										target="_blank"
									>
										GitHub
									</Link>
								</Button>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</DocsLayout>
	);
}