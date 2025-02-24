import Image from "next/image";
import { FaShoppingCart, FaUndo, FaTruck, FaThumbsUp } from 'react-icons/fa';

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center md:justify-between">
          {[
            { icon: <FaShoppingCart />, title: "Free Shipping", text: "On order over ₹10,000" },
            { icon: <FaUndo />, title: "Free Returns", text: "Within 30 days" },
            { icon: <FaTruck />, title: "Fast Delivery", text: "World Wide" },
            { icon: <FaThumbsUp />, title: "Big Choice", text: "Of products" }
          ].map((item, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
              <div className="flex items-center justify-center">
                <div className="p-4 bg-yellow-200 rounded-full">
                  {item.icon}
                </div>
                <div className="ml-4 text-center md:text-left">
                  <h3 className="text-lg md:text-xl font-bold text-black dark:text-white">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center px-4">
          <h2 className="text-xl md:text-2xl font-semibold text-black dark:text-white">Subscribe To EpicKart.in for more Prime Deals.</h2>
          <div className="mt-4 flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-md mx-auto">
            <input
              type="email"
              className="px-4 py-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full"
              placeholder="Enter Your Email.."
            />
            <button className="bg-sky-500 text-white text-lg px-6 py-2 rounded-md hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
