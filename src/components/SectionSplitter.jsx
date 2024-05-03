import React from 'react'

const SectionSplitter = ({children}) => {
  return (
    <div className='grid place-items-center font-bold text-2xl rounded-std bg-white w-full h-[100px]'>
        {children}
    </div>
  )
}

export default SectionSplitter