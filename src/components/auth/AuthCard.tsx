/**
 * White rounded card for auth form content. Use inside AuthLayout (right section).
 */
export function AuthCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-8">
      {children}
    </div>
  );
}
