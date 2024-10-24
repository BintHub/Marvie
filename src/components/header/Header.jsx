import React from 'react'
import { Image } from 'cloudinary-react'

const Header = () => {
  return (
    <>
    <div className='relative w-full h-[605px] flex flex-col'>
      <Image className='absolute w-full h-[605px]' loading='lazy' cloudName="dml48ptj8" 
      publicId= "https://res.cloudinary.com/dml48ptj8/image/upload/v1729488479/mobileV_cddhj7.png" >
      </Image>
      <Image className='hidden md:flex absolute w-full h-[605px]' loading='lazy' cloudName="dml48ptj8" 
      publicId= "https://res.cloudinary.com/dml48ptj8/image/upload/v1729488479/desktopV_jnhlnz.png" >
      </Image>
      <Image className='hidden lg:flex absolute w-full h-[605px]' loading='lazy' cloudName="dml48ptj8" 
      publicId= "https://res.cloudinary.com/dml48ptj8/image/upload/v1729623791/hero_jqttpp.png" >
      </Image>
       {/* overlay */}
       <div className='absolute flex flex-col ml-10 mt-10 md:mt-20'>
         <div className=''>
          <h1 className='font-bold text-white font-redHatDisplay w-56 lg:w-[433px] text-[30px] lg:text-[44px]'>Taste Your Heart in Every Bite You Take</h1>
          <h1 className='font-normal text-white font-redHatDisplay text-sm w-64 md:w-[300px] lg:w-[433px] md:text-lg py-4'>Lorem ipsum dolor sit amet consectetur. A ac amet tincidunt nunc porttitor dignissim adipiscing. Odio suspendisse ac aliquam eget condimentum. Magna  commodo condimentum urna rhoncus.</h1>
         <div className='lg:py-8'>
          <button className='h-10 w-52 lg:w-32  border rounded-[10px] px-2 bg-primary font-normal font-redHatDisplay text-xl text-white mt-3'>Order Now</button>
         </div>
       </div>
     </div>
    </div>
  </>
  )
}

export default Header