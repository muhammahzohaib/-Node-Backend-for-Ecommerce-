import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { necklaceItems } from "../../../constant";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ChevronUp } from "lucide-react";

const SoulsunCollection = () => {
  const swiperRef = useRef(null);

  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };
  return (
    <div className="max-w-[90rem] mx-auto px-6 lg:px-8">
      <div
        data-aos="fade-up"
        className="max-w-5xl mx-auto pb-[4rem] flex flex-col-reverse md:grid grid-cols-[60%_auto] gap-10"
      >
        <div className="h-full border relative">
          <h2 className="uppercase mt-[-1rem] bg-white w-fit mx-auto text-lg px-1 text-center tracking-widest">
            SOULSUN COLLECTION
          </h2>
          <div className="mt-[2rem]">
            <Swiper
              spaceBetween={20}
              slidesPerView={2}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
              ref={swiperRef}
            >
              {necklaceItems.map(
                ({ id, img, price, img2, title, isBestSeller }) => (
                  <SwiperSlide className="pb-3">
                    <Link
                      to={`/product-details/${id}`}
                      key={id}
                      className="relative overflow-hidden aspect-[3/4] h-fit flex flex-col transition-all duration-200 gap-2 items-center pb-[2rem] group"
                    >
                      {isBestSeller && (
                        <small className="absolute z-10 left-3 top-1 bg-primary text-white py-1 px-2 rounded-full">
                          Best Seller
                        </small>
                      )}
                      <img
                        src={img}
                        className="group-hover:opacity-100 opacity-100 absolute h-full w-[95%] group-hover:-translate-x-[105%] duration-300 object-cover"
                        alt={title}
                        loading="lazy"
                      />
                      <img
                        src={img2}
                        className="group-hover:opacity-100 opacity-100 absolute h-full w-[95%] translate-x-[105%] group-hover:translate-x-0 duration-300 object-cover"
                        alt={title}
                        loading="lazy"
                      />
                    </Link>
                    <div className="text-center">
                      <p className="uppercase desc mt-3 text-[.9rem]">
                        {title}
                      </p>
                      <p className="text-sm text-black/60 font-light">
                        ₹{price}
                      </p>
                    </div>
                  </SwiperSlide>
                )
              )}
            </Swiper>
            <button
              onClick={handlePrev}
              className="absolute top-1/2 -translate-y-1/2 -left-[1rem] z-10 p-2 rounded-full bg-white shadow-large shadow-black/10 text-black hover:shadow-black/20 hover:scale-110 transition-all duration-300"
            >
              <ChevronUp className="-rotate-90" size={20} strokeWidth={0.8} />
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 -translate-y-1/2 -right-[1rem] z-10 p-2 rounded-full bg-white shadow-large shadow-black/10 text-black hover:shadow-black/20 hover:scale-110 transition-all duration-300"
            >
              <ChevronUp className="rotate-90" size={20} strokeWidth={0.8} />
            </button>
          </div>
        </div>
        <div className="p-5 bg-[#1C1B1B] text-white flex items-center">
          <p>
            Welcome to Soulsun Season! Those born under this intense water sign
            are celebrated for their passion, determination, and magnetic
            presence. Represented by the scorpion, Scorpios are known for their
            depth and transformative power, diving fearlessly into the mysteries
            of life. With a natural ability to uncover truths and a fierce sense
            of loyalty, they possess a unique intensity that captivates those
            around them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SoulsunCollection;
