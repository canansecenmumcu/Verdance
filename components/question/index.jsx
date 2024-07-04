import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';


export default function Question({ id,click, isOpen, liste, }) {
  return (
    <div className={` ${isOpen ? "h-[104px]" : "h-[64px]" } w-[540px]  flex items-center mb-[12px] cursor-pointer `} onClick={()=>click(id)}  >
      <div className='h-full w-[2px] bg-third mr-[22px] ' ></div>
      <div className='container' >
        <div className='flex !justify-between items-center ' >
          <div id={liste.id} >
            <p className='font-montaga text-2xl text-primary ' >{liste.question}</p>
          </div>
          <div>
            <FontAwesomeIcon className='p-1 border-2 rounded-full text-gray-500 bg-blue ' icon={isOpen ? faMinus : faPlus} />
          </div>
        </div>
        {isOpen && <div className='mt-8 text-[#333333] font-jost text-base  ' >{liste.content}</div>}
      </div>
    </div>
  )
}
