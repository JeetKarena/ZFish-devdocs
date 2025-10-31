import { DocsLayout } from "@/components/docs-layout";
import { CodeBlock } from "@/components/code-block";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Example03Page() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline">Example 03</Badge>
            <Badge>Beginner</Badge>
          </div>
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Colored Text</h1>
          <p className="text-lg text-muted-foreground mt-2">
            16 + 256 color palette showcase with text styling
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Running the Example</CardTitle>
          </CardHeader>
          <CardContent>
            <CodeBlock
              code={`cargo run --example 03_colored_text`}
              language="bash"
              showOutput={true}
              output={`=== Basic Colors ===
Red text
Green text
Blue text

=== Bright Colors ===
Bright Red
Bright Green
Bright Blue

=== Text Styles ===
Bold text
Italic text
Underlined text
Dim text

=== Combined Styles ===
Bold + Italic + Underline

=== 256-Color Palette ===
Color 196
Color 202
Color 208
Color 214
Color 220
Color 226

=== Rainbow Example ===
█████ █████ █████ █████ █████ █████`}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>View Full Code</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-2">
            <Button asChild>
              <Link href="https://github.com/JeetKarena/ZFish/blob/main/examples/03_colored_text.rs" target="_blank">
                View on GitHub
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/components/colors">Learn About Colors</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </DocsLayout>
  );
}
