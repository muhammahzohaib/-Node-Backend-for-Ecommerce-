import React from "react";
import { Link } from "react-router-dom";

const CartItems = () => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  return (
    <div className="p-5">
      <h2 className="text-xl uppercase">Order Summary</h2>
      <div className="mt-3 border-2 rounded border-black/10">
        {cartItems.map((item, idx) => (
          <div
            key={idx}
            className={`m-3 ${
              idx !== cartItems.length - 1 && "border-b-2 pb-3 border-black/10"
            }`}
          >
            <div className="grid grid-cols-[30%_auto] gap-3">
              <Link to={`/product-details/${item.id}`}>
                <img
                  src={item.img}
                  className="h-full aspect-square object-center object-cover rounded-lg"
                  alt={item.title}
                />
              </Link>
              <div className="flex flex-col gap-1">
                <p className="">{item.title}</p>
                <p className="text-sm font-light">₹{item.price} X {item.quantity}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3 mt-5">
        <div className="flex justify-between">
          <p className="">Subtotal</p>
          <p className="">
            ₹{cartItems.reduce((a, b) => a + b.price * b.quantity, 0)}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="">Shipping</p>
          {/* <p className="">₹50</p> */}
          <p className="">---</p>
        </div>
        <div className="flex text-xl justify-between border-t-2 border-black/10 pt-2">
          <p className="uppercase">Total</p>
          <p className="">₹{cartItems.reduce((a, b) => a + b.price * b.quantity, 0)}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
