export default function NewsLetter() {
  return (
    <section className="my-8">
      <div className="w-10/12 mx-auto px-2 py-8 flex flex-col items-center bg-gray-200">
        <div className="max-w-md w-full">
          <h1 className="py-5 font-bold text-3xl">
            Subscribe for Exclusive Updates
          </h1>
          <div className="w-full">
            <div className="flex w-full">
              <input
                type="email"
                name="newsletteremail"
                className="w-full border border-gray-400 h-10 focus:outline-none focus:border-gray-400 p-2"
              />
              <button className="bg-black hover:bg-slate-900 transition-all duration-300 ease-in cursor-pointer text-white px-5">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
