import "../styles/landing_page/components.css";

export default function Card() {
  return (
    <div className="card-bg flex justify-center items-center my-6 rounded-3xl">
      <div className="w-full h-full py-12 px-6 flex items-center">
        <div className="w-2/4 text-white-100">
          <h1 className="md:text-[32px] text-[24px]">
            Fully Control Your Bitcoin Wealth
          </h1>
          <p>It is not your Bitcoin until you self-custody it.</p>
        </div>
      </div>
    </div>
  );
}
