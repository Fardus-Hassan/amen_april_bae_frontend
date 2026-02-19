"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

interface PreferenceItem {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
}

interface CommunicationPreferencesSettingsProps {
  heading?: string;
  preferences?: PreferenceItem[];
  onPreferenceChange?: (id: string, enabled: boolean) => void;
  className?: string;
}

const defaultPreferences: PreferenceItem[] = [
  {
    id: "email",
    title: "Email Notifications",
    description: "Receive updates about your reports and DNA matches",
    enabled: true,
  },
  {
    id: "sms",
    title: "SMS Notifications",
    description: "Get text messages for important updates",
    enabled: false,
  },
  {
    id: "marketing",
    title: "Marketing Communications",
    description: "Receive news about features and special offers",
    enabled: true,
  },
  {
    id: "research",
    title: "Research Opportunities",
    description: "Be notified of genealogical research studies",
    enabled: true,
  },
];

export default function CommunicationPreferencesSettings({
  heading = "Communication Preferences",
  preferences: initialPreferences = defaultPreferences,
  onPreferenceChange,
  className,
}: CommunicationPreferencesSettingsProps) {
  const [preferences, setPreferences] =
    useState<PreferenceItem[]>(initialPreferences);

  const handleToggle = (id: string, checked: boolean) => {
    setPreferences((prev) =>
      prev.map((pref) =>
        pref.id === id ? { ...pref, enabled: checked } : pref,
      ),
    );
    onPreferenceChange?.(id, checked);
  };

  return (
    <div
      className={cn(
        "w-full bg-white rounded-[14px] px-6 pt-5 pb-6",
        className,
      )}>
      {/* Section heading */}
      <h1 className="text-2xl font-semibold text-gray-900 mb-7">{heading}</h1>

      {/* Preference rows */}
      <div className="flex flex-col gap-3">
        {preferences.map((pref) => (
          <div
            key={pref.id}
            className="flex items-center justify-between bg-[#F5F2EC] rounded-[12px] px-5 py-4">
            {/* Text block */}
            <div className="flex flex-col gap-[3px] pr-4">
              <span className="text-[15px] font-bold text-[#1A1A1A] leading-tight tracking-[-0.005em]">
                {pref.title}
              </span>
              <span className="text-[13px] text-[#6B6B6B] font-normal leading-snug">
                {pref.description}
              </span>
            </div>

            {/* Toggle */}
            <Switch
              checked={pref.enabled}
              onCheckedChange={(checked) => handleToggle(pref.id, checked)}
              className={cn(
                "data-[state=checked]:bg-[#B8892A]",
                "data-[state=unchecked]:bg-[#9CA3AF]",
              )}
              aria-label={`Toggle ${pref.title}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
