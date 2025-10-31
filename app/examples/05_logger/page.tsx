import { DocsLayout } from "@/components/docs-layout";
import { CodeBlock } from "@/components/code-block";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const template = (num: string, title: string, desc: string, difficulty: string, filename: string, related?: string) => (
  <DocsLayout>
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="outline">Example {num}</Badge>
          <Badge>{difficulty}</Badge>
        </div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">{title}</h1>
        <p className="text-lg text-muted-foreground mt-2">{desc}</p>
      </div>
      <Card>
        <CardHeader><CardTitle>Running the Example</CardTitle></CardHeader>
        <CardContent>
          <CodeBlock code={`cargo run --example ${filename}`} language="bash" title="Terminal" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle>View Full Code</CardTitle></CardHeader>
        <CardContent className="flex gap-2">
          <Button asChild><Link href={`https://github.com/JeetKarena/ZFish/blob/main/examples/${filename}.rs`} target="_blank">View on GitHub</Link></Button>
          {related && <Button variant="outline" asChild><Link href={related}>Learn More</Link></Button>}
        </CardContent>
      </Card>
    </div>
  </DocsLayout>
);

export default function Example05Page() {
  return template("05", "Logger", "Structured logging with colors", "Beginner", "05_logger", "/components/logger");
}
