import React from 'react'
import { Image } from 'cloudinary-react';
import {images} from '../../data/gallery.json'

const Gallery = () => {
  return (
    <>
      <div className='mt-10'>
        <h1 className="text-center font-redHatDisplay font-bold text-2xl text-primary py-5">Our Gallery</h1>
        <div className='items-center w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:px-10'>
          <div> 
            <Image className='w-full p-6' loading='lazy'
             cloudName= {images.cloudName}
             publicId= {images.image1.url} />
            <Image className='w-full p-6' loading='lazy'
             cloudName= {images.cloudName}
             publicId= {images.image2.url} />
            </div>

            <div>
            <Image className='w-full p-6' loading='lazy'
             cloudName= {images.cloudName}
             publicId= {images.image3.url} />
              </div>

              <div>
             <Image className='w-full p-6' loading='lazy'
              cloudName= {images.cloudName}
              publicId= {images.image4.url} />
            </div>
            
            <div>
             <Image className='w-full p-6' loading='lazy'
              cloudName= {images.cloudName}
              publicId= {images.image5.url} />
             <Image className='w-full p-6' loading='lazy'
              cloudName= {images.cloudName}
              publicId= {images.image6.url} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Gallery
