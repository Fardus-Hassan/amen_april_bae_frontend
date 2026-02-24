"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { EyeIcon, EyeOffIcon, LockIcon } from "@/components/icons";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="w-full sm:p-10 sm:shadow-[0_4px_24px_rgba(0,0,0,0.08)] sm:rounded-2xl">
      {/* Logo + DNA Time Machine - centered */}
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
        Create Your Account
      </h1>

      <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-[#4a5568]">
              First Name
            </label>
            <input
              type="text"
              className="w-full rounded-lg border border-gray-300 bg-[#f7fafc] px-3 py-2.5 text-[#2d3748] placeholder:text-gray-400 focus:border-[#1a2b4c] focus:outline-none focus:ring-1 focus:ring-[#1a2b4c]"
              placeholder="Jon"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-[#4a5568]">
              Last Name
            </label>
            <input
              type="text"
              className="w-full rounded-lg border border-gray-300 bg-[#f7fafc] px-3 py-2.5 text-[#2d3748] placeholder:text-gray-400 focus:border-[#1a2b4c] focus:outline-none focus:ring-1 focus:ring-[#1a2b4c]"
              placeholder="Snow"
            />
          </div>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-[#4a5568]">
            Email address
          </label>
          <input
            type="email"
            className="w-full rounded-lg border border-gray-300 bg-[#f7fafc] px-3 py-2.5 text-[#2d3748] placeholder:text-gray-400 focus:border-[#1a2b4c] focus:outline-none focus:ring-1 focus:ring-[#1a2b4c]"
            placeholder="jonsnow464@gmail.com"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-[#4a5568]">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full rounded-lg border border-gray-300 bg-[#f7fafc] py-2.5 pl-3 pr-10 text-[#2d3748] placeholder:text-gray-400 focus:border-[#1a2b4c] focus:outline-none focus:ring-1 focus:ring-[#1a2b4c]"
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#2d3748]"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
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

    <div className="flex sm:flex-row flex-col gap-2">
    <button
          type="submit"
          className="w-full rounded-lg bg-[#1a2b4c] py-3 font-semibold text-white hover:opacity-90 transition-opacity"
        >
          Sign Up
        </button>

        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white py-3 font-medium text-[#4a5568] hover:bg-gray-50 transition-colors"
        >
          <LockIcon size={18} className="shrink-0" />
          Password less sign up
        </button>
    </div>
      </form>

      <p className="mt-5 text-center  text-[#4a5568]">
        If you already have an account please?{" "}
        <Link
          href="/auth/login"
          className="font-medium text-[#085aff] underline hover:no-underline"
        >
          Log in!
        </Link>
      </p>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-3 text-sm text-gray-500">or</span>
        </div>
      </div>

      <button
        type="button"
        className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white py-3 font-semibold text-[#4a5568] hover:bg-gray-50 transition-colors"
      >
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.987" fill-rule="evenodd" clip-rule="evenodd" d="M8.93935 0.091125C10.0269 -0.030375 10.6704 -0.030375 11.8389 0.091125C13.9073 0.397268 15.8247 1.35335 17.3139 2.82113C16.3075 3.77233 15.3144 4.73742 14.3349 5.71612C12.4589 4.12612 10.3649 3.75912 8.05285 4.61513C6.35685 5.39512 5.17585 6.65913 4.50985 8.40713C3.42151 7.59687 2.34735 6.76774 1.28785 5.92013C1.21422 5.88137 1.13012 5.86718 1.04785 5.87962C2.73085 2.63462 5.36085 0.704625 8.93785 0.0896249" fill="#FF4D4F"/>
<path opacity="0.997" fill-rule="evenodd" clip-rule="evenodd" d="M1.04438 5.87978C1.12938 5.86678 1.20988 5.88028 1.28588 5.92028C2.34538 6.7679 3.41954 7.59703 4.50788 8.40728C4.33662 9.08837 4.22866 9.78383 4.18538 10.4848C4.22238 11.1628 4.32988 11.8283 4.50788 12.4813L1.12538 15.1738C-0.347622 12.0958 -0.374622 8.99778 1.04438 5.87978Z" fill="#FAAD14"/>
<path opacity="0.999" fill-rule="evenodd" clip-rule="evenodd" d="M17.1531 18.4351C16.0999 17.5063 14.9973 16.635 13.8501 15.8251C15.0001 15.0131 15.6981 13.8991 15.9441 12.4831H10.3086V8.5696C13.5586 8.5426 16.8071 8.5701 20.0541 8.6521C20.6701 11.9971 19.9586 15.0131 17.9196 17.7001C17.6771 17.9578 17.4203 18.2031 17.1531 18.4351Z" fill="#2196F3"/>
<path opacity="0.993" fill-rule="evenodd" clip-rule="evenodd" d="M4.5075 12.4824C5.7375 15.5394 7.9925 16.9664 11.2725 16.7634C12.1932 16.6568 13.076 16.3352 13.8495 15.8244C14.9975 16.6364 16.0985 17.5064 17.1525 18.4344C15.4825 19.9351 13.3532 20.8255 11.112 20.9604C10.6028 21.0011 10.0912 21.0011 9.582 20.9604C5.764 20.5104 2.945 18.5814 1.125 15.1734L4.5075 12.4824Z" fill="#34A853"/>
</svg>

        Sign in with Google
      </button>
    </div>
  );
}
