"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "@/components/icons";

export default function ResetPasswordPage() {
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="w-full sm:p-10 sm:shadow-[0_4px_24px_rgba(0,0,0,0.08)] sm:rounded-2xl">
      <div className="mb-6 flex flex-col items-center text-center">
        <Image
          src="/images/logo.png"
          alt="Ai"
          width={140}
          height={80}
          className="h-20 w-auto object-contain"
        />
      </div>

      <h1 className="text-center text-xl font-bold text-[#2d3748] sm:text-2xl">
        Reset Password
      </h1>
      <p className="mt-2 text-center text-sm text-gray-500">
        Set a strong password
      </p>

      <form
        className="mt-6 space-y-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <div>
          <label className="mb-1 block text-sm font-medium text-[#4a5568]">
            New Password
          </label>
          <div className="relative">
            <input
              type={showNew ? "text" : "password"}
              className="w-full rounded-lg border border-gray-300 bg-[#f7fafc] py-2.5 pl-3 pr-10 text-[#2d3748] placeholder:text-gray-400 focus:border-[#1a2b4c] focus:outline-none focus:ring-1 focus:ring-[#1a2b4c]"
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowNew((s) => !s)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#2d3748]"
              aria-label={showNew ? "Hide password" : "Show password"}
            >
              {showNew ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
            </button>
          </div>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-[#4a5568]">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showConfirm ? "text" : "password"}
              className="w-full rounded-lg border border-gray-300 bg-[#f7fafc] py-2.5 pl-3 pr-10 text-[#2d3748] placeholder:text-gray-400 focus:border-[#1a2b4c] focus:outline-none focus:ring-1 focus:ring-[#1a2b4c]"
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowConfirm((s) => !s)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#2d3748]"
              aria-label={showConfirm ? "Hide password" : "Show password"}
            >
              {showConfirm ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-[#1a2b4c] py-3 font-semibold text-white hover:opacity-90 transition-opacity"
        >
          Reset Password
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-[#4a5568]">
        <Link
          href="/auth/login"
          className="font-medium text-[#085aff] underline hover:no-underline"
        >
          Back to Log In
        </Link>
      </p>
    </div>
  );
}
