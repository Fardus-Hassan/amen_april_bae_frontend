"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

const OTP_LENGTH = 4;
const INITIAL_TIME = 90; // seconds

export default function VerifyOtpPage() {
  const router = useRouter();
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) {
      const digits = value.replace(/\D/g, "").slice(0, OTP_LENGTH).split("");
      const next = [...otp];
      digits.forEach((d, i) => {
        if (index + i < OTP_LENGTH) next[index + i] = d;
      });
      setOtp(next);
      const nextFocus = Math.min(index + digits.length, OTP_LENGTH - 1);
      inputRefs.current[nextFocus]?.focus();
      return;
    }
    const digit = value.replace(/\D/g, "").slice(-1);
    const next = [...otp];
    next[index] = digit;
    setOtp(next);
    if (digit && index < OTP_LENGTH - 1) inputRefs.current[index + 1]?.focus();
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.every((d) => d)) {
      router.push("/auth/reset-password");
    }
  };

  const handleResendOtp = () => {
    if (timeLeft > 0) return;
    setTimeLeft(INITIAL_TIME);
    setOtp(Array(OTP_LENGTH).fill(""));
    inputRefs.current[0]?.focus();
  };

  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;
  const timeStr = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;

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
        Enter <span className="font-extrabold">4-Digit</span> code sent to your gmail
      </h1>
      <p className="mt-2 text-center text-sm text-gray-500">
        Enter the 4-digit verification code sent to you email.
      </p>

      <p className="mt-3 text-center text-sm text-[#4a5568]">
        This code will expired in{" "}
        <span
          className={`font-semibold ${timeLeft <= 30 ? "text-[#F05454]" : "text-[#e67e22]"}`}
        >
          {timeStr}
        </span>
      </p>

      <form onSubmit={handleVerify} className="mt-6 space-y-6">
        <div className="flex justify-center gap-2 sm:gap-3">
          {otp.map((digit, i) => (
            <input
              key={i}
              ref={(el) => {
                inputRefs.current[i] = el;
              }}
              type="text"
              inputMode="numeric"
              maxLength={OTP_LENGTH}
              value={digit}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              className="h-12 w-12 sm:h-14 sm:w-14 rounded-lg border border-gray-300 bg-white text-center text-lg font-semibold text-[#2d3748] focus:border-[#1a2b4c] focus:outline-none focus:ring-2 focus:ring-[#1a2b4c]"
            />
          ))}
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-[#1a2b4c] py-3 font-semibold text-white hover:opacity-90 transition-opacity"
        >
          Verify
        </button>

        <p className="text-center text-sm text-[#4a5568]">
          Didn&apos;t receive code?{" "}
          <button
            type="button"
            onClick={handleResendOtp}
            disabled={timeLeft > 0}
            className="font-medium text-[#085aff] underline hover:no-underline disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Reset OTP
          </button>
        </p>
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
