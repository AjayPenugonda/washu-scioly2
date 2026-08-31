import React, { useState } from 'react';
import { ARCHIVE_YEARS } from '../data/archiveData';
import { EXECUTIVE_BOARD, ADVISORY_BOARD, SUPERVISORS_DIV_B, SUPERVISORS_DIV_C } from '../data/teamData';
import {
  FolderDown,
  FileSpreadsheet,
  ExternalLink,
  Users,
  Award,
  ArrowLeft,
  Search,
  Sparkles,
  BookOpen
} from 'lucide-react';

interface Archive2025_26Props {
  onNavigate: (path: string) => void;
}

export const Archive2025_26: React.FC<Archive2025_26Props> = ({ onNavigate }) => {
  const archiveData = ARCHIVE_YEARS.find((y) => y.yearId === '2025-26')!;
  const [activeSupervisorTab, setActiveSupervisorTab] = useState<'B' | 'C'>('B');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredB = SUPERVISORS_DIV_B.filter(
    (s) => s.eventName.toLowerCase().includes(searchQuery.toLowerCase()) || s.supervisors.some((sup) => sup.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const filteredC = SUPERVISORS_DIV_C.filter(
    (s) => s.eventName.toLowerCase().includes(searchQuery.toLowerCase()) || s.supervisors.some((sup) => sup.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div style={{ backgroundColor: 'var(--bg-main)', minHeight: '100vh', paddingBottom: '5rem' }}>
      {/* Page Header */}
      <section
        style={{
          paddingTop: '3rem',
          paddingBottom: '3rem',
          backgroundColor: '#ffffff',
          borderBottom: '1px solid var(--border-color)'
        }}
      >
        <div className="container">
          <button
            onClick={() => onNavigate('/archive')}
            className="btn btn-outline btn-sm"
            style={{ marginBottom: '1.25rem', gap: '0.4rem' }}
          >
            <ArrowLeft size={16} />
            <span>Back to Archive Directory</span>
          </button>

          <div style={{ maxWidth: '840px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '0.5rem' }}>
              <span className="badge badge-crimson">2025–2026 Academic Year</span>
              <span className="badge badge-slate">3rd Annual Invitational</span>
            </div>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 500, color: 'var(--slate-900)', marginBottom: '0.75rem' }}>
              2025 TOURNAMENT RESULTS + EXAMS
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'var(--slate-600)', lineHeight: 1.6 }}>
              The complete test repository, answer keys, results spreadsheets, and organizer directory for the 3rd Annual WashU Science Olympiad Invitational (Division B & Division C).
            </p>
          </div>
        </div>
      </section>

      {/* Results & Exams Direct Grid */}
      <section style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 500, color: 'var(--slate-900)', marginBottom: '0.5rem' }}>
              Exams, Answer Keys & Results Matrices
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--slate-600)' }}>
              Download official competition tests or view full team placement sheets:
            </p>
          </div>

          <div className="grid-2" style={{ marginBottom: '3rem' }}>
            {/* Division B Exams & Results */}
            <div className="card" style={{ borderTop: '4px solid var(--washu-green)', padding: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span className="badge badge-green">Division B (Middle School)</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--slate-500)', fontWeight: 600 }}>2026 Tournament</span>
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '1rem' }}>
                Division B Resources
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a
                  href="https://drive.google.com/drive/folders/1qBZu6lkPf5rE7jnCEkZvlsMHxEDHR5Qw?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-green"
                  style={{ justifyContent: 'space-between' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FolderDown size={18} />
                    <span>2026 WashU Invitational Div B Exams</span>
                  </div>
                  <ExternalLink size={16} />
                </a>

                <a
                  href="https://docs.google.com/spreadsheets/d/14tIG8mNyPF1JeuVO0huhYs7xZDYq0B0DT2z8O3lR3i4/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                  style={{ justifyContent: 'space-between' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FileSpreadsheet size={18} color="var(--washu-green)" />
                    <span>2026 WashU Invitational Div B Results</span>
                  </div>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Division C Exams & Results */}
            <div className="card" style={{ borderTop: '4px solid var(--washu-crimson)', padding: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span className="badge badge-crimson">Division C (High School)</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--slate-500)', fontWeight: 600 }}>2026 Tournament</span>
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '1rem' }}>
                Division C Resources
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a
                  href="https://drive.google.com/drive/folders/1czpbQLL5ZQMXRFKGeL4sHSgzTSK0vCaL?usp=drive_link"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                  style={{ justifyContent: 'space-between' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FolderDown size={18} />
                    <span>2026 WashU Invitational Div C Exams</span>
                  </div>
                  <ExternalLink size={16} />
                </a>

                <a
                  href="https://docs.google.com/spreadsheets/d/1MA2OEi5089sbEBYGt_tInwRftF9hqiw1CcvTg3Hvz-w/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                  style={{ justifyContent: 'space-between' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FileSpreadsheet size={18} color="var(--washu-crimson)" />
                    <span>2026 WashU Invitational Div C Results</span>
                  </div>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Anonymous Feedback Form */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              border: '1px solid var(--border-color)',
              padding: '1.75rem 2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '3.5rem'
            }}
          >
            <div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '0.25rem' }}>
                Anonymous Feedback Form
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', margin: 0 }}>
                Did your team compete in this invitational? Submit feedback on test difficulty, event operations, and awards.
              </p>
            </div>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeC_69RpWqS87sWSK1jjyiagPihgrrEui3OsTrY7ZJLE9O-6Q/viewform?usp=header"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary btn-sm"
            >
              <span>Open Feedback Survey</span>
              <ExternalLink size={15} />
            </a>
          </div>

          {/* 2025-2026 Executive Board Roster */}
          <div style={{ marginBottom: '3.5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span className="badge badge-crimson" style={{ marginBottom: '0.5rem' }}>
                Leadership Roster
              </span>
              <h2 style={{ fontSize: '1.85rem', fontWeight: 600, color: 'var(--slate-900)' }}>
                2025–2026 Executive Board (3rd Invitational)
              </h2>
            </div>

            <div className="grid-3" style={{ maxWidth: '1080px', margin: '0 auto' }}>
              {EXECUTIVE_BOARD.map((off, idx) => (
                <div key={idx} className="card" style={{ padding: '1.5rem', borderTop: '3px solid var(--washu-crimson)' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--washu-crimson)', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                    {off.role}
                  </div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--slate-900)' }}>
                    {off.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* 2025-2026 Event Supervisors Roster */}
          <div>
            <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
              <span className="badge badge-slate" style={{ marginBottom: '0.5rem' }}>
                Test Writers & Event Staff
              </span>
              <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--slate-900)' }}>
                2025–2026 Event Supervisors
              </h2>
            </div>

            {/* Division Switcher */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <button
                onClick={() => setActiveSupervisorTab('B')}
                style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  backgroundColor: activeSupervisorTab === 'B' ? 'var(--washu-green)' : 'var(--slate-100)',
                  color: activeSupervisorTab === 'B' ? '#ffffff' : 'var(--slate-700)'
                }}
              >
                Division B Supervisors ({SUPERVISORS_DIV_B.length} Events)
              </button>
              <button
                onClick={() => setActiveSupervisorTab('C')}
                style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  backgroundColor: activeSupervisorTab === 'C' ? 'var(--washu-crimson)' : 'var(--slate-100)',
                  color: activeSupervisorTab === 'C' ? '#ffffff' : 'var(--slate-700)'
                }}
              >
                Division C Supervisors ({SUPERVISORS_DIV_C.length} Events)
              </button>
            </div>

            {/* Supervisor Search */}
            <div style={{ maxWidth: '540px', margin: '0 auto 1.5rem auto' }}>
              <input
                type="text"
                placeholder="Search event or supervisor..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-field"
              />
            </div>

            {/* Supervisors Grid */}
            <div className="grid-3">
              {(activeSupervisorTab === 'B' ? filteredB : filteredC).map((item, idx) => (
                <div key={idx} className="card" style={{ padding: '1.25rem 1.5rem' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: activeSupervisorTab === 'B' ? 'var(--washu-green)' : 'var(--washu-crimson)', marginBottom: '0.25rem' }}>
                    Division {item.division}
                  </div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '0.5rem' }}>
                    {item.eventName}
                  </h4>
                  <div style={{ fontSize: '0.85rem', color: 'var(--slate-700)', fontWeight: 500 }}>
                    {item.supervisors.join(', ')}
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
