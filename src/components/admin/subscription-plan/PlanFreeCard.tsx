"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// ─── Types ────────────────────────────────────────────────────────────────────

interface CurrentPlansCardProps {
  planCount?: number;
  plans?: string[];
}

interface FreeTrialCardProps {
  defaultDays?: string;
  onSave?: (days: number) => void;
  onCancel?: () => void;
}

interface TrialOption {
  value: string;
  label: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const TRIAL_OPTIONS: TrialOption[] = [
  { value: "0", label: "00 Days" },
  { value: "7", label: "07 Days" },
  { value: "14", label: "14 Days" },
  { value: "30", label: "30 Days" },
  { value: "60", label: "60 Days" },
  { value: "90", label: "90 Days" },
];

const DEMO_PLANS: string[] = [
  "Basic Plan — $30.00 (Monthly)",
  "Standard Plan — $300.00 (Quarterly)",
  "Premium Plan — $600.00 (Yearly)",
];

// ─── PlanIcon ─────────────────────────────────────────────────────────────────

function PlanIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true">
      <rect
        x="6"
        y="4"
        width="20"
        height="26"
        rx="2"
        stroke="#0f2a4a"
        strokeWidth="2"
        fill="none"
      />
      <rect x="10" y="8" width="12" height="2" rx="1" fill="#0f2a4a" />
      <rect x="10" y="13" width="12" height="2" rx="1" fill="#0f2a4a" />
      <path
        d="M18 22 L18 34 L22 30 L26 36 L28 35 L24 29 L28 29 Z"
        stroke="#0f2a4a"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

// ─── CurrentPlansCard ─────────────────────────────────────────────────────────

export function CurrentPlansCard({
  planCount = 0,
  plans = [],
}: CurrentPlansCardProps) {
  return (
    <div className="bg-white rounded-2xl p-5 flex items-center gap-4 w-full min-w-0">
      {/* Icon + count */}
      <div className="flex items-center gap-3 shrink-0">
        <div className="w-12 h-12 flex items-center justify-center shrink-0">
          <PlanIcon />
        </div>
        <div>
          <p className="text-[#0f2a4a] font-semibold text-base leading-tight">
            Current Plans
          </p>
          <p className="text-[#0f2a4a] font-bold text-3xl mt-1">{planCount}</p>
        </div>
      </div>

      {/* Divider — hidden on xs */}
      <div className="hidden sm:block w-px h-16 bg-gray-200 mx-2 shrink-0" />

      {/* Plan list */}
      <ul className="flex flex-col gap-1.5 text-sm text-[#0f2a4a] min-w-0">
        {plans.map((plan, i) => (
          <li key={i} className="truncate">
            {plan}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── FreeTrialCard ────────────────────────────────────────────────────────────

export function FreeTrialCard({
  defaultDays = "14",
  onSave,
  onCancel,
}: FreeTrialCardProps) {
  const [selected, setSelected] = useState<string>(defaultDays);

  const handleSave = (): void => {
    onSave?.(Number(selected));
  };

  const handleCancel = (): void => {
    onCancel?.();
  };

  return (
    <div className="bg-white rounded-2xl p-5 w-full">
      <p className="text-[#0f2a4a] font-medium text-base mb-3">
        Free Trial (Days)
      </p>

      {/* Shadcn Select */}
      <Select value={selected} onValueChange={setSelected}>
        <SelectTrigger className="w-full rounded-xl border-gray-200 text-[#0f2a4a] font-medium mb-4 focus:ring-[#c9a97a] focus:ring-offset-0">
          <SelectValue placeholder="Select days" />
        </SelectTrigger>
        <SelectContent>
          {TRIAL_OPTIONS.map((opt) => (
            <SelectItem
              key={opt.value}
              value={opt.value}
              className="text-[#0f2a4a] cursor-pointer">
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={handleCancel}
          className="flex-1 py-2.5 rounded-xl border border-gray-300 text-[#0f2a4a] text-sm font-medium hover:bg-gray-50 transition-colors">
          Cancel
        </button>
        <button
          type="button"
          onClick={handleSave}
          className="flex-1 py-2.5 rounded-xl bg-[#C5A065] hover:bg-[#c29753] text-white text-sm font-medium transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  );
}

// ─── PlanFreeCard (default export — composes both cards) ──────────────────────

export default function PlanFreeCard() {
  const handleSave = (days: number): void => {
    console.log("Trial days saved:", days);
  };

  const handleCancel = (): void => {
    console.log("Cancelled");
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row items-stretch gap-4 mt-6">
        <CurrentPlansCard planCount={2} plans={DEMO_PLANS} />
        <FreeTrialCard
          defaultDays="14"
          onSave={handleSave}
          onCancel={handleCancel}
        />
      </div>
    </div>
  );
}
