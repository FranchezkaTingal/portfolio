import { experiences } from '../data/portfolioData'
import Icon from './Icon'

function Experience() {
  return (
    <section className="section section-muted" id="experience">
      <div className="container">
        <div className="section-heading reveal-up text-content">
          <p className="section-kicker">Experience</p>
          <h2>Learning how products get designed, built, and checked.</h2>
        </div>

        <div className="timeline">
          {experiences.map((experience) => (
            <article className="timeline-item reveal-up" key={`${experience.role}-${experience.period}`}>
              <div className="timeline-aside">
                <span>{experience.period}</span>
              </div>
              <div className="timeline-marker" aria-hidden="true" />
              <div className="timeline-content">
                <div className="timeline-topline">
                  <div>
                    <h3><Icon name="code" size={18} /> {experience.role}</h3>
                    <p className="timeline-company">{experience.company}</p>
                  </div>         
                </div>
                <p>{experience.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience