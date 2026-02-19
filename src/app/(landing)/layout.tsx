import { Navbar } from "@/components/landing/Navbar";
import "@/styles/globals.css";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-landing-bg">
      <Navbar />
      {children}
    </div>
  );
}
