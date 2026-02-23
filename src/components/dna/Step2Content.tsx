"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

// ── Data ─────────────────────────────────────────────────────────────────────

const PRIMARY_GOALS = [
  {
    id: "heritage",
    icon: "✈️",
    label: "Heritage Travel",
    sub: "Visit ancestral homelands",
  },
  {
    id: "medical",
    icon: "🩺",
    label: "Medical History",
    sub: "Understand health heritage",
  },
  {
    id: "curiosity",
    icon: "🔍",
    label: "Pure Curiosity",
    sub: "Discover family story",
  },
];

const ACTIVITIES = [
  { id: "historical", emoji: "🏛️", label: "Historical Sites & Museums" },
  { id: "archives", emoji: "📚", label: "Archives & Genealogy Research" },
  { id: "cuisine", emoji: "🍽️", label: "Local Cuisine & Food Culture" },
  { id: "nature", emoji: "🏔️", label: "Nature & Landscapes" },
  { id: "walking", emoji: "🚶", label: "Walking Tours & Exploration" },
  { id: "smalltowns", emoji: "🏘️", label: "Small Towns & Villages" },
  { id: "cultural", emoji: "🎭", label: "Cultural Experiences" },
  { id: "art", emoji: "🎨", label: "Art & Architecture" },
];

const FAMILY_SURNAMES = [
  { value: "smith", label: "Smith" },
  { value: "garcia", label: "Garcia" },
  { value: "müller", label: "Müller" },
  { value: "other", label: "Other" },
];

const ANCESTRAL_REGIONS = [
  { value: "europe", label: "Europe" },
  { value: "asia", label: "Asia" },
  { value: "africa", label: "Africa" },
  { value: "americas", label: "The Americas" },
  { value: "middle-east", label: "Middle East" },
  { value: "oceania", label: "Oceania" },
];

const TIME_PERIODS = [
  { value: "ancient", label: "Ancient History (Before 500 AD)" },
  { value: "medieval", label: "Medieval (500–1500 AD)" },
  { value: "early-modern", label: "Early Modern (1500–1800)" },
  { value: "modern", label: "Modern Era (1800–1950)" },
  { value: "contemporary", label: "Contemporary (1950–present)" },
];

const TRAVEL_PACES = [
  {
    value: "moderate",
    label: "Moderate - A balance of activities and downtime",
  },
  {
    value: "relaxed",
    label: "Relaxed - I like to take my time and immerse myself",
  },
  {
    value: "active",
    label: "Active - I want to see and do as much as possible",
  },
];

const ACCOMMODATIONS = [
  { value: "luxury", label: "Luxury hotels and resorts" },
  { value: "midrange", label: "Comfortable mid-range hotels" },
  { value: "boutique", label: "Boutique hotels and B&Bs" },
  { value: "local", label: "Authentic local accommodations" },
];

const BUDGETS = [
  { value: "budget", label: "Budget-conscious (Under $150/day)" },
  { value: "moderate", label: "Moderate ($$150–300/day)" },
  { value: "premium", label: "Premium ($300–500/day)" },
  { value: "luxury", label: "Luxury ($500+/day)" },
];

const WHY_POINTS = [
  "Match you with experiences that align with your interests",
  "Suggest appropriate travel itineraries and pacing",
  "Recommend accommodations and experiences within your budget",
  "Prioritize what matters most to you in your heritage journey",
];

// ── SelectField helper ────────────────────────────────────────────────────────

function SelectField({
  label,
  optional = false,
  options,
}: {
  label: string;
  optional?: boolean;
  options: { value: string; label: string }[];
}) {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col gap-[7px]">
      <label className="text-[13.5px] sm:text-[14px] font-semibold text-[#1B2B4B]">
        {label}
        {optional && (
          <span className="font-normal text-[#888] ml-1">(Optional)</span>
        )}
      </label>
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger
          className={cn(
            "w-full h-[48px] px-4 rounded-[10px] border border-[#E0DBD3] bg-white shadow-none",
            "text-[13.5px] sm:text-[14px] text-[#9A9A9A]",
            "hover:border-[#B8912A] focus:ring-0 focus:ring-offset-0",
            "data-[state=open]:border-[#B8912A]",
            "transition-colors duration-150",
          )}>
          <SelectValue placeholder="Select your preference" />
        </SelectTrigger>
        <SelectContent
          className={cn(
            "rounded-[10px] border border-[#E0DBD3] bg-white shadow-md p-0 overflow-hidden",
          )}>
          {options.map((opt) => (
            <SelectItem
              key={opt.value}
              value={opt.value}
              className={cn(
                "px-4 py-3 text-[13.5px] sm:text-[14px] text-[#1B2B4B] rounded-none cursor-pointer",
                "focus:bg-[#F5F2EC] focus:text-[#1B2B4B]",
              )}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function Step2Content() {
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const [selectedActivities, setSelectedActivities] = useState<Set<string>>(
    new Set(["historical"]),
  );

  const toggleActivity = (id: string) =>
    setSelectedActivities((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  return (
    <div className="flex items-start justify-center min-h-screen bg-[#FAF8F5] px-4 py-10">
      <div className="w-full max-w-[900px] bg-white rounded-[20px] px-6 pt-10 pb-8 flex flex-col shadow-sm">
        {/* ── Header ── */}
        <h1
          className="text-[30px] sm:text-[36px] md:text-[40px] font-bold text-[#1B2B4B] leading-tight tracking-[-0.02em] mb-2"
          style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
          Tell Us About Your Interests
        </h1>
        <p className="text-[13.5px] sm:text-[14px] text-[#6B6B6B] leading-relaxed mb-7">
          Help us personalize your heritage journey by sharing what matters most
          to you.
          <br className="hidden sm:block" />
          This will help us create better travel recommendations.
        </p>

        {/* ── Primary Goal ── */}
        <p className="text-[13px] sm:text-[13.5px] font-semibold text-[#1B2B4B] mb-3">
          What is your primary goal? <span className="text-red-500">*</span>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          {PRIMARY_GOALS.map((g) => (
            <button
              key={g.id}
              type="button"
              onClick={() => setSelectedGoal(g.id)}
              className={cn(
                "flex flex-col items-center gap-2 px-4 py-5 rounded-[12px] border-2 transition-all duration-150",
                selectedGoal === g.id
                  ? "border-[#B8912A] bg-[#FBF7F0]"
                  : "border-[#E0DBD3] bg-white hover:border-[#B8912A]/50",
              )}>
              <span className="text-[28px]">{g.icon}</span>
              <span
                className="text-[14px] sm:text-[15px] font-bold text-[#1B2B4B] text-center"
                style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
                {g.label}
              </span>
              <span className="text-[12px] text-[#888] text-center">
                {g.sub}
              </span>
            </button>
          ))}
        </div>

        {/* ── Activities Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {ACTIVITIES.map((a) => {
            const active = selectedActivities.has(a.id);
            return (
              <button
                key={a.id}
                type="button"
                onClick={() => toggleActivity(a.id)}
                className={cn(
                  "flex items-center justify-between gap-3 px-4 py-[14px] rounded-[10px] border transition-all duration-150 text-left",
                  active
                    ? "bg-[#B8912A] border-[#B8912A] text-white"
                    : "bg-white border-[#E0DBD3] text-[#1B2B4B] hover:border-[#B8912A]/60",
                )}>
                <div className="flex items-center gap-3">
                  <span className="text-[22px] leading-none">{a.emoji}</span>
                  <span
                    className="text-[13.5px] sm:text-[14px] font-medium"
                    style={{
                      fontFamily: "'Georgia', 'Times New Roman', serif",
                    }}>
                    {a.label}
                  </span>
                </div>
                {active && (
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Check
                      className="w-3.5 h-3.5 text-white"
                      strokeWidth={2.5}
                    />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* ── Divider ── */}
        <div className="w-full h-px bg-[#EDE9E3] mb-7" />

        {/* ── Travel Style ── */}
        <h2
          className="text-[24px] sm:text-[28px] font-bold text-[#1B2B4B] mb-6 leading-tight"
          style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
          Your Travel Style
        </h2>

        <div className="flex flex-col gap-5 mb-6">
          <SelectField
            label="Family Surnames"
            optional
            options={FAMILY_SURNAMES}
          />
          <SelectField
            label="Ancestral Regions of Interest"
            optional
            options={ANCESTRAL_REGIONS}
          />
          <SelectField
            label="Time Period Focus"
            optional
            options={TIME_PERIODS}
          />
          <SelectField label="Preferred Travel Pace" options={TRAVEL_PACES} />
          <SelectField
            label="Accommodation Preference"
            options={ACCOMMODATIONS}
          />
          <SelectField label="Travel Budget" options={BUDGETS} />

          {/* Additional Context textarea */}
          <div className="flex flex-col gap-[7px]">
            <label className="text-[13.5px] sm:text-[14px] font-semibold text-[#1B2B4B]">
              Additional Context{" "}
              <span className="font-normal text-[#888]">(Optional)</span>
            </label>
            <textarea
              placeholder="Write here…"
              rows={3}
              className={cn(
                "w-full px-4 py-3.5 rounded-[10px] border border-[#E0DBD3] bg-white resize-none",
                "text-[13.5px] sm:text-[14px] text-[#1B2B4B] placeholder:text-[#C0BAB0]",
                "outline-none focus:border-[#B8912A] hover:border-[#B8912A] transition-colors duration-150",
              )}
            />
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="w-full h-px bg-[#EDE9E3] mb-7" />

        {/* ── Why we ask ── */}
        <h2
          className="text-[24px] sm:text-[28px] font-bold text-[#1B2B4B] mb-2 leading-tight"
          style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
          Why we ask for preferences
        </h2>
        <p className="text-[13.5px] text-[#6B6B6B] mb-4">
          Your preferences help us create a more meaningful heritage experience:
        </p>
        <ul className="flex flex-col gap-2 mb-10">
          {WHY_POINTS.map((pt, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-[13.5px] text-[#4A4A4A]">
              <span className="mt-[5px] w-[6px] h-[6px] rounded-full bg-[#B8912A] flex-shrink-0" />
              {pt}
            </li>
          ))}
        </ul>

        {/* ── Navigation ── */}
        <div className="w-full flex items-center justify-end gap-3 pt-2">
          <Button
            variant="outline"
            className={cn(
              "h-[44px] sm:h-[48px] px-5 sm:px-6 rounded-[10px]",
              "border border-[#D0CBC2] bg-white text-[#1A1A1A]",
              "text-[14px] sm:text-[14.5px] font-medium gap-2",
              "hover:bg-[#F9F7F4] transition-colors duration-150 shadow-none",
            )}>
            <ArrowLeft className="w-[14px] h-[14px]" strokeWidth={2} />
            Back
          </Button>
          <Button
            className={cn(
              "h-[44px] sm:h-[48px] px-6 sm:px-8 rounded-[10px]",
              "bg-[#B8912A] hover:bg-[#A37F24] text-white",
              "text-[14px] sm:text-[14.5px] font-semibold gap-2",
              "shadow-none transition-colors duration-150",
            )}>
            Next
            <ArrowRight className="w-[14px] h-[14px]" strokeWidth={2} />
          </Button>
        </div>
      </div>
    </div>
  );
}
