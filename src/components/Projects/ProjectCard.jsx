import React from 'react'

export default function ProjectCard({project}) {
  return (
    <div>
      <img src={project.image} alt="" />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div>
        {
            project.techStack.map((tech, index) =>{
                <span key={index}>
                    {tech}
                </span>
            })
        }
      </div>
      <div>
        <a href={project.github}>Github</a>
        <a href={project.live}>Live</a>
      </div>
    </div>
  )
}
