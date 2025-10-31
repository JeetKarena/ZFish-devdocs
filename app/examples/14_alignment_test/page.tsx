import { DocsLayout } from "@/components/docs-layout";
import { CodeBlock } from "@/components/code-block";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Example14Page() {
  return (<DocsLayout><div className="space-y-8"><div><div className="flex items-center gap-2 mb-2"><Badge variant="outline">Example 14</Badge><Badge>Intermediate</Badge></div><h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Alignment Test</h1><p className="text-lg text-muted-foreground mt-2">Text alignment testing</p></div><Card><CardHeader><CardTitle>Running the Example</CardTitle></CardHeader><CardContent><CodeBlock code="cargo run --example 14_alignment_test" language="bash" title="Terminal" /></CardContent></Card><Card><CardHeader><CardTitle>View Full Code</CardTitle></CardHeader><CardContent className="flex gap-2"><Button asChild><Link href="https://github.com/JeetKarena/ZFish/blob/main/examples/14_alignment_test.rs" target="_blank">View on GitHub</Link></Button><Button variant="outline" asChild><Link href="/examples">Back to Examples</Link></Button></CardContent></Card></div></DocsLayout>);
}
