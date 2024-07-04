import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

export default function Testimonial() {
    return (
        <div>
            <div className='container mx-auto   ' >
                <div className='flex flex-col justify-center items-center py-[120px] px-[40px] ' >
                    <div className='flex mb-8 ' >
                        <FontAwesomeIcon icon={faQuoteRight} className='text-[#908474] text-6xl' />
                    </div>
                    <div className='flex flex-col justify-center items-center text-center  ' >
                        <p className='font-montaga text-5xl text-primary mb-6 w-[512px] leading-[54px] ' >
                            Custom kitchen table is a game-changer!
                        </p>
                        <p className='text-lg font-jost text-[#333333] mb-10 w-[416px] ' >
                            Verdances bespoke kitchen table is a revolution! Seamless experience, flawless artistry.
                        </p>
                    </div>
                    <div className='flex justify-center items-center flex-col' >
                        <div className='relative w-16 h-16 rounded-full mb-4' >
                            <Image
                                src="/images/person.jpg"
                                alt=""
                                layout='fill'
                                className=' object-cover rounded-full'
                            />
                        </div>
                        <p className='mb-2 font-jost text-sm font-bold' >Samantha W.</p>
                        <p className=' font-jost text-sm ' >Chicago, IL</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
