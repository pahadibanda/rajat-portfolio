import { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

function GitHubStats() {
  const githubUrl = portfolioData.personalInfo.github;
  // Extract username from github link
  // e.g. https://github.com/yourusername -> yourusername
  const username = githubUrl ? githubUrl.split('/').pop() : 'yourusername';

  const [stats, setStats] = useState({ followers: 0, repos: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!username || username === 'yourusername') {
      setStats({ followers: 15, repos: 8 });
      setLoading(false);
      return;
    }

    fetch(`https://api.github.com/users/${username}`)
      .then(res => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(data => {
        setStats({
          followers: data.followers ?? 15,
          repos: data.public_repos ?? 8
        });
        setLoading(false);
      })
      .catch(() => {
        setStats({ followers: 15, repos: 8 });
        setLoading(false);
      });
  }, [username]);

  const hasRealUsername = username && username !== 'yourusername';

  return (
    <section id="github" className="github-section">
      <div className="section-title">
        <h2>GitHub Activity</h2>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        
        {/* Stats Grid */}
        <div className="grid-2" style={{ gap: '20px' }}>
          <div className="card reveal-fade-up reveal-delay-1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px', textAlign: 'center' }}>
            <div className="stat-number" style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--accent)', fontFamily: 'var(--heading)' }}>
              {loading ? '...' : stats.followers}
            </div>
            <div className="stat-label" style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text)', marginTop: '4px' }}>
              GitHub Followers
            </div>
          </div>

          <div className="card reveal-fade-up reveal-delay-2" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px', textAlign: 'center' }}>
            <div className="stat-number" style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--accent)', fontFamily: 'var(--heading)' }}>
              {loading ? '...' : stats.repos}
            </div>
            <div className="stat-label" style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text)', marginTop: '4px' }}>
              Public Repositories
            </div>
          </div>
        </div>

        {/* Contributions Calendar */}
        <div className="card reveal-fade-up reveal-delay-3" style={{ padding: '24px', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 650, color: 'var(--text-h)', marginBottom: '20px', textAlign: 'left' }}>
            Contributions Calendar
          </h3>
          <div style={{ width: '100%', overflowX: 'auto', display: 'flex', justifyContent: 'center' }}>
            {hasRealUsername ? (
              <img 
                src={`https://ghchart.rshah.org/aa3bff/${username}`} 
                alt={`${username}'s GitHub Contributions`}
                style={{ minWidth: '700px', maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
              />
            ) : (
              <div style={{ padding: '40px 20px', color: 'var(--text)', opacity: 0.7 }}>
                <p style={{ margin: '0 0 8px 0', fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-h)' }}>Demo Contributions Chart</p>
                <p style={{ margin: 0 }}>Configure your actual GitHub username in <code>portfolioData.js</code> to load your live contribution calendar grid!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default GitHubStats;
