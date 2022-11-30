import React from 'react'

const Blockchain = () => {
  return (
    <div className="fade-in w-full mt-16 md:mt-0">
        <div className="flex flex-col items-center w-full text-center px-4 md:px-0">
            <img src="/assets/Blockchain.png" alt="" className="h-[35vh]"/>
            <h1 className="text-3xl font-heading mt-4">Blockchain Development</h1>
            <p className="text-lg text-gray mt-4 w-full">Whether it's a smart contract or decentralized app, I can develop code that interacts with the blockchain, specifically Ethereum.</p>
            <div className="flex items-center justify-around flex-wrap mt-8 w-full">
                <div className="flex items-center">
                    <img src="/assets/icons/solidity.png" alt="" className="h-5"/>
                    <p className="font-bold ml-2">Solidity</p>
                </div>
                <div className="flex items-center">
                    <img src="/assets/icons/hardhat.png" alt="" className="h-5"/>
                    <p className="font-bold ml-2">Hardhat</p>
                </div>
                <div className="flex items-center">
                    <img src="/assets/icons/javascript.png" alt="" className="h-5"/>
                    <p className="font-bold ml-2">Javascript</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blockchain