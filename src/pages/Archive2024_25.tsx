import React, { useState } from 'react';
import { ARCHIVE_YEARS } from '../data/archiveData';
import { EXECUTIVE_BOARD, ADVISORY_BOARD, SUPERVISORS_DIV_B, SUPERVISORS_DIV_C } from '../data/teamData';
import {
  FileSpreadsheet,
  FileText,
  ExternalLink,
  ArrowLeft,
  Search,
  BookOpen
} from 'lucide-react';

interface Archive2024_25Props {
  onNavigate: (path: string) => void;
}

export const Archive2024_25: React.FC<Archive2024_25Props> = ({ onNavigate }) => {
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
      {/* Header */}
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
              <span className="badge badge-crimson">2024–2025 Academic Year</span>
              <span className="badge badge-slate">2nd Annual Invitational</span>
            </div>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 500, color: 'var(--slate-900)', marginBottom: '0.75rem' }}>
              2024–2025 Division B & C Archive
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'var(--slate-600)', lineHeight: 1.6 }}>
              Official tournament results, scoreboards, information packets, and leadership roster for the 2024–2025 Division B (December 2024) and Division C (February 2025) tournaments.
            </p>
          </div>
        </div>
      </section>

      {/* Official Results & Packets Grid */}
      <section style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 500, color: 'var(--slate-900)', marginBottom: '0.5rem' }}>
              Official Tournament Files & Results
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--slate-600)' }}>
              All verified documents from the 2nd Annual WashU Invitational:
            </p>
          </div>

          <div className="grid-2" style={{ marginBottom: '3.5rem' }}>
            {/* Division B 2024 */}
            <div className="card" style={{ borderTop: '4px solid var(--washu-green)', padding: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span className="badge badge-green">Division B (Middle School)</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--slate-500)', fontWeight: 600 }}>Dec 2024</span>
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '1rem' }}>
                Division B Resources
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a
                  href="https://drive.google.com/file/d/1OVBKoMj1TiCzX98TRh7pgsmnxbicBYLR/view"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-green"
                  style={{ justifyContent: 'space-between' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FileText size={18} />
                    <span>2024 WashU Invitational Results (Div B)</span>
                  </div>
                  <ExternalLink size={16} />
                </a>

                <a
                  href="https://drive.google.com/file/d/1uOiWmLFLY2Z7uWhyPd1znHJoGtTiNVH3/view"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                  style={{ justifyContent: 'space-between' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <BookOpen size={18} color="var(--washu-green)" />
                    <span>2024 Tournament Information (Div B)</span>
                  </div>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Division C 2025 */}
            <div className="card" style={{ borderTop: '4px solid var(--washu-crimson)', padding: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span className="badge badge-crimson">Division C (High School)</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--slate-500)', fontWeight: 600 }}>Feb 2025</span>
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '1rem' }}>
                Division C Resources
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a
                  href="https://docs.google.com/spreadsheets/d/1-S3FcMHshRSUaycCilRYJA26vPMtotrFUmsS6iNKn7I/edit?gid=0#gid=0"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                  style={{ justifyContent: 'space-between' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FileSpreadsheet size={18} />
                    <span>2025 WashU Invitational Results (Div C)</span>
                  </div>
                  <ExternalLink size={16} />
                </a>

                <a
                  href="https://drive.google.com/file/d/1f2eDs9Ug0MdfhOHB3ydz_VLzHrZ6tEiS/view"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                  style={{ justifyContent: 'space-between' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <BookOpen size={18} color="var(--washu-crimson)" />
                    <span>2025 Tournament Information (Div C)</span>
                  </div>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* 2024-2025 Executive Board */}
          <div style={{ marginBottom: '3.5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span className="badge badge-crimson" style={{ marginBottom: '0.5rem' }}>
                Leadership Roster
              </span>
              <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--slate-900)' }}>
                2024–2025 Executive Board & Advisory Committee
              </h2>
            </div>

            <div className="grid-3" style={{ maxWidth: '1040px', margin: '0 auto 2.5rem auto' }}>
              {EXECUTIVE_BOARD.map((off, idx) => (
                <div key={idx} className="card" style={{ textAlign: 'center', padding: '1.75rem' }}>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '0.25rem' }}>
                    {off.name}
                  </h4>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--washu-crimson)', textTransform: 'uppercase' }}>
                    {off.role}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid-3" style={{ maxWidth: '1040px', margin: '0 auto' }}>
              {ADVISORY_BOARD.map((off, idx) => (
                <div key={idx} className="card" style={{ padding: '1.25rem 1.5rem' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--washu-green)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                    {off.role}
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--slate-900)' }}>
                    {off.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2024-2025 Event Supervisors */}
          <div>
            <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
              <span className="badge badge-slate" style={{ marginBottom: '0.5rem' }}>
                Event Supervisors Directory
              </span>
              <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--slate-900)' }}>
                2024–2025 Event Supervisors
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
                Division B Supervisors
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
                Division C Supervisors
              </button>
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
