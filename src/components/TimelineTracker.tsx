import React, { useState } from 'react';
import { TIMELINE_SCHEDULE, TOURNAMENT_INFO } from '../data/tournamentData';
import { Calendar, Clock, CheckCircle, ArrowRight, Sparkles, ExternalLink } from 'lucide-react';
import { TimelineEvent } from '../types';

export const TimelineTracker: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'B' | 'C'>('All');

  const filteredEvents = TIMELINE_SCHEDULE.filter((ev) => {
    if (filter === 'All') return true;
    return ev.division === filter || ev.division === 'All';
  });

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '20px',
        border: '1px solid var(--border-color)',
        padding: '2rem',
        boxShadow: 'var(--shadow-md)'
      }}
    >
      {/* Header with Division Filter */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '2rem'
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
            <Calendar size={22} color="var(--washu-crimson)" />
            <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--slate-900)' }}>
              Tournament & Registration Timeline
            </h3>
          </div>
          <p style={{ fontSize: '0.9rem', color: 'var(--slate-600)' }}>
            Key deadlines for registration opening, closing dates, and competition days.
          </p>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
          {(['All', 'B', 'C'] as const).map((div) => (
            <button
              key={div}
              onClick={() => setFilter(div)}
              style={{
                padding: '0.4rem 0.85rem',
                borderRadius: '8px',
                fontSize: '0.8rem',
                fontWeight: filter === div ? 700 : 500,
                backgroundColor: filter === div ? 'var(--slate-900)' : 'var(--slate-100)',
                color: filter === div ? '#ffffff' : 'var(--slate-700)',
                transition: 'all 0.15s ease'
              }}
            >
              {div === 'All' ? 'All Dates' : div === 'B' ? 'Division B' : 'Division C'}
            </button>
          ))}
        </div>
      </div>

      {/* Vertical Timeline */}
      <div style={{ position: 'relative', paddingLeft: '1.5rem' }}>
        {/* Continuous Line */}
        <div
          style={{
            position: 'absolute',
            left: '7px',
            top: '8px',
            bottom: '8px',
            width: '2px',
            backgroundColor: 'var(--slate-200)'
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          {filteredEvents.map((event, idx) => (
            <div key={idx} style={{ position: 'relative' }}>
              {/* Timeline Bullet Dot */}
              <div
                style={{
                  position: 'absolute',
                  left: '-1.5rem',
                  top: '4px',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  backgroundColor:
                    event.division === 'B'
                      ? 'var(--washu-green)'
                      : event.division === 'C'
                      ? 'var(--washu-crimson)'
                      : 'var(--slate-900)',
                  border: '3px solid #ffffff',
                  boxShadow: '0 0 0 2px var(--slate-200)'
                }}
              />

              <div
                style={{
                  backgroundColor: event.isKeyDate ? 'var(--slate-50)' : '#ffffff',
                  border: '1px solid var(--border-color)',
                  borderRadius: '12px',
                  padding: '1.25rem 1.5rem',
                  boxShadow: 'var(--shadow-xs)',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        color: 'var(--washu-crimson)'
                      }}
                    >
                      {event.date}
                    </span>
                  </div>

                  {event.division && event.division !== 'All' && (
                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        padding: '0.15rem 0.5rem',
                        borderRadius: '9999px',
                        backgroundColor:
                          event.division === 'B'
                            ? 'var(--washu-green-subtle)'
                            : 'var(--washu-crimson-subtle)',
                        color:
                          event.division === 'B'
                            ? 'var(--washu-green)'
                            : 'var(--washu-crimson)',
                        border: `1px solid ${
                          event.division === 'B'
                            ? 'var(--washu-green-border)'
                            : 'var(--washu-crimson-border)'
                        }`
                      }}
                    >
                      {`Division ${event.division}`}
                    </span>
                  )}
                </div>

                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--slate-900)', marginBottom: '0.35rem' }}>
                  {event.title}
                </h4>

                <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', lineHeight: 1.5, margin: 0 }}>
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
