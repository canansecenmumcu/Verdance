import React from 'react'
import Logo from './ui/Logo'
import { Link } from "react-scroll"
import Image from "next/legacy/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Statistics from './Statistics';


const Header =React.forwardRef((props, ref) => {
  return (
    <div  ref={ref} id="header-section" >
      <div className=" container mx-auto py-4 " >
        <nav className="flex justify-between bg-red items-center ">
          <Logo />
          <ul className="flex gap-x-5 ">
            <button className="underline-effect text-[#1C1B17]" onClick={props.scrollToAbout} >
              About
            </button>
            <li className="underline-effect text-[#1C1B17]" >
              <Link
                to="services-section"
                smooth={true}
                duration={500}
                className='cursor-pointer '
              >
                Services
              </Link>
            </li>
            <li className="underline-effect text-[#1C1B17]" >
              <Link
                to="gallery-section"
                smooth={true}
                duration={500}
                className='cursor-pointer '
              >
                Gallery
              </Link>
            </li>
            <li className="underline-effect text-[#1C1B17]" >
              <Link
                to="faq-section"
                smooth={true}
                duration={500}
                className='cursor-pointer '
              >
                FAQ
              </Link>
            </li>
          </ul>
          <button className='btn-primary' >Get Template</button>
        </nav>
      </div>

      <hr className="border-t-2 border-gray-400" />

      <main className="flex justify-between gap-x-8 h-[700px] h w-full ">
        <div className="w-1/2 ml-10 mt-24 ">
          <div className="flex items-center mb-8">
            <div className="h-[1px] w-14 bg-primary mr-3"></div>
            <h2 className="text-base text-primary font-jost ">FURNITURE DESIGN STUDIO</h2>
          </div>
          <h2 className="text-[54px] font-montaga text-primary mb-7">Elevate your place with custom-made furniture</h2>
          <p className="font-jost text-xl text-[#333333] mb-8 ">
            Handcrafted furniture pieces with perfect attention to detail that will decorate your place.
          </p>
          {/* Buttons */}
          <div className="flex space-x-4 mb-8">
            <button className="bg-black text-white px-8 py-2 rounded-full font-jost ">Get a quote</button>
            <button className="border border-black px-4 py-2 rounded-full font-jost ">
              <FontAwesomeIcon icon={faPhone} /> 123456789
            </button>
          </div>
          <p className="mb-4">FOLLOW US ON SOCIAL MEDIA</p>
          <div className="flex space-x-4">
            <a href="#"><FontAwesomeIcon icon={faInstagram} className="text-2xl" /></a>
            <a href="#"><FontAwesomeIcon icon={faTiktok} className="text-2xl" /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} className="text-2xl" /></a>
          </div>
        </div>
        <div className="w-1/2 relative h-[700px] clip-path-custombl overflow-hidden ">
          <Image
            src="/images/home.png"
            alt="Furniture"
            layout="fill"
          />
        </div>
      </main>

      <footer className='container mx-auto py-20' >
        <Statistics />
      </footer>

    </div>
  )
});


Header.displayName = 'Header';
export default Header;