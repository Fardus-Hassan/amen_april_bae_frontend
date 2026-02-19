import Link from "next/link";
import Image from "next/image";
import { AuthCard } from "@/components/auth/AuthCard";

export default function LoginPage() {
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
        Log in to your account
      </h1>

      <form className="mt-6 space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-text-primary">
            Email address
          </label>
          <input
            type="email"
            className="w-full rounded-xl border border-gray-200 bg-gray-100 px-4 py-2.5 text-text-primary placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-text-primary">
            Password
          </label>
          <input
            type="password"
            className="w-full rounded-xl border border-gray-200 bg-gray-100 px-4 py-2.5 text-text-primary placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="••••••••"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-xl bg-secondary py-3 font-semibold text-white hover:opacity-90"
        >
          Log In
        </button>
      </form>

      <p className="mt-5 text-center text-sm text-text-primary">
        Don&apos;t have an account?{" "}
        <Link href="/auth/register" className="font-medium text-secondary underline hover:no-underline">
          Create Your Account
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
