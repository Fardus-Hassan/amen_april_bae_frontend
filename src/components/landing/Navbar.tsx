"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { BellIcon, ProfileIcon, MenuIcon } from "@/components/icons";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LayoutGrid, Settings, LogOut } from "lucide-react";

const notifications = [
  {
    id: 1,
    name: "Burkina Faso",
    subtitle: "ConLorem Ipsum dollar",
    message: "ConLorem Ipsum dollar sit smit ameda lor.....",
    time: "5 mins ago",
    avatar: "/images/profile-placeholder.jpg",
  },
  {
    id: 2,
    name: "Burkina Faso",
    subtitle: "ConLorem Ipsum dollar",
    message: "ConLorem Ipsum dollar sit smit ameda lor.....",
    time: "5 mins ago",
    avatar: "/images/profile-placeholder.jpg",
  },
  {
    id: 3,
    name: "Burkina Faso",
    subtitle: "ConLorem Ipsum dollar",
    message: "ConLorem Ipsum dollar sit smit ameda lor.....",
    time: "5 mins ago",
    avatar: "/images/profile-placeholder.jpg",
  },
  {
    id: 4,
    name: "Burkina Faso",
    subtitle: "ConLorem Ipsum dollar",
    message: "ConLorem Ipsum dollar sit smit ameda lor.....",
    time: "5 mins ago",
    avatar: "/images/profile-placeholder.jpg",
  },
  {
    id: 5,
    name: "Burkina Faso",
    subtitle: "ConLorem Ipsum dollar",
    message: "ConLorem Ipsum dollar sit smit ameda lor.....",
    time: "5 mins ago",
    avatar: "/images/profile-placeholder.jpg",
  },
  {
    id: 6,
    name: "Burkina Faso",
    subtitle: "ConLorem Ipsum dollar",
    message: "ConLorem Ipsum dollar sit smit ameda lor.....",
    time: "5 mins ago",
    avatar: "/images/profile-placeholder.jpg",
  },
  {
    id: 7,
    name: "Burkina Faso",
    subtitle: "ConLorem Ipsum dollar",
    message: "ConLorem Ipsum dollar sit smit ameda lor.....",
    time: "5 mins ago",
    avatar: "/images/profile-placeholder.jpg",
  },
];

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/pricing", label: "Pricing" },
  { href: "/community", label: "Community" },
  { href: "/contact", label: "Contact Us" },
];

function isActive(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function Navbar() {
  const pathname = usePathname();

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 w-full bg-[#FAFAFA] backdrop-blur-sm border-b border-(--landing-navy)/10 lg:py-0 py-1"
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
          {NAV_LINKS.map(({ href, label }) => {
            const active = isActive(href, pathname ?? "");
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`relative py-2 text-sm font-bold text-secondary transition hover:opacity-80 ${
                    active
                      ? " after:absolute after:left-1/2 after:-translate-x-1/2 after:right-0 after:w-[70px] after:-bottom-6 after:h-1 after:bg-secondary after:content-['']"
                      : ""
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right: icons + buttons */}
        <div className="flex items-center gap-2 sm:gap-3 xl:w-1/3 justify-end">
          <Popover>
            <PopoverTrigger asChild>
              <button
                type="button"
                className="relative rounded-full p-2 text-landing-navy hover:bg-(--landing-navy)/10"
                aria-label="Notifications">
                <BellIcon size={22} />
                <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-semibold text-white">
                  12
                </span>
              </button>
            </PopoverTrigger>
            <PopoverContent
              align="end"
              alignOffset={-60}
              className="w-[420px] rounded-2xl border border-gray-200 bg-white p-0 shadow-xl"
              sideOffset={12}>
              <div className="p-4 border-b border-gray-100">
                <h3 className="text-xl font-semibold text-center text-gray-900">
                  Notifications
                </h3>
              </div>
              <div 
                className="max-h-[450px] overflow-y-auto overscroll-contain scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                onWheel={(e) => e.stopPropagation()}>
                {notifications.map((notification, index) => (
                  <div
                    key={notification.id}
                    className={`flex items-start gap-3 px-4 py-4 hover:bg-gray-50 cursor-pointer transition-colors ${
                      index !== notifications.length - 1 ? "border-b border-gray-100" : ""
                    }`}>
                    <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200 shrink-0">
                      <Image
                        src={notification.avatar}
                        alt={notification.name}
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">
                            {notification.name}
                          </p>
                          <p className="text-xs text-[#C5A065]">
                            {notification.subtitle}
                          </p>
                        </div>
                        <span className="text-xs text-gray-400 shrink-0">
                          {notification.time}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1 truncate">
                        {notification.message}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverContent>
          </Popover>

          {/* Profile — desktop only */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="hidden items-center gap-2 rounded-xl text-landing-navy hover:bg-white sm:flex lg:flex outline-none"
                aria-label="Profile menu">
                <div className="relative h-8 w-8 overflow-hidden rounded-full bg-(--landing-navy)/20">
                  <ProfileIcon
                    size={18}
                    className="absolute inset-0 m-auto text-landing-navy"
                  />
                </div>
                <MenuIcon size={18} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-64 rounded-xl border border-gray-200 bg-white p-2 shadow-lg">
              {/* User Info */}
              <div className="flex items-center gap-3 px-2 py-3">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200 shrink-0">
                  <Image
                    src="/images/profile-placeholder.jpg"
                    alt="Profile"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-gray-900 truncate">Lebron James</p>
                  <p className="text-sm text-gray-500 truncate">lebronjames003@gmail.com</p>
                </div>
              </div>
              <DropdownMenuSeparator className="my-1" />
              <DropdownMenuItem asChild>
                <Link
                  href="/community"
                  className="flex items-center gap-3 px-2 py-2.5 text-sm text-gray-700 rounded-lg cursor-pointer hover:bg-gray-50">
                  <LayoutGrid className="h-4 w-4 text-gray-500" />
                  Community
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/dashboard/user/my-profile"
                  className="flex items-center gap-3 px-2 py-2.5 text-sm text-gray-700 rounded-lg cursor-pointer hover:bg-gray-50">
                  <Settings className="h-4 w-4 text-gray-500" />
                  My Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <button
                  type="button"
                  className="flex w-full items-center gap-3 px-2 py-2.5 text-sm text-red-500 rounded-lg cursor-pointer hover:bg-red-50">
                  <LogOut className="h-4 w-4" />
                  Log out
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

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
                  {NAV_LINKS.map(({ href, label }) => {
                    const active = isActive(href, pathname ?? "");
                    return (
                      <li key={href}>
                        <SheetClose asChild>
                          <Link
                            href={href}
                            className={`block rounded-lg px-3 py-2.5 text-sm font-medium text-landing-navy transition hover:bg-(--landing-navy)/10 ${
                              active ? "font-semibold bg-(--landing-navy)/10" : ""
                            }`}>
                            {label}
                          </Link>
                        </SheetClose>
                      </li>
                    );
                  })}
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
