import React from 'react'
import food from '../../assets/food.svg'
import { Link } from 'react-router-dom';
import { useState } from 'react'

const Nav = () => {
    let [isMenuOpen,setIsMenuOpen] = useState(false);
 
  return (
    <>
     <div className='bg-white py-2 px-3'> 
     <ol className='flex flex-wrap items-center justify-around'>
        <li className='flex'>
           <img className='bg-primary w-[30px] h-[30px] mt-4 p-1 mr-1' src={food}  alt="foodbowl" />
           <p className='font-redHatDisplay text-black font-bold text-[26px] pt-3'>Marvie Foods</p>
        </li>
        <li className='hidden lg:flex flex-wrap items-center justify-between gap-10  m-4'>
           <Link className='text-black text-xl font-medium font-redHatDisplay hover:text-primary' to="/">Home</Link>
           <Link className='text-black text-xl font-medium font-redHatDisplay hover:text-primary' to="/about">About Us</Link>
           <Link className='text-black text-xl font-medium font-redHatDisplay hover:text-primary' to="/menu">Menu</Link>
           <Link className='text-black text-xl font-medium font-redHatDisplay hover:text-primary' to="/how">How it Works</Link>
           <Link className='text-black text-xl font-medium font-redHatDisplay hover:text-primary' to="/faqs">FAQs</Link>
           <Link className='text-black text-xl font-medium font-redHatDisplay hover:text-primary' to="/contact">Contact Us</Link>
        </li>
        <li className='hidden lg:flex text-center justify-between gap-10'>
        <button className='h-12 w-40 border rounded-[10px] px-2 py-2 text-white bg-primary text-lg font-medium font-redHatDisplay' to="/signIn">Sign in</button>
       </li>
        <li className='hidden md:flex ml-60 lg:hidden'>
        <button className='h-12 w-40 border rounded-[10px] px-2 py-2 text-white bg-primary text-lg font-medium font-redHatDisplay' to="/signIn">Sign in</button>
       </li>
       <div className='relative lg:hidden block text-5xl cursor-pointer' onClick={()=>setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ?<i class='bx bx-x bg-primary w-[47px] h-[45px] mt-2'></i> : <i class='bx bx-menu'></i> }
        </div>
        <div className={`absolute lg:hidden z-[100000000] top-24 left-0 w-full bg-white flex flex-col items-center justify-center text-base font-medium font-poppines transform transition-transform ${isMenuOpen ? 'opacity-100' :'opacity-0'}`}>
        <Link className='w-full text-xl font-medium font-redHatDisplay text-center p-3 hover:text-primary text-black transition-all cursor-pointer' to="/">Home</Link> 
        <Link className='w-full text-xl font-medium font-redHatDisplay text-center p-3 hover:text-primary text-black transition-all cursor-pointer' to="/about">About Us</Link>
        <Link className='w-full text-xl font-medium font-redHatDisplay text-center p-3 hover:text-primary text-black transition-all cursor-pointer' to="/menu">Menu</Link>
        <Link className='w-full text-xl font-medium font-redHatDisplay text-center p-3 hover:text-primary text-black transition-all cursor-pointer' to="/how">How it Works</Link>
        <Link className='w-full text-xl font-medium font-redHatDisplay text-center p-3 hover:text-primary text-black transition-all cursor-pointer'  to="/faqs">FAQs</Link>
        <Link className='w-full text-xl font-medium font-redHatDisplay text-center p-3 hover:text-primary text-black transition-all cursor-pointer' to="/contact">Contact Us</Link>
        <button className='md:hidden text-xl font-medium font-redHatDisplay text-center p-2 h-12 w-40  border rounded-[10px] bg-primary hover:text-black text-white transition-all cursor-pointer' to="/signIn">Sign in</button>
        </div>
      </ol>
    </div>
    </>
  )
}

export default Nav