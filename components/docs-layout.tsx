"use client";

import { Navigation } from "@/components/navigation";
import { Sidebar } from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export function DocsLayout({ children }: DocsLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-start gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {/* Mobile/Tablet Sidebar */}
          <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden fixed top-20 left-4 z-40 h-8 w-8 p-0"
              >
                <Menu className="h-4 w-4" />
                <span className="sr-only">Toggle sidebar</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 sm:w-80 p-0">
              <SheetTitle className="sr-only">Navigation Sidebar</SheetTitle>
              <div className="h-full overflow-y-auto">
                <Sidebar />
              </div>
            </SheetContent>
          </Sheet>

          {/* Desktop/Tablet Sidebar */}
          <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-[200px] shrink-0 overflow-y-auto lg:block xl:w-[220px] 2xl:w-[240px]">
            <Sidebar />
          </aside>

          {/* Main Content */}
          <main className="flex-1 py-4 sm:py-6 lg:py-8 min-w-0 w-full">
            <div className="w-full max-w-4xl mx-auto px-2 sm:px-4 md:px-0">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}