"use client"

import Navbar from '@/components/Frontend/Navbar'
import React, { useState, useEffect }  from 'react'
import MegaMenu from '@/components/Frontend/MegaMenu'


export default function Layout({children}: {children: React.ReactNode}) {

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
    <div>
      <Navbar/>
      <div className={` mx-auto fixed top-20 w-full z-40 font-semibold pb-8 ${isScrollingUp ? 'bg-transparent' : 'bg-slate-100'}`}>
      
      <MegaMenu />
      </div>
        {children}
    </div>
  )
}
