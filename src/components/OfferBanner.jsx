export default function OfferBanner() {
  return (
    <section>
      <div className="w-10/12 mx-auto">
        <div className="w-full h-full flex justify-center items-center gap-3">
          <div className="flex-1 relative">
            <div>
              <img
                src="./img/Hero_banner/01.jpg"
                alt="banner"
                className="w-full h-full"
              />
            </div>
            <div className="absolute left-10 bottom-4">
              <h1 className="text-xl font-semibold">Exclusive Offers</h1>
              <h1 className="text-2xl font-semibold">
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
            <div className="absolute left-10 top-4">
              <h1 className="text-xl font-semibold">Limited Time Offer</h1>
              <h1 className="text-2xl font-semibold">
                Get Cozy with Discounted Sofa!
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
