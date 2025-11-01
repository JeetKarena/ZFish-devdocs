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
      <section className="container py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="mx-auto max-w-4xl text-center px-4 sm:px-6">
          <div className="mb-4 sm:mb-6 md:mb-8 flex justify-center">
            <Badge variant="secondary" className="text-xs sm:text-sm">
              🐟 Ultra-Light CLI Framework
            </Badge>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mb-4 sm:mb-6">
            Beautiful CLI apps in{" "}
            <span className="text-orange-500">Rust</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-6 sm:leading-7 md:leading-8 text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10">
            Zero-dependency, high-performance CLI framework with colors, progress
            bars, tables, prompts, and more. Build stunning terminal applications
            with ease.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-x-6">
            <Button size="lg" asChild className="w-full sm:w-auto text-sm sm:text-base">
              <Link href="/getting-started">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="w-full sm:w-auto text-sm sm:text-base">
              <Link href="/examples">View Examples</Link>
            </Button>
          </div>
          <div className="mt-4 sm:mt-6 md:mt-8 flex justify-center">
            <Button variant="ghost" size="sm" asChild>
              <Link 
                href="https://sprinkle-toque-13b.notion.site/ZFish-29d4eaaebc9d80bd82f3c27833a92232" 
                target="_blank"
                className="text-muted-foreground hover:text-foreground text-xs sm:text-sm"
              >
                📋 View Roadmap & Status
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section className="container py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight mb-6 sm:mb-8 text-center">
            Installation
          </h2>
          <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2">
            <Card className="p-4 sm:p-6">
              <CardHeader>
                <CardTitle className="text-base sm:text-lg md:text-xl">From crates.io</CardTitle>
                <CardDescription>
                  The recommended way to install ZFish
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CodeBlock code="cargo add zfish" language="bash" />
              </CardContent>
            </Card>
            <Card className="p-4 sm:p-6">
              <CardHeader>
                <CardTitle className="text-base sm:text-lg md:text-xl">Manual Installation</CardTitle>
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
      <section className="container py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight mb-6 sm:mb-8 md:mb-12 text-center">
            Features
          </h2>
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="p-4 sm:p-6">
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="flex items-center gap-2 text-sm sm:text-base md:text-lg">
                  🎨 Colors & Styles
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm md:text-base">
                  Rich terminal colors with 16 colors, 256 colors, and true color
                  support
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="p-4 sm:p-6">
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="flex items-center gap-2 text-sm sm:text-base md:text-lg">
                  📊 Progress Bars
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm md:text-base">
                  Beautiful progress bars with multiple styles and real-time
                  updates
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="p-4 sm:p-6">
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="flex items-center gap-2 text-sm sm:text-base md:text-lg">
                  📋 Tables
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm md:text-base">
                  Automated table rendering with Unicode support and custom
                  styling
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="p-4 sm:p-6">
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="flex items-center gap-2 text-sm sm:text-base md:text-lg">
                  ❓ Interactive Prompts
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm md:text-base">
                  User-friendly prompts for input, confirmation, and selection
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="p-4 sm:p-6">
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="flex items-center gap-2 text-sm sm:text-base md:text-lg">
                  📝 Logger
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm md:text-base">
                  Structured logging with levels, colors, and flexible output
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="p-4 sm:p-6">
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="flex items-center gap-2 text-sm sm:text-base md:text-lg">
                  🖥️ Terminal Control
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm md:text-base">
                  Full terminal manipulation with cursor control and screen
                  management
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="container py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight mb-6 sm:mb-8">Quick Start</h2>
          <Card className="p-4 sm:p-6">
            <CardHeader>
              <CardTitle className="text-base sm:text-lg md:text-xl">Hello World Example</CardTitle>
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
    println!();
}`}
                language="rust"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Footer */}
      <footer className="container py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
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
