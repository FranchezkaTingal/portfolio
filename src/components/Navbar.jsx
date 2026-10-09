import { useEffect, useState } from 'react'
import { navigationLinks, siteInfo } from '../data/portfolioData'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(() => window.location.hash.slice(1) || 'home')

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  useEffect(() => {
    if (!menuOpen) {
      return undefined
    }

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [menuOpen])

  useEffect(() => {
    const sections = navigationLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean)

    if (!sections.length) {
      return undefined
    }

    const header = document.querySelector('.site-header')
    const headerHeight = header?.getBoundingClientRect().height ?? 0
    const visibleSections = new Map()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibleSections.set(entry.target.id, entry)
        })

        const activeEntry = [...visibleSections.values()]
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => first.boundingClientRect.top - second.boundingClientRect.top)[0]

        if (activeEntry?.target?.id) {
          setActiveSection(activeEntry.target.id)
        }
      },
      {
        rootMargin: `-${headerHeight}px 0px -55% 0px`,
        threshold: [0, 0.1],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const handleNavigation = (sectionId) => {
    setActiveSection(sectionId)
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="container navbar">
        <a className="brand" href="#home" onClick={() => handleNavigation('home')}>

          <span className="brand-text">
            <strong>{siteInfo.logo}</strong>
            <span>{siteInfo.role}</span>
          </span>
        </a>

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav ${menuOpen ? 'is-open' : ''}`} id="primary-navigation">
          {navigationLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => handleNavigation(link.href.slice(1))}
              className={activeSection === link.href.slice(1) ? 'is-active' : ''}
              aria-current={activeSection === link.href.slice(1) ? 'page' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
