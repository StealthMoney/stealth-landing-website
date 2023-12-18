import Image from "next/image";

const cards = [
  {
    title: "Complete Registration",
    description:
      "Create an account and complete the registration process by verifying your identity and then add your 2FA authentication as an added layer of security.",
    imgSrc: "/user.svg",
  },
  {
    title: "Add Wallet Address",
    description:
      "Add your hardware wallet address to the platform. You can order a wallet device which you will receive in a few days and set up or add an old Bitcoin wallet if you have one.",
    imgSrc: "/wallet.svg",
  },
  {
    title: "Deposit Funds/Instant Buy",
    description:
      "You can receive your Bitcoin instantly in your self-custody wallet with our ‘Instant Buy’ feature. You can also receive Bitcoin as a gift directly to your self-custody wallet.",
    imgSrc: "/bitcoin.svg",
  },
  {
    title: "Create DCA Plan",
    description:
      "You can make recurring purchases of Bitcoin which will be sent directly to your self-custody wallet. This can help you save in Bitcoin or accumulate it.",
    imgSrc: "/bitcoin.svg",
  },
];

const HowItWorks = () => {
  return (
    <div className="text-center my-8">
      <p className="text-center text-[38px] text-white-100 font-medium mb-6">
        How it works?
      </p>
      <p className="text-white-100 text-[18px]">
        Get Started with Stealth Money in Four (4) simple steps:
      </p>
      <p className="text-white-300 leading-10">
        We make it easy to get started on your Bitcoin self-custody journey.
      </p>
      <div className="flex flex-wrap justify-center mt-8">
        {cards.map((card) => (
          <div key={card.title} className="mx-4">
            <Card {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;

const Card = ({
  title,
  description,
  imgSrc,
}: {
  title: string;
  description: string;
  imgSrc: string;
}) => {
  return (
    <div className="flex flex-col items-start justify-start border border-[#372106] rounded-xl p-8 gap-y-6 h-[348px] my-6">
      <div className="flex items-center">
        <Image src={imgSrc} alt={title} width={100} height={100} />
      </div>
      <div className="flex flex-col gap-y-4 text-start">
        <p className="text-white-100 text-[18px] font-medium">{title}</p>
        <p className="text-white-300 text-[15px] max-w-[330px]">{description}</p>
      </div>
    </div>
  );
};
