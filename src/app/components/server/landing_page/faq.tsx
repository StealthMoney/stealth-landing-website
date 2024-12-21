import AccordionDemo from "../../client/landing_page/AccordionRFC/accordion";

export default function Faq() {
  return (
    <div className="text-white-100 my-8 flex justify-center flex-col bg-[#080808]" id="faq">
      <h1 className="text-center font-bold text-[38px] font-Satoshi">
        Frequently Asked Questions
      </h1>

      <div className="lg:min-w-[900px] md:min-w-[600px] md:max-w-[600px]  lg:max-w-[900px]">
        <AccordionDemo />
      </div>
    </div>
  );
}
