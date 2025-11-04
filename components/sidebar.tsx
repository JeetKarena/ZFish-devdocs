"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { memo, useMemo } from "react";

const sidebarItems = [
	{
		title: "Getting Started",
		href: "/getting-started",
		items: [
			{ title: "Installation", href: "/getting-started#installation" },
			{ title: "Quick Start", href: "/getting-started#quick-start" },
			{ title: "Core Concepts", href: "/getting-started#core-concepts" },
		],
	},
	{
		title: "Components",
		href: "/components",
		items: [
			{ title: "Argument Parsing", href: "/components/args" },
			{ title: "Colors & Styles", href: "/components/colors" },
			{ title: "Progress Bars", href: "/components/progress" },
			{ title: "Tables", href: "/components/tables" },
			{ title: "Interactive Prompts", href: "/components/prompts" },
			{ title: "Logger", href: "/components/logger" },
			{ title: "Terminal Control", href: "/components/terminal" },
		],
	},
	{
		title: "Examples",
		href: "/examples",
		items: [
			{ title: "Hello World", href: "/examples/01_hello_world" },
			{ title: "Argument Parsing", href: "/examples/02_argument_parsing" },
			{ title: "Colored Text", href: "/examples/03_colored_text" },
			{ title: "Progress Bar", href: "/examples/04_progress_bar" },
			{ title: "Logger", href: "/examples/05_logger" },
			{ title: "Terminal Control", href: "/examples/06_terminal_control" },
			{ title: "Interactive Prompts", href: "/examples/07_interactive_prompts" },
			{ title: "Complete CLI", href: "/examples/08_complete_cli" },
			{ title: "Subcommands", href: "/examples/09_subcommands" },
			{ title: "Advanced Args", href: "/examples/10_arg_features_v2" },
			{ title: "Core Features", href: "/examples/11_core_features_demo" },
			{ title: "Reports", href: "/examples/12_beautiful_reports" },
			{ title: "Table Examples", href: "/examples/13_table_examples" },
			{ title: "Alignment", href: "/examples/14_alignment_test" },
			{ title: "Unicode Width", href: "/examples/15_debug_emoji_width" },
			{ title: "Unicode Test", href: "/examples/16_comprehensive_unicode_test" },
			{ title: "Edge Cases", href: "/examples/17_unicode_edge_cases" },
			{ title: "Manual Tables", href: "/examples/18_manual_table_drawing" },
		],
	},
	{
		title: "API Reference",
		href: "/api",
		items: [
			{ title: "Style Module", href: "/api#style" },
			{ title: "Progress Module", href: "/api#progress" },
			{ title: "Table Module", href: "/api#table" },
			{ title: "Prompt Module", href: "/api#prompt" },
			{ title: "Log Module", href: "/api#log" },
			{ title: "Terminal Module", href: "/api#term" },
			{ title: "Args Module", href: "/api#args" },
			{ title: "Unicode Module", href: "/api#unicode" },
		],
	},
];

interface SidebarProps {
	className?: string;
}

export const Sidebar = memo(function Sidebar({ className }: SidebarProps) {
	const pathname = usePathname();

	// Memoize sidebar data to prevent recreation
	const sidebarData = useMemo(() => sidebarItems, []);

	// Memoize section rendering to prevent unnecessary re-renders
	const renderedSections = useMemo(
		() =>
			sidebarData.map((section) => (
				<div key={section.title}>
					<h3 className="mb-2 px-2 text-sm font-semibold">
						{section.title}
					</h3>
					<div className="space-y-1">
						{section.items.map((item) => (
							<Button
								key={item.href}
								variant={pathname === item.href ? "secondary" : "ghost"}
								className="w-full justify-start h-8 px-2 text-sm font-normal"
								asChild
							>
								<Link href={item.href}>{item.title}</Link>
							</Button>
						))}
					</div>
				</div>
			)),
		[sidebarData, pathname]
	);

	return (
		<ScrollArea className={cn("h-full py-6 pr-6", className)}>
			<div className="space-y-6">{renderedSections}</div>
		</ScrollArea>
	);
});

export default Sidebar;