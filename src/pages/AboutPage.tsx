import React, { useState, useMemo } from 'react';
import {
  MISSION_STATEMENT,
  EXECUTIVE_BOARD,
  ADVISORY_BOARD,
  SUPERVISORS_DIV_B,
  SUPERVISORS_DIV_C
} from '../data/teamData';
import { TOURNAMENT_INFO } from '../data/tournamentData';
import {
  Users,
  Award,
  Sparkles,
  Search,
  Mail,
  Heart,
  Shield,
  BookOpen,
  GraduationCap,
  Briefcase,
  ExternalLink
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'board' | 'supervisorsB' | 'supervisorsC'>('board');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSupervisorsB = useMemo(() => {
    if (!searchQuery.trim()) return SUPERVISORS_DIV_B;
    const q = searchQuery.toLowerCase();
    return SUPERVISORS_DIV_B.filter(
      (s) => s.eventName.toLowerCase().includes(q) || s.supervisors.some((sup) => sup.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  const filteredSupervisorsC = useMemo(() => {
    if (!searchQuery.trim()) return SUPERVISORS_DIV_C;
    const q = searchQuery.toLowerCase();
    return SUPERVISORS_DIV_C.filter(
      (s) => s.eventName.toLowerCase().includes(q) || s.supervisors.some((sup) => sup.toLowerCase().includes(q))
    );
  }, [searchQuery]);

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
              Meet Our Leadership & Supervisors
            </span>
            <h1 style={{ fontSize: '2.75rem', fontWeight: 500, color: 'var(--slate-900)', marginBottom: '1rem' }}>
              About WashU Science Olympiad
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--slate-600)', lineHeight: 1.6 }}>
              A passionate collegiate organization of former national competitors, researchers, and Washington University in St. Louis undergraduate and alumni leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement Showcase */}
      <section style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              border: '1px solid var(--border-color)',
              padding: '3rem 2.5rem',
              boxShadow: 'var(--shadow-sm)',
              position: 'relative'
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'var(--washu-crimson-subtle)',
                color: 'var(--washu-crimson)',
                padding: '0.35rem 0.85rem',
                borderRadius: '9999px',
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '1.25rem'
              }}
            >
              <Heart size={15} />
              <span>Our Mission</span>
            </div>

            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '1.25rem', lineHeight: 1.3 }}>
              Inspiring the Next Generation of Scientists & Innovators
            </h2>

            <p style={{ fontSize: '1.05rem', color: 'var(--slate-700)', lineHeight: 1.8, margin: 0 }}>
              {MISSION_STATEMENT}
            </p>
          </div>
        </div>
      </section>

      {/* Team Hierarchy Tabs */}
      <section style={{ paddingBottom: '4rem' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
            <div
              style={{
                display: 'flex',
                backgroundColor: '#ffffff',
                padding: '5px',
                borderRadius: '12px',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-xs)',
                flexWrap: 'wrap'
              }}
            >
              {[
                { id: 'board', label: 'Executive Board' },
                { id: 'supervisorsB', label: 'Division B Supervisors' },
                { id: 'supervisorsC', label: 'Division C Supervisors' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  style={{
                    padding: '0.6rem 1.25rem',
                    borderRadius: '9px',
                    fontSize: '0.9rem',
                    fontWeight: activeTab === tab.id ? 700 : 500,
                    color: activeTab === tab.id ? '#ffffff' : 'var(--slate-700)',
                    backgroundColor: activeTab === tab.id ? 'var(--washu-crimson)' : 'transparent',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* TAB 1: Executive Board (Unified) */}
          {activeTab === 'board' && (
            <div>
              <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                <span className="badge badge-crimson" style={{ marginBottom: '0.5rem' }}>
                  Student Leadership Team
                </span>
                <h3 style={{ fontSize: '2.25rem', fontWeight: 600, color: 'var(--slate-900)' }}>
                  Executive Board
                </h3>
                <p style={{ fontSize: '1rem', color: 'var(--slate-600)', maxWidth: '640px', margin: '0.5rem auto 0 auto' }}>
                  Our dedicated Washington University undergraduate officers and tournament coordinators directing every facet of the invitational.
                </p>
              </div>

              <div className="grid-3" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                {EXECUTIVE_BOARD.map((officer, idx) => (
                  <div
                    key={idx}
                    className="card"
                    style={{
                      padding: '2rem 1.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      borderTop: '4px solid var(--washu-crimson)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div>
                      <div
                        style={{
                          width: '60px',
                          height: '60px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--washu-crimson-subtle)',
                          border: '2px solid var(--washu-crimson-border)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '1.25rem',
                          color: 'var(--washu-crimson)',
                          fontWeight: 800,
                          fontSize: '1.35rem',
                          fontFamily: 'var(--font-heading)',
                          overflow: 'hidden',
                          position: 'relative'
                        }}
                      >
                        {officer.image ? (
                          <img
                            src={officer.image}
                            alt={officer.name}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover'
                            }}
                            onError={(e) => {
                              (e.currentTarget as HTMLElement).style.display = 'none';
                            }}
                          />
                        ) : (
                          <span>{officer.name.charAt(0)}</span>
                        )}
                      </div>

                      <div
                        style={{
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          color: 'var(--washu-crimson)',
                          marginBottom: '0.35rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em'
                        }}
                      >
                        {officer.role}
                      </div>

                      <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: '0.65rem' }}>
                        {officer.name}
                      </h4>

                      <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', lineHeight: 1.55, margin: 0 }}>
                        {officer.bio}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: Division B Event Supervisors */}
          {activeTab === 'supervisorsB' && (
            <div>
              <div style={{ maxWidth: '640px', margin: '0 auto 2rem auto' }}>
                <div style={{ position: 'relative' }}>
                  <Search
                    size={18}
                    color="var(--slate-400)"
                    style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }}
                  />
                  <input
                    type="text"
                    placeholder="Search Division B events or supervisor names..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="input-field"
                    style={{ paddingLeft: '2.75rem' }}
                  />
                </div>
              </div>

              <div className="grid-3">
                {filteredSupervisorsB.map((s, idx) => (
                  <div
                    key={idx}
                    className="card"
                    style={{
                      padding: '1.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      borderLeft: '4px solid var(--washu-green)'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--washu-green)', marginBottom: '0.25rem' }}>
                        Division B Event
                      </div>
                      <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '0.75rem' }}>
                        {s.eventName}
                      </h4>
                    </div>

                    <div style={{ paddingTop: '0.75rem', borderTop: '1px solid var(--border-color)' }}>
                      <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.25rem' }}>
                        Supervisors:
                      </div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--slate-800)' }}>
                        {s.supervisors.join(', ')}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: Division C Event Supervisors */}
          {activeTab === 'supervisorsC' && (
            <div>
              <div style={{ maxWidth: '640px', margin: '0 auto 2rem auto' }}>
                <div style={{ position: 'relative' }}>
                  <Search
                    size={18}
                    color="var(--slate-400)"
                    style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }}
                  />
                  <input
                    type="text"
                    placeholder="Search Division C events or supervisor names..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="input-field"
                    style={{ paddingLeft: '2.75rem' }}
                  />
                </div>
              </div>

              <div className="grid-3">
                {filteredSupervisorsC.map((s, idx) => (
                  <div
                    key={idx}
                    className="card"
                    style={{
                      padding: '1.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      borderLeft: '4px solid var(--washu-crimson)'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--washu-crimson)', marginBottom: '0.25rem' }}>
                        Division C Event
                      </div>
                      <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '0.75rem' }}>
                        {s.eventName}
                      </h4>
                    </div>

                    <div style={{ paddingTop: '0.75rem', borderTop: '1px solid var(--border-color)' }}>
                      <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.25rem' }}>
                        Supervisors:
                      </div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--slate-800)' }}>
                        {s.supervisors.join(', ')}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Volunteer & Join Chapter CTA */}
      <section style={{ paddingBottom: '3rem' }}>
        <div className="container" style={{ maxWidth: '840px' }}>
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              border: '1px solid var(--border-color)',
              padding: '2.5rem',
              textAlign: 'center'
            }}
          >
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '0.75rem' }}>
              Interested in Volunteering or Supervising?
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--slate-600)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              We welcome WashU undergraduate and graduate students, alumni, and passionate STEM professionals to join our event supervisor and volunteer team.
            </p>
            <a
              href={`mailto:${TOURNAMENT_INFO.contactEmail}`}
              className="btn btn-primary"
              style={{ padding: '0.75rem 2rem' }}
            >
              <Mail size={16} />
              <span>Contact Tournament Leadership ({TOURNAMENT_INFO.contactEmail})</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
