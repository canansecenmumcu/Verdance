import Image from 'next/image'
import React from 'react'

const Gallery = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} id="gallery-section"  className='bg-primary min-h-screen py-[120px] px-10 flex flex-col gap-y-8 text-secondary ' >
      <div className='flex justify-center items-center text-secondary' >
        <div className='h-0.5 w-4 bg-secondary mr-4 ' ></div>
        <div className='mr-4' >
          <p className='font-jost  text-base text-secondary ' >OUR WORK</p>
        </div>
        <div className='h-0.5 w-4 bg-secondary ' ></div>
      </div>
      <div className='items-center flex justify-center ' >
        <h2 className='font-montaga text-[54px] text-secondary '>More of our work</h2>
      </div>
      
      <div className='container mx-auto ' >
        <div className='flex justify-between gap-4 mb-4 ' >
          <Image alt="" src="/images/brownsofa.jpg" width={741} height={400} className='clip-path-customtl' />
          <Image alt="" src="/images/bed.jpg" width={741} height={400} className='clip-path-customtr' />
        </div>
        <div className='flex justify-between mb-4 ' >
          <Image alt="" src="/images/cabinet.jpg" width={562} height={562} />
          <Image alt="" src="/images/woodensofa.jpg" width={562} height={562} />
        </div>
        <div className='flex justify-between gap-4 mb-4 ' >
          <Image alt="" src="/images/woodenbench.jpg" width={741} height={400} />
          <Image alt="" src="/images/whitesofa.jpg" width={741} height={400} />
        </div>
        <div className='flex justify-between mb-4 ' >
          <Image alt="" src="/images/tallboy1.jpg" width={562} height={562} className='clip-path-custombl2'/>
          <Image alt="" src="/images/tallboy2.jpg" width={562} height={562} className='clip-path-custombr2'/>
        </div>
      </div>

    </div>
  )
})

Gallery.displayName = 'Gallery';

export default Gallery;
