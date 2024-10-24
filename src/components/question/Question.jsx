import React from 'react'
import { useState } from 'react'
import { Faqs } from '../question/Faqs'
import arrUp from '../../assets/arrup.svg'
import arrDown from '../../assets/arrdown.svg'
import { motion,AnimatePresence } from 'framer-motion'


const Question = () => {
  const [view,setVeiw] = useState(null);

  
  return (
    <>
    <div >
     <h1 className="text-center font-redHatDisplay font-bold text-2xl text-primary py-5">Frequently Asked Questions</h1>
    
        <div className= 'p-4 lg:mx-14'>
          {Faqs.map((faq) =>(
            <div key={faq.id} className='mb-4 rounded-md last:mb-0 bg-secondary shadow-md'onClick={() =>setVeiw(view === faq.id ? null : faq.id)}>
              <button className='w-full text-left text-xl focus:outline-none p-4  items-center'
              >
                <div className='flex justify-between font-redHatDisplay font-semibold text-2xl'>
                {faq.question}
                {view === faq.id ? <img src={arrUp}/>:<img src={arrDown}/> }
                </div>
                <div >
                <AnimatePresence>
                  <hr />
                {view === faq.id && (
                  <motion.div initial={{opacity: 0, height: 0}} animate={{opacity: 1, height: 1}}
                  exit={{opacity: 0, height: 0}} className='py-4 font-redHatDisplay font-medium text-sm'>
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
                </div>
              </button>
            </div>
          ))}
        </div>
    </div>
    </>
  )
}

export default Question