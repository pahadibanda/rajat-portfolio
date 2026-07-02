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
          <p>
            {about}
          </p>
          <p>
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
    </section>
  );
}

export default About;
