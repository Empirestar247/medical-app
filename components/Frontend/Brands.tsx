import Image from "next/image";
import React from "react";

const brandsData = [
  {
    imageSrc:
      "https://cdn.tailgrids.com/2.2/assets/images/brands/graygrids.svg",
    lightImageSrc:
      "https://cdn.tailgrids.com/2.2/assets/images/brands/graygrids-white.svg",
    altText: "graygrids",
    link: "#",
  },
  {
    imageSrc:
      "https://cdn.tailgrids.com/2.2/assets/images/brands/lineicons.svg",
    lightImageSrc:
      "https://cdn.tailgrids.com/2.2/assets/images/brands/lineIcons-white.svg",
    altText: "lineicons",
    link: "#",
  },
  {
    imageSrc: "https://cdn.tailgrids.com/2.2/assets/images/brands/uideck.svg",
    lightImageSrc:
      "https://cdn.tailgrids.com/2.2/assets/images/brands/uideck-white.svg",
    altText: "uideck",
    link: "#",
  },
  {
    imageSrc: "https://cdn.tailgrids.com/2.2/assets/images/brands/ayroui.svg",
    lightImageSrc:
      "https://cdn.tailgrids.com/2.2/assets/images/brands/ayroui-white.svg",
    altText: "ayroui",
    link: "#",
  },
];

export default function Brands() {
  return (
    <section className="bg-slate-100 py-4 lg:py-[40px] dark:bg-dark">
        <h2 className="text-center mb-3 font-medium text-md">Trusted By</h2>
      <div className="mx-auto">
        <div className=" flex flex-wrap">
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center space-x-8 space-y-3 justify-center">
              {brandsData.map((brand, i) => (
                <SingleImage key={i} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const SingleImage = ({ brand } : { brand: any }) => {
  const { link, imageSrc, altText } = brand;
  return (
    <>
      <a
        href={link}
        className=" justify-center  2xl:w-[180px]"
      >
        {/* <img src={imageSrc} alt={altText} className="h-10 w-full dark:hidden" />
        <img
          src={{ lightImageSrc }}
          alt={altText}
          className="hidden h-10 w-full dark:block"
        /> */}
        <Image src={imageSrc} alt={altText} width={20} height={20} className="h-10 w-full" />
        {/* <Image src={lightImageSrc} alt={altText} width={100} height={100}  className="h-10 w-full" /> */}
      </a>
    </>
  );
};
