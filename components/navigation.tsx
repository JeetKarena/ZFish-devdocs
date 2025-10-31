"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="text-xl font-bold">🐟 ZFish</span>
            <Badge variant="secondary" className="text-xs">
              v0.1.10
            </Badge>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
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
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Search can be added later */}
          </div>
          <nav className="flex items-center space-x-2">
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
        </div>
      </div>
    </header>
  );
}