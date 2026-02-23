import Footer from "@/components/landing/Footer";
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
      <main className="pt-[50px] lg:pt-[81px]">{children}</main>
      <Footer />
    </div>
  );
}
