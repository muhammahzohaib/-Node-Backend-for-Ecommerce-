import React from "react";
import { Link } from "react-router-dom";
import { necklaceItems } from "../../../constant";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const MustHave = () => {
  return (
    <div data-aos="fade-up" className="py-[4rem]">
      <h2 className="uppercase text-xl text-center tracking-widest">
        soulsun MUST HAVE
      </h2>
      <div className="mt-[2rem]">
        <Swiper
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            550: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            930: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1120: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {necklaceItems.map(
            ({ id, img, price, img2, title, isBestSeller }) => (
              <SwiperSlide className="p-3 border">
                <Link
                  to={`/product-details/${id}`}
                  key={id}
                  className="relative aspect-[3/4] overflow-hidden h-fit flex flex-col transition-all duration-200 gap-2 items-center pb-[2rem] group"
                >
                  {isBestSeller && (
                    <small className="absolute z-10 left-2 top-2 bg-primary text-white py-1 px-2 rounded-full">
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
                  <p className="uppercase desc mt-3 text-[.9rem]">{title}</p>
                  <p className="text-sm text-black/60 font-light">₹{price}</p>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
      <div className="flex justify-center wrapper mt-5">
        <Link to="/shop/necklace" className="btn primary-btn mx-auto w-fit">
          View More
        </Link>
      </div>
    </div>
  );
};

export default MustHave;
