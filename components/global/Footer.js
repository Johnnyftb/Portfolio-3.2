import { FaGithub, FaLinkedin } from "react-icons/fa";

const socialLinks = [
    {
        icon: <FaGithub  className="h-full w-full"/>,
        link: "https://github.com/Johnnyftb"
    },
    {
        icon: <FaLinkedin className="h-full w-full"/>,
        link: "https://www.linkedin.com/in/john-pioc/"
    }
];

const Footer = () => {
  return (
    <footer className="h-[20vh] relative bottom-0">
        <div className="px-16 pb-8 flex items-center h-full w-full">
            {socialLinks.map(item => (
                <a href={item.link} target="_blank" className="h-10 mr-4">
                    {item.icon}
                </a>
            ))}
        </div>
    </footer>
  )
}

export default Footer