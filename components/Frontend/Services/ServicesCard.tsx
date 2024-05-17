import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ServiceProps } from '@/types/types'

export default function ServicesCard({service} : {service: ServiceProps}) {
  return (
    <Link href={`services/${service.slug}`} className='rounded-md flex gap-4 bg-slate-100 hover:bg-slate-200 duration-300 transition-all overflow-hidden'>
        <Image src={service.image} width={50} height={50} alt={service.title} className="rounded-md w-1/3 object-cover " />
        <div className="flex flex-col w-2/3 py-3">
            <h2  className="text-sm font-medium">{service.title}</h2>
            <p className="text-[0.7rem]">50+ Doctors Available</p>

        </div>
    </Link>
  )
}
