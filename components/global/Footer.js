import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="h-[20vh] relative bottom-0">
        <div className="px-16 pb-8 flex items-center h-full w-full">
            <a href="https://github.com/Johnnyftb" target="_blank" className="h-10 mr-4">
                <FaGithub  className="h-full w-full"/>
            </a>
        </div>
    </footer>
  )
}

export default Footer