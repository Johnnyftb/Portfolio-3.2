import React from 'react'
import All from './All';
import Frontend from './Frontend';
import Backend from './Backend';
import Blockchain from './Blockchain';
import ProjectModal from './ProjectModal';
import projectData from '../../projects.json';

const Main = () => {

    const [category, setCategory] = React.useState(0);
    const [project, setProject] = React.useState();

    const openModal = (id) => {
        const openProject = projectData.filter(item => item.id === id);
        setProject(openProject[0]);
    }

    const projectCategories = [
        <All openModal={openModal}/>,
        <Frontend openModal={openModal} />,
        <Backend openModal={openModal} />,
        <Blockchain openModal={openModal} />
    ]

    console.log(project);

    return (
        <main className='min-h-[60vh] fade-in'>
            <div className="h-full w-full font-main text-dark md:px-16 px-4 py-8">
                <div className="flex items-center justify-center">
                    <p className={`${category === 0 ? "bg-purple rounded-full text-white" : "cursor-pointer"} text-md md:text-lg md:mx-8 mx-2 transition-all duration-1000 px-2 md:px-6 py-1 linear`} onClick={() => setCategory(0)}>All</p>
                    <p className={`${category === 1 ? "bg-purple rounded-full text-white" : "cursor-pointer"} text-md md:text-lg md:mx-8 mx-2 transition-all duration-1000 px-2 md:px-6 py-1 linear`} onClick={() => setCategory(1)}>Frontend</p>
                    <p className={`${category === 2 ? "bg-purple rounded-full text-white" : "cursor-pointer"} text-md md:text-lg md:mx-8 mx-2 transition-all duration-1000 px-2 md:px-6 py-1 linear`} onClick={() => setCategory(2)}>Backend</p>
                    <p className={`${category === 3 ? "bg-purple rounded-full text-white" : "cursor-pointer"} text-md md:text-lg md:mx-8 mx-2 transition-all duration-1000 px-2 md:px-6 py-1 linear`} onClick={() => setCategory(3)}>Blockchain</p>
                </div>
                <div className='max-w-7xl mx-auto mt-8'>
                    {projectCategories[category]}
                </div>
            </div>


            {project && <ProjectModal project={project} setProject={setProject}/>}
        </main>
    )
}

export default Main