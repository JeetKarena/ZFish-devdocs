import { DocsLayout } from "@/components/docs-layout";
import { CodeBlock } from "@/components/code-block";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Example18Page() {
  return (<DocsLayout><div className="space-y-8"><div><div className="flex items-center gap-2 mb-2"><Badge variant="outline">Example 18</Badge><Badge>Advanced</Badge></div><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Manual Table Drawing</h1><p className="text-lg text-muted-foreground mt-2">Manual table drawing</p></div><Card><CardHeader><CardTitle>Running the Example</CardTitle></CardHeader><CardContent><CodeBlock code="cargo run --example 18_manual_table_drawing" language="bash" title="Terminal" /></CardContent></Card><Card><CardHeader><CardTitle>View Full Code</CardTitle></CardHeader><CardContent className="flex gap-2"><Button asChild><Link href="https://github.com/JeetKarena/ZFish/blob/main/examples/18_manual_table_drawing.rs" target="_blank">View on GitHub</Link></Button><Button variant="outline" asChild><Link href="/components/tables">Learn More</Link></Button></CardContent></Card></div></DocsLayout>);
}
