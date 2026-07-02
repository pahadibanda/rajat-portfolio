import { GraduationCap, Award, CheckCircle, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

function Education() {
  const { education, certifications } = portfolioData;

  return (
    <section id="education" className="education-section">
      <div className="section-title">
        <h2>Education</h2>
      </div>

      <div className="timeline" style={{ marginBottom: '60px' }}>
        {education.map((edu, index) => (
          <div key={index} className="timeline-item reveal-fade-up" style={{ marginBottom: '40px' }}>
            <div className="timeline-marker" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)' }}>
              <GraduationCap size={12} color="var(--accent)" />
            </div>
            
            <div className="timeline-content">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role" style={{ fontSize: '1.25rem' }}>{edu.degree}</h3>
                  <span className="timeline-company" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--accent)', fontWeight: 600 }}>
                    {edu.institution} {edu.score && `| ${edu.score}`}
                  </span>
                  {edu.status && (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', marginLeft: '10px', color: 'var(--text)', fontSize: '0.85rem' }}>
                      <CheckCircle size={12} /> {edu.status}
                    </span>
                  )}
                </div>
                {edu.period && (
                  <span className="timeline-period">{edu.period}</span>
                )}
              </div>
              
              {edu.degree.includes("Bachelor") && (
                <p className="timeline-desc" style={{ marginBottom: '16px', marginTop: '8px' }}>
                  Completed comprehensive coursework focusing on core computer science subjects, programming fundamentals, data management, and machine learning.
                </p>
              )}
              
              {edu.coursework && edu.coursework.length > 0 && (
                <div style={{ marginTop: '12px' }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-h)', marginBottom: '10px' }}>
                    Key Coursework
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {edu.coursework.map((course, idx) => (
                      <span key={idx} className="badge">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="section-title" style={{ marginTop: '40px', marginBottom: '40px' }}>
        <h2>Certifications</h2>
      </div>

      <div className="grid-2">
        {certifications.map((cert, index) => (
          <div key={index} className={`card reveal-scale-in reveal-delay-${(index % 4) + 1}`} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '24px' }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{
                background: 'var(--accent-bg)',
                border: '1px solid var(--accent-border)',
                borderRadius: '12px',
                padding: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent)',
                flexShrink: 0
              }}>
                <Award size={22} />
              </div>
              <div style={{ flexGrow: 1, textAlign: 'left' }}>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-h)', marginBottom: '12px', lineHeight: '1.3' }}>
                  {cert.name}
                </h4>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.9rem', marginBottom: '16px' }}>
                  {cert.issuedBy && (
                    <div>
                      <strong style={{ color: 'var(--text-h)', display: 'inline-block', minWidth: '80px' }}>Issued by:</strong>{' '}
                      <span style={{ color: 'var(--text)' }}>{cert.issuedBy}</span>
                    </div>
                  )}
                  {cert.year && (
                    <div>
                      <strong style={{ color: 'var(--text-h)', display: 'inline-block', minWidth: '80px' }}>Year:</strong>{' '}
                      <span style={{ color: 'var(--text)' }}>{cert.year}</span>
                    </div>
                  )}
                </div>

                {cert.credentialUrl && (
                  <a 
                    href={cert.credentialUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link"
                    style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '6px', 
                      fontSize: '0.85rem', 
                      fontWeight: 600, 
                      color: 'var(--accent)',
                      textDecoration: 'none'
                    }}
                  >
                    <ExternalLink size={14} />
                    View Credential
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

export default Education;
