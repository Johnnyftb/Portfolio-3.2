import React from 'react'
import projectsData from '../../projects.json';

const Backend = () => {
    const projects = projectsData.filter(item => item.tags.includes("backend"));

    return (
        <div className="w-full grid grid-cols-3 fade-in">
            {projects.map(item => (
                <div className="relative rounded-lg m-4 shadow-xl col-span-3 lg:col-span-1">
                    <div className="relative top-0 left-0 z-40">
                        <img src={item.image_path} alt="" className="h-full w-full rounded-lg shadow-xl"/>
                    </div>
                    <div className="absolute top-0 left-0 h-full w-full hover:opacity-100 opacity-0 bg-black/90 z-50 cursor-pointer rounded-lg transition-all duration-1000 flex flex-col items-center justify-center text-white text-center">
                        <h1 className="text-4xl font-heading">{item.project_name}</h1>
                        <p className="mt-4">{item.work}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Backend