import { resumeInfo, siteInfo } from '../data/portfolioData'
import Icon from './Icon'

function Hero() {
  return (
    <section className="section hero-section" id="home">
      <div className="container hero-grid">
        <div className="hero-copy reveal-up">
          <p className="eyebrow">IT Professional | UI/UX • Frontend • Product</p>
          <h1>Franchezka Faith E. Tingal</h1>
          <h2>{siteInfo.role}</h2>
          <p className="lead">{siteInfo.tagline}</p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View My Projects <Icon name="arrow" size={18} />
            </a>
            <a className="button button-secondary" href={resumeInfo.downloadUrl} download>
              Download Resume <Icon name="download" size={18} />
            </a>
          </div>
        </div>

        <div className="hero-visual reveal-up">
          <div className="profile-card">
            <div className="profile-placeholder">
              <img
                className="profile-image"
                src="/images/IMG_6509.JPG"
                alt="Profile photo of Franchezka Faith Tingal"
                loading="eager"
              />
            </div>
            <div className="profile-meta">
              <p className="profile-label">Magna cum laude IT graduate</p>
              <p className="profile-title">Understanding products. Designing for users. Explaining it clearly.</p>
            </div>
          </div>
          <div className="hero-badges" aria-label="Areas of focus">
            <span>UI/UX</span>
            <span>Frontend Development</span>
            <span>Requirements & Analysis</span>
            <span>User Support</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero