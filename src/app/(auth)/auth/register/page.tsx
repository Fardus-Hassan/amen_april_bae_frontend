"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AuthCard } from "@/components/auth/AuthCard";
import { EyeIcon, EyeOffIcon, LockIcon } from "@/components/icons";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <AuthCard>
      <div className="mb-6 flex justify-center">
        <Image
          src="/images/logo.png"
          alt="Ai DNA Time Machine"
          width={140}
          height={48}
          className="h-10 w-auto object-contain"
        />
      </div>
      <h1 className="font-merriweather text-2xl font-bold text-secondary sm:text-3xl">
        Create Your Account
      </h1>

      <form className="mt-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-text-primary">
              First Name
            </label>
            <input
              type="text"
              defaultValue="Jon"
              className="w-full rounded-xl border border-gray-200 bg-gray-100 px-4 py-2.5 text-text-primary placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="First Name"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-text-primary">
              Last Name
            </label>
            <input
              type="text"
              defaultValue="Snow"
              className="w-full rounded-xl border border-gray-200 bg-gray-100 px-4 py-2.5 text-text-primary placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-text-primary">
            Email address
          </label>
          <input
            type="email"
            defaultValue="jonsnow464@gmail.com"
            className="w-full rounded-xl border border-gray-200 bg-gray-100 px-4 py-2.5 text-text-primary placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Email address"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-text-primary">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              defaultValue="1423566"
              className="w-full rounded-xl border border-gray-200 bg-gray-100 py-2.5 pl-4 pr-11 text-text-primary placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Password"
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-text-primary"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
            </button>
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-text-primary">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showConfirm ? "text" : "password"}
              className="w-full rounded-xl border border-gray-200 bg-gray-100 py-2.5 pl-4 pr-11 text-text-primary placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="********"
            />
            <button
              type="button"
              onClick={() => setShowConfirm((s) => !s)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-text-primary"
              aria-label={showConfirm ? "Hide password" : "Show password"}
            >
              {showConfirm ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="w-full rounded-xl bg-secondary py-3 font-semibold text-white hover:opacity-90"
        >
          Sign Up
        </button>
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-secondary py-3 font-medium text-secondary hover:bg-secondary/5"
        >
          <LockIcon size={18} />
          Password less sign up
        </button>
      </form>

      <p className="mt-5 text-center text-sm text-text-primary">
        If you already have an account please?{" "}
        <Link href="/auth/login" className="font-medium text-secondary underline hover:no-underline">
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
        className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white py-3 font-medium text-text-primary hover:bg-gray-50"
      >
        <span className="text-lg font-bold text-[#4285F4]">G</span>
        <span className="text-[#ea4335]">o</span>
        <span className="text-[#fbbc05]">o</span>
        <span className="text-[#4285F4]">g</span>
        <span className="text-[#34a853]">l</span>
        <span className="text-[#ea4335]">e</span>
        {" "}
        Sign in with Google
      </button>
    </AuthCard>
  );
}
