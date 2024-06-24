import React from "react";
import Genre1 from "../../assets/genre-1.jpg";
import Genre2 from "../../assets/genre-2.jpg";
import Genre3 from "../../assets/genre-3.jpg";
import Genre4 from "../../assets/genre-4.jpg";
import { MdArrowOutward } from "react-icons/md";
const Genre = () => {
  const genreDetails = [
    {
      id: 1,
      img: Genre1,
      title: "R&B",
      delay: "0",
    },
    {
      id: 2,
      img: Genre2,
      title: "POP",
      delay: "300",
    },
    {
      id: 3,
      img: Genre3,
      title: "HIP HOP",
      delay: "600",
    },
    {
      id: 4,
      img: Genre4,
      title: "ROCK",
      delay: "900",
    },
  ];

  return (
    <div className="container">
      <div className="flex flex-col justify-center items-center gap-3">
        <h1 className="text-center text-[2.5rem] text-white">
          Choose your favourite genre
        </h1>
        <p className="text-textLight text-center ">
          Dive in, discover, and let the rythms guide you to your musical
          paradise.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between items-center gap-8 mt-[4rem]">
        {genreDetails.map((genre) => {
          return (
            <div
              className="flex flex-col justify-center items-center gap-5"
              key={genre.id}
              data-aos="fade-up"
              data-aos-delay={genre.delay}
            >
              <div className="rounded-full overflow-hidden relative group flex flex-col justify-center items-center transition-all duration-300">
                <div className="absolute w-full h-full bg-black/60 hidden group-hover:block transition-all duration-300"></div>
                <div className="w-[70px] h-[70px] bg-secondaryColor absolute rounded-full justify-center items-center hidden group-hover:flex transition-all duration-300 cursor-pointer">
                  <MdArrowOutward className="text-2xl" />
                </div>
                <img src={genre.img} alt={genre.title} loading="lazy" />
              </div>
              <h1 className="text-2xl font-semibold text-white">
                {genre.title}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Genre;
