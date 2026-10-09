import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-up')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
    )

    revealElements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
