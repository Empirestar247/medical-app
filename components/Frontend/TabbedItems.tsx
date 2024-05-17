
"use client"


import { Tabs } from "flowbite-react";
import { content } from "flowbite-react/tailwind";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import ServicesList from "./Services/ServicesList";
import LinkCards from "./Doctors/LinkCards";
import { Activity, Microscope, Stethoscope, Syringe } from "lucide-react";

export default function TabbedItems() {

  const services = [
    {
      title: "Telehealth",
      image: '/doctor-1.jpg',
      slug: "tele-health",
    },

    {
      title: "Mental Health Consult",
      image: '/doctor-1.jpg',
      slug: "mental-health-consult",
    },

    {
      title: "Prescription refill",
      image: '/doctor-1.jpg',
      slug: "prescription-refill",
    },

    {
      title: "In-Person Visit",
      image: '/doctor-1.jpg',
      slug: "in-person-visit",
    },

    {
      title: "UTI Consult",
      image: '/doctor-1.jpg',
      slug: "uti-consultation",
    },

    {
      title: "ED Consult",
      image: '/doctor-1.jpg',
      slug: "ed-consultation",
    },

    {
      title: "Urgent Care",
      image: '/doctor-1.jpg',
      slug: "urgent-care",
    },
  ]

  const  tabs = [
    {
      title: "Popular Services",
      icons: Stethoscope,
      component:  <ServicesList  services={services}/>,
      content: [],
    },

    {
      title: "Doctors",
      icons: Microscope,
      component:  <LinkCards className=" bg-slate-700" />,
      content: [],
    },

    {
      title: "Specialists",
      icons: Syringe,
      component:   <LinkCards className="bg-indigo-900" />,
      content: [],
    },

    {
      title: "Symptoms",
      icons: Activity,
      component:   <LinkCards className="bg-pink-800" />,
      content: [],
    },
  ];
  return (
    <Tabs aria-label="Default tabs" style="default">
      {/* <Tabs.Item active title="Profile" icon={HiUserCircle}>
        This is <span className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</span>.
        Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
        control the content visibility and styling.
      </Tabs.Item> */}

      {
        tabs.map((tab, index) => {
          return (
            <Tabs.Item key={index} active title={tab.title} icon={tab.icons}>
                {tab.component}
          </Tabs.Item>
          )
        })
      }
     
    
    </Tabs>
  );
}
