import { DocsLayout } from "@/components/docs-layout";
import { CodeBlock } from "@/components/code-block";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoggerPage() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        <div>
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Logger</h1>
          <p className="text-lg text-muted-foreground mt-2">
            Structured logging with levels, colors, and flexible output
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Basic Logging</CardTitle>
            <CardDescription>Log messages with different severity levels</CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock
              code={`use zfish::log::{Logger, Level};

let logger = Logger::new();

logger.info("Application started");
logger.warn("This is a warning");
logger.error("An error occurred");
logger.debug("Debug information");
logger.trace("Trace message");`}
              language="rust"
              title="Basic Logger Example"
              showOutput={true}
              output="[INFO] Application started\n[WARN] This is a warning\n[ERROR] An error occurred\n[DEBUG] Debug information\n[TRACE] Trace message"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Custom Log Levels</CardTitle>
            <CardDescription>Set minimum log level to filter messages</CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock
              code={`use zfish::log::{Logger, Level};

// Set log level using builder pattern
let logger = Logger::new().level(Level::Warn);

// These will be shown
logger.error("Error message");
logger.warn("Warning message");

// These will be hidden (below Warn level)
logger.info("Info message");
logger.debug("Debug message");`}
              language="rust"
              title="Log Level Example"
              showOutput={true}
              output="[ERROR] Error message\n[WARN] Warning message"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Formatted Logging</CardTitle>
            <CardDescription>Use format strings in log messages</CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock
              code={`use zfish::log::Logger;

let logger = Logger::new();
let user = "Alice";
let count = 42;

logger.info(&format!("User {} logged in", user));
logger.debug(&format!("Processing {} items", count));
logger.error(&format!("Failed to process item {}", count));`}
              language="rust"
              title="Formatted Logging"
              showOutput={true}
              output="[INFO] User Alice logged in\n[DEBUG] Processing 42 items\n[ERROR] Failed to process item 42"
            />
          </CardContent>
        </Card>
      </div>
    </DocsLayout>
  );
}
