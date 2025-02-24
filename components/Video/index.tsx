import React from "react";

const ProductCard = ({ title, image, alt, description }) => {
  return (
    <div className="rounded-2xl shadow-xl w-full sm:w-1/2 bg-white dark:bg-black p-6 flex flex-col items-center relative">
      <div className="absolute top-6 left-6 z-10">
        <h2 className="text-xl font-semibold mb-1">{title}</h2>
        <p className="text-gray-500 mb-1">{description}</p>
        <p className="text-black font-bold dark:text-white">Up To 50% Off</p>
        <button className="mt-4 bg-blue dark:bg-red-500  text-white px-4 py-2 rounded-lg hover:bg-gray-800">
          Shop Now
        </button>
      </div>
      <img src={image} alt={alt} className="w-full h-72 object-contain" />
    </div>
  );
};

const ProductPage = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-6 p-6 ">
      <ProductCard
        title="Best Laptop"
        image="/images/sbookt.png"
        alt="Laptop Image"
        description="Latest Collection"
      />
      <ProductCard
        title="Best Headphone"
        image="/images/c2.png"
        alt="Headphone Image"
        description="Latest Collection"
      />
    </div>
  );
};

export default ProductPage;
