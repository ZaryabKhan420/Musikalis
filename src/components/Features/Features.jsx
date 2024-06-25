import React from "react";
import featureImage from "../../assets/feature.jpg";
const Features = () => {
  const featureDetails = [
    {
      id: "01",
      title: "The Best Price",
      description:
        "With our commitment to offering the best price, you can indulge in your musical passions without worrying about your wallet.",
      delay: "600",
    },

    {
      id: "02",
      title: "Copyright Free",
      description:
        "Our collection boasts an array of copyright-free tracks, ensuring that you can use them in your projects hassle-free.",
      delay: "900",
    },
    {
      id: "03",
      title: "Premium Quality",
      description:
        "Each track in our curated collection is meticulously crafted to deliver unparalleled sound clarity and richness.",
      delay: "1200",
    },
  ];

  return (
    <div className="container my-16 grid grid-cols-1 lg:grid-cols-2 place-items-center gap-12 lg:gap-0">
      <div className="flex flex-col justify-start items-start gap-5 order-2 lg:order-1">
        <h1
          className="text-center text-[2.5rem] text-white"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Best Features
        </h1>
        {featureDetails.map((item, index) => {
          return (
            <div
              className="p-5 bg-gradient1 hover:bg-gradient2 hover:text-white transition-all duration-300 flex justify-center items-center gap-5 group rounded-2xl"
              data-aos="fade-up"
              data-aos-delay={item.delay}
              key={index}
            >
              <h2 className="text-lg font-bold text-white">{item.id}</h2>
              <div className="flex flex-col justify-center items-start gap-2">
                <h2 className="text-lg font-bold text-white">{item.title}</h2>
                <p className="text-textLight group-hover:text-white">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div
        className="w-full sm:w-[400px] h-[420px] overflow-hidden border-2 border-textLight rounded-2xl rounded-bl-[10rem] order-1 lg:order-2"
        data-aos="fade-left"
      >
        <img src={featureImage} alt="featureImage" loading="lazy" />
      </div>
    </div>
  );
};

export default Features;
