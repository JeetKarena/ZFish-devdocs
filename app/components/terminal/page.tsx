import { DocsLayout } from "@/components/docs-layout";
import { CodeBlock } from "@/components/code-block";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function TerminalPage() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        <div>
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Terminal Control</h1>
          <p className="text-lg text-muted-foreground mt-2">
            Full terminal manipulation with cursor control and screen management
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Clear Screen</CardTitle>
            <CardDescription>Clear the terminal screen</CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock
              code={`use zfish::term::Terminal;

// Clear entire screen
Terminal::clear_screen()?;

// Move to top-left corner
Terminal::move_cursor(1, 1)?;
println!("Screen cleared!");`}
              language="rust"
              title="Clear Screen Example"
              showOutput={true}
              output="(Terminal screen cleared)"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cursor Movement</CardTitle>
            <CardDescription>Move the cursor to specific positions</CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock
              code={`use zfish::term::Terminal;

// Move cursor to position (row, col) - 1-indexed
Terminal::move_cursor(10, 5)?;

// Print at specific position
Terminal::print_at(5, 10, "Hello at row 5, col 10")?;

// Move and print
Terminal::move_cursor(1, 1)?;
println!("Top-left corner");`}
              language="rust"
              title="Cursor Movement Example"
              showOutput={true}
              output="(Cursor moved to specified positions)"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Terminal Size</CardTitle>
            <CardDescription>Get the current terminal dimensions</CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock
              code={`use zfish::term::Terminal;

// Get terminal size (width, height)
if let Some((width, height)) = Terminal::size() {
    println!("Terminal size: {}x{}", width, height);
} else {
    println!("Could not detect terminal size");
}`}
              language="rust"
              title="Terminal Size Example"
              showOutput={true}
              output="Terminal size: 80x24\nRunning in a terminal"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Hide/Show Cursor</CardTitle>
            <CardDescription>Control cursor visibility</CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock
              code={`use zfish::term;

// Hide cursor
term::hide_cursor()?;

// Do some work...
std::thread::sleep(std::time::Duration::from_secs(2));

// Show cursor again
term::show_cursor()?;`}
              language="rust"
              title="Cursor Visibility Example"
              showOutput={true}
              output="(Cursor hidden during operation, then shown again)"
            />
          </CardContent>
        </Card>
      </div>
    </DocsLayout>
  );
}
