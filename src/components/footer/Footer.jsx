import React from 'react'
import { Foot } from '../footer/Foot'
import { useState } from 'react'
import { motion,AnimatePresence } from 'framer-motion'
import food from '../../assets/food.svg'
import x from '../../assets/twi.svg'
import fb from '../../assets/fb.svg'
import insta from '../../assets/insta.svg'
import arrUp from '../../assets/arrup.svg'
import arrDown from '../../assets/arrdown.svg'
import link from '../../assets/lin.svg'

const Footer = () => {
  const [show,setShow] = useState(null);

  return (
    <>
     <div className='bg-tertiary mt-10'>
      <div className='font-redHatDisplay grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 ml-10 '>
        <div>
          <div className='flex flex-wrap'>
          <img className='bg-primary w-[30px] h-[30px] mt-4 p-1 mr-1' src={food}  alt="foodbowl" />
          <p className=' text-white font-bold text-[26px] pt-3'>Marvie Foods</p>
          </div>
          <div className='text-white font-normal text-lg py-6 w-64'>
            <p>Lorem ipsum dolor sit amet consectetur. A ac amet tincidunt nunc porttitor dignissim adipiscing. Odio suspendisse ac aliquam eget condimentum. Magna commodo condimentum urna rhoncus.</p>
          </div>
          <div className='flex gap-4'>
            <img src={x}/>
            <img src={fb}/>
            <img src={insta}/>
            <img src={link}/>
          </div>
        </div>
        {/* mobile view */}
        <div className= 'text-white mt-4 md:hidden pr-6 -ml-4'>
          {Foot.map((f) =>(
            <div key={f.id} className='mb-2 rounded-md last:mb-0'>
              <button className='w-full text-left text-xl focus:outline-none p-4  items-center'>
                <div className='flex justify-between font-redHatDisplay font-semibold text-2xl' onClick={() =>setShow(show === f.id ? null : f.id)}>
                {f.title}
                {show === f.id ? <img src={arrUp}/>:<img src={arrDown}/> }
                </div>
                <div >
                <AnimatePresence>
                {show === f.id && (
                  <motion.div initial={{opacity: 0, height: 0}} animate={{opacity: 1, height: 1}}
                  exit={{opacity: 0, height: 0}} className='py-4 font-redHatDisplay font-medium text-lg'>
                    <p>{f.info}</p>
                    <hr />
                    <p>{f.disca}</p>
                    <hr />
                    <p>{f.discb}</p>
                    <hr />
                    <p>{f.discc}</p>
                    <hr />
                    <p>{f.discd}</p>
                  </motion.div>
                )}
              </AnimatePresence>
                </div>
              </button>
            </div>
          ))}
        </div>
        {/* end */}
        <div className='hidden md:block lg:ml-10 '>
          <h1 className='text-white font-bold text-2xl mt-6'>Quick Links</h1>
          <div className='text-white font-semibold text-lg py-6'>
            <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>About</li>
            <li>Testimonial</li>
            <li>Gallery</li>
            </ul>
          </div>
        </div>
        <div className='hidden md:mt-10 md:block lg:mt-5'>
        <h1 className='text-white font-bold text-2xl'>Opening hours</h1>
          <div className='text-white font-semibold text-lg py-6'>
          <p>Mon - Fri :  09:00am - 09:00pm</p>
          <p>Saturday: 09:00am - 08:00pm</p>
          <p>Sunday: 12:00pm - 08:00pm</p>
          </div>
        </div>
        <div className='hidden md:mt-10 md:block lg:mt-5 lg:ml-3'>
        <h1 className='text-white font-bold text-2xl'>Contact us</h1>
          <div className='text-white font-semibold text-lg py-6'>
          <p>Hiltop Close, G.R.A,<br /> Port Harcourt.</p>
          <p>+234 901 234 5678</p>
          <p>marviefoods@marich.com</p>
          </div>
        </div>
      </div>
      <hr />
      <div className='font-redHatDisplay font-normal text-lg text-white text-center py-2'>
        <p>Copyright @2024</p>
      </div>
     </div>

    </>
  )
}

export default Footer