import "../styles/landing_page/components.css";

export default function Card() {
  return (
    <div className="card-bg flex justify-center items-center my-6 rounded-3xl">
      <div className="w-full h-full flex items-center">
        <div className="w-2/4 text-white-100 bg-[#010101] z-50 h-full flex justify-center items-center flex-col">
          <h1 className="md:text-[32px] text-[24px]">
          We are partnered with one of the best hardware wallets
          </h1>
          <p>Trezor created the first hardware wallet in 2012 and has been a market leader ever since.</p>
        </div>
      </div>
    </div>
  );
}
