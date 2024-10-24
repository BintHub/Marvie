import React from 'react'
import { Image } from 'cloudinary-react'
import { FaRegStar } from 'react-icons/fa';
import { Ourmenu } from './Ourmenu';



const Menu = () => {
  return (
    <>
     <div className='relative flex w-full h-full mt-40 md:mt-10 lg:mt-20'>
      {/* bg image */}
    <Image className='absolute w-full h-full' loading='lazy' cloudName="dml48ptj8" 
      publicId= "https://res.cloudinary.com/dml48ptj8/image/upload/v1729623790/menubg_uei6n4.jpg" >
      </Image>
      <div className='absolute font-redHatDisplay text-center mt-10 top-0 left-5 sm:left-20 md:left-1/4 lg:left-[30%]'>
      <h1 className=" font-bold text-2xl text-primary py-4 ">Our Menu</h1>
      <p className=' font-normal text-lg text-black '>Lorem ipsum dolor sit amet consectetur. A ac amet tincidunt nunc porttitor <br /> dignissim adipiscing. Odio suspendisse ac aliquam eget condimentum.</p>
      </div>
     {/* cards */}
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-auto mt-72'>
      <div>
      <div className='flex flex-col gap-6 w-[290px] h-[380px] relative px-6 py-8 shadow-md text-white rounded-tl-[70px] rounded-br-[70px] bg-primary '>
      <Image className=' absolute left-[15%] -top-20 w-[215px] h-[221px]'  loading='lazy' cloudName="dml48ptj8" 
       publicId="https://res.cloudinary.com/dml48ptj8/image/upload/v1729488543/unsplash_vg2p2BK57bY_nhup1w.png"/>
        <div className='text-center mt-32'>
        <h1 className='font-bold text-2xl text-center '>Spaghetti Confetti</h1>
               <p className='font-medium text-sm text-center  py-8'>Lorem ipsum dolor sit amet consectetur. Est orci arcu dignissim vestibulum.</p>
               <div className='flex justify-between font-medium text-xl '>
                <div className='flex gap-2'>
                  <FaRegStar/>
                  <p>4.5</p>
                </div>
                <div>4000</div>
               </div>
          </div>
        </div>
      </div>
      <div>
      <div className='flex flex-col gap-6 w-[290px] h-[380px] relative mt-20 md:mt-0 px-6 py-8 shadow-md text-primary rounded-tl-[70px] rounded-br-[70px] bg-secondary '>
      <Image className=' absolute left-[15%] -top-20 w-[215px] h-[221px]'  loading='lazy' cloudName="dml48ptj8" 
       publicId="https://res.cloudinary.com/dml48ptj8/image/upload/v1729488478/unsplash_SqYmTDQYMjo_izjrjm.png"/>
        <div className='text-center mt-32'>
        <h1 className='font-bold text-2xl text-center '>Robaked Sandwich</h1>
               <p className='font-medium text-sm text-center  py-8'>Lorem ipsum dolor sit amet consectetur. Est orci arcu dignissim vestibulum.</p>
               <div className='flex justify-between font-medium text-xl '>
                <div className='flex gap-2'>
                  <FaRegStar/>
                  <p>4.2</p>
                </div>
                <div>6000</div>
               </div>
          </div>
        </div>
      </div>
      <div>
      <div className='flex flex-col gap-6 w-[290px] h-[380px] mt-20 lg:mt-0 relative px-6 py-8 shadow-md text-white rounded-tl-[70px] rounded-br-[70px] bg-primary '>
      <Image className=' absolute left-[15%] -top-20 w-[215px] h-[221px]'  loading='lazy' cloudName="dml48ptj8" 
       publicId="https://res.cloudinary.com/dml48ptj8/image/upload/v1729488478/unsplash_zBONkjGFGko_rnlewj.png"/>
        <div className='text-center mt-32'>
        <h1 className='font-bold text-2xl text-center '>Dream Salad</h1>
               <p className='font-medium text-sm text-center  py-8'>Lorem ipsum dolor sit amet consectetur. Est orci arcu dignissim vestibulum.</p>
               <div className='flex justify-between font-medium text-xl '>
                <div className='flex gap-2'>
                  <FaRegStar/>
                  <p>4.7</p>
                </div>
                <div>5300</div>
               </div>
          </div>
        </div>
      </div>
      <div>
      <div className='flex flex-col gap-6 w-[290px] h-[380px] mt-20 lg:mt-0 relative px-6 py-8 shadow-md text-white rounded-tl-[70px] rounded-br-[70px] bg-primary '>
      <Image className=' absolute left-[15%] -top-20 w-[215px] h-[221px]'  loading='lazy' cloudName="dml48ptj8" 
       publicId="https://res.cloudinary.com/dml48ptj8/image/upload/v1729488478/bowl-5_bka6k3.png"/>
        <div className='text-center mt-32'>
        <h1 className='font-bold text-2xl text-center '>Pepper Egg Salad</h1>
               <p className='font-medium text-sm text-center  py-8'>Lorem ipsum dolor sit amet consectetur. Est orci arcu dignissim vestibulum.</p>
               <div className='flex justify-between font-medium text-xl '>
                <div className='flex gap-2'>
                  <FaRegStar/>
                  <p>4.2</p>
                </div>
                <div>6000</div>
               </div>
          </div>
        </div>
      </div>
     </div>
     {/* card end */}
    </div>

    </>
  )
}

export default Menu