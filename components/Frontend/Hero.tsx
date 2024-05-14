

import React from "react";
import SearchBar from "./SearchBar";
import TransitionalText from "./TransitionalText";
import { Pill } from 'lucide-react';

const Hero = () => {

  const TEXTS = ['Wellness', 'Immunity', 'Healthfulness', 'Healing', 'Rehabilitation'];
  return (
    <>
     
      <div className="relative pb-[50px] pt-[20px] lg:pt-[75px] max-w-7xl mx-auto">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-5/12">
              <div className="hero-content max-[1024px]:ml-8">
                <h1 className="mb-5 mt-8 text-2xl font-bold !leading-[1.508] text-dark dark:text-white sm:text-[28px] lg:text-[36px] xl:text-[23px] text-gray-700">
                <span className="text-indigo-500 text-5xl">Empowering  </span>Your Path to <span className="text-indigo-500 text-5xl"><TransitionalText TEXTS = {TEXTS} />  </span>Begins Here<span className="text-indigo-500 ">.</span>
                </h1>
                <p className="mb-6 max-w-[480px] text-gray-500 text-body-color dark:text-dark-6">
           
                With a commitment to excellence and a team of dedicated healthcare professionals, we provide personalized and compassionate care tailored to meet your unique needs.
                </p>

                 {/* SEARCH BAR*/}
                 <SearchBar />

                  {/* CTA BUTTON*/}
                <ul className="flex  items-center  mt-4">
                  <li className="w-full">
                    <a
                      href="/#"
                      className="inline-flex text-nowrap items-center justify-center capitalize bg-primary px-6 py-3 text-center text-sm font-semibold text-indigo-500 border border-indigo-500 rounded-full  hover:bg-indigo-500 hover:text-white duration-300 transition-all "
                    >
                      I Need to see a Doctor Urgently
                    </a>
                  </li>
                  <li className="max-[960px]:mr-56">
                    <a
                      href="/#"
                      className="inline-flex items-center justify-center capitalize px-5 py-3 text-center text-sm text-indigo-500 font-semibold  hover:scale-110  duration-300 transition-all xl:mt-4"
                    >

<Pill className="flex-shrink-0 h-5 w-5 font-semibold"/>
                      <span className="ml-2 text-nowrap">
                      I need a prescription refill
                      </span>
                      
                    </a>
                  </li>
                </ul>
               <div className="py-4 flex gap-4">
                   <div className="flex flex-col items-center justify-center">
                         <span className="font-semibold text-indigo-700">50+</span>
                         <span className="text-sm text-gray-500">Specialists</span>
                   </div>

                   <div className="flex flex-col items-center justify-center">
                         <span className="font-semibold text-indigo-700">150+</span>
                         <span className="text-sm text-gray-500">Patients</span>
                   </div>
               </div>
               
              </div>
            </div>
            <div className="hidden px-4 lg:block lg:w-1/12"></div>
            <div className="w-full px-4 lg:w-5/12">
              <div className=" ml-8 lg:ml-auto lg:text-right">
                <div className="relative z-20 inline-block pt-11 lg:pt-0">
             
                <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/hero/hero-image-01.png"
                    alt="hero"
                    className=" max-w-full lg:ml-auto"
                  />
               
                  <span className="absolute -bottom-8 -left-8 z-0 ml-6">
                    <svg
                      width="93"
                      height="93"
                      viewBox="0 0 93 93"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

// const SingleImage = ({ href, imgSrc }   : { href: string, imgSrc: string }) => {
//   return (
//     <>
//       <a href={href} className="flex w-full items-center justify-center">
//         <img src={imgSrc} alt="brand image" className="h-10 w-full " />
//       </a>
//     </>
//   );
// };


