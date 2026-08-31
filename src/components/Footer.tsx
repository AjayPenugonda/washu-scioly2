import React from 'react';
import { Mail, MapPin, ExternalLink, Heart, Sparkles, BookOpen, Calendar, ShieldCheck } from 'lucide-react';
import { TOURNAMENT_INFO } from '../data/tournamentData';
import { ARCHIVE_YEARS } from '../data/archiveData';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--slate-950)',
        color: 'var(--slate-300)',
        borderTop: '1px solid var(--slate-800)',
        paddingTop: '4.5rem',
        paddingBottom: '3rem'
      }}
    >
      <div className="container">
        {/* Main Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem'
          }}
        >
          {/* Col 1: Brand & Mission */}
          <div style={{ maxWidth: '340px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--washu-crimson)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 10px rgba(165, 20, 23, 0.4)'
                }}
              >
                <span
                  style={{
                    color: '#ffffff',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                    fontSize: '1.2rem'
                  }}
                >
                  W
                </span>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '1.2rem', color: '#ffffff', letterSpacing: '-0.01em' }}>
                  WashU SciOly
                </div>
                <div style={{ fontSize: '0.725rem', color: '#f87171', letterSpacing: '0.04em', textTransform: 'uppercase', fontWeight: 600 }}>
                  Washington University in St. Louis
                </div>
              </div>
            </div>
            <p style={{ fontSize: '0.875rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              A student-led Science Olympiad College Alumni Chapter dedicated to hosting accessible, rigorous, and premier in-person STEM invitationals for students nationwide.
            </p>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'rgba(0, 115, 96, 0.2)',
                border: '1px solid rgba(0, 115, 96, 0.4)',
                padding: '0.4rem 0.85rem',
                borderRadius: '8px',
                fontSize: '0.8rem',
                color: '#34d399'
              }}
            >
              <ShieldCheck size={16} />
              <span>Official Collegiate Invitational</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: 700, marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              {[
                { label: 'Home Overview', path: '/' },
                { label: 'Tournament & Logistics', path: '/tournament' },
                { label: 'Team Registration', path: '/register' },
                { label: 'About Us & Executive Board', path: '/about' },
                { label: 'Current Results & Exams', path: '/results' },
                { label: 'Master Archive Hub', path: '/archive' }
              ].map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => handleNav(link.path)}
                    style={{
                      color: '#cbd5e1',
                      transition: 'color var(--transition-fast)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.375rem'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#cbd5e1')}
                  >
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Tournament Archive */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: 700, marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Tournament Archive
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              {ARCHIVE_YEARS.map((yr) => (
                <li key={yr.yearId}>
                  <button
                    onClick={() => handleNav(yr.path)}
                    style={{
                      color: '#cbd5e1',
                      transition: 'color var(--transition-fast)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      textAlign: 'left'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#cbd5e1')}
                  >
                    <BookOpen size={14} color="#94a3b8" />
                    <span>{yr.title}</span>
                  </button>
                </li>
              ))}
              <li>
                <a
                  href="https://drive.google.com/drive/folders/1qBZu6lkPf5rE7jnCEkZvlsMHxEDHR5Qw?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: '#94a3b8',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.85rem',
                    marginTop: '0.25rem'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                >
                  <ExternalLink size={14} />
                  <span>Google Drive Exam Repository</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Venue */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: 700, marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Tournament Office
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <MapPin size={18} color="var(--washu-crimson-light)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ color: '#ffffff', fontWeight: 600 }}>Danforth Campus</div>
                  <div style={{ color: '#94a3b8' }}>Washington University in St. Louis</div>
                  <div style={{ color: '#94a3b8' }}>1 Brookings Dr, St. Louis, MO 63130</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Mail size={18} color="var(--washu-green-light)" style={{ flexShrink: 0 }} />
                <a
                  href={`mailto:${TOURNAMENT_INFO.contactEmail}`}
                  style={{ color: '#ffffff', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                >
                  {TOURNAMENT_INFO.contactEmail}
                </a>
              </div>

              <div style={{ marginTop: '0.5rem' }}>
                <a
                  href={TOURNAMENT_INFO.anonymousFeedbackUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline btn-sm"
                  style={{
                    color: '#ffffff',
                    borderColor: 'var(--slate-700)',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    width: '100%'
                  }}
                >
                  <Sparkles size={14} />
                  <span>Submit Anonymous Feedback</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom divider & copyright */}
        <div
          style={{
            borderTop: '1px solid var(--slate-800)',
            paddingTop: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.8rem',
            color: '#64748b'
          }}
        >
          <div>
            © {new Date().getFullYear()} WashU Science Olympiad. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <span>Organized with</span>
            <Heart size={14} color="#ef4444" fill="#ef4444" />
            <span>by WashU Alumni & Undergraduates</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
