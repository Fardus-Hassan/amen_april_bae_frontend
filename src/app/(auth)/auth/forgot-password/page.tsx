"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("jonsnow464@gmail.com");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
    if (!isValid) {
      setError("*Wrong email address*");
      return;
    }
    setError("");
    router.push("/auth/verify-otp");
  };

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
        Forget Password
      </h1>
      <p className="mt-2 text-center text-sm text-gray-500">
        Enter email associated to your account
      </p>

      <form
        className="mt-6 space-y-4"
        onSubmit={handleSubmit}
      >
        <div>
          <label className="mb-1 block text-sm font-medium text-[#4a5568]">
            Enter email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError("");
            }}
            className="w-full rounded-lg border border-gray-300 bg-[#f7fafc] px-3 py-2.5 text-[#2d3748] placeholder:text-gray-400 focus:border-[#1a2b4c] focus:outline-none focus:ring-1 focus:ring-[#1a2b4c]"
            placeholder="jonsnow464@gmail.com"
          />
          {error && (
            <p className="mt-1 text-sm text-red-600">{error}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-[#1a2b4c] py-3 font-semibold text-white hover:opacity-90 transition-opacity"
        >
          Send OTP
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-[#4a5568]">
        Remember your password?{" "}
        <Link
          href="/auth/login"
          className="font-medium text-[#085aff] underline hover:no-underline"
        >
          Log In
        </Link>
      </p>
    </div>
  );
}
