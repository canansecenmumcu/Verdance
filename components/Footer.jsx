import Link from 'next/link'
import { Link as ScrollLink } from "react-scroll"
import Logo from './ui/Logo'

export default function Footer({ scrollToAbout }) {
    return (
        <div className='bg-[#161612] ' >
            <div className='container mx-auto  '>
                <div className='pt-[80px] px-10 pb-16' >
                    <div className='mb-[80px]'>
                        <button className='text-secondary font-jost text-[28px] px-[420px] py-[31px] border rounded-full border-secondary ' >info@example.com</button>
                    </div>

                    <div className='flex flex-row justify-between items-center text-secondary mb-12' >
                        <div >
                            <ScrollLink
                                to="header-section"
                                smooth={true}
                                duration={500}
                                className='cursor-pointer underline  '
                            >
                                <Logo  />
                            </ScrollLink>
                        </div>
                        <div className='' >
                            <ul className='flex space-x-8 mr-0 pr-0 text-base font-jost text-third' >
                                <li className="underline-effect text-secondary" >
                                    <button onClick={scrollToAbout} >
                                        About
                                    </button>
                                </li>
                                <li className="underline-effect text-secondary" >
                                    <ScrollLink
                                        to="services-section"
                                        smooth={true}
                                        duration={500}
                                        className='cursor-pointer '
                                    >
                                        Services
                                    </ScrollLink>
                                </li>
                                <li className="underline-effect text-secondary" >
                                    <ScrollLink
                                        to="gallery-section"
                                        smooth={true}
                                        duration={500}
                                        className='cursor-pointer '
                                    >
                                        Gallery
                                    </ScrollLink>
                                </li>
                                <li className="underline-effect text-secondary" >
                                    <ScrollLink
                                        to="faq-section"
                                        smooth={true}
                                        duration={500}
                                        className='cursor-pointer '
                                    >
                                        FAQ
                                    </ScrollLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-full h-[2px] bg-[#CCCCCC] flex justify-center ' ></div>
                    <div className='flex flex-row justify-between items-center text-secondary mt-12' >
                        <div>
                            <p className='text-2xl font-montaga' >© 2024 Verdance Template</p>
                        </div>
                        <div className='flex gap-8' >
                            <p>Template made by
                                <Link href="https://www.sebadam.com/"  > Sebadam</Link>
                            </p>
                            <p>Built in
                                <Link href="https://www.framer.com/?via=sebadam"  > Framer</Link>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
