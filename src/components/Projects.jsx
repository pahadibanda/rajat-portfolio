import { ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="projects-section">
      <div className="section-title">
        <h2>Selected Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className={`card project-card reveal-fade-up reveal-delay-${(index % 3) + 1}`}>
            <div className="project-image-placeholder" style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={`${project.title} Preview`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  className="project-image"
                />
              ) : (
                <span className="project-image-text">{project.category}</span>
              )}
              <div className="project-image-glow"></div>
            </div>
            
            <div className="project-content" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <h3 className="project-title">{project.title}</h3>
              
              <div className="project-details" style={{ margin: '16px 0', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', textAlign: 'left', flexGrow: 1 }}>
                {project.problem && (
                  <div>
                    <strong style={{ color: 'var(--text-h)', display: 'inline-block', minWidth: '70px' }}>Problem:</strong>{' '}
                    <span style={{ color: 'var(--text)' }}>{project.problem}</span>
                  </div>
                )}
                {project.solution && (
                  <div>
                    <strong style={{ color: 'var(--text-h)', display: 'inline-block', minWidth: '70px' }}>Solution:</strong>{' '}
                    <span style={{ color: 'var(--text)' }}>{project.solution}</span>
                  </div>
                )}
                {project.dataset && (
                  <div>
                    <strong style={{ color: 'var(--text-h)', display: 'inline-block', minWidth: '70px' }}>Dataset:</strong>{' '}
                    <span style={{ color: 'var(--text)' }}>{project.dataset}</span>
                  </div>
                )}
                {project.outcome && (
                  <div>
                    <strong style={{ color: 'var(--text-h)', display: 'inline-block', minWidth: '70px' }}>Outcome:</strong>{' '}
                    <span style={{ color: 'var(--text)' }}>{project.outcome}</span>
                  </div>
                )}
                {project.description && !project.problem && (
                  <p className="project-desc" style={{ margin: 0 }}>{project.description}</p>
                )}
              </div>
              
              <div style={{ marginTop: 'auto', marginBottom: '20px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-h)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '8px' }}>Tools Used</span>
                <div className="project-tech" style={{ margin: 0 }}>
                  {project.tech.map((techItem, techIndex) => (
                    <span key={techIndex} className="badge">
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-links">
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link"
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                    Code
                  </a>
                )}
                {project.liveLink && (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
