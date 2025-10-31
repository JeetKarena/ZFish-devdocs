import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/components/code-block";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="container py-24 sm:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 flex justify-center">
            <Badge variant="secondary" className="text-sm">
              🐟 Ultra-Light CLI Framework
            </Badge>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Beautiful CLI apps in{" "}
            <span className="text-orange-500">Rust</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            Zero-dependency, high-performance CLI framework with colors, progress
            bars, tables, prompts, and more. Build stunning terminal applications
            with ease.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" asChild>
              <Link href="/getting-started">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/examples">View Examples</Link>
            </Button>
          </div>
          <div className="mt-6 flex items-center justify-center">
            <Button variant="ghost" size="sm" asChild>
              <Link 
                href="https://sprinkle-toque-13b.notion.site/ZFish-29d4eaaebc9d80bd82f3c27833a92232" 
                target="_blank"
                className="text-muted-foreground hover:text-foreground"
              >
                📋 View Roadmap & Status
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section className="container py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight mb-8">
            Installation
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>From crates.io</CardTitle>
                <CardDescription>
                  The recommended way to install ZFish
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CodeBlock code="cargo add zfish" language="bash" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Manual Installation</CardTitle>
                <CardDescription>Or add to your Cargo.toml</CardDescription>
              </CardHeader>
              <CardContent>
                <CodeBlock
                  code={`[dependencies]
zfish = "0.1"`}
                  language="toml"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">
            Features
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🎨 Colors & Styles
                </CardTitle>
                <CardDescription>
                  Rich terminal colors with 16 colors, 256 colors, and true color
                  support
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  📊 Progress Bars
                </CardTitle>
                <CardDescription>
                  Beautiful progress bars with multiple styles and real-time
                  updates
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  📋 Tables
                </CardTitle>
                <CardDescription>
                  Automated table rendering with Unicode support and custom
                  styling
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  ❓ Interactive Prompts
                </CardTitle>
                <CardDescription>
                  User-friendly prompts for input, confirmation, and selection
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  📝 Logger
                </CardTitle>
                <CardDescription>
                  Structured logging with levels, colors, and flexible output
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🖥️ Terminal Control
                </CardTitle>
                <CardDescription>
                  Full terminal manipulation with cursor control and screen
                  management
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="container py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Quick Start</h2>
          <Card>
            <CardHeader>
              <CardTitle>Hello World Example</CardTitle>
              <CardDescription>
                Create your first ZFish application in minutes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`use zfish::{style::Color, print};

fn main() {
    print("Hello, ", Color::Green);
    print("ZFish!", Color::Blue.bold());
    println!(); // New line
}`}
                language="rust"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Footer */}
      <footer className="container py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-muted-foreground">
            Built with ❤️ by{" "}
            <Link
              href="https://github.com/JeetKarena"
              className="font-medium hover:underline"
            >
              JeetKarena
            </Link>
            {" • "}
            <Link
              href="https://github.com/JeetKarena/ZFish"
              className="font-medium hover:underline"
            >
              View on GitHub
            </Link>
            {" • "}
            <Link
              href="https://sprinkle-toque-13b.notion.site/ZFish-29d4eaaebc9d80bd82f3c27833a92232"
              target="_blank"
              className="font-medium hover:underline"
            >
              📋 Roadmap
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
