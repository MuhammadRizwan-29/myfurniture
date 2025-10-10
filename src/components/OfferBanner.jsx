export default function OfferBanner() {
  return (
    <section>
      <div className="px-2 sm:px-0 sm:w-10/12 mx-auto">
        <div className="w-full h-full flex justify-center items-center gap-1 sm:gap-3">
          <div className="flex-1 relative">
            <div>
              <img
                src="./img/Hero_banner/01.jpg"
                alt="banner"
                className="w-full h-full"
              />
            </div>
            <div className="absolute left-3 sm:left-10 bottom-4 text-lime-300 sm:text-black">
              <h1 className="text-sm sm:text-xl font-semibold">
                Exclusive Offers
              </h1>
              <h1 className="text-xl sm:text-2xl font-semibold">
                Save Big on Stylish Chairs
              </h1>
            </div>
          </div>
          <div className="flex-1 relative">
            <div>
              <img
                src="./img/Hero_banner/04.jpg"
                alt="banner"
                className="w-full h-full"
              />
            </div>
            <div className="absolute left-3 sm:left-10 top-4">
              <h1 className="text-sm sm:text-xl font-semibold">
                Limited Time Offer
              </h1>
              <h1 className="text-xl sm:text-2xl font-semibold">
                Get Cozy with Discounted Sofa!
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
