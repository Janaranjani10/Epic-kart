// SubscriptionPage.tsx

"use client";

import { useTheme } from "next-themes";

const SubscriptionPage = () => {
  const { theme } = useTheme();

  return (
    <section className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto">
          <div
            className="wow fadeInUp shadow-three dark:bg-gray-dark rounded-sm bg-white p-8 sm:p-11 lg:p-8 xl:p-11"
            data-wow-delay=".2s"
          >
            <h2 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
              Stay Updated with Us!
            </h2>
            <p className="mb-8 text-base leading-relaxed text-body-color dark:text-gray-400">
              Get the latest updates, news, and exclusive offers. Sign up now to
              stay connected!
            </p>
            <form>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="mb-4 w-full rounded-sm border bg-[#f8f8f8] px-4 py-3 text-base text-body-color outline-none dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark focus:border-primary"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="mb-4 w-full rounded-sm border bg-[#f8f8f8] px-4 py-3 text-base text-body-color outline-none dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark focus:border-primary"
              />
              <button
                type="submit"
                className="w-full rounded-sm bg-primary px-6 py-3 text-base font-medium text-white duration-300 hover:bg-primary/90"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-6 text-sm text-center text-gray-500 dark:text-gray-400">
              We respect your privacy. No spam guaranteed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPage;
