import React from 'react'
import ServiceCard from './serviceCard'

const Services = React.forwardRef((props,ref) => {
  return (
    <div ref={ref} id="services-section" className='bg-secondary py-[120px] px-10 ' >
      <div className='container mx-auto' >
        <div className='flex justify-center items-center mb-8' >
          <div className='h-0.5 w-16 bg-primary mr-4 ' ></div>
          <div className='mr-4' >
            <p className='font-jost text-primary text-base ' >WHAT WE DO</p>
          </div>
          <div className='h-0.5 w-16 bg-primary ' ></div>
        </div>
        <div className='items-center flex justify-center ' >
          <h2 className='font-montaga text-[54px] text-primary ' >This is what we’re best at</h2>
        </div>
        <div className=' mt-6' >
          <ServiceCard />
        </div>
      </div>
    </div>
  )
});

Services.displayName = 'Services';

export default Services;
