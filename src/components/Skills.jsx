import { portfolioData } from '../data/portfolioData';

function Skills() {
  const { skills } = portfolioData;

  // Group skills by category
  const categoryOrder = ["Programming", "Data Analysis", "Machine Learning", "Tools"];
  
  const groupedSkills = skills.reduce((acc, skill) => {
    const category = skill.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {});

  return (
    <section id="skills" className="skills-section">
      <div className="section-title">
        <h2>Trusted Technologies</h2>
      </div>

      <div className="skills-container" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        {categoryOrder.map((category) => {
          const items = groupedSkills[category];
          if (!items || items.length === 0) return null;

          return (
            <div key={category} className="skills-category" style={{ textAlign: 'left' }}>
              <h3 className="category-title" style={{
                fontSize: '1.4rem',
                fontWeight: 650,
                marginBottom: '20px',
                color: 'var(--text-h)',
                borderLeft: '4px solid var(--accent)',
                paddingLeft: '12px'
              }}>
                {category}
              </h3>
              
              <div className="skills-cards-grid">
                {items.map((skill, index) => (
                  <div 
                    key={index} 
                    className={`card skill-card reveal-scale-in reveal-delay-${(index % 4) + 1}`}
                  >
                    <div className="skill-card-glow"></div>
                    <h4 className="skill-card-title">{skill.name}</h4>
                    <p className="skill-card-desc" style={{ marginBottom: skill.level ? '8px' : '0' }}>{skill.desc}</p>
                    {skill.level && (
                      <div className="skill-level-container" style={{ marginTop: '16px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 650, color: 'var(--text-h)', marginBottom: '6px' }}>
                          <span>Proficiency</span>
                          <span style={{ color: 'var(--accent)' }}>{skill.level}%</span>
                        </div>
                        <div className="skill-progress-bg" style={{
                          background: 'var(--border)',
                          height: '6px',
                          borderRadius: '3px',
                          overflow: 'hidden'
                        }}>
                          <div className="skill-progress-bar" style={{
                            width: `${skill.level}%`,
                            background: 'var(--gradient)',
                            height: '100%',
                            borderRadius: '3px'
                          }}></div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
