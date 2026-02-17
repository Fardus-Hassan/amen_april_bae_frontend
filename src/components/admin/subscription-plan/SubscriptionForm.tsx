"use client";

import React, { useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

// Simple form value type (no zod/react-hook-form)
export type SubscriptionFormValues = {
  planTitle: string;
  shortExplanation: string;
  planPrice: string;
  facility01: string;
  facility02: string;
  facility03: string;
  facility04: string;
  facility05: string;
  bestOffer: boolean;
};

const defaultValues: SubscriptionFormValues = {
  planTitle: "",
  shortExplanation: "",
  planPrice: "",
  facility01: "",
  facility02: "",
  facility03: "",
  facility04: "",
  facility05: "",
  bestOffer: false,
};

interface SubscriptionFormProps {
  onSubmit?: (data: SubscriptionFormValues) => void | Promise<void>;
  onCancel?: () => void;
}

export default function SubscriptionForm({
  onSubmit,
  onCancel,
}: SubscriptionFormProps) {
  const [values, setValues] = useState<SubscriptionFormValues>(defaultValues);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const bestOffer = values.bestOffer;

  const handleChange = (
    field: keyof SubscriptionFormValues,
    value: string | boolean,
  ) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleFormSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setIsSubmitting(true);
    try {
      await onSubmit?.(values);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} noValidate className="space-y-6 pt-6">
      {/* Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label className="text-base font-normal text-gray-800">
            Plan Title
          </Label>
          <Input
            value={values.planTitle}
            onChange={(e) => handleChange("planTitle", e.target.value)}
            placeholder="e.g. Basic Plan"
            className="h-12 rounded-lg border-gray-200 text-gray-900"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-base font-normal text-gray-800">
            Short Explanation
          </Label>
          <Input
            value={values.shortExplanation}
            onChange={(e) => handleChange("shortExplanation", e.target.value)}
            placeholder="e.g. Start Your Journey"
            className="h-12 rounded-lg border-gray-200 text-gray-900"
          />
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label className="text-base font-normal text-gray-800">
            Plan Price/<span className="text-[#C5A065]">Per Audit</span>
          </Label>
          <div className="flex h-12 rounded-lg border border-gray-200 overflow-hidden">
            <div className="flex items-center justify-center w-14 bg-[#C5A065] text-white text-lg font-medium shrink-0">
              $
            </div>
            <Input
              value={values.planPrice}
              onChange={(e) => handleChange("planPrice", e.target.value)}
              placeholder="9.95"
              className="border-0 rounded-none h-full focus-visible:ring-0 text-gray-900"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-base font-normal text-gray-800">
            Plan Facilities 01
          </Label>
          <Input
            value={values.facility01}
            onChange={(e) => handleChange("facility01", e.target.value)}
            placeholder="e.g. Unlimited Streaming Access"
            className="h-12 rounded-lg border-gray-200 text-gray-900"
          />
        </div>
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label className="text-base font-normal text-gray-800">
            Plan Facilities 02
          </Label>
          <Input
            value={values.facility02}
            onChange={(e) => handleChange("facility02", e.target.value)}
            placeholder="e.g. Unlimited Streaming Access"
            className="h-12 rounded-lg border-gray-200 text-gray-900"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-base font-normal text-gray-800">
            Plan Facilities 03
          </Label>
          <Input
            value={values.facility03}
            onChange={(e) => handleChange("facility03", e.target.value)}
            placeholder="e.g. Priority Event Booking"
            className="h-12 rounded-lg border-gray-200 text-gray-900"
          />
        </div>
      </div>

      {/* Row 4 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label className="text-base font-normal text-gray-800">
            Plan Facilities 04
          </Label>
          <Input
            value={values.facility04}
            onChange={(e) => handleChange("facility04", e.target.value)}
            placeholder="e.g. Exclusive Creator Tools"
            className="h-12 rounded-lg border-gray-200 text-gray-900"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-base font-normal text-gray-800">
            Plan Facilities 05
          </Label>
          <Input
            value={values.facility05}
            onChange={(e) => handleChange("facility05", e.target.value)}
            placeholder="e.g. Ad-Free Experience"
            className="h-12 rounded-lg border-gray-200 text-gray-900"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold tracking-widest text-gray-800 uppercase">
            Best Offer
          </span>
          <Switch
            checked={bestOffer}
            onCheckedChange={(val) => handleChange("bestOffer", val)}
            className="data-[state=checked]:bg-[#C5A065]"
            aria-label="Toggle Best Offer"
          />
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            className="h-11 px-8 rounded-lg border-gray-300 text-gray-700 font-normal flex-1 sm:flex-none">
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="h-11 px-8 rounded-lg bg-[#C5A065] hover:bg-[#c29753] text-white font-normal flex-1 sm:flex-none">
            {isSubmitting ? "Saving…" : "Save Changes"}
          </Button>
        </div>
      </div>
    </form>
  );
}
