import React from 'react'
import Frontend from './Frontend';
import Backend from './Backend';
import Blockchain from './Blockchain';

const services = [
  <img src="/assets/2.png" alt="" className='h-[30vh]'/>,
  <Frontend />,
  <Backend />,
  <Blockchain />
]

const Main = () => {

  const [service, setService] = React.useState(0);

  return (
    <main className="min-h-[60vh] lg:h-[60vh] fade-in">
        <div className="lg:flex hidden h-full w-full font-main text-dark px-16 items-center justify-around">
            <div className="w-1/2 flex justify-center">
              <div>
                <h1 className={`${service === 1 ? 'text-6xl text-purple' : 'text-5xl'} font-heading cursor-pointer transition-all duration-1000 ease-in-out`} onClick={() => setService(1)}>Front-end</h1>
                <h1 className={`${service === 2 ? 'text-6xl text-purple' : 'text-5xl'} font-heading cursor-pointer transition-all duration-1000 ease-in-out my-4`} onClick={() => setService(2)}>Back-end</h1>
                <h1 className={`${service === 3 ? 'text-6xl text-purple' : 'text-5xl'} font-heading cursor-pointer transition-all duration-1000 ease-in-out`} onClick={() => setService(3)}>Blockchain</h1>
              </div>

            </div>
            <div className="w-[55ch]">
              {services[service]}
            </div>
        </div>
        <div className="lg:hidden h-full w-full font-main text-dark flex flex-col items-center max-w-7xl">
            <Frontend />
            <Backend />
            <Blockchain />
        </div>
    </main>
  )
}

export default Main