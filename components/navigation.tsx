"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const navigation = [
  { name: "Getting Started", href: "/getting-started" },
  { name: "Components", href: "/components" },
  { name: "Examples", href: "/examples" },
  { name: "API Reference", href: "/api" },
];

const components = [
  { name: "Colors & Styles", href: "/components/colors" },
  { name: "Progress Bars", href: "/components/progress" },
  { name: "Tables", href: "/components/tables" },
  { name: "Prompts", href: "/components/prompts" },
  { name: "Logger", href: "/components/logger" },
  { name: "Terminal Control", href: "/components/terminal" },
];

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="text-xl font-bold">🐟 ZFish</span>
            <Badge variant="secondary" className="text-xs">
              v0.1.10
            </Badge>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <NavigationMenu>
            <NavigationMenuList>
              {navigation.map((item) => (
                <NavigationMenuItem key={item.name}>
                  {item.name === "Components" ? (
                    <>
                      <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {components.map((component) => (
                            <li key={component.name}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={component.href}
                                  className={cn(
                                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                    pathname === component.href && "bg-accent"
                                  )}
                                >
                                  <div className="text-sm font-medium leading-none">
                                    {component.name}
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "transition-colors hover:text-foreground/80",
                        pathname === item.href ? "text-foreground" : "text-foreground/60"
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Tablet Navigation */}
        <nav className="hidden md:flex lg:hidden items-center space-x-2 text-sm font-medium flex-1">
          {navigation.slice(0, 3).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-foreground/80 text-sm px-2 py-1 rounded-md",
                pathname === item.href ? "text-foreground bg-accent" : "text-foreground/60"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="md:hidden mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0 w-80">
            <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
            <div className="flex flex-col space-y-4 mt-4">
              <Link href="/" className="flex items-center space-x-2" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-xl font-bold">🐟 ZFish</span>
                <Badge variant="secondary" className="text-xs">
                  v0.1.10
                </Badge>
              </Link>
              <nav className="flex flex-col space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.name === "Components" ? (
                      <div className="space-y-2">
                        <div className="font-medium text-sm text-muted-foreground px-2">
                          {item.name}
                        </div>
                        <div className="ml-4 space-y-1">
                          {components.map((component) => (
                            <Link
                              key={component.href}
                              href={component.href}
                              className={cn(
                                "block px-2 py-1 text-sm rounded-md transition-colors hover:bg-accent",
                                pathname === component.href && "bg-accent text-accent-foreground"
                              )}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {component.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          "block px-2 py-2 text-sm rounded-md transition-colors hover:bg-accent",
                          pathname === item.href && "bg-accent text-accent-foreground"
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
              <div className="border-t pt-4 mt-4">
                <div className="flex flex-col space-y-2">
                  <Button variant="ghost" size="sm" asChild className="justify-start">
                    <Link href="https://sprinkle-toque-13b.notion.site/ZFish-29d4eaaebc9d80bd82f3c27833a92232" target="_blank" onClick={() => setMobileMenuOpen(false)}>
                      📋 Roadmap
                    </Link>
                  </Button>
                  <Button variant="ghost" size="sm" asChild className="justify-start">
                    <Link href="https://github.com/JeetKarena/ZFish" target="_blank" onClick={() => setMobileMenuOpen(false)}>
                      GitHub
                    </Link>
                  </Button>
                  <Button variant="ghost" size="sm" asChild className="justify-start">
                    <Link href="https://crates.io/crates/zfish" target="_blank" onClick={() => setMobileMenuOpen(false)}>
                      Crates.io
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop Actions */}
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="hidden lg:flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="sm" asChild>
              <Link href="https://sprinkle-toque-13b.notion.site/ZFish-29d4eaaebc9d80bd82f3c27833a92232" target="_blank">
                📋 Roadmap
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="https://github.com/JeetKarena/ZFish" target="_blank">
                GitHub
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="https://crates.io/crates/zfish" target="_blank">
                Crates.io
              </Link>
            </Button>
          </nav>
          {/* Tablet Theme Toggle */}
          <div className="hidden md:flex lg:hidden">
            <ThemeToggle />
          </div>
          {/* Mobile Theme Toggle */}
          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}