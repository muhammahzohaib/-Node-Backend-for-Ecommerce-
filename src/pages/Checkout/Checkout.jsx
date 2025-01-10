import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ShippingAddress from "./components/ShippingAddress";
import CartItems from "./components/CartItems";
import { Link } from "react-router-dom";

const Checkout = () => {
  const cartList = JSON.parse(localStorage.getItem("cartItems")) || [];
  const [cartItems, setCartItems] = useState(cartList);
  return (
    <div className="pt-[5.5rem]">
      <Header />
      {cartItems.length > 0 ? (
        <section className="wrapper flex flex-col-reverse lg:grid grid-cols-[65%_auto] gap-7">
          <div className="py-[3rem]">
            <ShippingAddress
              total={cartItems.reduce((a, b) => a + b.price * b.quantity, 0)}
              setCartItems={setCartItems}
            />
          </div>
          <div className="py-[3rem] bg-[#EFEFEF]">
            <CartItems />
          </div>
        </section>
      ) : (
        <section className="wrapper">
          <div className="w-full flex flex-col justify-center items-center h-[90vh]">
            <h3 className="heading-2 uppercase text-center">
              YOUR BAG IS EMPTY
            </h3>
            <Link
              to="/shop/earrings"
              className="btn text-center primary-btn min-w-[18rem] mt-[1rem]"
            >
              SHOP OUR PRODUCTS
            </Link>
          </div>
        </section>
      )}
      <Footer />
    </div>
  );
};

export default Checkout;
