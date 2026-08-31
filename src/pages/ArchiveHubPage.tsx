import React from 'react';
import { ARCHIVE_YEARS } from '../data/archiveData';
import { BookOpen, ArrowRight, ExternalLink, FileSpreadsheet, FolderDown, Calendar, Award } from 'lucide-react';

interface ArchiveHubPageProps {
  onNavigate: (path: string) => void;
}

export const ArchiveHubPage: React.FC<ArchiveHubPageProps> = ({ onNavigate }) => {
  return (
    <div style={{ backgroundColor: 'var(--bg-main)', minHeight: '100vh', paddingBottom: '5rem' }}>
      {/* Page Header */}
      <section
        style={{
          paddingTop: '3.5rem',
          paddingBottom: '3.5rem',
          backgroundColor: '#ffffff',
          borderBottom: '1px solid var(--border-color)'
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
            <span className="badge badge-slate" style={{ marginBottom: '0.75rem' }}>
              Historical Repository
            </span>
            <h1 style={{ fontSize: '2.75rem', fontWeight: 500, color: 'var(--slate-900)', marginBottom: '1rem' }}>
              Tournament Archive
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--slate-600)', lineHeight: 1.6 }}>
              Previous results, official exams, answer keys, information packets, and historical leadership rosters from every WashU Science Olympiad Invitational.
            </p>
          </div>
        </div>
      </section>

      {/* Main Archive Year Cards */}
      <section style={{ paddingTop: '3.5rem' }}>
        <div className="container" style={{ maxWidth: '1040px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {ARCHIVE_YEARS.map((yr) => (
              <div
                key={yr.yearId}
                className="card"
                style={{
                  padding: '2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                  borderLeft: '5px solid var(--washu-crimson)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '0.5rem' }}>
                      <span
                        style={{
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          backgroundColor: 'var(--washu-crimson-subtle)',
                          color: 'var(--washu-crimson)',
                          padding: '0.25rem 0.65rem',
                          borderRadius: '6px',
                          border: '1px solid var(--washu-crimson-border)'
                        }}
                      >
                        {yr.academicYear}
                      </span>
                      <span style={{ fontSize: '0.85rem', color: 'var(--slate-500)', fontWeight: 600 }}>
                        Director: {yr.director}
                      </span>
                    </div>

                    <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '0.5rem' }}>
                      {yr.title}
                    </h2>

                    <p style={{ fontSize: '0.95rem', color: 'var(--slate-600)', lineHeight: 1.6, maxWidth: '720px' }}>
                      {yr.description}
                    </p>
                  </div>

                  <button
                    onClick={() => onNavigate(yr.path)}
                    className="btn btn-primary btn-sm"
                    style={{ padding: '0.6rem 1.25rem' }}
                  >
                    <span>View Dedicated {yr.academicYear} Page</span>
                    <ArrowRight size={16} />
                  </button>
                </div>

                {/* Resource Links inside this Year */}
                <div
                  style={{
                    backgroundColor: 'var(--slate-50)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '12px',
                    padding: '1.25rem',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '0.75rem'
                  }}
                >
                  {yr.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.75rem 1rem',
                        borderRadius: '8px',
                        backgroundColor: '#ffffff',
                        border: '1px solid var(--border-color)',
                        color: 'var(--slate-800)',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        transition: 'all 0.15s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--washu-crimson)';
                        e.currentTarget.style.color = 'var(--washu-crimson)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border-color)';
                        e.currentTarget.style.color = 'var(--slate-800)';
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', overflow: 'hidden' }}>
                        {link.type === 'sheets' ? (
                          <FileSpreadsheet size={16} color="var(--washu-green)" />
                        ) : link.type === 'drive' ? (
                          <FolderDown size={16} color="var(--washu-crimson)" />
                        ) : (
                          <BookOpen size={16} color="var(--accent-gold)" />
                        )}
                        <span style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>
                          {link.label}
                        </span>
                      </div>
                      <ExternalLink size={14} style={{ flexShrink: 0 }} />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
