import React from 'react'
import Button from './ui/Button'

const Hero = () => {
  return (
    <div className='flex my-8'>
      <div>
        <h2>Let's get your <span className='text-secondary'>business</span> to the next level together</h2>
        <p>LinkedIn Brand Management | SEO | Copywriting</p>
        <Button text="CONTACT" color="text-white" buttoncolor="bg-secondary"/>
        <Button text="Get a quote" color="text-secondary" buttoncolor="bg-background" underline="underline  decoration-2 underline-offset-4"/>
      </div>
      <div>
        <img src="/images/hero.png" alt="Hero Image" />
      </div>
    </div>
  )
}

export default Hero
