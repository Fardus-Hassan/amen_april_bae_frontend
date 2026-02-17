"use client";

import PageTitle from "@/components/shared/PageTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SubscriptionForm from "./SubscriptionForm";

export default function SubscriptionPlanContent() {
  return (
    <div>
      <PageTitle text="Subscription plan" />

      <div className="bg-white p-6 rounded-4xl mt-6">
        <Tabs defaultValue="monthly" className="w-full">
          <TabsList className="w-full h-auto! p-0! rounded-none! bg-transparent! border-b border-gray-200 justify-start! gap-8!">
            <TabsTrigger
              value="monthly"
              className="rounded-none! bg-transparent! shadow-none! border-0! border-b-[3px]! border-transparent! data-[state=active]:border-black! data-[state=active]:text-black! text-gray-400! text-2xl! font-normal! px-0! pb-3! pt-0! -mb-px data-[state=inactive]:hover:text-gray-600!">
              Monthly Subscription
            </TabsTrigger>
            <TabsTrigger
              value="quarterly"
              className="rounded-none! bg-transparent! shadow-none! border-0! border-b-[3px]! border-transparent! data-[state=active]:border-black! data-[state=active]:text-black! text-gray-400! text-2xl! font-normal! px-0! pb-3! pt-0! -mb-px data-[state=inactive]:hover:text-gray-600!">
              Quarterly Subscription
            </TabsTrigger>
            <TabsTrigger
              value="yearly"
              className="rounded-none! bg-transparent! shadow-none! border-0! border-b-[3px]! border-transparent! data-[state=active]:border-black! data-[state=active]:text-black! text-gray-400! text-2xl! font-normal! px-0! pb-3! pt-0! -mb-px data-[state=inactive]:hover:text-gray-600!">
              Yearly Subscription
            </TabsTrigger>
          </TabsList>

          <TabsContent value="monthly" className="mt-5">
            <SubscriptionForm />
          </TabsContent>

          <TabsContent value="quarterly" className="mt-5">
            <p className="text-gray-500 text-sm">
              No quarterly plans to display yet.
            </p>
          </TabsContent>

          <TabsContent value="yearly" className="mt-5">
            <p className="text-gray-500 text-sm">
              No yearly plans to display yet.
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
