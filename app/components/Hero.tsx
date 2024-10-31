import React from 'react'
import Button from './ui/Button'

const Hero = () => {
  return (
    <div className='flex my-24 justify-between section items-center '>
      <div className='flex flex-col gap-6 w-[500px] '>
        <div>
        <h1 className='text-5xl font-bold leading-normal'>Let's get your <span className='text-secondary'>business</span> to the next level together</h1>
        <p className='text-darkGray'>LinkedIn Brand Management | SEO | Copywriting</p>
        </div>
        
        <div>
        <Button text="Contact" color="text-white" buttoncolor="bg-secondary"/>
        <Button text="Get a quote" color="text-secondary" buttoncolor="bg-background" underline="underline  decoration-2 underline-offset-4"/>
        </div>
      </div>
      <div className=''>
        <img src="/images/hero.png" alt="Hero Image" className='w-[420px] h-[500px]'/>
      </div>
    </div>
  )
}

export default Hero
