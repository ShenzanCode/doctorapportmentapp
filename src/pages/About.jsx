import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className=' text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className=' text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className=' w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className=' flex flex-col justify-center gap-6 w-2/4 text-sm text-gray-600'>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, deleniti. Iste maxime fugit impedit quos harum, accusamus at quo quibusdam ipsa assumenda aperiam, temporibus ducimus mollitia? Odit nostrum, consequatur in nesciunt illum est delectus!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quas deserunt non, laboriosam architecto voluptates quia, sunt veritatis dolorum tenetur dolore, esse illum quaerat asperiores quidem provident pariatur enim. Hic nihil voluptate magni tenetur ducimus inventore voluptas commodi? A deleniti quam accusamus asperiores, fuga est!</p>
          <b className=' text-gray-800'>Our vison</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem cupiditate numquam asperiores amet. Quod, nam adipisci sed aut sit libero!</p>
        </div>
      </div>
      <div className=' text-xl my-4'>
        <p>WHY <span className=' text-gray-700 font-semibold'>CHOOSE US</span> </p>
      </div>
      <div className=' flex flex-col md:flex-row mb-20'>
        <div className=' border px-10 md:py-16 py-8 sm:py-16 flex flex-col  gap-5 text-[15px] hover:bg-primary hover:text-white text-gray-600 transition-all duration-300 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Streamliend appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className=' border px-10 md:py-16 py-8 sm:py-16 flex flex-col  gap-5 text-[15px] hover:bg-primary hover:text-white text-gray-600 transition-all duration-300 cursor-pointer'>
        <b>Convenience:</b>
        <p>Access to a network of trusted helthcare professionnal in your area.</p>
        </div>
        <div className=' border px-10 md:py-16 py-8 sm:py-16 flex flex-col  gap-5 text-[15px] hover:bg-primary hover:text-white text-gray-600 transition-all duration-300 cursor-pointer'>
        <b>Personalization:</b>
        <p>Tailored recommendations and reminders to help you stay on of your health.</p>
        </div>
      </div>
    </div>
  )
}

export default About