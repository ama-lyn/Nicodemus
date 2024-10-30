import React from 'react'
import Button from './ui/Button'

const Hero = () => {
  return (
    <div className='flex my-28 justify-between section'>
      <div className='flex flex-col gap-2 w-[500px]  '>
        <h1 className='text-5xl font-bold'>Let's get your <span className='text-secondary'>business</span> to the next level together</h1>
        <p className='text-darkGray'>LinkedIn Brand Management | SEO | Copywriting</p>
        <div>
        <Button text="CONTACT" color="text-white" buttoncolor="bg-secondary"/>
        <Button text="Get a quote" color="text-secondary" buttoncolor="bg-background" underline="underline  decoration-2 underline-offset-4"/>
        </div>
       
      </div>
      <div className='h-80'>
        <img src="/images/hero.png" alt="Hero Image"/>
      </div>
    </div>
  )
}

export default Hero
