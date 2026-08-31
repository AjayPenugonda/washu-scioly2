import React from 'react';
import { TOURNAMENT_INFO } from '../data/tournamentData';
import { ARCHIVE_YEARS } from '../data/archiveData';
import {
  FileSpreadsheet,
  FolderDown,
  Sparkles,
  ExternalLink,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  HelpCircle
} from 'lucide-react';

interface ResultsPageProps {
  onNavigate: (path: string) => void;
}

export const ResultsPage: React.FC<ResultsPageProps> = ({ onNavigate }) => {
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
            <span className="badge badge-crimson" style={{ marginBottom: '0.75rem' }}>
              Official Scores & Test Archive
            </span>
            <h1 style={{ fontSize: '2.75rem', fontWeight: 500, color: 'var(--slate-900)', marginBottom: '1rem' }}>
              Tournament Results & Exams
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--slate-600)', lineHeight: 1.6 }}>
              Access full team score spreadsheets, raw event scores, official test PDFs, answer keys, and anonymous competitor feedback forms.
            </p>
          </div>
        </div>
      </section>

      {/* Main Results & Exams Hub */}
      <section style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="container" style={{ maxWidth: '1040px' }}>
          {/* Active Tournament Result Cards */}
          <div className="grid-2" style={{ marginBottom: '3rem' }}>
            {/* Division B Card */}
            <div
              className="card"
              style={{
                borderTop: '5px solid var(--washu-green)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2.25rem'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      backgroundColor: 'var(--washu-green-subtle)',
                      color: 'var(--washu-green)',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '6px',
                      border: '1px solid var(--washu-green-border)'
                    }}
                  >
                    Division B (Middle School)
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--slate-500)', fontWeight: 600 }}>
                    2026 Invitational
                  </span>
                </div>

                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '0.75rem' }}>
                  Division B Results & Exams
                </h3>

                <p style={{ fontSize: '0.9rem', color: 'var(--slate-600)', lineHeight: 1.5, marginBottom: '1.75rem' }}>
                  Official score matrix and Google Drive folder containing all written exams, station packets, and answer keys.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.75rem' }}>
                  <a
                    href="https://drive.google.com/drive/folders/1qBZu6lkPf5rE7jnCEkZvlsMHxEDHR5Qw?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-green"
                    style={{ justifyContent: 'space-between', padding: '0.85rem 1.25rem' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                      <FolderDown size={18} />
                      <span style={{ fontWeight: 700 }}>2026 Div B Exams & Keys</span>
                    </div>
                    <ExternalLink size={16} />
                  </a>

                  <a
                    href="https://docs.google.com/spreadsheets/d/14tIG8mNyPF1JeuVO0huhYs7xZDYq0B0DT2z8O3lR3i4/edit?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline"
                    style={{ justifyContent: 'space-between', padding: '0.85rem 1.25rem' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                      <FileSpreadsheet size={18} color="var(--washu-green)" />
                      <span style={{ fontWeight: 700 }}>2026 Div B Results Spreadsheet</span>
                    </div>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              <div style={{ fontSize: '0.8rem', color: 'var(--slate-500)' }}>
                Directly hosted on Google Drive & Sheets
              </div>
            </div>

            {/* Division C Card */}
            <div
              className="card"
              style={{
                borderTop: '5px solid var(--washu-crimson)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2.25rem'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      backgroundColor: 'var(--washu-crimson-subtle)',
                      color: 'var(--washu-crimson)',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '6px',
                      border: '1px solid var(--washu-crimson-border)'
                    }}
                  >
                    Division C (High School)
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--slate-500)', fontWeight: 600 }}>
                    2026 Invitational
                  </span>
                </div>

                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '0.75rem' }}>
                  Division C Results & Exams
                </h3>

                <p style={{ fontSize: '0.9rem', color: 'var(--slate-600)', lineHeight: 1.5, marginBottom: '1.75rem' }}>
                  Official score matrix and Google Drive folder containing all varsity level tests, laboratory rubrics, and keys.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.75rem' }}>
                  <a
                    href="https://drive.google.com/drive/folders/1czpbQLL5ZQMXRFKGeL4sHSgzTSK0vCaL?usp=drive_link"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                    style={{ justifyContent: 'space-between', padding: '0.85rem 1.25rem' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                      <FolderDown size={18} />
                      <span style={{ fontWeight: 700 }}>2026 Div C Exams & Keys</span>
                    </div>
                    <ExternalLink size={16} />
                  </a>

                  <a
                    href="https://docs.google.com/spreadsheets/d/1MA2OEi5089sbEBYGt_tInwRftF9hqiw1CcvTg3Hvz-w/edit?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline"
                    style={{ justifyContent: 'space-between', padding: '0.85rem 1.25rem' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                      <FileSpreadsheet size={18} color="var(--washu-crimson)" />
                      <span style={{ fontWeight: 700 }}>2026 Div C Results Spreadsheet</span>
                    </div>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              <div style={{ fontSize: '0.8rem', color: 'var(--slate-500)' }}>
                Directly hosted on Google Drive & Sheets
              </div>
            </div>
          </div>

          {/* Anonymous Feedback Form Callout */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              border: '1px solid var(--border-color)',
              padding: '2.5rem',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.5rem',
              marginBottom: '3.5rem'
            }}
          >
            <div style={{ maxWidth: '600px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <Sparkles size={20} color="var(--accent-gold)" />
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--slate-900)' }}>
                  We Value Your Tournament Feedback
                </h3>
              </div>
              <p style={{ fontSize: '0.925rem', color: 'var(--slate-600)', lineHeight: 1.6, margin: 0 }}>
                Help us continuously improve our tournament quality, test balance, and venue logistics by submitting thoughts to our anonymous feedback form.
              </p>
            </div>

            <a
              href={TOURNAMENT_INFO.anonymousFeedbackUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary btn-lg"
            >
              <span>Open Feedback Survey</span>
              <ExternalLink size={18} />
            </a>
          </div>

          {/* Past Years Archive Links */}
          <div>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span className="badge badge-slate" style={{ marginBottom: '0.5rem' }}>
                Historical Datasets
              </span>
              <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--slate-900)' }}>
                Looking for Previous Years?
              </h2>
            </div>

            <div className="grid-3">
              {ARCHIVE_YEARS.map((yr) => (
                <div
                  key={yr.yearId}
                  className="card card-interactive"
                  onClick={() => onNavigate(yr.path)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--washu-crimson)', marginBottom: '0.25rem' }}>
                      {yr.academicYear} Archive
                    </div>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '0.5rem' }}>
                      {yr.title}
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--slate-600)', lineHeight: 1.5, marginBottom: '1rem' }}>
                      {yr.description.slice(0, 95)}...
                    </p>
                  </div>

                  <div
                    style={{
                      paddingTop: '0.75rem',
                      borderTop: '1px solid var(--border-color)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: 'var(--washu-crimson)'
                    }}
                  >
                    <span>View {yr.academicYear} Exams</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
