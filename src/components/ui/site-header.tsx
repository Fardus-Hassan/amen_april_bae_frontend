"use client";

import { SidebarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import DashboardUserBox from "../shared/DashboardUserBox";

export function SiteHeader() {
  const { toggleSidebar } = useSidebar();

  return (
    <header
      className="sticky top-0 z-50 flex w-full items-center overflow-x-hidden"
      style={{
        background:
          "linear-gradient(90.05deg, #D4A574 -64.03%, #FFFFFF 135.56%)",
      }}>
      <div className="flex h-14 sm:h-16 md:h-16 w-full items-center justify-between lg:justify-end gap-2 px-3 sm:px-4">
        <Button
          className="h-8 w-8 lg:hidden"
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}>
          <SidebarIcon />
        </Button>

        <DashboardUserBox />
      </div>
    </header>
  );
}
