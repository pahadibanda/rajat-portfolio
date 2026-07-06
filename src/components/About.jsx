import { Trophy } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

function About() {
  const { about } = portfolioData.personalInfo;

  const stats = [
    { number: `${portfolioData.certifications.length}`, label: "Certifications" },
    { number: `${portfolioData.projects.length}`, label: "Selected Projects" },
    { number: "Power BI", label: "Dashboards" },
    { number: "Active", label: "Open to Work" },
  ];

  return (
    <section id="about" className="about-section">
      <div className="section-title">
        <h2>About Me</h2>
      </div>

      <div className="about-grid">
        <div className="about-text reveal-fade-up">
          <p style={{ marginBottom: '16px' }}>
            {about}
          </p>
          <p style={{ marginBottom: '16px' }}>
            I believe that data integrity is just as important as storytelling. I enjoy working on challenges that require creative problem-solving, whether it is optimizing database queries, building predictive ML pipelines, or translating business questions into interactive visual dashboards.
          </p>
          <p>
            When I am not modeling data, I explore public datasets, study analytics trends, and practice advanced querying techniques.
          </p>
        </div>

        <div className="about-stats">
          {stats.map((stat, i) => (
            <div key={i} className={`stat-card reveal-fade-up reveal-delay-${(i % 4) + 1}`}>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="reveal-fade-up" style={{ marginTop: '40px', textAlign: 'left' }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.4rem', color: 'var(--text-h)', marginBottom: '16px' }}>
          <Trophy size={22} color="var(--accent)" /> Key Achievements & Extracurriculars
        </h3>
        <div className="card" style={{ padding: '24px', background: 'var(--accent-bg)', borderColor: 'var(--accent-border)' }}>
          <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-h)', marginBottom: '8px' }}>
            National Basketball Player
          </h4>
          <p style={{ fontSize: '1.05rem', color: 'var(--text)', lineHeight: 1.6, margin: 0 }}>
            Represented the state of **Himachal Pradesh** in official national tournaments under the **Basketball Federation of India (BFI)**. Demonstrated leadership, disciplined collaboration, and tactical teamwork in high-pressure competitive environments.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
