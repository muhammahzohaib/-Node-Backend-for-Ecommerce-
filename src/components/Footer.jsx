import { Facebook, Instagram, Linkedin } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const supportLinks = [
  {
    name: "Shipping",
    path: "#",
  },
  {
    name: "Returns & Exchanges",
    path: "#",
  },
  {
    name: "Warranty",
    path: "#",
  },
  {
    name: "FAQ",
    path: "#",
  },
  {
    name: "Contact",
    path: "#",
  },
  {
    name: "Privacy Policy",
    path: "#",
  },
  {
    name: "Terms of Service",
    path: "#",
  },
];

const links = [
  {
    name: "Necklaces",
    path: "/shop/necklace",
  },
  {
    name: "Rings",
    path: "/shop/rings",
  },
  {
    name: "Earrings",
    path: "/shop/earrings",
  },
  {
    name: "About Us",
    path: "/about-us",
  },
];

const exploreLinks = [
  {
    name: "Press",
    path: "#",
  },
  {
    name: "Journal",
    path: "#",
  },
  {
    name: "About",
    path: "/about-us",
  },
];

const Footer = () => {
  return (
    <div className="wrapper py-[3rem] border-t">
      <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 md:gap-5">
        <div className="flex sm:col-span-2 md:col-span-1 flex-col gap-3">
          <p className="desc uppercase">About us</p>
          <p className="text-sm font-light max-w-lg">
            At Soulsun, we believe jewellery goes beyond beauty. It represents
            love, milestones, and unforgettable moments. Our mission is simple —
            to create timeless, elegant pieces that speak to your heart and
            become a meaningful part of your journey.
          </p>
          <div className="flex gap-4 mt-5">
            <Link to="#">
              <Facebook strokeWidth={1.3} size={22} />
            </Link>
            <Link to="#">
              <Instagram strokeWidth={1.3} size={22} />
            </Link>
            <Link to="#">
              <Linkedin strokeWidth={1.3} size={22} />
            </Link>
          </div>
        </div>
        {/* <div className="flex md:justify-end">
          <div className="flex flex-col gap-3">
            <p className="desc uppercase">support</p>
            <ul className="flex flex-col gap-2">
              {supportLinks.map((link) => (
                <li className="text-sm font-light" key={link.name}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div> */}
        <div className="flex md:justify-end">
          <div className="flex flex-col gap-3">
            <p className="desc uppercase">shop</p>
            <ul className="flex flex-col gap-2">
              {links.map((link) => (
                <li className="text-sm font-light" key={link.name}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* <div className="flex md:justify-end">
          <div className="flex flex-col gap-3">
            <p className="desc uppercase">explore</p>
            <ul className="flex flex-col gap-2">
              {exploreLinks.map((link) => (
                <li className="text-sm font-light" key={link.name}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
