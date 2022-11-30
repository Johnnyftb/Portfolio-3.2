import React from 'react'
import Image from 'next/image'

const Frontend = () => {
  return (
    <div className="fade-in w-full">
        <div className="flex flex-col items-center w-full text-center px-4 md:px-0">
            <img src="/assets/Frontend.png" alt="" className="h-[35vh]"/>
            <h1 className="text-3xl font-heading mt-4">Front-end Development</h1>
            <p className="text-lg text-gray mt-4 w-full">I'm all about simple, clean and responsive design. I love bringing ideas to life beautifully through a screen.</p>
            <div className="flex items-center justify-around flex-wrap mt-8 w-full">
                <div className="flex items-center">
                    <img src="/assets/icons/next.png" alt="" className="h-5"/>
                    <p className="font-bold ml-2">Next</p>
                </div>
                <div className="flex items-center">
                    <img src="/assets/icons/react.png" alt="" className="h-5"/>
                    <p className="font-bold ml-2">React</p>
                </div>
                <div className="flex items-center">
                    <img src="/assets/icons/tailwind.svg" alt="" className="h-5"/>
                    <p className="font-bold ml-2">Tailwind</p>
                </div>
                <div className="flex items-center">
                    <img src="/assets/icons/axios.png" alt="" className="h-5"/>
                    <p className="font-bold ml-2">Axios</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Frontend