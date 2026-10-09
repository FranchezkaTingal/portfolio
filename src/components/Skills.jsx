import { skillCategories } from '../data/portfolioData'
import Icon from './Icon'

function Skills() {
  return (
    <section className="section section-muted" id="skills">
      <div className="container">
        <div className="section-heading reveal-up text-content">
          <p className="section-kicker">Skills</p>
          <h2>Design, build, test, and explain.</h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <article className="skill-card reveal-up" key={category.title}>
              <div className="skill-card-topline">
                <span className="skill-icon"><Icon name={category.icon} size={24} /></span>
                <p className="project-number">0{index + 1}</p>
              </div>
              <h3>{category.title}</h3>
              <p className="skill-description">{category.description}</p>
              <div className="skill-tags">
                {category.items.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills