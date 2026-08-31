import React, { useState } from 'react';
import { ARCHIVE_YEARS, INAUGURAL_SUPERVISORS_2023_24 } from '../data/archiveData';
import {
  FileSpreadsheet,
  FileText,
  ExternalLink,
  ArrowLeft,
  Search,
  Sparkles,
  Award,
  Calendar,
  BookOpen
} from 'lucide-react';

interface Archive2023_24Props {
  onNavigate: (path: string) => void;
}

export const Archive2023_24: React.FC<Archive2023_24Props> = ({ onNavigate }) => {
  const archiveData = ARCHIVE_YEARS.find((y) => y.yearId === '2023-24')!;
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSupervisors = INAUGURAL_SUPERVISORS_2023_24.filter(
    (s) => s.event.toLowerCase().includes(searchQuery.toLowerCase()) || s.supervisors.some((sup) => sup.toLowerCase().includes(searchQuery.toLowerCase()))
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
              <span className="badge badge-crimson">2023–2024 Academic Year</span>
              <span className="badge badge-gold">Inaugural Invitational</span>
            </div>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 500, color: 'var(--slate-900)', marginBottom: '0.75rem' }}>
              2024 DIVISION C TOURNAMENT (February 4, 2024)
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'var(--slate-600)', lineHeight: 1.6 }}>
              The inaugural Washington University in St. Louis Science Olympiad Invitational tournament welcoming varsity and junior varsity teams from across the nation.
            </p>
          </div>
        </div>
      </section>

      {/* Official Results & Packets */}
      <section style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 500, color: 'var(--slate-900)', marginBottom: '0.5rem' }}>
              Tournament Results & Information
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--slate-600)' }}>
              The tournament results and information packet can be found here:
            </p>
          </div>

          <div className="grid-2" style={{ marginBottom: '3.5rem' }}>
            {/* Results Link */}
            <div className="card" style={{ borderTop: '4px solid var(--washu-crimson)', padding: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span className="badge badge-crimson">Division C Results</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--slate-500)', fontWeight: 600 }}>Feb 4, 2024</span>
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '1rem' }}>
                2024 Tournament Results
              </h3>
              <a
                href="https://drive.google.com/file/d/1eirlvQ8Fdi-BZ3X9Iss8xv29ByUEc7kW/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
                style={{ justifyContent: 'space-between' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FileText size={18} />
                  <span>2024 WashU Invitational Results</span>
                </div>
                <ExternalLink size={16} />
              </a>
            </div>

            {/* Info Packet Link */}
            <div className="card" style={{ borderTop: '4px solid var(--washu-green)', padding: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span className="badge badge-green">Tournament Information</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--slate-500)', fontWeight: 600 }}>Official Packet</span>
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '1rem' }}>
                2024 Tournament Information Packet
              </h3>
              <a
                href="https://drive.google.com/file/d/1RiXRr4dLZTjh1YC06c_5ElEg3Asj0ee-/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
                style={{ justifyContent: 'space-between' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <BookOpen size={18} />
                  <span>2024 Tournament Information</span>
                </div>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* 2023-2024 Founding Executive Board */}
          <div style={{ marginBottom: '3.5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>
                Founding Chapter Officers
              </span>
              <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--slate-900)' }}>
                2023–2024 Executive Board
              </h2>
            </div>

            <div className="grid-3" style={{ maxWidth: '1040px', margin: '0 auto 2.5rem auto' }}>
              {[
                { name: 'Aryan Pradhan', role: 'Director' },
                { name: 'Will Hou', role: 'Assistant Director' },
                { name: 'Michelle Liu', role: 'Assistant Director' }
              ].map((off, idx) => (
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

            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--slate-900)' }}>
                Advisory Board
              </h3>
            </div>

            <div className="grid-3" style={{ maxWidth: '1040px', margin: '0 auto' }}>
              {[
                { role: 'Test Events Coordinator', name: 'Cynthia Zhi' },
                { role: 'Build Events Coordinator', name: 'Giulissa Cabrera' },
                { role: 'Operations Coordinator', name: 'Sydney Buffett' },
                { role: 'Secretary', name: 'Reece Chae' },
                { role: 'Marketing Coordinators', name: 'Rachel Bai, Emily Chen' }
              ].map((off, idx) => (
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

          {/* 2023-2024 Event Supervisors List */}
          <div>
            <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
              <span className="badge badge-slate" style={{ marginBottom: '0.5rem' }}>
                Inaugural Staff
              </span>
              <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--slate-900)' }}>
                2023–2024 Event Supervisors
              </h2>
            </div>

            {/* Search Input */}
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
              {filteredSupervisors.map((item, idx) => (
                <div key={idx} className="card" style={{ padding: '1.25rem 1.5rem', borderLeft: '4px solid var(--washu-crimson)' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--washu-crimson)', marginBottom: '0.25rem' }}>
                    Division C Event
                  </div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '0.5rem' }}>
                    {item.event}
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
