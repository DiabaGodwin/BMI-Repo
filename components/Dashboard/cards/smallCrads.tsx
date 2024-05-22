import React from 'react'
import '../../../app/globals.css'

interface Props {
  title: string,
  number: string,
  icon: any
}
const SmallCrads  = ({title, number,icon}: Props) => {
  return (
    <>
     <div className="rounded-md h-20 flex items-center hover:bg-slate-400">
        {/* ----Details---- */}
        <div className='ml-2'>
          <h4 className='text-slate-500 text-sm'>{title}</h4>
          <h4 className='text-slate-500 text-xl font-bold font-sans'>{number}</h4>
        </div>
        {/* ---Icon-- */}
        <div className='bg-white h-10 w-10 rounded-md flex items-center justify-center ml-auto mr-2'>
          <h4 className='text-slate-500 text-lg'>{icon}</h4>
        </div>
      </div>

    </>
   
  )
}

export default SmallCrads
