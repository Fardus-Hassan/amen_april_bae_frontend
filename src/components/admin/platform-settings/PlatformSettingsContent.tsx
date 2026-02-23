"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import PageTitle from "@/components/shared/PageTitle";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import SiteInfoForm from "./ContactForm";

const INITIAL_CONTENT = {
  terms: "",
  policy: "",
  contact: "",
};

export default function PlatformSettingsContent() {
  const [content, setContent] = useState(INITIAL_CONTENT);
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);

  const handleChange = (key: keyof typeof INITIAL_CONTENT, value: string) => {
    setContent((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = async () => {
    setIsFormSubmitting(true);
    try {
      // Replace with your actual save logic
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Saved:", content);
    } finally {
      setIsFormSubmitting(false);
    }
  };

  const handleCancel = () => {
    setContent(INITIAL_CONTENT);
  };

  return (
    <div>
      <PageTitle text="Platform Settings" />

      <div className="bg-white p-6 rounded-4xl mt-6">
        <Tabs defaultValue="terms" className="w-full">
          <TabsList className="w-full h-auto! p-0! rounded-none! bg-transparent! border-b border-gray-200 justify-start! gap-8!">
            <TabsTrigger
              value="terms"
              className="rounded-none! bg-transparent! shadow-none! border-0! border-b-[3px]! border-transparent! data-[state=active]:border-black! data-[state=active]:text-black! text-gray-400! text-2xl! font-normal! px-0! pb-3! pt-0! -mb-px data-[state=inactive]:hover:text-gray-600!">
              Terms of use
            </TabsTrigger>
            <TabsTrigger
              value="policy"
              className="rounded-none! bg-transparent! shadow-none! border-0! border-b-[3px]! border-transparent! data-[state=active]:border-black! data-[state=active]:text-black! text-gray-400! text-2xl! font-normal! px-0! pb-3! pt-0! -mb-px data-[state=inactive]:hover:text-gray-600!">
              Privacy Policy
            </TabsTrigger>
            <TabsTrigger
              value="contact"
              className="rounded-none! bg-transparent! shadow-none! border-0! border-b-[3px]! border-transparent! data-[state=active]:border-black! data-[state=active]:text-black! text-gray-400! text-2xl! font-normal! px-0! pb-3! pt-0! -mb-px data-[state=inactive]:hover:text-gray-600!">
              Contact Us
            </TabsTrigger>
          </TabsList>

          <TabsContent value="terms" className="pt-4">
            <Textarea
              value={content.terms}
              onChange={(e) => handleChange("terms", e.target.value)}
              placeholder="Enter Terms of Use content..."
              className="min-h-64 resize-y"
            />
          </TabsContent>

          <TabsContent value="policy" className="pt-4">
            <Textarea
              value={content.policy}
              onChange={(e) => handleChange("policy", e.target.value)}
              placeholder="Enter Privacy Policy content..."
              className="min-h-64 resize-y"
            />
          </TabsContent>

          <TabsContent value="contact" className="pt-4">
            <SiteInfoForm />
          </TabsContent>
        </Tabs>
      </div>

      <div className="flex justify-end mt-6">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Button
            type="button"
            variant="outline"
            onClick={handleCancel}
            disabled={isFormSubmitting}
            className="h-11 px-8 rounded-lg border-gray-300 text-gray-700 font-normal flex-1 sm:flex-none">
            Cancel
          </Button>
          <Button
            type="button"
            onClick={handleSave}
            disabled={isFormSubmitting}
            className="h-11 px-8 rounded-lg bg-[#C5A065] hover:bg-[#c29753] text-white font-normal flex-1 sm:flex-none">
            {isFormSubmitting ? "Saving…" : "Save Changes"}
          </Button>
        </div>
      </div>
    </div>
  );
}
