import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import Newsletter from '../components/Newsletter'

const About = () => {
  
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"ABOUT"} text2={"US"}/>

      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px] ' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Welcome to our online store! We bring you a wide range of high-quality products at affordable prices. From fashion and accessories to electronics and home essentials, we have everything you need in one place. Our goal is to make your shopping experience easy, secure, and enjoyable. Shop with confidence and discover the joy of online shopping!</p>
        <p>Your one-stop destination for fashion, gadgets, and more at great prices.
         Shop smart, shop easy, and enjoy fast, reliable service every time!</p>
         <b className='text-gray-800'>Our Mission</b>
         <p>Welcome to our store — where style meets convenience! Explore a wide range of products, from trendy fashion to everyday essentials. Enjoy great deals, fast delivery, and a shopping experience made just for you.</p>
        </div>

      </div>
      <div className='text-xl py-4'>
        <Title text1={"WHY"} text2={"CHOOSE US"}/>

      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='  px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'> At our store, quality comes first. Every product is carefully selected and tested to ensure it meets the highest standards. We work with trusted suppliers to bring you reliable, durable, and top-quality items — because your satisfaction is our priority.</p>
        </div>
         <div className=' px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>We make shopping simple and hassle-free. With an easy-to-use website, secure payment options, and fast delivery, you can shop anytime, anywhere. Enjoy a smooth and convenient experience from browsing to checkout.</p>
        </div>

        <div className=' px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our customers are at the heart of everything we do. Our dedicated support team is always ready to assist you with any questions or concerns. We strive to provide friendly, fast, and reliable service to make your shopping experience exceptional every time.</p>
        </div>

      </div>
      <Newsletter/>

    </div>
  )
}

export default About