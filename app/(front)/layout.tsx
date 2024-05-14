import Navbar from '@/components/Frontend/Navbar'
import React from 'react'
import MegaMenu from '@/components/Frontend/MegaMenu'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <Navbar/>
      <div className="max-w-5xl mx-auto  z-50 font-semibold">
      <MegaMenu />
      </div>
        {children}
    </div>
  )
}
