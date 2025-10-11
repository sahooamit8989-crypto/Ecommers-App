import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>Shop the latest trends and essentials at unbeatable prices — fast, easy, and delivered to your doorstep Shop the latest trends and essentials at unbeatable prices — fast, easy, and delivered to your doorstep..</p>
            
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col mb-5'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col mb-5'>
                <li>+1-212-34-455-023</li>
                <li>sahoo@1234gmail.com</li>
            </ul>

        </div>
        </div>
        <div >
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@ forever.com -All Right Reserver.</p>
        </div>

    </div>
  )
}

export default Footer