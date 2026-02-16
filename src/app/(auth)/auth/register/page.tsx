import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="w-full max-w-md rounded-lg border border-foreground/20 p-6 shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Auth — Register</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            className="w-full px-3 py-2 rounded border border-foreground/30 bg-transparent"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 rounded border border-foreground/30 bg-transparent"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 rounded border border-foreground/30 bg-transparent"
            placeholder="••••••••"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 rounded bg-foreground text-background font-medium hover:opacity-90"
        >
          Register
        </button>
      </form>
      <p className="mt-4 text-sm text-center">
        Already have an account?{" "}
        <Link href="/auth/login" className="underline hover:no-underline">
          Login
        </Link>
      </p>
      <Link href="/" className="block mt-2 text-sm text-center text-foreground/70 hover:underline">
        ← Back to Landing
      </Link>
    </div>
  );
}
