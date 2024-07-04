import React, { useState } from 'react'
import Question from './question'


const list = [
  {
    id: 1,
    question: "Where are you located?",
    content: "We are based in San Francisco, California."
  },
  {
    id: 2,
    question: "Do you offer custom furniture design?",
    content: "Yes, we specialize in creating bespoke furniture tailored to your needs."
  },
  {
    id: 3,
    question: "How long does it take to receive custom furniture?",
    content: "The timeline varies depending on the project; please contact us for specific details"
  },
  {
    id: 4,
    question: "What is your design philosophy?",
    content: "Our philosophy combines innovation, elegance, and sustainability to create timeless furniture pieces."
  },
  {
    id: 5,
    question: "How can I contact you?",
    content: "You can contact us through our website's contact form or email us at info@example.com."
  }
];

const Faq = React.forwardRef((props, ref) => {

  
  const [activeId, setActiveId] = useState(null)

  const handleClick = (id) => {
    setActiveId(id === activeId ? null : id)
  }
  return (
    <div id="faq-section" className='container mx-auto' >
      <div className='py-[120px] px-10 flex justify-between gap-x-10 ' >
        <div className='flex-1 gap-6 ' >
          <div className='flex items-center' >
            <div className="h-[2px] w-16 bg-primary mr-3"></div>
            <p className='mr-3' >FAQ</p>
            <div className="h-[2px] w-16 bg-primary"></div>
          </div>
          <div>
            <p className='font-montaga text-[54px] min-w-5 ' >Frequently Asked Questions</p>
          </div>
        </div>
        <div className='flex-1 ' >
          {list.map((item) => {
            return (
              <Question
                key={item.id}
                id={item.id}
                liste={item}
                isOpen={item.id === activeId}
                click={handleClick}
              />
            )
          }
          )}
        </div>
      </div>
    </div>
  )
} )

Faq.displayName = "Faq";
export default Faq;