import React from 'react'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>

      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>
            We are a modern fashion e-commerce platform dedicated to bringing you stylish,
            high-quality clothing that fits effortlessly into your everyday life. Our
            collections are carefully curated to reflect the latest trends while maintaining
            comfort, durability, and timeless appeal.
          </p>

          <p>
            From casual essentials to statement pieces, we believe fashion should be accessible,
            expressive, and confidence-boosting. Every product we offer is designed with attention
            to detail, ensuring a perfect balance between style and functionality.
          </p>

          <b className='text-gray-800'>Our Mission</b>
          <p>
            Our mission is to empower individuals through fashion by offering thoughtfully
            designed apparel that combines modern trends, reliable quality, and everyday comfort.
            We strive to create a seamless shopping experience that inspires confidence and
            self-expression.
          </p>


        </div>
      </div>
      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>
            We prioritize quality at every step, from fabric selection to final stitching.
            Each product undergoes careful checks to ensure it meets our standards for comfort,
            durability, and long-lasting wear.
          </p>


        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>
            Our platform is designed for a smooth and hassle-free shopping experience, making it
            easy to browse, select, and order your favorite styles anytime, anywhere.
          </p>

          
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>
            Customer satisfaction is at the heart of what we do. Our support team is always ready
            to assist you with queries, ensuring a reliable and enjoyable shopping journey.
          </p>

          
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About
