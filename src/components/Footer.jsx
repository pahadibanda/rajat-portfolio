import { portfolioData } from '../data/portfolioData';

function Footer() {
  const { name } = portfolioData.personalInfo;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container" style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '40px 24px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <p className="footer-text" style={{ margin: 0, fontWeight: 600, color: 'var(--text-h)' }}>
          © {currentYear} {name}
        </p>
        <p className="footer-text" style={{ margin: 0, fontSize: '0.9rem' }}>
          Built with React + Vite
        </p>
        <p className="footer-text" style={{ margin: 0, fontSize: '0.9rem' }}>
          Designed by {name}
        </p>
        <p className="footer-text" style={{ margin: '8px 0 0 0', fontSize: '1rem', color: 'var(--accent)', fontWeight: 650 }}>
          Thanks for visiting ❤️
        </p>
      </div>
      <div className="footer-links" style={{ marginTop: '8px' }}>
        <a href="#hero" className="footer-link">Back to top</a>
      </div>
    </footer>
  );
}

export default Footer;
