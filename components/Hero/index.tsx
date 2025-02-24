"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/5.jpg",
];
const Hero = () => {
  const [selected, setSelected] = useState(2); // Center card selected initially

  return (
    <>
      <section className="home mt-40 px-10 py-20 flex flex-col-reverse md:flex-row items-center justify-center md:gap-16">
        
        {/* Left Side Content */}
        <div className="content md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-blue-800">Gaming</span><span className="text-yellow"> Gadgets</span>
            <br />
            Up To <span className="text-red-500">50%</span> Off
          </h1>
          <p className="text-lg leading-relaxed mb-6">
            Instead of gaming products, we also provide all gadgets.
            <br />
            Like Mobiles, Workstations, Professional PCs, etc.
          </p>
          <div className="btn">
            <button className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-yellow  transition-all">
              Shop Now
            </button>
          </div>
        </div>

        {/* 3D Image Slider */}
        <div className="md:w-1/2 flex  items-center">
          <div id="slider" className="relative w-[450px] h-[300px] md:h-[300px] perspective-1000 transform-style-3d flex justify-center">
            {images.map((src, index) => (
              <label
                key={index}
                className={`absolute w-[350px] h-[250px] md:w-[400px] md:h-[250px] rounded-lg shadow-lg cursor-pointer transition-transform duration-500 ${
                  selected === index
                    ? "z-30 scale-110"
                    : selected === (index + 1) % images.length
                    ? "translate-x-[20%] -z-10 opacity-80 scale-95"
                    : selected === (index - 1 + images.length) % images.length
                    ? "-translate-x-[20%] -z-10 opacity-80 scale-95"
                    : "translate-x-[40%] -z-20 opacity-60 scale-90"
                }`}
                onClick={() => setSelected(index)}
              >
                <Image
                  src={src}
                  alt={`Gaming Product ${index + 1}`}
                  width={250}
                  height={100}
                  className="rounded-lg object-cover w-full h-full"
                />
              </label>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        body {
          padding: 20px;
          background: #eee;
          user-select: none;
        }
        
        #slider {
          position: relative;
          perspective: 1000px;
          transform-style: preserve-3d;
        }
        
        #slider label {
          width: 100%;
          height: 100%;
          border-radius: 4px;
          position: absolute;
          left: 0;
          right: 0;
          cursor: pointer;
          transition: transform 0.4s ease;
        }
      `}</style>
    </>
  );
};

export default Hero;
