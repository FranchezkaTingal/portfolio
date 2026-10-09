import { createPortal } from 'react-dom'
import { useEffect, useState } from 'react'
import { resumeInfo } from '../data/portfolioData'
import Icon from './Icon'
import { useBodyScrollLock } from '../hooks/useBodyScrollLock'

function Resume() {
  const [isOpen, setIsOpen] = useState(false)

  useBodyScrollLock(isOpen)

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen])

  const pdfUrl = resumeInfo.downloadUrl

  return (
    <section className="section" id="resume">
      <div className="container">
        <div className="resume-layout">
          <div className="resume-stack">
            <div className="section-heading text-content reveal-up">
              <p className="section-kicker">Resume</p>
              <h2>Education, experience, and the skills I bring to product, analysis, and design work.</h2>
            </div>

            <article className="resume-card reveal-up">
              <h3><Icon name="palette" size={18} /> Education</h3>
              <ul>
                {resumeInfo.education.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="resume-card reveal-up">
              <h3><Icon name="code" size={18} /> Experience</h3>
              <ul>
                {resumeInfo.experience.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="resume-card reveal-up">
              <h3><Icon name="tools" size={18} /> Core Skills</h3>
              <div className="skill-tags compact">
                {resumeInfo.coreSkills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          </div>

          <aside className="resume-card resume-visual reveal-up">
            <div>
              <p className="section-kicker">Resume Preview</p>
            </div>

            <div className="resume-preview">
              <iframe
                src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                title="Resume preview"
                tabIndex={-1}
              />
              <button
                type="button"
                className="resume-preview-trigger"
                onClick={() => setIsOpen(true)}
                aria-label="Open resume in full view"
              >
                <span>Click to enlarge</span>
              </button>
            </div>

            <div className="resume-cta">
              <a className="button button-primary" href={pdfUrl} download>
                Download Resume <Icon name="download" size={18} />
              </a>
            </div>
          </aside>
        </div>
      </div>

      {isOpen && createPortal(
        <div
          className="resume-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Resume"
          onClick={() => setIsOpen(false)}
        >
          <div className="resume-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="resume-modal-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close resume"
            >
              ×
            </button>
            <iframe src={`${pdfUrl}#view=FitH`} title="Resume full view" />
          </div>
        </div>,
        document.body,
      )}
    </section>
  )
}

export default Resume