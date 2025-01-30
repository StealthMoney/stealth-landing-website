import { testimonials } from "../../dummy-data/testimonial";

type TestimonialType = {
  text: string;
  name: string;
  occupation: string;
};

function TestimonialCard({ text, name, occupation }: TestimonialType) {
  const firstLetter = name.charAt(0);

  return (
    <div className="lg:w-2/4 w-full text-white-100 flex flex-col items-center justify-between px-4 py-4 lg:mb-0 mb-6 border border-[#372106] rounded-md">
      <small className="text-[16px] font-Nunito">{text}</small>

      <div className="flex w-full my-4 gap-x-3 items-center">
        <div className="w-[48px] h-[48px] rounded-full bg-[#F7931A] flex justify-center items-center">
          <h1 className="text-[28px] font-bold text-center font-Satoshi">
            {firstLetter}
          </h1>
        </div>

        <div>
          <h1 className="text-[20px] font-bold font-Satoshi">{name}</h1>
          <small className="text-[14px] text-[#AAAAAA] font-Nunito">
            {occupation}
          </small>
        </div>
      </div>
    </div>
  );
}

export default function Testimonial() {
  return (
    <section className="bg-[#010101] w-screen lg:h-[560px] flex flex-col p-4 justify-center items-center">
      <div className="w-auto flex flex-col justify-center items-center max-w-[1440px]">
        <h1 className="text-[38px] text-center font-bold text-white-100 font-Satoshi">
          Don&apos;t just take our words for it
        </h1>
        <div className="flex lg:flex-row flex-col my-8 py-8 px-4 md:w-3/4 w-full lg:gap-x-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              text={testimonial.text}
              name={testimonial.name}
              occupation={testimonial.occupation}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
