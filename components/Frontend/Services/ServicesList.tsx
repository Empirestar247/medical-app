import React from 'react'
import ServicesCard from './ServicesCard'
import { ServiceProps } from '@/types/types'




export default function ServicesList({services} : {services: ServiceProps[]}) {
  return (
    <div className='grid gap-6 grid-cols-3 lg:grid-cols-5 md:grid-cols-4 min-[760px]:grid-cols-4'>
      {
        services.map((service, index) => {
          return <ServicesCard key={index} service = {service} />
        })
      }
   </div>
  )
}
