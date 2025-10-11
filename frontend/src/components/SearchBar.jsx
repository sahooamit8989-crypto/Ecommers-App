
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {
  const { showSearch, setShowSearch, search, setSearch } = useContext(ShopContext)
  const [visible,setVisible]=useState(false)
  const location=useLocation();

  useEffect(()=>{
     if(location.pathname.includes('collection')){
        setVisible(true)

     }else{
        setVisible(false)
     }
  },[location])

  return showSearch && visible ? (
    <div className='relative bg-gray-50 py-4 flex justify-center'>
      
      {/* Search container */}
      <div className='relative w-11/12 sm:w-1/2'>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type='text'
          placeholder='Search products...'
          className='w-full px-4 py-2 pr-10 rounded-full border border-gray-300 shadow-sm text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition'
        />
        <img
          src={assets.search_icon}
          alt='search'
          className='absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400'
        />
        <button
          onClick={() => setShowSearch(false)}
          className='absolute -right-10 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-800 transition'
        >
          <img src={assets.cross_icon} alt='close' className='w-4 h-4' />
        </button>
      </div>
    </div>
  ) : null
}

export default SearchBar
