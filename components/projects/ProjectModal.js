import { FaGlobeAsia, FaGithub } from 'react-icons/fa';
import { HiDocumentReport } from 'react-icons/hi';

const ProjectModal = ({ project, setProject }) => {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen z-50 bg-black/80 flex items-center justify-center">
        <div className="bg-slate-50 shadow-xl rounded-lg max-w-7xl p-2 md:p-4 xl:p-8 text-center font-main">
            <div className="text-end">
                <p className="font-heading text-xl cursor-pointer" onClick={() => setProject()}>X</p>
            </div>
            <img src={project.image_path} alt="" className='h-[20vh] md:h-[30vh] xl:h-[35vh] shadow-xl mx-auto' />
            <h1 className="text-4xl mt-8 font-heading">{project.project_name}</h1>
            <p className="text-gray text-lg w-[30ch] md:w-[45ch] xl:w-[55ch] mx-auto">{project.description}</p>
            <div className="flex justify-center items-center mt-12 flex-wrap">
                {project.links.website && (
                    <a href={project.links.website} className="bg-purple px-4 py-2 rounded-full font-heading text-lg flex items-center text-white mx-4" target="_blank">
                        <FaGlobeAsia />
                        <p className='ml-2'>Visit Website</p>
                    </a>
                )}
                {project.links.source_code && (
                    <a href={project.links.source_code} className="bg-dark px-4 py-2 rounded-full font-heading text-lg flex items-center text-white mx-4" target="_blank">
                        <FaGithub />
                        <p className='ml-2'>View on GitHub</p>
                    </a>
                )}
                {project.links.report && (
                    <a href={project.links.report} className="bg-dark px-4 py-2 rounded-full font-heading text-lg flex items-center text-white mx-4" target="_blank">
                        <HiDocumentReport />
                        <p className='ml-2'>View Report</p>
                    </a>
                )}
            </div>
        </div>
    </div>
  )
}

export default ProjectModal