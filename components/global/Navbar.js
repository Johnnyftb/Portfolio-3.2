import React from 'react'
import Image from 'next/image';
import Link from 'next/Link';
import { FaBars, FaArrowLeft } from 'react-icons/fa';

const navItems = [
    {
        name: "About Me",
        link: "/about"
    },
    {
        name: "Services",
        link: "/services"
    },
    {
        name: "Projects",
        link: "/projects"
    },
    {
        name: "Contact",
        link: "/contact"
    }
]

const Navbar = ({ selected }) => {

    const [open, setOpen] = React.useState(false);

    return (
        <nav className="h-[20vh]">
            <div className="h-full w-full flex justify-between items-center py-4 px-16 font-heading text-dark">
                <a href="/">
                    <img src="/assets/icons/j.png" className="h-[8vh]"/>
                </a>
                <ul className="hidden md:flex justify-center items-center space-x-12 text-xl font-heading">
                    {navItems.map(item => (
                        <li>
                            {item.name === selected ? (
                                <Link href={item.link} className="text-purple">
                                    {item.name}
                                </Link>
                            ) : (
                                <Link href={item.link}>
                                    {item.name}
                                </Link> 
                            )}
                            
                        </li>
                    ))}
                </ul>
                <FaBars className="md:hidden w-8 h-8 cursor-pointer" onClick={() => setOpen(true)}/>
            </div>

            <div className={open ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 z-50" : ""}>
                <div className={open ? "absolute left-0 top-0 w-3/4 h-screen bg-slate-50 p-10 ease-in duration-500 z-50" : "absolute left-[-100%] top-0 h-screen w-3/4 p-10 ease-in duration-500 z-50"}>
                    <div className="flex items-center justify-between border-b-2 pb-8">
                        <a href="/">
                            <img src="/assets/icons/j.png" alt="" className="h-[8vh]"/>
                        </a>
                        <FaArrowLeft className="text-3xl cursor-pointer" onClick={() => setOpen(false)}/>
                    </div>
                    <div className="mt-4 flex flex-col text-2xl font-heading space-y-4">
                        {navItems.map(item => (
                            <Link href={item.link}>
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar