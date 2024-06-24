import React from "react";
import { LuArrowRight } from "react-icons/lu";
const Starter = () => {
  return (
    <div className="container">
      <div className="bg-gradient1 py-16 px-8 flex flex-col justify-center items-start gap-5 rounded-2xl relative overflow-hidden">
        <div className="w-[30rem] h-[30rem] bg-gradient2 absolute top-0 right-0 rounded-full  justify-center items-center z-[4]">
          <div className="w-[25rem] h-[25rem] rounded-full bg-gradient1 absolute top-0 right-0 z-[5]"></div>
        </div>
        <h1 className="text-left text-[2.5rem] w-[100%] md:w-[50%] text-white z-[6]">
          Start selling your music worldwide today
        </h1>
        <p className="text-textLight text-left w-[100%] md:w-[50%] z-[6]">
          Expand your reach and monetize your music effortlessly with our
          worldwide distribution platform, empowering artists to share their
          creations on a global scale.
        </p>
        <div className="flex justify-start items-center gap-2 my-5 z-[6]">
          <button className="py-3 px-7 bg-secondaryColor rounded-full flex justify-center items-center gap-2 group">
            Get Started
            <LuArrowRight className="group-hover:translate-x-2 transition-all duration-300" />
          </button>
          <button className="py-3 px-7 text-textLight rounded-full flex justify-center items-center gap-2 group hover:text-secondaryColor">
            See More
            <LuArrowRight className="group-hover:translate-x-2 group-hover:text-secondaryColor transition-all duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Starter;
