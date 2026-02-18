import DashboardLayout from "@/components/layouts/DashboardLayout";
import React, { Suspense } from "react";
import "@/styles/dashboardStyle.css";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardLayout>
      <Suspense>{children}</Suspense>
    </DashboardLayout>
  );
}
