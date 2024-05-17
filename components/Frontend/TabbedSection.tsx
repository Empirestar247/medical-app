import React from "react";
import TabbedItems from "./TabbedItems";

const TabbedSections = () => {
  return (
    <section className="pb-12 pt-24 dark:bg-dark lg:pb-[90px] lg:pt-[85px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-5xl text-center lg:mb-20">
              {/* <span className="mb-2 block text-lg font-medium text-primary">
                Our Services
              </span> */}
              <h2 className="mb-3 text-2xl font-bold leading-[1.5] text-gray-700 dark:text-white sm:text-3xl md:text-[27px]">
                Top-rated doctors & specialist available now
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                Choose from thousands of specialist at every day affordable prices.  Book online today.
              </p>
            </div>
          </div>
        </div>


 <div className="mx-auto max-w-5xl">

    {/* TABS */}
    <TabbedItems />
 </div>
       
      </div>
    </section>
  );
};

export default TabbedSections;

// const ServiceCard = ({ icon, title, details }) => {
//   return (
//     <>
//       <div className="w-full px-4 md:w-1/2 lg:w-1/3">
//         <div className="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10">
//           <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary">
//             {icon}
//           </div>
//           <h4 className="mb-[14px] text-2xl font-semibold text-dark dark:text-white">
//             {title}
//           </h4>
//           <p className="text-body-color dark:text-dark-6">{details}</p>
//         </div>
//       </div>
//     </>
//   );
// };
