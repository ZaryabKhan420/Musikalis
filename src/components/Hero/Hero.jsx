import React from "react";
import heroImg from "../../assets/header.jpg";
import { LuArrowRight } from "react-icons/lu";
const Hero = () => {
  const details = [
    {
      id: 1,
      title: "Customer",
      progress: "320k",
    },
    {
      id: 2,
      title: "Tracks",
      progress: "47k",
    },
  ];

  return (
    <>
      <div className="container my-5 md:my-16">
        <h1
          className="text-[5rem] text-white hidden md:block hero-heading"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Music Is The Shorthand
        </h1>
        <div className="container grid grid-cols-1 md:grid-cols-2 p-0">
          <div className=" flex flex-col justify-start items-center md:items-start gap-3 order-2 md:order-1">
            <h1
              className="text-[4rem] my-0 md:text-[5rem] text-center text-white md:hidden block hero-heading"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Music Is The
            </h1>
            <h1
              className="text-[4rem] mt-[-1.5rem] md:text-[5rem] text-center text-white md:hidden block hero-heading"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Shorthand
            </h1>
            <h1
              className="text-[4rem] text-center md:text-left mt-[-1.5rem] md:text-[5rem] text-white md:my-[-0.5rem] hero-heading"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Of Emotion
            </h1>
            <p
              className="text-textLight w-[95%] text-center md:text-left"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              It serves as a poignant reminder of the power and depth inherent
              in every note, melody, and lyric. It invites visitors to explore
              the emotional landscapes that music can paint, connecting them to
              the very heartbeats of humanity.
            </p>

            <div
              className="flex justify-start items-center gap-2 my-5"
              data-aos="fade-up"
              data-aos-delay="900"
            >
              <button className="py-3 px-7 bg-secondaryColor rounded-full flex justify-center items-center gap-2 group">
                Get Started
                <LuArrowRight className="group-hover:translate-x-2 transition-all duration-300" />
              </button>
              <button className="py-3 px-7 text-textLight rounded-full flex justify-center items-center gap-2 group hover:text-secondaryColor">
                See More
                <LuArrowRight className="group-hover:translate-x-2 group-hover:text-secondaryColor transition-all duration-300" />
              </button>
            </div>
            <div
              className="flex justify-start items-center gap-5 my-8"
              data-aos="fade-up"
              data-aos-delay="1200"
            >
              {details.map((item) => {
                return (
                  <div
                    className="h-[110px] w-[150px] bg-gradient1 flex flex-col justify-center items-center gap-3 rounded-xl"
                    key={item.id}
                  >
                    <h1 className="text-2xl font-semibold text-white">
                      {item.progress}
                    </h1>
                    <p className="text-textLight">{item.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="p-0 lg:p-[6rem] md:pt-0">
              <img
                src={heroImg}
                alt=""
                loading="lazy"
                className="rounded-[100rem]"
                data-aos="fade-left"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
