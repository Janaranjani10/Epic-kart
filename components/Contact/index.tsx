// CombinedPage.tsx

"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const CombinedPage = () => {
  return (
    <section className="py-16 md:py-20  lg:py-2 ">
      <div className="container mx-auto">
        {/* Subscription Section */}
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

        {/* Contact Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Phone Card */}
          <div className="flex items-center p-6 bg-white shadow-md rounded-md dark:bg-black">
            <FaPhoneAlt className="text-yellow-500 text-xl mr-4" />
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white">PHONE</h3>
              <p className="text-gray-600 dark:text-gray-300">+91 9751920665</p>
            </div>
          </div>

          {/* Email Card */}
          <div className="flex items-center p-6 bg-white shadow-md rounded-md dark:bg-black">
            <FaEnvelope className="text-yellow-500 text-xl mr-4" />
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white">EMAIL</h3>
              <p className="text-gray-600 dark:text-gray-300">epickart@gmail.com</p>
            </div>
          </div>

          {/* Address Card */}
          <div className="flex items-center p-6 bg-white shadow-md rounded-md dark:bg-black">
            <FaMapMarkerAlt className="text-yellow-500 text-xl mr-4" />
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white">ADDRESS</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Salem, Tamil Nadu, India
              </p>
            </div>
          </div>
        </div>

        {/* Feedback Form */}
        <div className="bg-white p-8 shadow-md rounded-md dark:bg-black">
          <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
            Feedback
          </h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full px-4 py-2 rounded-sm border border-gray-300 outline-none focus:border-yellow-500 dark:bg-gray-800  dark:text-white"
              />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full px-4 py-2 rounded-sm border border-gray-300 outline-none focus:border-yellow-500 dark:bg-gray-800 dark:text-white"
              />
              <input
                type="text"
                placeholder="Enter Your Phone No"
                className="w-full px-4 py-2 rounded-sm border border-gray-300 outline-none focus:border-yellow-500 dark:bg-gray-800 dark:text-gray-300"
              />
            </div>
            <textarea
              placeholder="Feedback"
              rows={4}
              className="w-full px-4 py-2 mb-4 rounded-sm border border-solid  outline-none focus:border-yellow bg-transparent dark:bg-transparent dark:text-gray-300"
            ></textarea>
              
              <div className="text-center">
              <button
                type="submit"
                className="inline-block w-32 px-6 py-2 bg-sky-500 text-white rounded-sm border border-gray-300 outline-none font-medium"
              >
                Message
              </button>
            </div>
            
          </form>
          
        </div>
      </div>
    </section>
  );
};

export default CombinedPage;
