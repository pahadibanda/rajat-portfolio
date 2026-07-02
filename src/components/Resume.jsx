import { useState } from 'react';
import { FileText, Download, Eye, EyeOff } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

function Resume() {
  const { resumeUrl } = portfolioData.personalInfo;
  const [showPreview, setShowPreview] = useState(false);

  return (
    <section id="resume" className="resume-section">
      <div className="section-title">
        <h2>Resume</h2>
      </div>

      <div className="card reveal-fade-up" style={{ maxWidth: '800px', margin: '0 auto', padding: '32px', textAlign: 'center' }}>
        <div style={{
          background: 'var(--accent-bg)',
          border: '1px solid var(--accent-border)',
          borderRadius: '50%',
          width: '64px',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--accent)',
          margin: '0 auto 20px auto'
        }}>
          <FileText size={32} />
        </div>

        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-h)', marginBottom: '32px' }}>
          Professional Resume
        </h3>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: showPreview ? '32px' : '0' }}>
          <button 
            onClick={() => setShowPreview(!showPreview)} 
            className="btn btn-primary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
          >
            {showPreview ? <EyeOff size={18} /> : <Eye size={18} />}
            {showPreview ? 'Hide Preview' : 'Preview Resume'}
          </button>
          
          <a 
            href="/resume.pdf" 
            download="resume.pdf" 
            className="btn btn-secondary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
          >
            <Download size={18} />
            Download PDF
          </a>
        </div>

        {showPreview && (
          <div className="animate-fade-in" style={{ marginTop: '24px', border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden', background: '#fff' }}>
            <iframe 
              src="/resume.pdf#toolbar=0" 
              width="100%" 
              height="600px" 
              style={{ border: 'none' }} 
              title="Resume Preview"
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default Resume;
