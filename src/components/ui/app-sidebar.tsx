"use client";

import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  LogOut,
  Waypoints,
  Cog,
  Users,
  UserRoundCog,
  Star,
  Save,
  User,
  FileText,
  Book,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../shared/Logo";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  // Check if current path is a "user" path
  const isUserPath = pathname.startsWith("/dashboard/user");

  // Different navigation items based on path
  const navigationItems = isUserPath
    ? [
        {
          label: "Overview",
          href: "/dashboard/user",
          icon: LayoutDashboard,
        },
        {
          label: "My Stories",
          href: "/dashboard/user/my-stories",
          icon: Book,
        },
        {
          label: "My Posts",
          href: "/dashboard/user/my-posts",
          icon: FileText,
        },
        {
          label: "My Profile",
          href: "/dashboard/user/my-profile",
          icon: User,
        },
        {
          label: "Saved",
          href: "/dashboard/user/saved",
          icon: Save,
        },
      ]
    : [
        {
          label: "Overview",
          href: "/dashboard/admin",
          icon: LayoutDashboard,
        },
        {
          label: "User Management",
          href: "/dashboard/admin/user-management",
          icon: Users,
        },
        {
          label: "Subscription Plan",
          href: "/dashboard/admin/subscription-plan",
          icon: Waypoints,
        },
        {
          label: "Platform Settings",
          href: "/dashboard/admin/platform-settings",
          icon: Cog,
        },
        {
          label: "Admin Settings",
          href: "/dashboard/admin/admin-settings",
          icon: UserRoundCog,
        },
        {
          label: "User Reviews",
          href: "/dashboard/admin/user-reviews",
          icon: Star,
        },
      ];

  return (
    <Sidebar {...props}>
      <SidebarContent>
        <SidebarHeader className="mx-2 px-2 py-4 md:py-8 border-b">
          <Logo layout={"vertical"} />
        </SidebarHeader>

        <SidebarMenu className="gap-2 px-2 py-3">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  size="lg"
                  asChild
                  isActive={isActive}
                  className="hover:bg-accent hover:text-accent-foreground transition-colors data-[active=true]:bg-[#C5A065] data-[active=true]:text-white font-medium text-gray-700">
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 px-3 py-3 sm:p-4">
                    <item.icon
                      className={`h-4! w-4! sm:h-5! sm:w-5! text-[#61758A] flex-shrink-0 ${isActive ? "text-white" : ""}`}
                    />
                    <span className="font-normal text-base sm:text-lg">
                      {item.label}
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="border-t px-2 py-3">
        <button className="flex items-center justify-center gap-2 w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base font-medium bg-gray-100 hover:text-white bg-[rgba(255, 74, 74, 0.5)] hover:bg-[#FF4A4A] rounded-md transition-colors focus:outline-none text-[#FF4A4A]">
          <LogOut className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
          <span className="hidden sm:inline">Logout</span>
        </button>
      </SidebarFooter>
    </Sidebar>
  );
}
