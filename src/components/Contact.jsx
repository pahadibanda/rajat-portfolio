import { useState } from 'react';
import { Mail, MapPin, Send, Phone, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

function Contact() {
  const { email, phone, location, github, linkedin, resumeUrl } = portfolioData.personalInfo;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Simulate form submission
    console.log('Form data submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-title">
        <h2>Get In Touch</h2>
      </div>

      <div className="contact-grid">
        <div className="contact-info reveal-fade-up">
          <div>
            <h3 className="contact-info-title">Let's build something cool</h3>
            <p className="contact-info-desc" style={{ marginBottom: '24px' }}>
              Have an idea, project, or full-time position you want to discuss? Feel free to reach out using the form or directly via the channels below.
            </p>
          </div>

          <div className="contact-details" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {email && (
              <div className="contact-detail-item" style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span className="contact-detail-icon" style={{ marginTop: '2px' }}><Mail size={20} /></span>
                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-h)', textTransform: 'uppercase', opacity: 0.6 }}>Email</span>
                  <a href={`mailto:${email}`} className="contact-detail-text" style={{ color: 'var(--text)', textDecoration: 'none', fontWeight: 500 }}>{email}</a>
                </div>
              </div>
            )}
            {phone && (
              <div className="contact-detail-item" style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span className="contact-detail-icon" style={{ marginTop: '2px' }}><Phone size={20} /></span>
                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-h)', textTransform: 'uppercase', opacity: 0.6 }}>Phone</span>
                  <a href={`tel:${phone}`} className="contact-detail-text" style={{ color: 'var(--text)', textDecoration: 'none', fontWeight: 500 }}>{phone}</a>
                </div>
              </div>
            )}
            {location && (
              <div className="contact-detail-item" style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span className="contact-detail-icon" style={{ marginTop: '2px' }}><MapPin size={20} /></span>
                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-h)', textTransform: 'uppercase', opacity: 0.6 }}>Location</span>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-detail-text" 
                    style={{ color: 'var(--text)', textDecoration: 'none', fontWeight: 500 }}
                  >
                    {location}
                  </a>
                </div>
              </div>
            )}
            {github && (
              <div className="contact-detail-item" style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span className="contact-detail-icon" style={{ marginTop: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-h)', textTransform: 'uppercase', opacity: 0.6 }}>GitHub</span>
                  <a href={github} target="_blank" rel="noopener noreferrer" className="contact-detail-text" style={{ color: 'var(--text)', textDecoration: 'none', fontWeight: 500 }}>
                    {github.replace(/^(https?:\/\/)?(www\.)?/, '').replace(/\/$/, '') || 'github.com'}
                  </a>
                </div>
              </div>
            )}
            {linkedin && (
              <div className="contact-detail-item" style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span className="contact-detail-icon" style={{ marginTop: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-h)', textTransform: 'uppercase', opacity: 0.6 }}>LinkedIn</span>
                  <a href={linkedin} target="_blank" rel="noopener noreferrer" className="contact-detail-text" style={{ color: 'var(--text)', textDecoration: 'none', fontWeight: 500 }}>
                    {linkedin.replace(/^(https?:\/\/)?(www\.)?/, '').replace(/\/$/, '')}
                  </a>
                </div>
              </div>
            )}
            {resumeUrl && (
              <div className="contact-detail-item" style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span className="contact-detail-icon" style={{ marginTop: '2px' }}><FileText size={20} /></span>
                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-h)', textTransform: 'uppercase', opacity: 0.6 }}>Resume</span>
                  <a 
                    href={resumeUrl} 
                    download="resume.pdf" 
                    className="btn btn-secondary contact-detail-text" 
                    style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '8px', 
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      padding: '6px 12px',
                      borderRadius: '8px',
                      marginTop: '4px',
                      fontWeight: 500
                    }}
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="card contact-form-card reveal-fade-up reveal-delay-2">
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }} className="animate-fade-in">
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🎉</div>
              <h3 style={{ marginBottom: '8px' }}>Thank You!</h3>
              <p>Your message has been sent successfully. I will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name" 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com" 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..." 
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                Send Message <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
