import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-base md:text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[25px] w-[25px] md:h-[30px] md:w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );
  return (
    <section id="about" className="pt-12 md:pt-16 lg:pt-20 xl:pt-28 px-4">
      <div className="container mx-auto">
        <div className="border-b border-body-color/[.15] pb-12 md:pb-16 lg:pb-20 xl:pb-28 dark:border-white/[.15]">
          <div className="flex flex-wrap items-center -mx-4">
            {/* Image Section */}
            <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0 flex justify-center">
              <div className="relative w-full max-w-[400px] md:max-w-[500px] aspect-[4/3]">
                <Image
                  src="/images/about/about.avif"
                  alt="about-image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg drop-shadow-md dark:hidden"
                />
                <Image
                  src="/images/about/about.avif"
                  alt="about-image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg drop-shadow-md hidden dark:block"
                />
              </div>
            </div>
            
            {/* Text Content */}
            <div className="w-full md:w-1/2 px-4">
              <SectionTitle
                title="Welcome To EpicKart"
                paragraph=""
                mb="44px"
              />

              <div className="max-w-[570px]">
                <div className="flex flex-wrap -mx-3">
                  <div className="w-full sm:w-1/2 px-3">
                    <List text="Products for Gaming, Editing, Professional Office Work, 3D Modeling, and Animation Creation" />
                    <List text="Wide range of GPUs and CPUs for Commercial and Server PCs" />
                    <List text="Mobile devices and streaming gadgets like GoPro and Blackmagic" />
                  </div>

                  <div className="w-full sm:w-1/2 px-3">
                    <List text="24/7 customer support with a dedicated EpicKart Bot for assistance" />
                    <List text="Multiple payment options including Cash on Delivery, Credit Card, UPI, and Internet Banking" />
                    <List text="Support for all types of PCs and operating systems: Windows, Mac, Linux, and Raspberry Pi" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
