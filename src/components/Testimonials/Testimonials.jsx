import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa6";
import Client01 from "../../assets/client-1.jpg";
import Client02 from "../../assets/client-2.jpg";
import Client03 from "../../assets/client-3.jpg";
import Client04 from "../../assets/client-4.jpg";
import Client05 from "../../assets/client-5.jpg";
const Testimonials = () => {
  var settings = {
    dots: false,
    arrows: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const testimonialsDetails = [
    {
      id: 1,
      msg: "My workout sessions have reached new heights of intensity and motivation, all thanks to the invigorating beats and empowering tracks found on this website.",
      img: Client01,
      name: "David",
      role: "Fitness Trainer",
    },
    {
      id: 2,
      msg: "Amidst my hectic schedule, the soothing melodies from this website provide a much needed escape, allowing me to unwind and recharge myself.",
      img: Client02,
      name: "Sarah",
      role: "Marketting Manager",
    },
    {
      id: 3,
      msg: "Harnessing the tranquil melodies from this website, I cultivate a serene learning environment in my classroom & academic success among my students and collagues.",
      img: Client03,
      name: "Jennifer",
      role: "Educator",
    },
    {
      id: 4,
      msg: "As a fellow music creator, I'm consistently astounded by the ingenuity and innovation showcased in the compositions available, fueling my own artistic endeavors.",
      img: Client04,
      name: "Michael",
      role: "Music Producer",
    },
    {
      id: 5,
      msg: "From the grand entrance to the final dance, the enchanting music curated from this website elevated every moment of our wedding, leaving a lasting impression.",
      img: Client05,
      name: "Emily",
      role: "Event Planner",
    },
  ];
  return (
    <div className="my-[8rem] container">
      <div className="flex flex-col justify-center items-center gap-3">
        <h1 className="text-center text-[2.5rem] text-white">
          Testimonials from customers
        </h1>
        <p className="text-textLight text-center ">
          Discover what our customers have to say about their experiences with
          our music.
        </p>
      </div>
      <Slider {...settings} className="my-[4rem] mx-5 sm:mx-0">
        {testimonialsDetails.map((client) => {
          return (
            <div>
              <div
                className="flex flex-col justify-between items-start gap-5 p-7 sm:h-[280px] h-[320px] rounded-2xl bg-gradient1 mx-3 testimonial-card"
                key={client.id}
              >
                <div className="flex justify-start items-center gap-1">
                  <FaStar className="text-yellow" />
                  <FaStar className="text-yellow" />
                  <FaStar className="text-yellow" />
                  <FaStar className="text-yellow" />
                  <FaStar className="text-textLight" />
                </div>
                <p className="text-white">{client.msg}</p>
                <div className="flex justify-start items-center gap-3">
                  <img
                    src={client.img}
                    alt={client.name}
                    className="w-[50px] h-[50px] rounded-full"
                  />
                  <div>
                    <h1 className="text-white font-semibold text-xl">
                      {client.name}
                    </h1>
                    <p className="text-textLight">{client.role}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Testimonials;
