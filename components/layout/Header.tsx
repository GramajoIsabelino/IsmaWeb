import Link from "next/link";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 md:py-8">
      <Link
        href="/"
        className="font-display text-xl tracking-[0.2em] text-foreground uppercase md:text-2xl"
      >
        {SITE_NAME}
      </Link>

      <nav aria-label="Principal">
        <ul className="flex items-center gap-8 md:gap-12">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-xs tracking-[0.25em] text-foreground/70 uppercase transition-colors hover:text-foreground md:text-sm"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
