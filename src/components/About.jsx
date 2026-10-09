import { aboutHighlights } from '../data/portfolioData'

function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-layout">
          <div className="about-copy reveal-up">
            <div className="section-heading text-content">
              <p className="section-kicker">About Me</p>
              <h2>Understanding products and the people who use them, from design to delivery.</h2>

              <p>
                My background is in UI/UX design and frontend development. At Lamina Studios, I worked
                across design and build using Figma, Laravel, Tailwind, and Cypress, which taught me how a
                product comes together and how to check that it works for the people using it. For my
                capstone, Globalinked, a linkage agreement (MOU/MOA) monitoring system, I designed and
                built the interface around how users actually work. I enjoy learning a product inside out
                and making it easy for others to understand and use.
              </p>
            </div>
          </div>

          <div className="highlight-grid">
            {aboutHighlights.map((item) => (
              <article className="highlight-card reveal-up" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About