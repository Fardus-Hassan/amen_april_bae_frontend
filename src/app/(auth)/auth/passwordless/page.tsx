"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function PasswordlessSignInPage() {
  const [email, setEmail] = useState("");

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
        Password less Sign In
      </h1>
      <p className="mt-2 text-left text-sm text-gray-500">
        Prefer not to remember passwords? We&apos;ll send you a secure magic link to sign in instantly.
      </p>

      <form
        className="mt-6 space-y-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <div>
          <label className="mb-1 block text-sm font-medium text-[#4a5568]">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-[#f7fafc] px-3 py-2.5 text-[#2d3748] placeholder:text-gray-400 focus:border-[#1a2b4c] focus:outline-none focus:ring-1 focus:ring-[#1a2b4c]"
            placeholder="jonsnow464@gmail.com"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-[#1a2b4c] py-3 font-semibold text-white hover:opacity-90 transition-opacity"
        >
          Send Magic Link
        </button>
      </form>

      {/* How it works - info box */}
      <div className="mt-6 rounded-xl border border-gray-200 bg-[#fcf5ec] p-4">
        <div className="flex gap-3">
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e8dfd0] text-xs font-semibold text-[#8b7355]">
            i
          </div>
          <div className="min-w-0">
            <p className="text-sm font-bold text-[#2d3748]">How it works:</p>
            <ol className="mt-2 list-decimal space-y-1 pl-4 text-sm text-[#4a5568]">
              <li>Enter your email address above</li>
              <li>Check your inbox for a secure link from Heritage Archive</li>
              <li>Click the link to sign in instantly (valid for 15 minutes)</li>
              <li>Access your account without entering a password</li>
            </ol>
          </div>
        </div>
      </div>

      {/* <p className="mt-6 text-center text-sm text-[#4a5568]">
        Prefer to use password?{" "}
        <Link
          href="/auth/login"
          className="font-medium text-[#085aff] underline hover:no-underline"
        >
          Log In
        </Link>
      </p> */}
    </div>
  );
}
