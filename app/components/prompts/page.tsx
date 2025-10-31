import { DocsLayout } from "@/components/docs-layout";
import { CodeBlock } from "@/components/code-block";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function PromptsPage() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        <div>
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Interactive Prompts</h1>
          <p className="text-lg text-muted-foreground mt-2">
            User-friendly prompts for input, confirmation, and selection
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Confirmation Prompt</CardTitle>
            <CardDescription>Ask yes/no questions</CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock
              code={`use zfish::Prompt;

// Prompt for yes/no confirmation
// Second parameter is default value
let answer = Prompt::confirm("Do you want to continue?", true)?;

if answer {
    println!("Continuing...");
} else {
    println!("Aborted.");
}`}
              language="rust"
              title="Confirmation Example"
              showOutput={true}
              output="Do you want to continue? [Y/n] y\nContinuing..."
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Text Input</CardTitle>
            <CardDescription>Get text input from users</CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock
              code={`use zfish::Prompt;

// Prompt for text input
let name = Prompt::input("What is your name?")?;

println!("Hello, {}!", name);

// Alternative: Prompt::text() (alias for input)
let lang = Prompt::text("Favorite language?")?;
println!("You chose: {}", lang);`}
              language="rust"
              title="Input Example"
              showOutput={true}
              output="What is your name? John Doe\nHello, John Doe!\nFavorite language? Rust\nYou chose: Rust"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Password Input</CardTitle>
            <CardDescription>Securely collect password input (hidden)</CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock
              code={`use zfish::Prompt;

// Prompt for password with hidden input
let password = Prompt::password("Enter password:")?;

println!("✓ Password accepted (hidden)");

// Password input is not echoed to terminal
// The input is completely hidden for security`}
              language="rust"
              title="Password Example"
              showOutput={true}
              output="Enter password: \n✓ Password accepted (hidden)"
            />
          </CardContent>
        </Card>
      </div>
    </DocsLayout>
  );
}
