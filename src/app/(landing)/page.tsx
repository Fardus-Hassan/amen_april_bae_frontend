import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-4">Landing</h1>
      <p className="text-foreground/80 mb-8">Welcome to Ai DNA Time Machine</p>
      <nav className="flex gap-4">
        <Link
          href="/auth/login"
          className="px-4 py-2 rounded bg-foreground text-background hover:opacity-90"
        >
          Login
        </Link>
        <Link
          href="/auth/register"
          className="px-4 py-2 rounded border border-foreground hover:bg-foreground/10"
        >
          Register
        </Link>
        <Link
          href="/admin-dashboard"
          className="px-4 py-2 rounded border border-foreground hover:bg-foreground/10"
        >
          Admin
        </Link>
        <Link
          href="/user-dashboard"
          className="px-4 py-2 rounded border border-foreground hover:bg-foreground/10"
        >
          User Dashboard
        </Link>
      </nav>
    </div>
  );
}
