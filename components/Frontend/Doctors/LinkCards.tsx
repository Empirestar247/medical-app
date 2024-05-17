import Link from 'next/link'
import React from 'react'

export default function LinkCards({className} : {className?:string}) {

  return (
    <div className='grid gap-6 grid-cols-3 lg:grid-cols-5 md:grid-cols-4 min-[760px]:grid-cols-4'>
     <Link href="#" className={ `flex gap-3 rounded-md py-3 px-6  text-slate-50 ${className} `}>
      <h2>Anxiety</h2>  
      <span aria-hidden="true">&rarr;</span>
    </Link>

    <Link href="#" className={ `flex gap-3 rounded-md py-3 px-6 text-slate-50 ${className} `}>
      <h2>Anxiety</h2>  
      <span aria-hidden="true">&rarr;</span>
    </Link>

    <Link href="#" className={ `flex gap-3 rounded-md py-3 px-6  text-slate-50 ${className} `}>
      <h2>Anxiety</h2>  
      <span aria-hidden="true">&rarr;</span>
    </Link>

    <Link href="#" className={ `flex gap-3 rounded-md py-3 px-6  text-slate-50 ${className} `}>
      <h2>Anxiety</h2>  
      <span aria-hidden="true">&rarr;</span>
    </Link>

    <Link href="#" className={ `flex gap-3 rounded-md py-3 px-6  text-slate-50 ${className} `}>
      <h2>Anxiety</h2>  
      <span aria-hidden="true">&rarr;</span>
    </Link>

    <Link href="#" className={ `flex gap-3 rounded-md py-3 px-6 text-slate-50 ${className} `}>
      <h2>Anxiety</h2>  
      <span aria-hidden="true">&rarr;</span>
    </Link>
   </div>
  )
}
