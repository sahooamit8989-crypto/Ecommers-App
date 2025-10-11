import React from 'react'

const Newsletter = () => {
    const onSubmitHandler=(e)=>{
        e.preventDefault()
        
    }
  return (
    <div className='text-center'>
          <p className='text-2xl font-medium text-gray-800 '>Subscribe now & get 20% off</p>
          <p className='text-gray-400 mt-3'>Shop the latest trends and essentials at unbeatable prices — fast, easy, and delivered to your doorstep.</p>
          <form  onClick={onSubmitHandler}  className='flex w-full sm:w-1/2 items-center gap-3 mx-auto my-6 border pl-3'>
            <input type="email" placeholder='Enter your email'  required className='w-full sm:flex-1 outline-none'/>
            <button type='submit'  className='bg-black text-white px-10 text-sm py-4 cursor-pointer'>SUBSCRIBE</button>
          </form>
    </div>
  )
}

export default Newsletter