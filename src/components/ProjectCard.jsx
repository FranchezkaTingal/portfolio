import Icon from './Icon'

const isAvailableUrl = (url) =>
  Boolean(url) && !url.includes('example.com') && !url.includes('your-username')

function ProjectCard({ project, index, featured, onViewDetails }) {
  const githubUrl = project.githubUrl || project.github
  const liveDemoUrl = project.liveUrl || project.demo

  return (
    <article className={`project-card reveal-up ${featured ? 'featured' : ''}`}>
      <div className="project-thumb" aria-hidden="true">
        <img src={project.image} alt="" loading="lazy" />
        <span>
          {String(index + 1).padStart(2, '0')} / {project.title}
        </span>
      </div>

      <div className="project-body">
        <p className="project-number">0{index + 1}</p>
        <div className="project-heading">
          <h3>{project.title}</h3>
        </div>

        <p>{project.summary}</p>

        <dl className="project-meta">
          <div>
            <dt>My Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Tools and Technologies</dt>
            <dd className="technology-list">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </dd>
          </div>
        </dl>

        <div className="project-actions">
          <button type="button" className="button button-primary button-small" onClick={onViewDetails}>
            View Project <Icon name="arrow" size={16} />
          </button>
          {isAvailableUrl(githubUrl) && (
            <a className="button button-secondary button-small" href={githubUrl} target="_blank" rel="noreferrer">
              GitHub <Icon name="github" size={16} />
            </a>
          )}
          {isAvailableUrl(liveDemoUrl) && (
            <a className="button button-secondary button-small" href={liveDemoUrl} target="_blank" rel="noreferrer">
              Live Demo <Icon name="external" size={16} />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
