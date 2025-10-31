import { DocsLayout } from "@/components/docs-layout";
import { CodeBlock } from "@/components/code-block";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function TablesPage() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        <div>
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Tables</h1>
          <p className="text-lg text-muted-foreground mt-2">
            Automated table rendering with Unicode support and custom styling
          </p>
        </div>

        {/* Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
            <CardDescription>
              Create beautiful ASCII/Unicode tables for terminal output
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              The table module provides:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Automatic column width calculation</li>
              <li>Unicode box-drawing characters</li>
              <li>Header and data row support</li>
              <li>Custom alignment and padding</li>
              <li>Colored cells and borders</li>
            </ul>
          </CardContent>
        </Card>

        {/* Basic Table */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Table</CardTitle>
            <CardDescription>Create a simple table with headers and rows</CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock
              code={`use zfish::table::Table;

// Create table with headers
let mut table = Table::new(vec!["Name", "Age", "City"]);

// Add data rows
table.add_row(vec!["Alice", "25", "New York"]);
table.add_row(vec!["Bob", "30", "London"]);
table.add_row(vec!["Charlie", "28", "Tokyo"]);

// Print the table
table.print();`}
              language="rust"
              title="Basic Table Example"
              showOutput={true}
              output={`┌─────────┬─────┬──────────┐
│ Name    │ Age │ City     │
├─────────┼─────┼──────────┤
│ Alice   │ 25  │ New York │
│ Bob     │ 30  │ London   │
│ Charlie │ 28  │ Tokyo    │
└─────────┴─────┴──────────┘`}
            />
          </CardContent>
        </Card>

        {/* Styled Table */}
        <Card>
          <CardHeader>
            <CardTitle>Styled Table</CardTitle>
            <CardDescription>Customize table appearance with colors and styles</CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock
              code={`use zfish::table::Table;
use zfish::style::Color;

// Create table with headers
let mut table = Table::new(vec!["Product", "Price", "Stock"]);
table.set_box_style(BoxStyle::Double);

// Add colored rows
table.add_row(&["Laptop", "$999", "In Stock"]);
table.add_row(&["Mouse", "$25", "Low Stock"]);
table.add_row(&["Keyboard", "$75", "Out of Stock"]);

// Set border color
table.set_border_color(Color::Blue);

table.print();`}
              language="rust"
              title="Styled Table Example"
              showOutput={true}
              output={`┌──────────┬───────┬──────────────┐
│ Product  │ Price │ Stock        │
├──────────┼───────┼──────────────┤
│ Laptop   │ $999  │ In Stock     │
│ Mouse    │ $25   │ Low Stock    │
│ Keyboard │ $75   │ Out of Stock │
└──────────┴───────┴──────────────┘`}
            />
          </CardContent>
        </Card>

        {/* Column Alignment */}
        <Card>
          <CardHeader>
            <CardTitle>Column Alignment</CardTitle>
            <CardDescription>Align columns left, center, or right</CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock
              code={`use zfish::table::{Table, Alignment};

// Create table with headers
let mut table = Table::new(vec!["Item", "Quantity", "Price"]);

// Set column alignments
table.set_column_alignment(0, Alignment::Left);
table.set_column_alignment(1, Alignment::Center);
table.set_column_alignment(2, Alignment::Right);

// Add rows
table.add_row(vec!["Apple", "10", "$1.50"]);
table.add_row(vec!["Banana", "5", "$0.80"]);
table.add_row(vec!["Orange", "8", "$1.20"]);

table.print();`}
              language="rust"
              title="Column Alignment Example"
              showOutput={true}
              output={`┌────────┬──────────┬───────┐
│ Item   │ Quantity │ Price │
├────────┼──────────┼───────┤
│ Apple  │    10    │ $1.50 │
│ Banana │     5    │ $0.80 │
│ Orange │     8    │ $1.20 │
└────────┴──────────┴───────┘`}
            />
          </CardContent>
        </Card>

        {/* Custom Box Drawing */}
        <Card>
          <CardHeader>
            <CardTitle>Custom Box Style</CardTitle>
            <CardDescription>Use different box-drawing character sets</CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock
              code={`use zfish::table::{Table, BoxStyle};

// Create table with headers
let mut table = Table::new(vec!["Header 1", "Header 2", "Header 3"]);

// Use ASCII style instead of Unicode
table.set_box_style(BoxStyle::Ascii);

table.add_row(vec!["Data 1", "Data 2", "Data 3"]);

table.print();`}
              language="rust"
              title="ASCII Box Style"
              showOutput={true}
              output={`+----------+----------+----------+
| Header 1 | Header 2 | Header 3 |
+----------+----------+----------+
| Data 1   | Data 2   | Data 3   |
+----------+----------+----------+`}
            />
          </CardContent>
        </Card>

        {/* Unicode Support */}
        <Card>
          <CardHeader>
            <CardTitle>Unicode Support</CardTitle>
            <CardDescription>Proper handling of Unicode characters and emoji</CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock
              code={`use zfish::table::Table;

// Create table with headers
let mut table = Table::new(vec!["Emoji", "Name", "Category"]);

table.add_row(vec!["🚀", "Rocket", "Transport"]);
table.add_row(vec!["🎨", "Palette", "Art"]);
table.add_row(vec!["🐟", "Fish", "Animal"]);
table.add_row(vec!["你好", "Hello (Chinese)", "Language"]);

table.print();`}
              language="rust"
              title="Unicode Support Example"
              showOutput={true}
              output={`┌───────┬──────────────────┬───────────┐
│ Emoji │ Name             │ Category  │
├───────┼──────────────────┼───────────┤
│ 🚀    │ Rocket           │ Transport │
│ 🎨    │ Palette          │ Art       │
│ 🐟    │ Fish             │ Animal    │
│ 你好  │ Hello (Chinese)  │ Language  │
└───────┴──────────────────┴───────────┘`}
            />
          </CardContent>
        </Card>

        {/* Manual Box Drawing */}
        <Card>
          <CardHeader>
            <CardTitle>Manual Box Drawing</CardTitle>
            <CardDescription>Draw custom boxes and borders</CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock
              code={`use zfish::table::draw_box;
use zfish::style::Color;

// Draw a colored box
draw_box(
    "Hello, ZFish!",
    Color::Green,
    Some(60),
    true
);

// Draw a simple box
draw_box(
    "Simple message",
    Color::Blue,
    None,
    false
);`}
              language="rust"
              title="Manual Box Drawing"
              showOutput={true}
              output={`┌────────────────────────────────────────────────────────────┐
│                      Hello, ZFish!                         │
└────────────────────────────────────────────────────────────┘

┌──────────────────┐
│ Simple message   │
└──────────────────┘`}
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
              <h4 className="font-semibold mb-2">Table Methods</h4>
              <div className="grid gap-2">
                {[
                  { method: "new()", desc: "Create a new table" },
                  { method: "add_row(&[&str])", desc: "Add a row to the table" },
                  { method: "set_header_style(color)", desc: "Style the header row" },
                  { method: "set_column_alignment(col, align)", desc: "Set column alignment" },
                  { method: "set_border_color(color)", desc: "Set border color" },
                  { method: "set_box_style(style)", desc: "Set box-drawing style" },
                  { method: "print()", desc: "Print the table" },
                ].map(({ method, desc }) => (
                  <div key={method} className="flex items-start gap-2">
                    <Badge variant="outline" className="font-mono text-xs shrink-0">{method}</Badge>
                    <span className="text-sm text-muted-foreground">{desc}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Box Styles</h4>
              <div className="flex flex-wrap gap-2">
                {["Unicode", "Ascii", "Rounded", "Double", "Bold"].map(style => (
                  <Badge key={style} variant="secondary">{style}</Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DocsLayout>
  );
}
