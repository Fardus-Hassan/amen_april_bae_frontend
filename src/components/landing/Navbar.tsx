"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { BellIcon, ProfileIcon, MenuIcon } from "@/components/icons";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#community", label: "Community" },
  { href: "/#contact", label: "Contact Us" },
];

export function Navbar() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 w-full bg-[#FAFAFA] backdrop-blur-sm border-b border-(--landing-navy)/10"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-1 xl:w-1/3">
          <Image
            src="/images/logo.png"
            alt="Ai DNA Time Machine"
            width={73}
            height={80}
            className="lg:w-[73px] w-[50px] lg:h-[80px] h-[50px]"
            priority
          />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden items-center justify-center gap-8 lg:flex xl:w-1/3">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`relative py-2 text-sm font-bold text-secondary transition hover:opacity-80 ${
                  href === "/"
                    ? "after:absolute after:left-1/2 after:-translate-x-1/2 after:right-0 after:w-[70px] after:-bottom-6 after:h-1 after:bg-secondary after:content-['']"
                    : ""
                }`}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: icons + buttons */}
        <div className="flex items-center gap-2 sm:gap-3 xl:w-1/3 justify-end">
          <button
            type="button"
            className="relative rounded-full p-2 text-landing-navy hover:bg-(--landing-navy)/10"
            aria-label="Notifications">
            <BellIcon size={22} />
            <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-semibold text-white">
              12
            </span>
          </button>

          {/* Profile — desktop only */}
          <button
            type="button"
            className="hidden items-center gap-2 rounded-xl text-landing-navy hover:bg-white sm:flex lg:flex"
            aria-label="Profile menu">
            <div className="relative h-8 w-8 overflow-hidden rounded-full bg-(--landing-navy)/20">
              <ProfileIcon
                size={18}
                className="absolute inset-0 m-auto text-landing-navy"
              />
            </div>
            <MenuIcon size={18} />
          </button>

          {/* Sign Up — desktop only */}
          <Link
            href="/auth/register"
            className="hidden rounded-xl border border-(--landing-navy)/25 bg-white px-4 py-2 text-sm font-medium text-landing-navy hover:bg-(--landing-navy)/5 lg:inline-block">
            Sign Up
          </Link>

          {/* Log In — always visible on desktop */}
          <Link
            href="/auth/login"
            className="hidden rounded-xl bg-landing-gold px-4 py-2 text-sm font-semibold text-white hover:opacity-90 lg:inline-block">
            Log In
          </Link>

          {/* Mobile / Tablet: Sheet sidebar */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className="rounded-lg p-2 text-landing-navy hover:bg-(--landing-navy)/10"
                  aria-label="Open menu">
                  <MenuIcon size={24} />
                </button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-72 bg-[#FAFAFA] px-0 py-0 flex flex-col">
                {/* Sidebar header */}
                <div className="flex items-center justify-between border-b border-(--landing-navy)/10 px-5 py-4">
                  <Link href="/">
                    <Image
                      src="/images/logo.png"
                      alt="Ai DNA Time Machine"
                      width={50}
                      height={55}
                      priority
                    />
                  </Link>
                </div>

                {/* Nav links */}
                <ul className="flex flex-col gap-1 px-4 pt-4 flex-1">
                  {NAV_LINKS.map(({ href, label }) => (
                    <li key={href}>
                      <SheetClose asChild>
                        <Link
                          href={href}
                          className={`block rounded-lg px-3 py-2.5 text-sm font-medium text-landing-navy transition hover:bg-(--landing-navy)/10 ${
                            href === "/"
                              ? "font-semibold bg-(--landing-navy)/10"
                              : ""
                          }`}>
                          {label}
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>

                {/* Sidebar footer: auth buttons */}
                <div className="border-t border-(--landing-navy)/10 px-4 py-5 flex flex-col gap-2">
                  <SheetClose asChild>
                    <Link
                      href="/auth/register"
                      className="block rounded-xl border border-(--landing-navy)/25 bg-white px-4 py-2.5 text-center text-sm font-medium text-landing-navy hover:bg-(--landing-navy)/5">
                      Sign Up
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/auth/login"
                      className="block rounded-xl bg-landing-gold px-4 py-2.5 text-center text-sm font-semibold text-white hover:opacity-90">
                      Log In
                    </Link>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
