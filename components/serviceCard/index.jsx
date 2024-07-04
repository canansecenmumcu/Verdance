import Image from 'next/image'
import React from 'react'

export default function ServiceCard() {
    return (
        <div className='container mx-auto grid grid-flow-col ' >
            <div className=' border rounded px-10 py-8 ' >
                <div className='mb-8' >
                    <Image alt='' src="/images/chair.jpg" width={28} height={48} />
                </div>
                <div className='mb-8' >
                    <h3 className='text-[32px] font-montaga text-primary mb-8 ' >Chairs</h3>
                    <p className='text-base font-jost text-[#333333] '  >Discover unique chairs that blend comfort and style. Handcrafted with attention to detail, these chairs ensure elegance in any space.</p>
                </div>
                <div className='mb-8'>
                    <button className='quote-button' >GET A QUOTE</button>
                </div>
            </div>

            
            <div className=' border rounded px-10 py-8 ' >
                <div className='mb-8' >
                    <Image alt='' src="/images/table.jpg" width={28} height={48} />
                </div>
                <div className='mb-8' >
                    <h3 className='text-[32px] font-montaga text-primary mb-8 ' >Tables</h3>
                    <p className='text-base font-jost text-[#333333] '  >Tables with precision and design. Crafted from high-quality materials, they bring functionality and aesthetics to your home or office.</p>
                </div>
                <div className='mb-8'>
                    <button className='quote-button' >GET A QUOTE</button>
                </div>
            </div>

            
            <div className=' border rounded px-10 py-8 ' >
                <div className='mb-8' >
                    <Image alt='' src="/images/tinysofa.jpg" width={28} height={48} />
                </div>
                <div className='mb-8' >
                    <h3 className='text-[32px] font-montaga text-primary mb-8 ' >Sofas</h3>
                    <p className='text-base font-jost text-[#333333] '>Experience luxury and comfort with our sofas. Designed for maximum comfort, these sofas add style to any interior.</p>
                </div>
                <div className='mb-8'>
                    <button className='quote-button' >GET A QUOTE</button>
                </div>
            </div>

            


        </div>
    )
}
