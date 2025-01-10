import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Dropdown from "./components/DropDown";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation, Mousewheel } from "swiper/modules";

import { earringsItems, necklaceItems, ringsItems } from "../../constant";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ChevronUp } from "lucide-react";
import toast from "react-hot-toast";

const productData = {
  name: "Sirena Hoops",
  price: "$240",
  dropDown: [
    "Finish:22k Gold Plated",
    "Finish:25k Gold Plated",
    "Finish:27k Gold Plated",
    "Finish:29k Gold Plated",
  ],
  productDescription:
    "Throughout time humans have looked to the stars for inspiration. Handcrafted in bronze, plated in a choice of 22k Gold or Silver Rhodium, the Sirena Hoops are inspired by the creatures of the sea, an elevated representation of how distant constellations and the cosmos can find form in sculpture. ",
};

const accordionData = [
  {
    title: "About this Piece",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor quam vitae odio bibendum pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat",
  },
  {
    title: "SHIPPING",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor quam vitae odio bibendum pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat",
  },
  {
    title: "Material & Size",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor quam vitae odio bibendum pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat",
  },
];

const ProductDetails = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [activeIndex, setActiveIndex] = useState(null);
  const [productDetails, setProductDetails] = useState({});
  let cartData = JSON.parse(localStorage.getItem("cartItems")) || [];

  useEffect(() => {
    let allProducts = earringsItems.concat(ringsItems, necklaceItems);
    const product = allProducts.find((item) => item.id === Number(productId));
    const itemExistInCart = cartData.find((item) => item.id === product.id);
    setProductDetails({ ...product, isInCart: Boolean(itemExistInCart) });
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (!productDetails) {
    return <div>No product found</div>;
  }

  const addItemToCart = () => {
    const data = { ...productDetails, isInCart: true, quantity: 1 };
    cartData.push(data);
    setProductDetails(data);
    localStorage.setItem("cartItems", JSON.stringify(cartData));
    toast.success("Item added to cart");
  };
  return (
    <div className="pt-[5.5rem]">
      <Header />
      <section className="wrapper">
        <div className="max-w-6xl mx-auto sm:grid grid-cols-[55%_auto] gap-7 pt-[2rem] sm:py-[4rem]">
          <div className="w-full">
            <Swiper
              slidesPerView={1}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              loop
              modules={[Autoplay, Pagination, Navigation, Mousewheel]}
              className="mySwiper h-full"
              mousewheel={true}
              pagination={{ clickable: true, dynamicBullets: true }}
            >
              <SwiperSlide>
                <div className="h-full">
                  <img
                    src={productDetails.img}
                    className="w-full h-full aspect-[3/4] sm:aspect-square object-center duration-300 object-cover"
                    alt={productDetails.title}
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-full">
                  <img
                    src={productDetails.img2}
                    className="w-full h-full aspect-[3/4] sm:aspect-square object-center duration-300 object-cover"
                    alt={productDetails.title}
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="w-full">
            <div className="flex flex-col items-start gap-4 py-2 mb-6">
              <h3 className="text-xl text-start tracking-widest uppercase">
                {productDetails.title}
              </h3>
              <h5 className="text-sm text-black/60 font-light">
                ₹{productDetails.price}
              </h5>
            </div>
            {/* <div className="">
              <Dropdown options={productData.dropDown} />
            </div> */}

            {!productDetails.isInCart ? (
              <button
                onClick={addItemToCart}
                className="btn primary-btn w-full mt-5"
              >
                ADD TO CART
              </button>
            ) : (
              <button
                onClick={() => navigate("/cart")}
                className="btn primary-btn w-full mt-5"
              >
                Go to cart
              </button>
            )}

            <p className=" text-[#1C1B1B] font-light flex items-center mt-6">
              {productData.productDescription}
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="wrapper">
          <div className="text-black py-[4rem]">
            {accordionData.map((item, index) => {
              const isFirst = index === 0;
              const isLast = index === accordionData.length - 1;
              const borderClasses = isFirst
                ? "border-t"
                : isLast
                ? "border-b"
                : "border-y";

              return (
                <div key={index} className={("mx-2", borderClasses)}>
                  <h2 id={`accordion-color-heading-${index + 1}`}>
                    <button
                      type="button"
                      onClick={() => toggleAccordion(index)}
                      className="flex items-center justify-between w-full p-5 rtl:text-right text-black gap-3"
                      aria-expanded={activeIndex === index}
                      aria-controls={`accordion-color-body-${index + 1}`}
                    >
                      <span>{item.title.toUpperCase()}</span>
                      <ChevronUp
                        strokeWidth={1.2}
                        className={`transform ${
                          activeIndex === index ? "rotate-180" : "rotate-90"
                        } shrink-0`}
                      />
                    </button>
                  </h2>
                  <div
                    id={`accordion-color-body-${index + 1}`}
                    className={`transition-all duration-300 ${
                      activeIndex === index ? "block" : "hidden"
                    }`}
                    aria-labelledby={`accordion-color-heading-${index + 1}`}
                  >
                    <p className="px-7 pb-5 font-light">{item.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="border-y">
        <div className="wrapper">
          <div data-aos="fade-up" className="py-[3rem]">
            <h2 className="uppercase text-xl text-center tracking-widest">
              Style it with
            </h2>
            <div className="max-w-4xl mx-auto mt-[1rem] grid grid-cols-2 md:grid-cols-3 gap-5">
              {necklaceItems
                .slice(0, 3)
                .map(({ id, img, price, img2, title, isBestSeller }) => (
                  <div key={id} className="p-3 border">
                    <Link
                      to={`/product-details/${id}`}
                      className="relative overflow-hidden aspect-[3/4] h-fit flex flex-col transition-all duration-200 gap-2 items-center pb-[2rem] group"
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
                      <p className="uppercase desc mt-3 text-[.9rem]">
                        {title}
                      </p>
                      <p className="text-sm text-black/60 font-light">
                        ₹{price}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div data-aos="fade-up" className="wrapper py-[4rem]">
          <h2 className="uppercase text-xl text-center tracking-widest">
            You may also like
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
                      className="relative overflow-hidden aspect-[3/4] h-fit flex flex-col transition-all duration-200 gap-2 items-center pb-[2rem] group"
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
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProductDetails;
