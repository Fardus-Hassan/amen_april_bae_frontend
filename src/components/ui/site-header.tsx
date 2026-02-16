"use client";

import { SidebarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import DashboardUserBox from "../shared/DashboardUserBox";

export function SiteHeader() {
  const { toggleSidebar } = useSidebar();

  return (
    <header
      className="sticky top-0 z-50 flex w-full items-center"
      style={{
        background:
          "linear-gradient(90.05deg, #D4A574 -64.03%, #FFFFFF 135.56%)",
      }}>
      <div className="flex h-18 w-full items-center justify-between md:justify-end gap-2 px-4">
        <Button
          className="h-8 w-8 md:hidden"
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
