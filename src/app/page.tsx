import Features from "./components/server/features";
import Footer from "./components/server/footer";
import HeroSection from "./components/server/hero-section";
import HowItWorks from "./components/server/how-it-works";
import WhyStealthMoney from "./components/server/why";

export default function Home() {
  return (
    <main className="relative flex min-h-screen max-w-[1440px] m-auto flex-col items-center justify-between px-4 md:p-24 pb-0">
      <HeroSection />
      <Features />
      <HowItWorks />
      <WhyStealthMoney />
      <footer className="absolute bottom-0 translate-y-[110%] px-4 md:px-0 pb-20 w-full bg-[#111111]" id="waitlist">
        <Footer />
      </footer>
    </main>
  );
}
