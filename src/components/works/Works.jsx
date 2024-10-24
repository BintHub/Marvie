import React from 'react'
import bowl from '../../assets/bowl.svg'
import phone from '../../assets/phone.svg'
import meal from '../../assets/meal.svg'

const Works = () => {
  return (
    <>
      <div className="text-center items-center justify-center mt-20">
        <h1 className="font-redHatDisplay font-bold text-2xl text-primary py-10">
          How it Works
        </h1>
        {/* cards */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-center justify-center">
          <div className="bg-white w-80 h-[400px] p-10  rounded-lg shadow-lg text-black">
            <img className='mx-auto pb-4' src={bowl} alt="food" />
            <h1 className='font-redHatDisplay font-semibold text-2xl py-6'>Choose Your Meal</h1>
            <p className='font-medium text-sm font-redHatDisplay py-3'>Lorem ipsum dolor sit amet consectetur. Est     pellentesque quis ornare senectus consectetur quisque in. Scelerisque ipsum ipsum nisi.</p>
          </div>
          <div className="bg-primary w-80 h-[400px] p-10  rounded-lg shadow-lg text-white">
            <img className='mx-auto pb-4' src={phone} alt="phone" />
            <h1 className='font-redHatDisplay font-semibold text-2xl py-6'>Order Via App</h1>
            <p className='font-medium text-sm font-redHatDisplay py-3'>Lorem ipsum dolor sit amet consectetur. Est pellentesque quis ornare senectus consectetur quisque in. Scelerisque ipsum ipsum nisi.</p>
          </div>
          <div className="bg-white w-80 h-[400px] p-10  rounded-lg shadow-lg text-black">
            <img className='mx-auto pb-4' src={meal} alt="food" />
            <h1 className='font-redHatDisplay font-semibold text-2xl py-6'>Enjoy Your Meal</h1>
            <p className='font-medium text-sm font-redHatDisplay py-3'>Lorem ipsum dolor sit amet consectetur. Est pellentesque quis ornare senectus consectetur quisque in. Scelerisque ipsum ipsum nisi.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Works