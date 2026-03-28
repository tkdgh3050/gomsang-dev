"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, FolderOpen } from "lucide-react";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Portfolio", href: "/projects", icon: FolderOpen },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur-md dark:bg-black/80 dark:border-zinc-800">
      <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-bold tracking-tighter flex items-center gap-2">
          <span>Gomsang</span><span className="text-orange-600">.dev</span>
        </Link>
        <div className="flex items-center gap-8">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-black dark:hover:text-white flex items-center gap-2",
                  isActive ? "text-orange-600" : "text-zinc-500"
                )}
              >
                <item.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
