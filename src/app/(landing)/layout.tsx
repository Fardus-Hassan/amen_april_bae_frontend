import Footer from "@/components/landing/Footer";
import Footer from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import "@/styles/globals.css";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-landing-bg">
      <Navbar />
      <main className="min-h-screen pt-[50px] lg:pt-[81px]">{children}</main>
      <Footer />
    </div>
  );
}
