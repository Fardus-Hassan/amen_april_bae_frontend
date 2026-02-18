"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

// Zod validation schema
export const siteInfoFormSchema = z.object({
  location: z
    .string()
    .min(1, "Location is required")
    .max(100, "Location must not exceed 100 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  phoneNumber: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^\+?[\d\s\-().]{7,20}$/, "Please enter a valid phone number"),
  xProfileLink: z
    .string()
    .min(1, "X profile link is required")
    .url("Please enter a valid URL"),
  instagramProfileLink: z
    .string()
    .min(1, "Instagram profile link is required")
    .url("Please enter a valid URL"),
  facebookProfileLink: z
    .string()
    .min(1, "Facebook profile link is required")
    .url("Please enter a valid URL"),
});

export type SiteInfoFormValues = z.infer<typeof siteInfoFormSchema>;

const defaultValues: SiteInfoFormValues = {
  location: "",
  email: "",
  phoneNumber: "",
  xProfileLink: "",
  instagramProfileLink: "",
  facebookProfileLink: "",
};

interface SiteInfoFormProps {
  onSubmit?: (data: SiteInfoFormValues) => void | Promise<void>;
  onCancel?: () => void;
  initialValues?: Partial<SiteInfoFormValues>;
  isLoading?: boolean;
}

interface FormFieldErrorProps {
  message?: string;
}

const FormFieldError: React.FC<FormFieldErrorProps> = ({ message }) => {
  if (!message) return null;
  return <p className="text-sm text-red-500 mt-1">{message}</p>;
};

export default function SiteInfoForm({
  onSubmit,
  onCancel,
  initialValues,
  isLoading = false,
}: SiteInfoFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SiteInfoFormValues>({
    resolver: zodResolver(siteInfoFormSchema),
    defaultValues: { ...defaultValues, ...initialValues },
    mode: "onBlur",
  });

  const isFormSubmitting = isSubmitting || isLoading;

  const handleCancel = () => {
    reset(defaultValues);
    if (onCancel) onCancel();
  };

  const handleFormSubmit = async (data: SiteInfoFormValues) => {
    try {
      await onSubmit?.(data);
      reset(defaultValues);
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <div className="flex items-start gap-12">
      {/* Left Label */}
      <div className="w-28 shrink-0 pt-2">
        <h2 className="text-xl font-normal text-gray-800">Site Info</h2>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        noValidate
        className="flex-1 space-y-6">
        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label className="text-base font-normal text-gray-800">
              Location
            </Label>
            <Input
              {...register("location")}
              placeholder="Lebron"
              className="h-12 rounded-xl border-gray-200 placeholder:text-gray-300 text-gray-900"
              disabled={isFormSubmitting}
            />
            <FormFieldError message={errors.location?.message} />
          </div>

          <div className="space-y-2">
            <Label className="text-base font-normal text-gray-800">Email</Label>
            <Input
              {...register("email")}
              type="email"
              placeholder="James"
              className="h-12 rounded-xl border-gray-200 placeholder:text-gray-300 text-gray-900"
              disabled={isFormSubmitting}
            />
            <FormFieldError message={errors.email?.message} />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label className="text-base font-normal text-gray-800">
              Phone Number:
            </Label>
            <Input
              {...register("phoneNumber")}
              type="tel"
              placeholder="Lebron"
              className="h-12 rounded-xl border-gray-200 placeholder:text-gray-300 text-gray-900"
              disabled={isFormSubmitting}
            />
            <FormFieldError message={errors.phoneNumber?.message} />
          </div>

          <div className="space-y-2">
            <Label className="text-base font-normal text-gray-800">
              X Profile Link:
            </Label>
            <Input
              {...register("xProfileLink")}
              type="url"
              placeholder="James"
              className="h-12 rounded-xl border-gray-200 placeholder:text-gray-300 text-gray-900"
              disabled={isFormSubmitting}
            />
            <FormFieldError message={errors.xProfileLink?.message} />
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label className="text-base font-normal text-gray-800">
              Instagram Profile Link:
            </Label>
            <Input
              {...register("instagramProfileLink")}
              type="url"
              placeholder="Lebron"
              className="h-12 rounded-xl border-gray-200 placeholder:text-gray-300 text-gray-900"
              disabled={isFormSubmitting}
            />
            <FormFieldError message={errors.instagramProfileLink?.message} />
          </div>

          <div className="space-y-2">
            <Label className="text-base font-normal text-gray-800">
              Facebook Profile Link:
            </Label>
            <Input
              {...register("facebookProfileLink")}
              type="url"
              placeholder="James"
              className="h-12 rounded-xl border-gray-200 placeholder:text-gray-300 text-gray-900"
              disabled={isFormSubmitting}
            />
            <FormFieldError message={errors.facebookProfileLink?.message} />
          </div>
        </div>
      </form>
    </div>
  );
}
