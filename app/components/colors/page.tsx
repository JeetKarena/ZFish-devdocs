import { DocsLayout } from "@/components/docs-layout";
import { CodeBlock } from "@/components/code-block";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ColorsPage() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        <div>
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Colors & Styles</h1>
          <p className="text-lg text-muted-foreground mt-2">
            Rich terminal coloring with 16, 256, and true color support
          </p>
        </div>

        {/* Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
            <CardDescription>
              ZFish provides powerful color and styling capabilities for terminal output
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              The style module offers comprehensive color support including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>16 basic ANSI colors</li>
              <li>256-color palette</li>
              <li>True color (24-bit RGB) support</li>
              <li>Text styling (bold, italic, underline)</li>
              <li>Foreground and background colors</li>
            </ul>
          </CardContent>
        </Card>

        {/* Basic Colors */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Colors</CardTitle>
            <CardDescription>16 standard ANSI colors</CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock
              code={`use zfish::style::Color;

// Print with basic colors
print("Red text", Color::Red);
print("Green text", Color::Green);
print("Blue text", Color::Blue);
print("Yellow text", Color::Yellow);

// Bright variants
print("Bright red", Color::BrightRed);
print("Bright green", Color::BrightGreen);`}
              language="rust"
              title="Basic Colors Example"
              showOutput={true}
              output="Red textGreen textBlue textYellow textBright redBright green"
            />
          </CardContent>
        </Card>

        {/* 256 Colors */}
        <Card>
          <CardHeader>
            <CardTitle>256-Color Palette</CardTitle>
            <CardDescription>Extended color palette with 256 colors</CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock
              code={`use zfish::style::Color;

// Use 256-color palette with Custom(n)
println!("{}", Color::Custom(208).paint("Orange"));
println!("{}", Color::Custom(129).paint("Purple"));
println!("{}", Color::Custom(213).paint("Pink"));
println!("{}", Color::Custom(80).paint("Teal"));

// Colors range from 0-255
for i in [196, 202, 208, 214, 220, 226] {
    println!("{}", Color::Custom(i).paint(format!("Color {}", i)));
}`}
              language="rust"
              title="256-Color Example"
              showOutput={true}
              output="Orange\nPurple\nPink\nTeal\nColor 196\nColor 202..."
            />
          </CardContent>
        </Card>

        {/* Combined Styles */}
        <Card>
          <CardHeader>
            <CardTitle>Combined Styles</CardTitle>
            <CardDescription>Mix colors with multiple text styles</CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock
              code={`use zfish::style::{Color, Style};

// Combine multiple styles
println!("{}", Color::Cyan
    .paint("Bold + Italic + Underline")
    .style(Style::Bold)
    .style(Style::Italic)
    .style(Style::Underline)
);

// Rainbow example
let rainbow_colors = [
    Color::Red, Color::Yellow, Color::Green,
    Color::Cyan, Color::Blue, Color::Magenta,
];

for color in rainbow_colors {
    print!("{}", color.paint("█████ "));
}
println!();`}
              language="rust"
              title="Combined Styles Example"
              showOutput={true}
              output="Bold + Italic + Underline\n█████ █████ █████ █████ █████ █████"
            />
          </CardContent>
        </Card>

        {/* Text Styling */}
        <Card>
          <CardHeader>
            <CardTitle>Text Styling</CardTitle>
            <CardDescription>Bold, italic, underline, and more</CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock
              code={`use zfish::style::{Color, Style};

// Apply styles using .style() method
println!("{}", Color::White.paint("Bold text").style(Style::Bold));
println!("{}", Color::White.paint("Italic text").style(Style::Italic));
println!("{}", Color::White.paint("Underlined").style(Style::Underline));
println!("{}", Color::White.paint("Dim text").style(Style::Dim));

// Available styles:
// Style::Bold, Style::Dim, Style::Italic
// Style::Underline, Style::Blink, Style::Reverse, Style::Hidden`}
              language="rust"
              title="Text Styling Example"
              showOutput={true}
              output="Bold text\nItalic text\nUnderlined\nDim text"
            />
          </CardContent>
        </Card>

        {/* Available Colors */}
        <Card>
          <CardHeader>
            <CardTitle>Available Colors</CardTitle>
            <CardDescription>All standard ANSI colors and custom palette</CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock
              code={`use zfish::style::Color;

// Standard colors
Color::Black, Color::Red, Color::Green, Color::Yellow
Color::Blue, Color::Magenta, Color::Cyan, Color::White

// Bright variants
Color::BrightBlack, Color::BrightRed, Color::BrightGreen
Color::BrightYellow, Color::BrightBlue, Color::BrightMagenta
Color::BrightCyan, Color::BrightWhite

// Custom 256-color (0-255)
Color::Custom(208)  // Orange
Color::Custom(129)  // Purple`}
              language="rust"
              title="Available Colors"
              showOutput={false}
            />
          </CardContent>
        </Card>

        {/* API Reference */}
        <Card>
          <CardHeader>
            <CardTitle>API Reference</CardTitle>
            <CardDescription>Available colors and methods</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Basic Colors</h4>
              <div className="flex flex-wrap gap-2">
                {["Black", "Red", "Green", "Yellow", "Blue", "Magenta", "Cyan", "White",
                  "BrightBlack", "BrightRed", "BrightGreen", "BrightYellow", 
                  "BrightBlue", "BrightMagenta", "BrightCyan", "BrightWhite"].map(color => (
                  <Badge key={color} variant="outline">{color}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Available Methods</h4>
              <div className="flex flex-wrap gap-2">
                {["paint(text)", "style(Style)", "Custom(n)"].map(method => (
                  <Badge key={method} variant="secondary" className="font-mono text-xs">{method}</Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DocsLayout>
  );
}
