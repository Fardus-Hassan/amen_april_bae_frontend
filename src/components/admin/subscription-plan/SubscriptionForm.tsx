"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

// Zod validation schema
export const subscriptionFormSchema = z.object({
  planTitle: z
    .string()
    .min(1, "Plan title is required")
    .min(3, "Plan title must be at least 3 characters")
    .max(50, "Plan title must not exceed 50 characters"),
  shortExplanation: z
    .string()
    .min(1, "Short explanation is required")
    .min(5, "Short explanation must be at least 5 characters")
    .max(100, "Short explanation must not exceed 100 characters"),
  planPrice: z
    .string()
    .min(1, "Plan price is required")
    .refine(
      (val) => !isNaN(Number(val)) && Number(val) >= 0,
      "Plan price must be a valid positive number",
    )
    .refine(
      (val) => /^\d+(\.\d{1,2})?$/.test(val),
      "Plan price must have up to 2 decimal places",
    ),
  facility01: z
    .string()
    .min(1, "Facility 01 is required")
    .min(3, "Facility must be at least 3 characters")
    .max(80, "Facility must not exceed 80 characters"),
  facility02: z
    .string()
    .min(1, "Facility 02 is required")
    .min(3, "Facility must be at least 3 characters")
    .max(80, "Facility must not exceed 80 characters"),
  facility03: z
    .string()
    .min(1, "Facility 03 is required")
    .min(3, "Facility must be at least 3 characters")
    .max(80, "Facility must not exceed 80 characters"),
  facility04: z
    .string()
    .min(1, "Facility 04 is required")
    .min(3, "Facility must be at least 3 characters")
    .max(80, "Facility must not exceed 80 characters"),
  facility05: z
    .string()
    .min(1, "Facility 05 is required")
    .min(3, "Facility must be at least 3 characters")
    .max(80, "Facility must not exceed 80 characters"),
  bestOffer: z.boolean().default(false),
});

export type SubscriptionFormValues = z.infer<typeof subscriptionFormSchema>;

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
  initialValues?: Partial<SubscriptionFormValues>;
  isLoading?: boolean;
}

interface FormFieldErrorProps {
  message?: string;
}

const FormFieldError: React.FC<FormFieldErrorProps> = ({ message }) => {
  if (!message) return null;
  return <p className="text-sm text-red-500 mt-1">{message}</p>;
};

export default function SubscriptionForm({
  onSubmit,
  onCancel,
  initialValues,
  isLoading = false,
}: SubscriptionFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
    reset,
  } = useForm<SubscriptionFormValues>({
    resolver: zodResolver(subscriptionFormSchema),
    defaultValues: { ...defaultValues, ...initialValues },
    mode: "onBlur",
  });

  const isFormSubmitting = isSubmitting || isLoading;

  const handleCancel = () => {
    // Reset form to default values
    reset(defaultValues);
    // Call parent callback if provided
    if (onCancel) {
      onCancel();
    }
  };

  const handleFormSubmit = async (data: SubscriptionFormValues) => {
    try {
      await onSubmit?.(data);
      // Reset form after successful submission
      reset(defaultValues);
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      noValidate
      className="space-y-6 pt-6">
      {/* Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label className="text-base font-normal text-gray-800">
            Plan Title
          </Label>
          <Input
            {...register("planTitle")}
            placeholder="e.g. Basic Plan"
            className="h-12 rounded-lg border-gray-200 text-gray-900"
            disabled={isFormSubmitting}
          />
          <FormFieldError message={errors.planTitle?.message} />
        </div>

        <div className="space-y-2">
          <Label className="text-base font-normal text-gray-800">
            Short Explanation
          </Label>
          <Input
            {...register("shortExplanation")}
            placeholder="e.g. Start Your Journey"
            className="h-12 rounded-lg border-gray-200 text-gray-900"
            disabled={isFormSubmitting}
          />
          <FormFieldError message={errors.shortExplanation?.message} />
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
              {...register("planPrice")}
              placeholder="9.95"
              className="border-0 rounded-none h-full focus-visible:ring-0 text-gray-900"
              disabled={isFormSubmitting}
            />
          </div>
          <FormFieldError message={errors.planPrice?.message} />
        </div>

        <div className="space-y-2">
          <Label className="text-base font-normal text-gray-800">
            Plan Facilities 01
          </Label>
          <Input
            {...register("facility01")}
            placeholder="e.g. Unlimited Streaming Access"
            className="h-12 rounded-lg border-gray-200 text-gray-900"
            disabled={isFormSubmitting}
          />
          <FormFieldError message={errors.facility01?.message} />
        </div>
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label className="text-base font-normal text-gray-800">
            Plan Facilities 02
          </Label>
          <Input
            {...register("facility02")}
            placeholder="e.g. Unlimited Streaming Access"
            className="h-12 rounded-lg border-gray-200 text-gray-900"
            disabled={isFormSubmitting}
          />
          <FormFieldError message={errors.facility02?.message} />
        </div>

        <div className="space-y-2">
          <Label className="text-base font-normal text-gray-800">
            Plan Facilities 03
          </Label>
          <Input
            {...register("facility03")}
            placeholder="e.g. Priority Event Booking"
            className="h-12 rounded-lg border-gray-200 text-gray-900"
            disabled={isFormSubmitting}
          />
          <FormFieldError message={errors.facility03?.message} />
        </div>
      </div>

      {/* Row 4 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label className="text-base font-normal text-gray-800">
            Plan Facilities 04
          </Label>
          <Input
            {...register("facility04")}
            placeholder="e.g. Exclusive Creator Tools"
            className="h-12 rounded-lg border-gray-200 text-gray-900"
            disabled={isFormSubmitting}
          />
          <FormFieldError message={errors.facility04?.message} />
        </div>

        <div className="space-y-2">
          <Label className="text-base font-normal text-gray-800">
            Plan Facilities 05
          </Label>
          <Input
            {...register("facility05")}
            placeholder="e.g. Ad-Free Experience"
            className="h-12 rounded-lg border-gray-200 text-gray-900"
            disabled={isFormSubmitting}
          />
          <FormFieldError message={errors.facility05?.message} />
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold tracking-widest text-gray-800 uppercase">
            Best Offer
          </span>
          <Controller
            name="bestOffer"
            control={control}
            render={({ field }) => (
              <Switch
                checked={field.value}
                onCheckedChange={field.onChange}
                className="data-[state=checked]:bg-[#C5A065]"
                aria-label="Toggle Best Offer"
                disabled={isFormSubmitting}
              />
            )}
          />
        </div>

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
            type="submit"
            disabled={isFormSubmitting}
            className="h-11 px-8 rounded-lg bg-[#C5A065] hover:bg-[#c29753] text-white font-normal flex-1 sm:flex-none">
            {isFormSubmitting ? "Saving…" : "Save Changes"}
          </Button>
        </div>
      </div>
    </form>
  );
}
