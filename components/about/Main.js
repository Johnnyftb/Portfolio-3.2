import React from 'react'

const Main = () => {

    return (
        <main className="min-h-[60vh] xl:h-[60vh] fade-in">
            <div className="h-full w-full font-main text-dark px-16 py-12 flex flex-col xl:flex-row items-center justify-around">
                <div className="text-center xl:text-start">
                    <h1 className="text-6xl font-heading">About Me</h1>
                    <div className="text-gray mt-4 text-xl md:text-2xl w-[35ch] md:w-[45ch] xl:w-[55ch] mx-auto md:mx-none">My name is John and I'm a self taught developer who loves to build things with code.</div>
                    <div className="text-gray mt-4 text-xl md:text-2xl w-[35ch] md:w-[45ch] xl:w-[55ch] mx-auto md:mx-none">I'm currently heavily involved in the web3 space as I believe it's innovations and technologies will revolutionize the way we interact with each other on the internet. My <span className='text-purple font-bold'>goal</span> is to work with companies and projects looking to utiliize these technologies to <span className='text-purple font-bold'>produce true value</span> and <span className='text-purple font-bold'>create real change</span>.</div>
                </div>
                <div>
                    <img src="/assets/myphoto.jpg" alt="" className='h-[35vh] rounded-full mt-12 xl:mt-0'/>
                </div>
            </div>
        </main>
    )
}

export default Main