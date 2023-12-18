const Footer = () => {
  return (
    <section className="flex flex-col justify-center items-center mt-10 w-full">
      <fieldset className="w-[600px]">
        <p className="text-center font-semibold uppercase mb-8">Join Our Waitlist</p>

        <form className="flex flex-col gap-y-8">
          <div className="flex justify-between gap-4">
            <div className="flex flex-col w-full">
              <label className="text-white-300 mb-2">First name</label>
              <input
                className="w-full p-4 border border-black-600 rounded-md bg-transparent"
                type="text"
                placeholder="Enter your firstname"
                id="firstname"
                required
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="lastname" className="text-white-300 mb-2">
                Last name
              </label>
              <input
                className="w-full p-4 border border-black-600 rounded-md bg-transparent"
                type="text"
                placeholder="Enter your lastname"
                id="lastname"
                required
              />
            </div>
          </div>
          <div className="flex items-end justify-end gap-x-4">
            <div className="flex flex-col items-start w-full">
              <label className="text-white-300 mb-2">Email</label>
              <input
                className="w-full p-4 border border-black-600 rounded-md bg-transparent"
                type="text"
                placeholder="Enter your email"
                id="email"
                required
              />
            </div>
            <button className="bg-orange-100 w-1/3 text-white rounded-md h-[58px] uppercase hover:bg-orange-500">
              Join
            </button>
          </div>
        </form>
      </fieldset>
    </section>
  );
};

export default Footer;
