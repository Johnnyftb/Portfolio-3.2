import React from 'react'

const Backend = () => {
  return (
    <div className="fade-in w-full mt-16 md:mt-0">
        <div className="flex flex-col items-center w-full text-center px-4 md:px-0">
            <img src="/assets/Backend.png" alt="" className="h-[35vh]"/>
            <h1 className="text-3xl font-heading mt-4">Back-end Development</h1>
            <p className="text-lg text-gray mt-4 w-full">I can create back-end servers that serve as APIs and interact with databases for dynamic and data-driven web pages.</p>
            <div className="flex items-center justify-around flex-wrap mt-8 w-full">
                <div className="flex items-center">
                    <img src="/assets/icons/node.png" alt="" className="h-5"/>
                    <p className="font-bold ml-2">Node</p>
                </div>
                <div className="flex items-center">
                    <img src="/assets/icons/express.png" alt="" className="h-5"/>
                    <p className="font-bold ml-2">Express</p>
                </div>
                <div className="flex items-center">
                    <img src="/assets/icons/mongo.png" alt="" className="h-5"/>
                    <p className="font-bold ml-2">MongoDB</p>
                </div>
            </div>
        </div>
    </div>
  )
} 

export default Backend