import React from 'react'
import projects from '../../assets/projectsData.json'
import ProjectCard from './ProjectCard'
export default function ProjectList() {
  return (
    <div>
      {
        projects.map((project) =>(
            <ProjectCard key={project.id} project={project}/>
        ))
      }
    </div>
  )
}
