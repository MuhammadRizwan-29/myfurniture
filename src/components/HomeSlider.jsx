import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HomeSlider() {
  const [slides, setSlides] = useState({ heroSlider: [] });

  useEffect(() => {
    fetch("./img/Hero_Slider/slider.json")
      .then((res) => res.json())
      .then((data) => setSlides(data))
      .catch((err) => console.log("Error: ", err));
  }, []);
  return (
    <section>
      <div className=" sm:w-10/12 mx-auto px-2">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          className="myswiper"
        >
          {slides.heroSlider.map((slide) => {
            return (
              <SwiperSlide key={slide.id} className="max-h-[90vh] relative">
                <img
                  src={slide.image}
                  alt={`Slide ` + slide.id}
                  className="w-full"
                />
                <div className="text_container absolute top-[20%] sm:top-[38%] text-center w-full h-full">
                  <h1 className="font-bold text-xl sm:text-5xl text-slate-800">
                    {slide.title}
                  </h1>
                  <p className="text-sm italic py-1 sm:py-3 text-gray-100">
                    {slide.subtitle}
                  </p>
                  <Link to={slide.link}>
                    <button className="text-xs sm:text-sm sm:font-bold bg-lime-400 hover:bg-lime-600 px-2.5 sm:px-5 py-1.5 sm:py-3 transition ease-in duration-150 cursor-pointer">
                      {slide.buttonText}
                    </button>
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
