"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import PageTitle from "@/components/shared/PageTitle";
import AdminInfoContent from "./AdminInfoContent";
import SuspendedUsers from "./SuspendedUsers";
import AdminManagement from "./AdminManagement";

// ---------- Tab trigger shared styles ----------
const tabClass = [
  "rounded-lg px-4 py-2.5 text-sm sm:text-base font-semibold shadow-none border-0 transition-all cursor-pointer",
  "bg-white text-gray-600",
  "data-[state=active]:bg-[#FFEFDF] data-[state=active]:text-gray-800",
  "hover:bg-[#fff7ee]",
].join(" ");

// ---------- Main Export ----------
export default function AdminSettingsContent() {
  return (
    <div>
      <PageTitle text="Admin Settings" />

      <Tabs defaultValue="admin-info" className="w-full pt-6">
        {/* Scrollable tab bar on small screens */}
        <TabsList className="bg-transparent p-0 h-auto gap-1 sm:gap-2 justify-start flex ">
          <TabsTrigger value="admin-info" className={tabClass}>
            Admin Info
          </TabsTrigger>
          <TabsTrigger value="suspended-users" className={tabClass}>
            Suspended Users
          </TabsTrigger>
          <TabsTrigger value="admin-management" className={tabClass}>
            Admin Management
          </TabsTrigger>
        </TabsList>

        <TabsContent value="admin-info">
          <AdminInfoContent />
        </TabsContent>
        <TabsContent value="suspended-users">
          <SuspendedUsers />
        </TabsContent>
        <TabsContent value="admin-management">
          <AdminManagement />
        </TabsContent>
      </Tabs>
    </div>
  );
}
