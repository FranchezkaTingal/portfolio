import { createPortal } from 'react-dom'
import { useEffect, useRef, useState } from 'react'
import { useBodyScrollLock } from '../hooks/useBodyScrollLock'
import Icon from './Icon'

function ProjectModal({ project, onClose }) {
  const closeButtonRef = useRef(null)
  const modalRef = useRef(null)
  const openerRef = useRef(null)
  const actionSentinelRef = useRef(null)
  const [isActionBarStuck, setIsActionBarStuck] = useState(false)

  useBodyScrollLock(true)

  useEffect(() => {
    openerRef.current = document.activeElement

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    const handleTab = (event) => {
      if (event.key !== 'Tab' || !modalRef.current) return

      const focusableElements = modalRef.current.querySelectorAll(
        'button:not([disabled]), a[href], input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )
      const focusable = Array.from(focusableElements)
      if (!focusable.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', handleEscape)
    window.addEventListener('keydown', handleTab)
    closeButtonRef.current?.focus()

    return () => {
      window.removeEventListener('keydown', handleEscape)
      window.removeEventListener('keydown', handleTab)
      openerRef.current?.focus()
    }
  }, [onClose])

  useEffect(() => {
    const sentinel = actionSentinelRef.current
    if (!sentinel) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => setIsActionBarStuck(!entry.isIntersecting),
      { root: modalRef.current, threshold: 0 },
    )
    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  const githubUrl = project.github || project.githubUrl
  const demoUrl = project.demo || project.liveUrl

  return createPortal(
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div
        ref={modalRef}
        className="modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`project-modal-title-${project.id}`}
      >
        <button
          ref={closeButtonRef}
          type="button"
          className="modal-close"
          aria-label={`Close ${project.title} details`}
          onClick={onClose}
        >
          ×
        </button>

        <div className="modal-media">
          <img src={project.image} alt={`${project.title} project screenshot`} />
        </div>

        <div className="modal-content">
          <p className="project-number">Project Details</p>
          <h3 id={`project-modal-title-${project.id}`}>
            {project.title}
          </h3>
          <p className="modal-subtitle">{project.subtitle}</p>

          <div className="modal-body-layout">
            <div className="modal-main">
              <p className="modal-description">{project.description}</p>

              <section className="modal-section">
                <h4>Key Features</h4>
                <ul className="modal-feature-list">
                  {project.features.map((feature) => (
                    <li key={feature}><span aria-hidden="true">✓</span>{feature}</li>
                  ))}
                </ul>
              </section>

              <section className="modal-section">
                <h4>My Contributions</h4>
                <ul>
                  {project.contributions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section className="modal-section">
                <h4>Challenges / Goals</h4>
                <p>{project.challenges}</p>
              </section>

              {project.outcome ? (
                <section className="modal-section">
                  <h4>Outcome</h4>
                  <p>{project.outcome}</p>
                </section>
              ) : null}
            </div>

            <aside className="modal-sidebar" aria-label="Project summary">
              <div className="modal-meta-grid">
                <div className="modal-role">
                  <span>My Role</span>
                  <strong>{project.role}</strong>
                </div>
                <div className="modal-year">
                  <span>Year</span>
                  <strong>{project.year}</strong>
                </div>
                <div className="modal-technologies">
                  <span>Technologies</span>
                  <div className="modal-tech-list">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>

          <div ref={actionSentinelRef} className="modal-action-sentinel" aria-hidden="true" />
          <div className={`modal-action-bar${isActionBarStuck ? ' is-stuck' : ''}`}>
            {isActionBarStuck ? <strong>{project.title}</strong> : null}
            {githubUrl ? (
              <a className="button button-secondary button-small" href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Icon name="github" size={16} /> GitHub
              </a>
            ) : null}
            {demoUrl ? (
              <a className="button button-primary button-small modal-demo-button" href={demoUrl} target="_blank" rel="noopener noreferrer">
                Live Demo <Icon name="external" size={16} />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}

export default ProjectModal
