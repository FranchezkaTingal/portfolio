import { useState } from 'react'
import { projects } from '../data/portfolioData'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-heading reveal-up text-content">
          <p className="section-kicker">Projects</p>
          <h2>A showcase of frontend, UI, and systems work.</h2>

        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              featured={index === 0}
              onViewDetails={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </div>
    </section>
  )
}

export default Projects
