import Features from "../components/client/landing_page/features";
import HeroSection from "../components/server/landing_page/hero-section";
import HowItWorks from "../components/server/landing_page/how-it-works";
import WhyStealthMoney from "../components/server/landing_page/why";
import Faq from "../components/server/landing_page/faq";
import Card from "../components/server/landing_page/card";

export default function Landing_page() {
  return (
    <>
      <HeroSection />
      <Features />
      <HowItWorks />
      <WhyStealthMoney />
      <Faq />
      <Card />
    </>
  );
}
