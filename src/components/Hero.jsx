import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import profileImage from "../assets/profile.png";

const WORDS = ["Data Analyst", "Power BI Developer", "Python Developer"];

function Hero() {
  const { name, headline, description, github, linkedin, leetcode, resumeUrl } = portfolioData.personalInfo;

  // Avatar profile image state
  const [avatarError, setAvatarError] = useState(false);

  // Typing effect variables
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentWord = WORDS[wordIndex];
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
      }, 40);
    } else {
      timer = setTimeout(() => {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
      }, 80);
    }

    if (!isDeleting && currentText === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % WORDS.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex]);

  // Initials for avatar placeholder
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('');

  return (
    <section id="hero" className="hero-section animate-fade-in">
      <div className="hero-grid">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge">Open to Work</span>
          </div>
          <h1 className="hero-title" style={{ marginBottom: '8px' }}>
            Hi, I'm <span style={{ background: 'var(--gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{name}</span>
          </h1>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '20px', color: 'var(--text-h)', textTransform: 'none' }}>
            I'm a <span style={{ color: 'var(--accent)' }}>{currentText}</span>
            <span className="typing-cursor"></span>
          </h2>
          <p className="hero-subtitle" style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--text-h)', opacity: 0.95, marginBottom: '12px' }}>
            {headline}
          </p>
          <p className="hero-subtitle" style={{ fontSize: '1.1rem', color: 'var(--text)', marginBottom: '40px', maxWidth: '650px' }}>
            {description}
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight size={18} />
            </a>
            <a href={resumeUrl} download="resume.pdf" className="btn btn-secondary">
              Download Resume
            </a>
          </div>

          <div className="hero-socials">
            <a href={github} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="GitHub">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href={leetcode} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LeetCode">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-.003-.003L15.3 4.673a1.374 1.374 0 0 0-1.817 0zM11.66 4.394a.687.687 0 0 1 .481-.225h.001c.184 0 .36.075.485.207l3.659 3.824a.687.687 0 0 1 .151.644.687.687 0 0 1-.362.435l-3.328 1.571a.687.687 0 0 1-.861-.318l-1.55-3.342a.687.687 0 0 1 .099-.757l1.328-1.435zm7.391 10.457c.365.365.365.957 0 1.322l-2.072 2.072c-.365.365-.957.365-1.322 0l-3.66-3.66c-.365-.365-.365-.957 0-1.322l2.072-2.072c.365-.365.957-.365 1.322 0l3.66 3.66z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-avatar-area">
          <div className="avatar-wrapper">
            <div className="avatar-placeholder">
              {!avatarError ? (
                <img 
                  src={profileImage} 
                  alt={name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                  onError={() => setAvatarError(true)}
                />
              ) : (
                <div className="avatar-initials">{initials}</div>
              )}
              <div className="avatar-tag">Data Analytics</div>
              <div className="avatar-glow-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
