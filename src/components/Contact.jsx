import { useState } from 'react'
import { contactInfo } from '../data/portfolioData'
import Icon from './Icon'

const initialFormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

function Contact() {
  const [formData, setFormData] = useState(initialFormState)
  const [formStatus, setFormStatus] = useState({ type: 'idle', message: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const trimmedName = formData.name.trim()
    const trimmedEmail = formData.email.trim()
    const trimmedSubject = formData.subject.trim()
    const trimmedMessage = formData.message.trim()

    if (!trimmedName || !trimmedEmail || !trimmedSubject || !trimmedMessage) {
      setFormStatus({ type: 'error', message: 'Please complete all required fields.' })
      return
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(trimmedEmail)) {
      setFormStatus({ type: 'error', message: 'Please enter a valid email address.' })
      return
    }

    const mailtoUrl = [
      `mailto:${contactInfo.email}`,
      `subject=${encodeURIComponent(trimmedSubject)}`,
      `body=${encodeURIComponent(`Name: ${trimmedName}\nEmail: ${trimmedEmail}\n\n${trimmedMessage}`)}`,
    ].join('&')

    setFormStatus({ type: 'success', message: 'Opening your email app...' })
    window.location.href = mailtoUrl
    setFormData(initialFormState)
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-layout">
        <div className="section-heading contact-copy">
          <p className="section-kicker">Contact</p>
          <h2>Let&apos;s Connect.</h2>
          <p>{contactInfo.intro}</p>
          <p className="contact-note">Open to frontend, UI/UX, product, and IT-focused opportunities.</p>

          <div className="contact-links">
            <a href={`mailto:${contactInfo.email}`}>
              <Icon name="mail" size={20} />
              <span>Email</span>
              <strong>{contactInfo.email}</strong>
            </a>
            <a href={contactInfo.linkedin} target="_blank" rel="noreferrer">
              <Icon name="linkedin" size={20} />
              <span>LinkedIn</span>
              <strong>{contactInfo.linkedin}</strong>
            </a>
            <a href={`https://${contactInfo.github}`} target="_blank" rel="noreferrer">
              <Icon name="github" size={20} />
              <span>GitHub</span>
              <strong>{contactInfo.github}</strong>
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-grid">
            <label htmlFor="contact-name">
              Name
              <input id="contact-name" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" />
            </label>
            <label htmlFor="contact-email">
              Email
              <input id="contact-email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" />
            </label>
          </div>

          <label htmlFor="contact-subject">
            Subject
            <input id="contact-subject" type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="How can I help?" />
          </label>

          <label htmlFor="contact-message">
            Message
            <textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here"
              rows="6"
            />
          </label>

          {formStatus.type !== 'idle' && (
            <p className={`form-status ${formStatus.type}`}>{formStatus.message}</p>
          )}

          <button type="submit" className="button button-primary">
            Send Message <Icon name="arrow" size={18} />
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
