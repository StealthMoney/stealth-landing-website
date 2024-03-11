export default function Subroutes() {
  return (
    <nav
      className="flex px-12 border-b border-[#494949] text-[#494949] w-screen justify-start -py-4 items-end 
    overflow-x-auto"
    >
      <a
        href="/resources"
        className="mx-2 text-nowrap hover:border-b hover:border-orange-100 active:border-orange-100 hover:text-orange-100 py-4"
      >
        All Resources
      </a>
      <a
        href="#"
        className="mx-2 text-nowrap hover:border-b hover:border-orange-100 active:border-orange-100 hover:text-orange-100 py-4"
      >
        Data Cost Averaging (DCA)
      </a>
      <a
        href="#"
        className="mx-2 text-nowrap hover:border-b hover:border-orange-100 active:border-orange-100 hover:text-orange-100 py-4"
      >
        Bitcoin
      </a>
      <a
        href="#"
        className="mx-2 text-nowrap hover:border-b hover:border-orange-100 active:border-orange-100 hover:text-orange-100 py-4"
      >
        Self custody
      </a>
    </nav>
  );
}
