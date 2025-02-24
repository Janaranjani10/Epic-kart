import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page ",
  description: "About Page ",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="Hello,User if you are looking for a custom PC build with lot of customization option.You are visit the correct site.Here we have a specific team to test the PC after the complition of PC Build and also we check the components needs to sell.So you don't worry about the PC quality and Components Quality.Instead of brand warrenty we provide 2 years warrenty for all products and additionaly we provide lifetime service for free.We deliver products all over the world.You have a lot of option for buy the product we have all PC related components."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
