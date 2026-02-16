import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      <aside className="w-56 border-r border-foreground/20 p-4">
        <h2 className="font-bold text-lg mb-4">Admin Dashboard</h2>
        <nav className="space-y-2">
          <Link href="/admin-dashboard" className="block py-2 hover:underline">
            Overview
          </Link>
          <Link href="/" className="block py-2 text-foreground/70 hover:underline">
            ← Landing
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
