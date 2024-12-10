import Features from "../components/client/landing_page/features";
import HeroSection from "../components/server/landing_page/hero-section";
import HowItWorks from "../components/server/landing_page/how-it-works";
import WhyStealthMoney from "../components/server/landing_page/why";
import Faq from "../components/server/landing_page/faq";
import Card from "../components/server/landing_page/card";
import Footer from "../components/client/general/footer";
import Wallet from "../components/client/landing_page/wallet";
import Testimonial from "../components/client/landing_page/testimonial";

export default function Landing_page() {
  return (
    <>
      <HeroSection />
      <Features />
      <HowItWorks />
      <WhyStealthMoney />
      <Wallet />
      <Testimonial />
      <Faq />
      <Card />
      <Footer />
    </>
  );
}
