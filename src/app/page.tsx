import Features from "./components/features";
import Footer from "./components/footer";
import HeroSection from "./components/hero-section";
import HowItWorks from "./components/how-it-works";
import WhyStealthMoney from "./components/why";

export default function Home() {
  return (
    <main className="relative flex min-h-screen max-w-[1440px] m-auto flex-col items-center justify-between p-24 pb-0">
      <HeroSection />
      <Features />
      <HowItWorks />
      <WhyStealthMoney />
      <footer className="absolute bottom-0 translate-y-[110%] pb-20 w-full bg-[#111111]">
        <Footer />
      </footer>
    </main>
  );
}
