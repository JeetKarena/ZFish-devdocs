import { DocsLayout } from "@/components/docs-layout";
import { CodeBlock } from "@/components/code-block";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProgressPage() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        <div>
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Progress Bars</h1>
          <p className="text-lg text-muted-foreground mt-2">
            Beautiful progress bars with multiple styles and real-time updates
          </p>
        </div>

        {/* Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
            <CardDescription>
              Display progress with customizable bars and spinners
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              The progress module provides:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Multiple progress bar styles</li>
              <li>Real-time progress updates</li>
              <li>Custom messages and formatting</li>
              <li>Percentage and count display</li>
              <li>Smooth animations</li>
            </ul>
          </CardContent>
        </Card>

        {/* Basic Progress Bar */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Progress Bar</CardTitle>
            <CardDescription>Simple progress bar with updates</CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock
              code={`use zfish::ProgressBar;
use std::thread;
use std::time::Duration;

let mut pb = ProgressBar::new(100);

for i in 0..=100 {
    pb.set(i);
    thread::sleep(Duration::from_millis(50));
}

pb.finish("✓ Complete!");`}
              language="rust"
              title="Basic Progress Example"
              showOutput={true}
              output="[========================================] 100.0% (100/100) 2000.0/s ETA: 0.0s\n✓ Complete!"
            />
          </CardContent>
        </Card>

        {/* Progress with Increment */}
        <Card>
          <CardHeader>
            <CardTitle>Incremental Progress</CardTitle>
            <CardDescription>Update progress incrementally with .inc()</CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock
              code={`use zfish::ProgressBar;
use std::time::Duration;

let mut pb = ProgressBar::new(50);

for _ in 0..50 {
    pb.inc(1);
    std::thread::sleep(Duration::from_millis(30));
}

pb.finish("✓ Incremental done!");`}
              language="rust"
              title="Incremental Progress"
              showOutput={true}
              output="[========================================] 100.0% (50/50) 1666.7/s ETA: 0.0s\n✓ Incremental done!"
            />
          </CardContent>
        </Card>

        {/* Custom Style */}
        <Card>
          <CardHeader>
            <CardTitle>Custom Style</CardTitle>
            <CardDescription>Different progress bar styles</CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock
              code={`use zfish::{ProgressBar, ProgressStyle};

// Classic style (default): [==========          ]
let mut pb = ProgressBar::new(100);

// Arrow style: [=========>          ]
let mut pb = ProgressBar::new(100).with_style(ProgressStyle::Arrow);

// Dots style: [**********          ]
let mut pb = ProgressBar::new(100).with_style(ProgressStyle::Dots);

// Spinner style: [/|/|/|/|          ]
let mut pb = ProgressBar::new(100).with_style(ProgressStyle::Spinner);

// Custom width
let mut pb = ProgressBar::new(80).width(60);`}
              language="rust"
              title="Custom Progress Styles"
              showOutput={false}
            />
          </CardContent>
        </Card>



        {/* API Reference */}
        <Card>
          <CardHeader>
            <CardTitle>API Reference</CardTitle>
            <CardDescription>Available methods and options</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">ProgressBar Methods</h4>
              <div className="grid gap-2">
                {[
                  { method: "new(total)", desc: "Create a new progress bar" },
                  { method: "set(position)", desc: "Update progress position" },
                  { method: "inc(amount)", desc: "Increment progress by amount" },
                  { method: "with_style(style)", desc: "Set progress bar style" },
                  { method: "width(w)", desc: "Set bar width in characters" },
                  { method: "finish(msg)", desc: "Complete with message" },
                ].map(({ method, desc }) => (
                  <div key={method} className="flex items-start gap-2">
                    <Badge variant="outline" className="font-mono text-xs shrink-0">{method}</Badge>
                    <span className="text-sm text-muted-foreground">{desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DocsLayout>
  );
}
