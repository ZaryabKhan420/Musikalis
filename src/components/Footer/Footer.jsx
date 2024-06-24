import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  const links = [
    {
      id: 1,
      name: "Home",
      path: "#",
    },
    {
      id: 2,
      name: "Services",
      path: "#",
    },
    {
      id: 3,
      name: "Advisor",
      path: "#",
    },
    {
      id: 4,
      name: "Musikalis",
      path: "#",
    },
    {
      id: 5,
      name: "Blog",
      path: "#",
    },
    {
      id: 6,
      name: "Contact Us",
      path: "#",
    },
    {
      id: 7,
      name: "About Us",
      path: "#",
    },
  ];
  return (
    <div className="container pt-16 pb-5">
      <div className="flex flex-col justify-center items-center gap-10">
        <Link to={"#"} className="text-2xl text-white md:hidden block">
          Musikalis
        </Link>
        <div className="grid grid-cols-3 md:grid-cols-7 w-full place-items-center gap-x-[1rem] gap-y-[2rem]">
          {links.map((link) => {
            return link.id === 4 ? (
              <Link
                to={link.path}
                key={link.id}
                className="text-2xl text-white hidden md:block"
              >
                {link.name}
              </Link>
            ) : (
              <Link
                to={link.path}
                key={link.id}
                className="text-textLight hover:text-secondaryColor transition-all duration-300"
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <p className="text-textLight text-sm mt-[5rem]">
          Copyright © 2024 Zaryab. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
