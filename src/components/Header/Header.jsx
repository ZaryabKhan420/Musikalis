import React from "react";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
const Header = () => {
  const links = [
    { id: 1, name: "Home", link: "#" },
    { id: 2, name: "About Us", link: "#" },
    { id: 3, name: "Services", link: "#" },
    { id: 4, name: "Clients", link: "#" },
    { id: 5, name: "Advisor", link: "#" },
  ];

  return (
    <div className="header bg-gradient1 lg:bg-none w-full">
      <div className="container flex justify-between items-center h-[12vh] relative">
        <div>
          <h1 className="text-white text-2xl ">Musikalis</h1>
        </div>

        <nav className="navbar absolute top-[-100vh] left-0 md:static bg-gradient1 md:bg-none w-full md:w-fit py-10 md:py-0 transition-all duration-300 z-[999]">
          <ul className="flex flex-col md:flex-row justify-between items-center gap-8 text-textLight">
            {links.map((link) => {
              return (
                <Link
                  to={link.link}
                  key={link.id}
                  className="hover:text-secondaryColor transition-all duration-300"
                >
                  {link.name}
                </Link>
              );
            })}
          </ul>
        </nav>

        <button className="hidden md:block px-6 py-2 rounded-full bg-secondaryColor">
          Sign Up
        </button>
        <div className="block md:hidden mobile-nav">
          <IoIosMenu
            className="text-white text-3xl menu-btn"
            onClick={() => {
              document.querySelector(".menu-btn").style.display = "none";
              document.querySelector(".close-btn").style.display = "block";
              document.querySelector(".navbar").style.top = "100%";
            }}
          />
          <IoClose
            className="text-white text-3xl hidden close-btn"
            onClick={() => {
              document.querySelector(".menu-btn").style.display = "block";
              document.querySelector(".close-btn").style.display = "none";
              document.querySelector(".navbar").style.top = "-100vh";
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
