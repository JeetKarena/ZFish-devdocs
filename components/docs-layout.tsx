import { Navigation } from "@/components/navigation";
import { Sidebar } from "@/components/sidebar";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        <div className="flex items-start gap-6 md:gap-8 lg:gap-10">
          <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-[220px] shrink-0 overflow-y-auto md:block lg:w-[240px]">
            <Sidebar />
          </aside>
          <main className="flex-1 py-6 lg:py-8 min-w-0">
            <div className="w-full max-w-4xl">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}