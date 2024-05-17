"use client"

import * as React from "react"
// import Link from "next/link"
import { useState, useEffect }  from 'react'


import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"




const megaMenu = [
  {
    title: "Top Booked",
    services: [
      {
        title: "Telehealth",
        slug: "tele-health",
        description: "View and manage your appointments",
        
      },

      {
        title: "Virtual Consultation",
        slug: "virtual-consultation",
        description: "View and manage your appointments",
        
      },

      {
       title: "In-Person Consultation",
       slug: "in-person-consultation",
       description: "View and manage your appointments",
        
      },

      {
       title: "UTI consultation",
       slug: "uti-consultation",
       description: "View and manage your appointments",
        
      }
    ],

   
  },

  {
    title: "Specialists",
    services: [
      {
        title: "Telehealth",
        slug: "tele-health",
        description: "View and manage your appointments",
        
      },

      {
        title: "Virtual Consultation",
        slug: "virtual-consultation",
        description: "View and manage your appointments",
        
      },

      {
       title: "In-Person Consultation",
       slug: "in-person-consultation",
       description: "View and manage your appointments",
        
      },

      {
       title: "UTI consultation",
       slug: "uti-consultation",
       description: "View and manage your appointments",
        
      }
    ],

   
  },

  {
    title: "Symptoms",
    services: [
      {
        title: "Telehealth",
        slug: "tele-health",
        description: "View and manage your appointments",
        
      },

      {
        title: "Virtual Consultation",
        slug: "virtual-consultation",
        description: "View and manage your appointments",
        
      },

      {
       title: "In-Person Consultation",
       slug: "in-person-consultation",
       description: "View and manage your appointments",
        
      },

      {
       title: "UTI consultation",
       slug: "uti-consultation",
       description: "View and manage your appointments",
        
      }
    ],

   
  }
]

export default function MegaMenu() {

  const [isScrollingUp, setIsScrollingUp] = useState(false);

  useEffect(() => {
    let lastScrollTop = window.pageYOffset;
  
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
      if (scrollTop > lastScrollTop) {
        // Scrolling down
        setIsScrollingUp(false);
      } else {
        // Scrolling up
        setIsScrollingUp(true);
      }
  
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <NavigationMenu  className={`w-full ${isScrollingUp ? 'bg-transparent' : 'bg-slate-100'}`}>
      <NavigationMenuList className="space-x-2">
       {
           megaMenu.map((item, i) => {
            return (
               
        <NavigationMenuItem  key={i}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent >
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
            {item.services.map((component) => (
              <ListItem
                key={component.title}
                title={component.title}
                href={`/services${component.slug}`}
              >
                {component.description}
              </ListItem>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
            )
           })
       }
       
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
