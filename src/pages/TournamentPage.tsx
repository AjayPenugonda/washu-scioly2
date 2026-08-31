import React, { useState } from 'react';
import { TOURNAMENT_INFO, EVENTS_DATA } from '../data/tournamentData';
import { PeriodicEventTable } from '../components/PeriodicEventTable';
import { CountdownTimer } from '../components/CountdownTimer';
import { CampusMapGuide } from '../components/CampusMapGuide';
import { FAQS_DATA } from '../data/faqs';
import {
  FileText,
  MapPin,
  Calendar,
  Download,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Shield,
  Clock,
  Sparkles,
  HelpCircle,
  Table
} from 'lucide-react';
import { Division } from '../types';

interface TournamentPageProps {
  onNavigate: (path: string) => void;
  initialDivision?: 'B' | 'C' | 'Both';
}

export const TournamentPage: React.FC<TournamentPageProps> = ({ onNavigate }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div style={{ backgroundColor: 'var(--bg-main)', minHeight: '100vh', paddingBottom: '5rem' }}>
      {/* Hero Header */}
      <section
        style={{
          paddingTop: '3.5rem',
          paddingBottom: '3.5rem',
          backgroundColor: '#ffffff',
          borderBottom: '1px solid var(--border-color)'
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
            <span className="badge badge-crimson" style={{ marginBottom: '0.75rem' }}>
              Official Tournament Headquarters
            </span>
            <h1 style={{ fontSize: '2.85rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: '1rem' }}>
              Tournament Information & Periodic Event Catalog
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--slate-600)', lineHeight: 1.6 }}>
              Interactive periodic table of events, mechanical countdown clocks, logistics schedules, rule interpretations, and Danforth campus maps for Washington University Science Olympiad.
            </p>
          </div>
        </div>
      </section>

      {/* Flipdown Countdown Widget */}
      <section style={{ paddingTop: '2.5rem', paddingBottom: '2rem' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <CountdownTimer />
        </div>
      </section>

      {/* Official Packet & Campus Map Cards */}
      <section style={{ paddingBottom: '2.5rem' }}>
        <div className="container">
          <div className="grid-2">
            {/* Packet Card */}
            <div
              className="card"
              style={{
                backgroundColor: 'var(--slate-950)',
                color: '#ffffff',
                border: '1px solid var(--slate-800)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2rem',
                borderRadius: '20px'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(158, 27, 33, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#f87171'
                    }}
                  >
                    <FileText size={20} />
                  </div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      color: '#f87171',
                      letterSpacing: '0.06em',
                      fontFamily: 'var(--font-heading)'
                    }}
                  >
                    Official Master PDF
                  </span>
                </div>

                <h3 style={{ fontSize: '1.45rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.75rem' }}>
                  Tournament Information Packet
                </h3>

                <p style={{ fontSize: '0.925rem', color: '#94a3b8', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                  Contains complete schedules, rules clarifications, homeroom assignments, impound drop-offs, check-in logistics, and awards ceremony protocols.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href={TOURNAMENT_INFO.tournamentPacketUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                  style={{ flex: 1 }}
                >
                  <Download size={16} />
                  <span>Download Info Packet (PDF)</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Campus Map Card */}
            <div
              className="card"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid var(--border-color)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2rem',
                borderRadius: '20px'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      backgroundColor: 'var(--washu-green-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--washu-green)'
                    }}
                  >
                    <MapPin size={20} />
                  </div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      color: 'var(--washu-green)',
                      letterSpacing: '0.06em',
                      fontFamily: 'var(--font-heading)'
                    }}
                  >
                    Interactive Navigation
                  </span>
                </div>

                <h3 style={{ fontSize: '1.45rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: '0.75rem' }}>
                  Danforth Campus Competition Map
                </h3>

                <p style={{ fontSize: '0.925rem', color: 'var(--slate-600)', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                  Searchable Google MyMaps with custom pins for test classrooms, engineering flight arenas, free visitor garages, and dining halls.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href={TOURNAMENT_INFO.campusMapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                  style={{ flex: 1, fontWeight: 700 }}
                >
                  <MapPin size={16} />
                  <span>Click to Open Google MyMaps ↗</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* In-Person Guidelines Banner */}
      <section style={{ paddingBottom: '2.5rem' }}>
        <div className="container">
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1.5px solid var(--washu-crimson-border)',
              borderRadius: '18px',
              padding: '1.75rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1.25rem',
              boxShadow: 'var(--shadow-xs)'
            }}
          >
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                backgroundColor: 'var(--washu-crimson-subtle)',
                color: 'var(--washu-crimson)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <Shield size={24} />
            </div>
            <div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: '0.35rem' }}>
                In-Person Tournament Proctoring & Standards
              </h4>
              <p style={{ fontSize: '0.925rem', color: 'var(--slate-700)', lineHeight: 1.6, margin: 0 }}>
                This invitational is held strictly <strong>IN-PERSON</strong> across the Washington University in St. Louis Danforth Campus. All 23 Division B and 23 Division C events are written, proctored, and evaluated by WashU undergraduate science and engineering students alongside seasoned Science Olympiad alumni.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Periodic Table of Events Section */}
      <section id="periodic-catalog" style={{ paddingBottom: '4rem' }}>
        <div className="container">
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '6px',
                  backgroundColor: 'var(--washu-crimson)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Table size={16} />
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: 'var(--washu-crimson)',
                  letterSpacing: '0.05em'
                }}
              >
                Interactive Event Catalog
              </span>
            </div>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 700, color: 'var(--slate-900)' }}>
              Periodic Table of Events
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--slate-600)' }}>
              Browse the competition elements categorized by scientific discipline. Click any element to peek at test details, required calculators, and laboratory safety rules.
            </p>
          </div>

          <PeriodicEventTable events={EVENTS_DATA} />
        </div>
      </section>

      {/* Interactive Campus Map Section */}
      <section style={{ paddingBottom: '3.5rem' }}>
        <div className="container">
          <CampusMapGuide />
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section id="faq" style={{ paddingBottom: '3.5rem' }}>
        <div className="container" style={{ maxWidth: '840px' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="badge badge-crimson" style={{ marginBottom: '0.75rem' }}>
              Common Questions
            </span>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--slate-900)' }}>
              Frequently Asked Questions
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--slate-600)' }}>
              Quick answers for coaches, student competitors, and parents.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {FAQS_DATA.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '14px',
                    border: '1px solid var(--border-color)',
                    overflow: 'hidden',
                    transition: 'all var(--transition-fast)',
                    boxShadow: 'var(--shadow-xs)'
                  }}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      padding: '1.25rem 1.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      fontWeight: 700,
                      fontSize: '1rem',
                      fontFamily: 'var(--font-heading)',
                      color: isOpen ? 'var(--washu-crimson)' : 'var(--slate-900)',
                      backgroundColor: isOpen ? 'var(--washu-crimson-subtle)' : '#ffffff'
                    }}
                  >
                    <span>{faq.question}</span>
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: '1.25rem 1.5rem',
                        fontSize: '0.95rem',
                        color: 'var(--slate-700)',
                        lineHeight: 1.6,
                        borderTop: '1px solid var(--washu-crimson-border)',
                        backgroundColor: '#ffffff'
                      }}
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
