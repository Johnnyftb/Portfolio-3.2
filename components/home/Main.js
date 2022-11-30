import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const Main = () => {

    return (
        <main className='h-[60vh] fade-in'>
            <div className="h-full w-full font-main text-dark px-16 flex items-center justify-around">
                <div className="text-center xl:text-start">
                    <h1 className="text-5xl md:text-6xl font-heading">Hey, I'm <span className="text-purple">John</span>👋</h1>
                    <p className="text-gray text-xl md:text-2xl w-[30ch] md:w-[45ch] mt-4">I'm a full-stack web developer based in Australia and I love building applications for individuals, projects & companies.</p>
                    <Link href="/contact" className="flex items-center justify-center xl:justify-start mt-4">
                        <p className="contact text-2xl md:text-3xl text-purple font-heading">Let's Work </p>
                        <FaArrowRight className="text-purple text-2xl md:text-3xl ml-2 slide"/>
                    </Link>
                    
                </div>
                <div className="hidden xl:block">
                    <img src="/assets/2.png" alt="" className='h-[40vh]'/>
                </div>
            </div>
        </main>
    )
}

export default Main