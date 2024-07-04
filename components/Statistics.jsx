import React, { useState, useEffect } from 'react';

const Counter = ({ end, duration }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const incrementTime = 50; // milisaniye cinsinden artış süresi
        const totalIncrements = (duration * 1000) / incrementTime;
        const incrementAmount = end / totalIncrements;
    
        let start = 0;
    
        const timer = setInterval(() => {
          start += incrementAmount;
          setCount(Math.round(start));
          if (start >= end) clearInterval(timer);
        }, incrementTime);
    
        return () => clearInterval(timer);
      }, [end, duration]);

    return <p className='text-[40px] lg:text-[54px] font-montaga'>{count}+</p>;
};

const Statistics = () => {
    const duration = 2;
    return (
        <div className='lg:flex lg:flex-row grid grid-cols-2 lg:justify-between ' >
            <div className='flex flex-row items-end ' >
                <div className='h-12 w-1 border bg-primary mb-2 mr-4 ' ></div>
                <div>
                    <Counter end={15} duration={duration} />
                    <p className='text-base lg:text-[20px] font-jost text-primary' >Design Awards</p>
                </div>
            </div>
            <div className='flex flex-row items-end ' >
                <div className='h-12 w-1 border bg-primary mb-2 mr-4 ' ></div>
                <div>
                    <Counter end={100} duration={duration} />
                    <p className='text-base lg:text-[20px] font-jost text-primary' >Satisfied Customer </p>
                </div>
            </div>
            <div className='flex flex-row items-end ' >
                <div className='h-12 w-1 border bg-primary mb-2 mr-4 ' ></div>
                <div>
                    <Counter end={200} duration={duration} />
                    <p className='text-base lg:text-[20px] font-jost text-primary' >Pieces of furniture</p>
                </div>
            </div>
            <div className='flex flex-row items-end ' >
                <div className='h-12 w-1 border bg-primary mb-2 mr-4 ' ></div>
                <div>
                    <Counter end={1000} duration={duration} />
                    <p className='text-base lg:text-[20px] font-jost text-primary' >Unique ideas created</p>
                </div>
            </div>
        </div>

    );
};

export default Statistics;