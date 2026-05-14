import Link from "next/link";
import { Logo } from "@/components/layout/Logo";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/music", label: "Music" },
  { href: "/videos", label: "Videos" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/78 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8">
        <Logo priority className="shrink-0" />
        <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-full px-4 py-2 text-sm font-medium text-muted transition hover:bg-panel hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/music"
          className="focus-ring rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground transition hover:border-accent hover:bg-panel"
        >
          Listen
        </Link>
      </div>
      <nav
        aria-label="Mobile navigation"
        className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 pb-3 sm:px-6 md:hidden"
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="focus-ring whitespace-nowrap rounded-full px-3 py-2 text-sm text-muted hover:bg-panel hover:text-foreground"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
