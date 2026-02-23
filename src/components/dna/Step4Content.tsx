"use client";

import { useState, type ReactNode } from "react";
import {
  Check,
  ChevronDown,
  ChevronUp,
  Info,
  AlertTriangle,
  Leaf,
  Shield,
  ArrowRight,
} from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

// ─────────────────────────────────────────────────────────────────────────────
// BADGE
// ─────────────────────────────────────────────────────────────────────────────

type BadgeKind = "required" | "biometric" | "optional";

function Badge({ kind }: { kind: BadgeKind }) {
  if (kind === "required")
    return (
      <span className="inline-flex items-center gap-[5px] px-[8px] py-[3px] rounded-full bg-[#EEF3FE] border border-[#C2D2FB] text-[#2D5BE3] text-[11px] font-semibold leading-none">
        <Shield className="w-[10px] h-[10px]" strokeWidth={2.5} />
        Required
      </span>
    );
  if (kind === "biometric")
    return (
      <span className="inline-flex items-center gap-[5px] px-[8px] py-[3px] rounded-full bg-[#FFF3E8] border border-[#FBCFA0] text-[#C25B0A] text-[11px] font-semibold leading-none">
        Biometric Consent
      </span>
    );
  return (
    <span className="inline-flex items-center gap-[5px] px-[8px] py-[3px] rounded-full bg-[#F0FDF5] border border-[#BBF7D0] text-[#16A34A] text-[11px] font-semibold leading-none">
      Optional
    </span>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FEATURE LIST ITEM
// ─────────────────────────────────────────────────────────────────────────────

function Feature({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-[8px]">
      <Check
        className="w-[14px] h-[14px] text-[#22C55E] flex-shrink-0 mt-[2px]"
        strokeWidth={2.5}
      />
      <span className="text-[13px] text-[#444] leading-snug">{text}</span>
    </li>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// WARNING BOX
// ─────────────────────────────────────────────────────────────────────────────

type WarnKind = "error" | "info" | "success";

interface WarnConfig {
  wrap: string;
  icon: ReactNode;
  textCls: string;
}

const WARN_CONFIGS: Record<WarnKind, WarnConfig> = {
  error: {
    wrap: "bg-[#FEF2F2] border-[#FECACA]",
    icon: (
      <AlertTriangle
        className="w-[14px] h-[14px] text-[#DC2626] flex-shrink-0 mt-[2px]"
        strokeWidth={2}
      />
    ),
    textCls: "text-[#7F1D1D]",
  },
  info: {
    wrap: "bg-[#EFF6FF] border-[#BFDBFE]",
    icon: (
      <Info
        className="w-[14px] h-[14px] text-[#2563EB] flex-shrink-0 mt-[2px]"
        strokeWidth={2}
      />
    ),
    textCls: "text-[#1E3A8A]",
  },
  success: {
    wrap: "bg-[#F0FDF4] border-[#BBF7D0]",
    icon: (
      <Leaf
        className="w-[14px] h-[14px] text-[#16A34A] flex-shrink-0 mt-[2px]"
        strokeWidth={2}
      />
    ),
    textCls: "text-[#14532D]",
  },
};

function WarnBox({
  kind,
  text,
  extra,
}: {
  kind: WarnKind;
  text: string;
  extra?: ReactNode;
}) {
  const cfg = WARN_CONFIGS[kind];

  return (
    <div
      className={cn(
        "rounded-[10px] border px-[14px] py-[10px] flex items-start gap-[8px] mt-1",
        cfg.wrap,
      )}>
      {cfg.icon}
      <div>
        <p className={cn("text-[12px] leading-relaxed", cfg.textCls)}>{text}</p>
        {extra}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CONSENT CARD
// ─────────────────────────────────────────────────────────────────────────────

interface CardProps {
  iconBg: string;
  icon: ReactNode;
  title: string;
  badge: BadgeKind;
  checked: boolean;
  locked?: boolean;
  onToggle: () => void;
  children: ReactNode;
}

function ConsentCard({
  iconBg,
  icon,
  title,
  badge,
  checked,
  locked,
  onToggle,
  children,
}: CardProps) {
  const [open, setOpen] = useState(true);
  return (
    <div
      className={cn(
        "bg-white rounded-[14px] border overflow-hidden transition-all",
        checked ? "border-[#C8A84B]/60" : "border-[#E3DDD6]",
      )}>
      {/* header row */}
      <div className="flex items-start gap-[12px] px-[18px] pt-[16px] pb-[14px]">
        <div
          className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-[1px]",
            iconBg,
          )}>
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-[8px]">
            <span className="text-[14px] font-bold text-[#1B2B4B] leading-snug">
              {title}
            </span>
            <Badge kind={badge} />
          </div>
        </div>
        <div className="flex items-center gap-[8px] flex-shrink-0 mt-[1px]">
          <Checkbox
            checked={checked}
            disabled={locked}
            onCheckedChange={locked ? undefined : (_val) => onToggle()}
            className={cn(
              "w-[18px] h-[18px] rounded-[4px] border-2 border-[#1B2B4B]",
              "data-[state=checked]:bg-[#1B2B4B] data-[state=checked]:border-[#1B2B4B]",
              "[&>span>svg]:text-white [&>span>svg]:w-3 [&>span>svg]:h-3",
              locked && "opacity-50 cursor-not-allowed",
            )}
          />
          <button
            type="button"
            onClick={() => setOpen((p) => !p)}
            className="text-[#AAAAAA] hover:text-[#555] transition-colors">
            {open ? (
              <ChevronUp className="w-[18px] h-[18px]" strokeWidth={2} />
            ) : (
              <ChevronDown className="w-[18px] h-[18px]" strokeWidth={2} />
            )}
          </button>
        </div>
      </div>

      {/* body */}
      {open && (
        <div className="px-[18px] pb-[16px] border-t border-[#F2EDE8] pt-[14px] flex flex-col gap-[12px]">
          {children}
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

const DATA_RIGHTS = [
  {
    emoji: "📂",
    title: "Right to Access",
    desc: "Request a complete copy of your data at any time",
  },
  {
    emoji: "✏️",
    title: "Right to Rectification",
    desc: "Correct inaccurate personal information",
  },
  {
    emoji: "🗑️",
    title: "Right to Erasure",
    desc: "Delete your account and all associated data",
  },
  {
    emoji: "📦",
    title: "Right to Portability",
    desc: "Transfer data to another service",
  },
  {
    emoji: "⏸️",
    title: "Right to Object",
    desc: "Stop processing for specific purposes",
  },
  {
    emoji: "↩️",
    title: "Right to Withdraw",
    desc: "Revise consent anytime from your dashboard",
  },
];

const RETENTION = [
  {
    emoji: "👤",
    title: "Active Account Data",
    desc: "Retained as long as your account is active and for up to 90 days after account closure to allow for account recovery.",
  },
  {
    emoji: "📷",
    title: "Biometric Data (Photos)",
    desc: "Deleted within 30 days of consent withdrawal or within 3 years of account closure, whichever comes first (BIPA compliance).",
  },
  {
    emoji: "🔬",
    title: "Research Data",
    desc: "Anonymized aggregated data may be retained indefinitely for research purposes, but cannot be linked back to you.",
  },
  {
    emoji: "⚡",
    title: "Immediate Deletion",
    desc: "You can request immediate permanent deletion of all data at any time. This action is irreversible and will be completed within 30 days.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// MAIN
// ─────────────────────────────────────────────────────────────────────────────

const INITIAL: Record<string, boolean> = {
  genetic: true,
  photos: false,
  research: false,
  dnamatch: false,
  marketing: false,
  thirdparty: false,
  gdpr: false,
  retention: false,
};

export default function Step4Content() {
  const [map, setMap] = useState(INITIAL);
  const toggle = (id: string) => setMap((p) => ({ ...p, [id]: !p[id] }));

  const optionalIds = [
    "photos",
    "research",
    "dnamatch",
    "marketing",
    "thirdparty",
    "gdpr",
    "retention",
  ];
  const optionalSelected = optionalIds.filter((id) => map[id]).length;

  return (
    <div className="min-h-screen bg-[#FAF8F5] px-4 sm:px-6 py-8">
      <div className="mx-auto w-full max-w-[900px] p-6 bg-white flex flex-col gap-[16px]">
        {/* ── PAGE HEADER ── */}
        <div>
          <h1 className="text-[26px] sm:text-[30px] font-bold text-[#1B2B4B] leading-tight tracking-[-0.01em]">
            Data Processing Consent
          </h1>
          <p className="text-[13px] text-[#888] mt-[4px]">
            Review and manage your privacy preferences before uploading data
          </p>
        </div>

        {/* ── YOUR PRIVACY MATTERS BANNER ── */}
        <div className="bg-[#FFFBEB] border border-[#F6D860] rounded-[12px] px-[16px] py-[14px] flex flex-col gap-[10px]">
          <div className="flex items-start gap-[10px]">
            <div className="w-[26px] h-[26px] rounded-full bg-[#F6C842] flex items-center justify-center flex-shrink-0 mt-[1px]">
              <Info
                className="w-[13px] h-[13px] text-white"
                strokeWidth={2.5}
              />
            </div>
            <div>
              <p className="text-[13.5px] font-bold text-[#7A5800]">
                Your Privacy Matters
              </p>
              <p className="text-[12.5px] text-[#7A5800] leading-relaxed mt-[3px]">
                We&apos;re committed to transparency and giving you complete
                control over your data. Please review the following consent
                options carefully. Some are required for our service to
                function, while others are optional enhancements.
              </p>
            </div>
          </div>
          <div className="ml-[36px] bg-[#FEF3C7] border border-[#FDE68A] rounded-[8px] px-[12px] py-[8px] flex items-start gap-[8px]">
            <Info
              className="w-[12px] h-[12px] text-[#92400E] flex-shrink-0 mt-[1px]"
              strokeWidth={2}
            />
            <p className="text-[11.5px] text-[#92400E] leading-snug">
              You can revoke or modify these permissions at any time from your
              account dashboard.
            </p>
          </div>
        </div>

        {/* ══════════════════════════════════════
            CARD 1 — Genetic Data (Required)
        ══════════════════════════════════════ */}
        <ConsentCard
          iconBg="bg-[#EEF3FE]"
          icon={<span className="text-[15px]">🧬</span>}
          title="Processing of Genetic Data for Ancestry Analysis"
          badge="required"
          checked={map.genetic}
          locked
          onToggle={() => toggle("genetic")}>
          <p className="text-[12.5px] text-[#555] leading-relaxed">
            This permission allows us to analyze your DNA data to identify
            ancestral origins, migration patterns, and ethnic composition. This
            is the core service of Heritage Archive and is essential for
            creating your personalized family narrative.
          </p>
          <ul className="flex flex-col gap-[7px]">
            {[
              "Analysis of genetic markers for ethnicity estimation",
              "Identification of ancestral migration routes and timelines",
              "Creation of personalized heritage narrative and biography",
              "Secure storage with AES-256 encryption",
            ].map((f) => (
              <Feature key={f} text={f} />
            ))}
          </ul>
          <WarnBox
            kind="error"
            text="This consent is mandatory and cannot be disabled. Without it, we cannot provide our core ancestry analysis service."
          />
        </ConsentCard>

        {/* ══════════════════════════════════════
            CARD 2 — Photos (Biometric)
        ══════════════════════════════════════ */}
        <ConsentCard
          iconBg="bg-[#FFF3E8]"
          icon={<span className="text-[15px]">📷</span>}
          title="Processing of Photos for Relative Matching"
          badge="biometric"
          checked={map.photos}
          onToggle={() => toggle("photos")}>
          <p className="text-[12.5px] text-[#555] leading-relaxed">
            This permission allows us to analyze your DNA data to identify
            ancestral origins, migration patterns, and ethnic composition. This
            is the core service of Heritage Archive and is essential for
            creating your personalized family narrative.
          </p>
          <ul className="flex flex-col gap-[7px]">
            {[
              "Analysis of genetic markers for ethnicity estimation",
              "Identification of ancestral migration routes and timelines",
              "Creation of personalized heritage narrative and biography",
              "Secure storage with AES-256 encryption",
            ].map((f) => (
              <Feature key={f} text={f} />
            ))}
          </ul>
          <WarnBox
            kind="info"
            text="Regional Notice: If you reside in Texas or Illinois, this consent is required by state biometric privacy laws (BIPA). You have the right to know how long this data is retained (max 3 years after account closure) and can request deletion at any time."
            extra={
              <a
                href="#"
                className="inline-flex items-center gap-1 text-[11.5px] text-[#2563EB] hover:underline font-medium mt-[4px]">
                Learn more <ArrowRight className="w-[10px] h-[10px]" />
              </a>
            }
          />
        </ConsentCard>

        {/* ══════════════════════════════════════
            CARD 3 — Research (Optional)
        ══════════════════════════════════════ */}
        <ConsentCard
          iconBg="bg-[#F0FDF5]"
          icon={<span className="text-[15px]">📚</span>}
          title="Storage of Data for Future Research"
          badge="optional"
          checked={map.research}
          onToggle={() => toggle("research")}>
          <p className="text-[12.5px] text-[#555] leading-relaxed">
            Allow your anonymized genetic data to be used in aggregated
            genealogical and historical research studies. This helps advance the
            field of ancestry science and may contribute to discoveries about
            human migration patterns.
          </p>
          <ul className="flex flex-col gap-[7px]">
            {[
              "Data is completely anonymized before inclusion in research datasets",
              "No personally identifiable information is ever shared",
              "Contributes to academic studies on human ancestry and migration",
              "May help improve ancestry algorithms for all users",
            ].map((f) => (
              <Feature key={f} text={f} />
            ))}
          </ul>
          <WarnBox
            kind="success"
            text="Community Benefit: By participating in research, you're helping future generations better understand their heritage. All research partnerships are vetted and must meet strict ethical standards."
          />
        </ConsentCard>

        {/* ══════════════════════════════════════
            CARD 4 — DNA Match Notifications
        ══════════════════════════════════════ */}
        <ConsentCard
          iconBg="bg-[#F3EEFF]"
          icon={<span className="text-[15px]">👥</span>}
          title="DNA Match Notifications & Sharing"
          badge="optional"
          checked={map.dnamatch}
          onToggle={() => toggle("dnamatch")}>
          <p className="text-[12.5px] text-[#555] leading-relaxed">
            Receive notifications when potential relatives are identified in our
            database and allow them to view limited profile information (name,
            ancestral regions) to facilitate connections.
          </p>
          <ul className="flex flex-col gap-[7px]">
            {[
              "Email alerts when DNA matches are found (configurable frequency)",
              "Share basic profile info with confirmed matches only",
              "Ability to message potential relatives through secure platform",
              "Full control to block or hide your profile from specific users",
            ].map((f) => (
              <Feature key={f} text={f} />
            ))}
          </ul>
        </ConsentCard>

        {/* ══════════════════════════════════════
            CARD 5 — Marketing
        ══════════════════════════════════════ */}
        <ConsentCard
          iconBg="bg-[#FDF2F8]"
          icon={<span className="text-[15px]">📣</span>}
          title="Marketing Communications & Updates"
          badge="optional"
          checked={map.marketing}
          onToggle={() => toggle("marketing")}>
          <p className="text-[12.5px] text-[#555] leading-relaxed">
            Stay informed about new features, special offers, genealogy tips,
            and community events. We&apos;ll send you curated updates designed
            to enhance your heritage discovery experience.
          </p>
          <ul className="flex flex-col gap-[7px]">
            {[
              "Monthly newsletter with genealogy tips and success stories",
              "Exclusive early access to new features and tools",
              "Personalized recommendations based on your ancestry regions",
              "Unsubscribe anytime with one click",
            ].map((f) => (
              <Feature key={f} text={f} />
            ))}
          </ul>
        </ConsentCard>

        {/* ══════════════════════════════════════
            CARD 6 — Third-Party Integrations
        ══════════════════════════════════════ */}
        <ConsentCard
          iconBg="bg-[#ECFEFF]"
          icon={<span className="text-[15px]">🔗</span>}
          title="Third-Party Service Integrations"
          badge="optional"
          checked={map.thirdparty}
          onToggle={() => toggle("thirdparty")}>
          <p className="text-[12.5px] text-[#555] leading-relaxed">
            Enable integrations with partner services like travel booking
            platforms, genealogy databases, and historical record archives to
            enhance your heritage journey experience.
          </p>
          <ul className="flex flex-col gap-[7px]">
            {[
              "Direct booking for heritage travel to ancestral locations",
              "Access to expanded historical records from partner archives",
              "Export data to other genealogy platforms (Ancestry, MyHeritage)",
              "All partners are vetted for data security and privacy compliance",
            ].map((f) => (
              <Feature key={f} text={f} />
            ))}
          </ul>
          <WarnBox
            kind="success"
            text="Partner Guarantee: We only work with trusted partners who meet our strict privacy standards. You can review and revoke individual integrations at any time."
          />
        </ConsentCard>

        {/* ══════════════════════════════════════
            CARD 7 — GDPR Rights
        ══════════════════════════════════════ */}
        <ConsentCard
          iconBg="bg-[#FEF9EC]"
          icon={<span className="text-[15px]">🌍</span>}
          title="Your Data Rights Under GDPR & Privacy Laws"
          badge="optional"
          checked={map.gdpr}
          onToggle={() => toggle("gdpr")}>
          <p className="text-[12.5px] text-[#555] leading-relaxed">
            Enable integrations with partner services like travel booking
            platforms, genealogy databases, and historical record archives to
            enhance your heritage journey experience.
          </p>

          {/* 2-col rights grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[8px]">
            {DATA_RIGHTS.map((r, i) => (
              <div
                key={i}
                className="flex items-start gap-[8px] bg-[#FAFFF8] border border-[#D1FAE5] rounded-[8px] px-[10px] py-[9px]">
                <span className="text-[14px] leading-none mt-[1px] flex-shrink-0">
                  {r.emoji}
                </span>
                <div>
                  <p className="text-[12px] font-semibold text-[#1B2B4B] leading-snug">
                    {r.title}
                  </p>
                  <p className="text-[11px] text-[#666] leading-snug mt-[1px]">
                    {r.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[11.5px] text-[#666] leading-relaxed">
            These rights are guaranteed under GDPR (EU), CCPA (California), and
            other applicable privacy regulations. To exercise any of these
            rights, visit your Account & Consent dashboard or contact our Data
            Protection Officer at{" "}
            <a
              href="mailto:privacy@heritagearchive.com"
              className="text-[#2563EB] hover:underline">
              privacy@heritagearchive.com
            </a>
          </p>
        </ConsentCard>

        {/* ══════════════════════════════════════
            CARD 8 — Data Retention
        ══════════════════════════════════════ */}
        <ConsentCard
          iconBg="bg-[#F5F2EC]"
          icon={<span className="text-[15px]">🗄️</span>}
          title="Data Retention & Deletion Policy"
          badge="optional"
          checked={map.retention}
          onToggle={() => toggle("retention")}>
          <ul className="flex flex-col gap-[12px]">
            {RETENTION.map((item, i) => (
              <li key={i} className="flex items-start gap-[10px]">
                <span className="text-[16px] leading-none mt-[1px] flex-shrink-0">
                  {item.emoji}
                </span>
                <div>
                  <p className="text-[12.5px] font-semibold text-[#1B2B4B] leading-snug">
                    {item.title}
                  </p>
                  <p className="text-[12px] text-[#666] leading-relaxed mt-[2px]">
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </ConsentCard>

        {/* ══════════════════════════════════════
            CONSENT SUMMARY
        ══════════════════════════════════════ */}
        <div className="bg-white border border-[#E3DDD6] rounded-[12px] px-[18px] py-[16px] flex flex-col gap-[8px]">
          <p className="text-[14px] font-bold text-[#1B2B4B]">
            Consent Summary
          </p>
          <div className="flex items-center justify-between py-[8px] border-b border-[#F0EDE8]">
            <span className="text-[13px] text-[#555]">Required Consents</span>
            <span className="text-[13px] font-semibold text-[#1B2B4B]">
              1 of 1 accepted
            </span>
          </div>
          <div className="flex items-center justify-between py-[8px]">
            <span className="text-[13px] text-[#555]">Optional Consents</span>
            <span className="text-[13px] font-semibold text-[#1B2B4B]">
              {optionalSelected} of {optionalIds.length} selected
            </span>
          </div>
          <p className="text-[11.5px] text-[#666] leading-relaxed mt-[4px]">
            You can revoke these permissions at any time from your dashboard.
          </p>
        </div>

        {/* ── FOOTER NOTE ── */}
        <div className="text-center">
          <p className="text-[12px] text-[#888] leading-relaxed">
            By continuing, you acknowledge that you&apos;ve read and understood
            our{" "}
            <a href="#" className="text-[#2563EB] hover:underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="text-[#2563EB] hover:underline">
              Terms of Service
            </a>
            .
          </p>
        </div>

        {/* ── NAVIGATION BUTTONS ── */}
        <div className="flex items-center justify-between gap-3 pt-4 pb-2">
          <button
            type="button"
            className="h-[44px] px-[20px] rounded-[10px] border border-[#D0CBC2] bg-white text-[13.5px] font-medium text-[#333] hover:bg-[#F9F7F4] transition-colors">
            Cancel
          </button>
          <button
            type="button"
            className="h-[44px] px-[24px] rounded-[10px] bg-[#B8912A] hover:bg-[#A37F24] text-white text-[13.5px] font-semibold flex items-center gap-2 transition-colors shadow-sm">
            I Agree & Continue
            <ArrowRight className="w-[14px] h-[14px]" strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  );
}
