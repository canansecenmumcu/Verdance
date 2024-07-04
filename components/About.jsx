import React from 'react';
import Image from 'next/image'

const About = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className='bg-[#161612] min-h-screen py-[120px] px-10 ' >
      <div className='container mx-auto px-10 ' >

        <div className="flex items-center mb-8">
          <div className="h-[1px] w-14 bg-secondary mr-3"></div>
          <h2 className="text-base text-secondary font-jost ">FURNITURE DESIGN STUDIO</h2>
        </div>

        <div className='flex gap-8 items-start mb-8 ' >
          <div className='flex-1'  >
            <h2 className='font-montaga text-[54px] text-secondary ' >Where Design</h2>
            <h2 className='font-montaga text-[54px] text-secondary ' >Meets Comfort</h2>
          </div>
          <div className='flex-1' >
            <button className='btn-primary !text-secondary !border-secondary ' >Get a quote</button>
          </div>
        </div>

        <div className='text-[#CCCCCC] flex text-lg font-jost gap-8 mb-16 ' >
          <p>Verdance is a testament to bespoke craftsmanship, where every piece tells a story of innovation and elegance. Our passion lies in curating timeless furniture designs that resonate with discerning tastes. With meticulous attention to detail, we craft pieces that transform spaces into personalized sanctuaries of comfort and style.</p>
          <p>At Verdance, we blend creativity and functionality to redefine modern living. With a focus on quality craftsmanship and personalized service, we strive to exceed expectations in every project. Our commitment to excellence ensures that each furniture piece not only enhances spaces but also reflects the unique personality and lifestyle of our clients.</p>
        </div >
        
        <div className='flex justify-between ' >
          <Image src="/images/livingroom.png" alt="" width={683} height={500} className='clip-path-custombl' />
          <div className='flex flex-col gap-y-9 ' >
            <Image src="/images/handle.png" alt="" width={325} height={180} />
            <Image src="/images/sofa.png" alt="" width={325} height={187} className='clip-path-custombr' />
          </div>
        </div>

      </div>
    </div>
  )
});

About.displayName = "About";

export default About;



