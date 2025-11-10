import Image from "next/image";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="p-6 md:p-8 bg-card rounded-lg bg-[#101010]">
      <div className="bg-[#EFB74B] mb-12 w-10 h-10 p-2 bg-accent rounded-md flex items-center justify-center text-lg">
        <Image src={icon} width={100} height={100} alt="item" />
      </div>
      <h3 className="text-[20px] text-[#ffffff] mb-3 font-Satoshi">
        {title}
      </h3>
      <p className="text-[16px] text-[#A2A2A2] leading-relaxed font-Nunito">
        {description}
      </p>
    </div>
  );
}

export default function Vip_page() {
  const features = [
    {
      icon: "/Vector.svg",
      title: "Secure Bitcoin accumulation.",
      description:
        "Build your wealth in the world's most secure digital asset. Through automated strategies, custody options, and risk management protocols, grow your Bitcoin safely without the complexity or risk of managing it alone.",
    },
    {
      icon: "/Vector1.svg",
      title: "Instant Credit Access",
      description:
        "Unlock liquidity without selling your Bitcoin. Use your holdings as collateral to access instant credit lines, enabling flexibility to access instant credit lines, ensuring flexibility to pivot your position easily.",
    },
    {
      icon: "/Vector2.svg",
      title: "Legacy Building",
      description:
        "Preserve your wealth for generations. Plan your estate with secure on-chain assets, ensuring your Bitcoin is passed on safely, securely, and exactly as you intend.",
    },
    {
      icon: "/Vector3.svg",
      title: "Luxury Experiences",
      description:
        "Live a life of refined benefits. From exclusive travel benefits to concierge services and direct access to premium lifestyle experiences with Stealth Wealth.",
    },
  ];

  return (
    <section className="text-white font-[500]">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Image src="/StealthVIP.svg" width={120} height={100} alt="logo" />
          <nav>
            <a
              href="#"
              className="text-sm text-foreground hover:text-accent transition-colors"
            >
              Schedule a call
            </a>
          </nav>
        </div>
      </header>
      <section className="w-full py-12 md:py-20 bg-background">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="lg:text-[40px] text-[32px] font-[600] tracking-tight text-foreground mb-4 font-Satoshi">
            Redefining wealth management with Bitcoin.
          </h1>
          <p className="lg:text-[16px] text-[14px] text-[#A2A2A2] mb-8 max-w-2xl mx-auto font-Nunito">
            Manage your wealth with transparency, autonomy, and global access
            empowering you to stay in control of your Bitcoin through the most
            secure ecosystem.
          </p>
          <button className="bg-[#EFB74B] hover:bg-[#EFB74B]/90 text-accent-foreground px-2 py-4 md:w-auto w-full rounded-md font-semibold">
            Talk to us
          </button>
        </div>
      </section>
      <section className="w-full bg-background">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <Image
            src="/chess.svg"
            alt="Strategic chess pieces"
            className="w-full h-auto rounded-lg shadow-lg"
            width={100}
            height={100}
          />
        </div>
      </section>
      <section className="w-full mt-12 md:mt-28 bg-background">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="lg:text-[40px] text-[32px] text-foreground mb-4 font-Satoshi">
              Bitcoin is generational wealth
            </h2>
            <p className="lg:text-[16px] text-[14px] text-[#A2A2A2] font-Nunito">
              Stealth VIP is your Friedman advantage simplifying your wealth
              management with Bitcoin.
            </p>
          </div>

          <div className="flex justify-center w-full">
            <Image
              src="/b_vault.svg"
              alt="Bitcoin vault with security features"
              className="w-full h-auto rounded-lg shadow-2xl"
              width={100}
              height={100}
            />
          </div>
        </div>
      </section>
      <section className="w-full mt-12 md:mt-28 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="lg:text-[40px] text-[32px] text-foreground mb-4 font-Satoshi">
              Why Stealth VIP?
            </h2>
            <p className="lg:text-[16px] text-[14px] text-[#A2A2A2] font-Nunito">
              Secure your future with a modern approach to digital wealth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="lg:text-[40px] text-[32px] text-foreground mb-6 font-Satoshi">
            Your Bitcoin is digital gold, we provide institutional-grade
            management.
          </h2>
          <p className="lg:text-[16px] text-[14px] text-[#A2A2A2] mb-8 font-Nunito">
            Stealth VIP is your full-service bitcoin wealth platform with
            dedicated experts. We build strong and trusted client relationships
            to deliver generational Bitcoin wealth management.
          </p>
          <button className="bg-[#EFB74B] hover:bg-[#EFB74B]/90 text-accent-foreground px-2 py-4 md:w-auto w-full rounded-md font-semibold">
            Talk to us
          </button>
        </div>
      </section>
      <footer className="bg-[#1A1A1A] mt-12 font-Nunito">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col items-center text-center mb-12">
            <Image src="/StealthVIP.svg" width={200} height={200} alt="logo" />
            {/* <div className="text-3xl font-bold text-foreground mb-4">LOGO</div> */}
            <p className="text-sm text-[#A2A2A2] max-w-2xl mb-8 font-Nunito">
              Your all-in-one Bitcoin wealth partner.
            </p>

            {/* Social icons - circular backgrounds */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-accent transition-colors"
              >
                𝕏
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-accent transition-colors"
              >
                in
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-accent transition-colors"
              >
                in
              </a>
            </div>
          </div>

          <div className="border-t border-border my-8"></div>

          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>2025 © Stealth VIP by Stealth Money</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                AML Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
