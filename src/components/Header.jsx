import React, { useState } from "react";
import { headerLinks, logoImg, smHeaderLinks } from "../constant";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, UserRound, X } from "lucide-react";
import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  // Example: Replace with actual authentication logic
  const isLoggedIn = false; // Replace this with state or context for authentication

  return (
    <div className="pt-2 border pb-2 bg-white left-0 top-0 z-[100] fixed w-full">
      <div className="wrapper grid grid-cols-2 sm:grid-cols-[35%_auto_35%] gap-4 sm:gap-7 lg:items-end items-center lg:pb-2">
        <div className="flex items-end gap-[3rem]">
          <Link className="w-fit" to="/">
            <img
              src={logoImg}
              alt="logo"
              className="w-[4rem] md:w-[4rem] md:min-w-[4rem] object-contain"
            />
          </Link>
          <div className="hidden lg:flex gap-6 h-full">
            {headerLinks.map((link) => (
              <Link
                key={link.name}
                className={`font-light uppercase text-[.75rem] pb-3 h-full ${
                  pathname === link.path && "border-b-2 border-primary"
                }`}
                to={link.path}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <Link to="/" className="sm:block hidden w-fit mx-auto text-3xl text-primary text-center">
          SOULSUN
        </Link>
        <div className="flex gap-4 sm:gap-6 items-center justify-end lg:pb-2">
          {/* Conditional rendering for Login/Profile */}
          {!isLoggedIn ? (
            <Link to="/login" title="Login">
              <UserRound size={20} />
            </Link>
          ) : (
            <Link to="/profile" title="Profile">
              <UserRound size={20} />
            </Link>
          )}
          <Link to="/cart" title="My Cart">
            <ShoppingCart size={20} />
          </Link>
          <div className="block lg:hidden" onClick={toggleDrawer}>
            <Hamburger
              color="black"
              size="20"
              toggled={isOpen}
              rounded
              toggle={setIsOpen}
            />
          </div>
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="py-4 px-6 z-10"
      >
        <div className="mb-6 flex items-center justify-end py-[.4rem]">
          <button
            onClick={() => setIsOpen(false)}
            className="text-black text-[2.2rem]"
          >
            <X size={30} />
          </button>
        </div>
        <div className="flex flex-col gap-6">
          {smHeaderLinks.map(({ name, path }) => (
            <Link
              onClick={() => setIsOpen(false)}
              key={name}
              className="text-3xl text-black font-light transition-colors duration-300"
              to={path}
            >
              {name}
            </Link>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
