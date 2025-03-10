/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className=' min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
        <div className='flex flex-col gap-4'>
            <p>It's time to get</p>
            <h1 className='uppercase font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Swole <span className=' text-blue-400'>normeous</span></h1>
        </div>
        
        <p className=' text-sm md:text-base font-light'>I hereby acknowledgement that I may become <span className=' text-blue-400 font-medium'>unbelievably</span> swolenormous and accept all the risk of becoming the local <span className=' text-blue-400 font-medium'>mass monstrosity</span>, afflicted with severe body dismorphia, unable to fit through doors.</p>

        <Button func={() => {
          window.location.href = '#generate'
        }} text={"Accept & Begin"}/>
    </div>
  )
}
