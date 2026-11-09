"use client"

import * as React from "react"
import Link from "next/link"
import { MenuIcon } from "lucide-react"
import Image from "next/image"

import logo from "@/app/images/logo.png"
import { cn } from "cn"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const NAV_LINKS = [
  { label: "Browse Jobs", href: "/browse-jobs" },
  { label: "Company", href: "/company" },
  { label: "Pricing", href: "/pricing" },
]

function Divider({ className }: { className?: string }) {
  return <span aria-hidden="true" className={cn("h-px w-full bg-border md:h-6 md:w-px", className)} />
}

function NavLinks({ className, linkClassName }: { className?: string; linkClassName?: string }) {
  return (
    <ul className={cn("flex flex-col gap-1 md:flex-row md:items-center md:gap-10", className)}>
      {NAV_LINKS.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            className={cn(
              "py-2 text-[15px] text-white transition-colors hover:text-white/80 md:px-0",
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
    <header className="mt-7 sticky top-3 z-50 px-3 sm:top-6 sm:px-6">
      <div className="mx-auto flex h-14 w-full max-w-330 items-center justify-between gap-6 rounded-2xl bg-[#222222]/90 px-4 shadow-lg shadow-black/20 backdrop-blur-md sm:h-19 sm:px-6">
        <Link href="/" aria-label="HireLoop home" className="shrink-0">
          <Image
            src={logo}
            alt="HireLoop logo"
            width={154}
            height={44}
            className="h-7 w-auto sm:h-11"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-4 md:flex">
          <NavLinks />
          <Divider className="bg-white/40" />
          <Link
            href="/sign-in"
            className="px-6 py-2 text-[15px] font-medium text-[#5c53fe] transition-colors hover:text-[#5c53fe]/80"
          >
            Sign In
          </Link>
          <Link
            href="/sign-up"
            className="flex h-13 items-center rounded-xl bg-[#5c53fe] px-7 text-[15px] font-medium text-white shadow-[inset_0_3px_10px_rgba(255,255,255,0.25)] transition-colors hover:bg-[#5c53fe]/85"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={<button type="button" aria-label="Open menu" className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 md:hidden" />}
          >
            <MenuIcon className="size-6" />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="gap-0 p-0 sm:max-w-xs"
            aria-describedby={undefined}
          >
            <div className="flex h-16 items-center border-b px-4 font-heading text-base font-medium">
              <SheetTitle className="sr-only">HireLoop navigation</SheetTitle>
              <Image src={logo} alt="HireLoop logo" className="h-7 w-auto" />
            </div>
            <SheetDescription className="sr-only">Site navigation menu</SheetDescription>
            <div className="flex flex-col gap-5 p-4">
              <NavLinks linkClassName="text-base" />
              <Divider />
              <Link
                href="/sign-in"
                onClick={() => setOpen(false)}
                className="py-2 text-base font-medium text-[#5c53fe] transition-colors hover:text-[#5c53fe]/80"
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                onClick={() => setOpen(false)}
                className="flex h-12 items-center justify-center rounded-xl bg-[#5c53fe] text-base font-medium text-white shadow-[inset_0_3px_10px_rgba(255,255,255,0.25)] transition-colors hover:bg-[#5c53fe]/85"
              >
                Sign Up
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

export { Navbar }
