import AccordionDemo from "../../client/landing_page/AccordionRFC/accordion";

export default function Faq() {
  return (
    <div className="text-white-100 my-8 flex justify-center flex-col">
      <h1 className="text-center font-bold text-[38px]">
      FAQs
      </h1>
      <p className="text-center text-[18px]">
        Questions you might ask about our products and services. Can’t find the
        answer you are looking for?{" "}
        <span className="text-orange-300">
          <a href="mailto:info@stealth.money">Contact Us.</a>
        </span>
      </p>

      <div className="max-w-[900px]">
        <AccordionDemo />
      </div>
    </div>
  );
}
