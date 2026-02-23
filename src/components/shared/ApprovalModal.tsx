"use client";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { cn } from "@/lib/utils";
import { Info } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface AlertDialogAction {
  label: string;
  onClick: () => void;
  variant?: "destructive" | "default" | "cancel";
  className?: string;
}

interface ReusableAlertDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Title text shown in bold */
  title: string;
  /** Optional description shown below the title */
  description?: string;
  /** Primary action button (e.g. Delete / Confirm) */
  primaryAction: AlertDialogAction;
  /** Secondary / cancel action button */
  secondaryAction?: AlertDialogAction;
  /** Icon to show at the top — defaults to the info circle */
  icon?: React.ReactNode;
}

// ─── Variant Styles ───────────────────────────────────────────────────────────

const variantStyles: Record<string, string> = {
  destructive:
    "bg-[#F55353] hover:bg-[#e04444] active:bg-[#cc3333] text-white border-transparent",
  default:
    "bg-[#F55353] hover:bg-[#e04444] active:bg-[#cc3333] text-white border-transparent",
  cancel:
    "bg-white hover:bg-gray-50 active:bg-gray-100 text-[#1E2D3D] border border-[#D1D5DB]",
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function ApprovalAlertDialog({
  open,
  onOpenChange,
  title,
  description,
  primaryAction,
  secondaryAction,
  icon,
}: ReusableAlertDialogProps) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent
        className={cn(
          // Shape & size
          "w-100 max-w-[calc(100vw-32px)] rounded-2xl",
          // Spacing
          "px-8 pt-8 pb-7",
          // Visuals
          "bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)]",
          // Remove default shadcn animation overrides if needed
          "flex flex-col items-center gap-0",
        )}>
        {/* ── Icon ── */}
        <div className="mb-5 flex items-center justify-center w-12 h-12 rounded-full bg-[#FEE2E2]">
          {icon ?? (
            <Info className="text-[#F55353]" size={22} strokeWidth={2.2} />
          )}
        </div>

        {/* ── Header ── */}
        <AlertDialogHeader className="text-center space-y-2 w-full">
          <AlertDialogTitle
            className={cn(
              "text-[#1E2D3D] font-bold leading-snug text-center",
              "text-[20px]",
            )}>
            {title}
          </AlertDialogTitle>

          {description && (
            <p className="text-[14px] text-[#6B7280] text-center leading-relaxed">
              {description}
            </p>
          )}
        </AlertDialogHeader>

        {/* ── Footer / Actions ── */}
        <AlertDialogFooter className="mt-7 w-full flex flex-row gap-3 sm:justify-center">
          {/* Primary action */}
          <button
            onClick={primaryAction.onClick}
            className={cn(
              "flex-1 h-11 rounded-lg text-[15px] font-semibold transition-colors duration-150",
              variantStyles[primaryAction.variant ?? "destructive"],
              primaryAction.className,
            )}>
            {primaryAction.label}
          </button>

          {/* Secondary / cancel action */}
          {secondaryAction && (
            <button
              onClick={secondaryAction.onClick}
              className={cn(
                "flex-1 h-11 rounded-lg text-[15px] font-semibold transition-colors duration-150",
                variantStyles[secondaryAction.variant ?? "cancel"],
                secondaryAction.className,
              )}>
              {secondaryAction.label}
            </button>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
