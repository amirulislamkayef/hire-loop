"use client"
import * as React from "react"
import Link from "next/link"
import { MenuIcon } from "lucide-react"
import { cn } from "cn"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import logo from '../app/images/logo.png'
import Image from "next/image"

const NAV_LINKS = [
  { label: "Browse Jobs", href: "/browse-jobs" },
  { label: "Company", href: "/company" },
  { label: "Pricing", href: "/pricing" },
]

function Divider({ className }: { className?: string }) {
  return <span aria-hidden="true" className={cn("h-px w-full bg-border md:h-5 md:w-px", className)} />
}

function NavLinks({ className, linkClassName }: { className?: string; linkClassName?: string }) {
  return (
    <ul className={cn("flex flex-col gap-1 md:flex-row md:items-center md:gap-7", className)}>
      {NAV_LINKS.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            className={cn(
              "text-sm text-foreground/80 transition-colors hover:text-foreground md:py-2",
              linkClassName
            )}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

function Navbar() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/95 backdrop-blur-md supports-backdrop-filter:bg-background/75">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Image src={logo} alt="HireLoop logo" className="h-8 w-auto" />

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex">
          <NavLinks />
          <Divider />
          <Link
            href="/sign-in"
            className="py-2 text-sm font-medium text-brand-accent transition-colors hover:text-brand-accent/80"
          >
            Sign In
          </Link>
          <Button
            className="h-10 rounded-xl bg-brand px-5 text-brand-foreground hover:bg-brand/90"
            render={<Link href="/sign-up" />}
          >
            Sign Up
          </Button>
        </div>

        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              />
            }
          >
            <MenuIcon />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="gap-0 p-0 sm:max-w-xs"
            aria-describedby={undefined}
          >
            <div className="flex h-16 items-center border-b px-4 font-heading text-base font-medium">
              <SheetTitle className="sr-only">HireLoop navigation</SheetTitle>
            </div>
            <SheetDescription className="sr-only">Site navigation menu</SheetDescription>
            <div className="flex flex-col gap-5 p-4">
              <NavLinks linkClassName="text-base font-medium" />
              <Divider />
              <Link
                href="/sign-in"
                onClick={() => setOpen(false)}
                className="py-2 text-base font-medium text-brand-accent transition-colors hover:text-brand-accent/80"
              >
                Sign In
              </Link>
              <Button
                className="h-11 rounded-xl bg-brand text-base text-brand-foreground hover:bg-brand/90"
                onClick={() => setOpen(false)}
                render={<Link href="/sign-up" />}
              >
                Sign Up
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}

export { Navbar }
