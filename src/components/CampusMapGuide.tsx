import React, { useState } from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { CAMPUS_BUILDINGS, TOURNAMENT_INFO } from '../data/tournamentData';
import { CampusLocation } from '../types';

export const CampusMapGuide: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'competition' | 'dining' | 'hq' | 'parking'>('all');
  const [activeBuilding, setActiveBuilding] = useState<CampusLocation | null>(CAMPUS_BUILDINGS[0]);

  const filteredBuildings = CAMPUS_BUILDINGS.filter((b) => {
    if (selectedFilter === 'all') return true;
    return b.type === selectedFilter;
  });

  const getCategoryBadge = (type: CampusLocation['type']) => {
    switch (type) {
      case 'competition':
        return { label: 'Competition Venue', bg: '#fef2f2', text: 'var(--washu-crimson)' };
      case 'dining':
        return { label: 'Dining & Relaxation', bg: '#ecfdf5', text: 'var(--washu-green)' };
      case 'hq':
        return { label: 'Tournament HQ & Awards', bg: '#eff6ff', text: '#1d4ed8' };
      case 'parking':
        return { label: 'Free Visitor Parking', bg: '#f8fafc', text: 'var(--slate-700)' };
      default:
        return { label: 'Facility', bg: '#f1f5f9', text: '#475569' };
    }
  };

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
      {/* Notice Banner */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          backgroundColor: 'var(--washu-crimson-subtle)',
          border: '1.5px solid var(--washu-crimson-border)',
          borderRadius: '14px',
          padding: '1rem 1.25rem',
          marginBottom: '1.75rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              backgroundColor: 'var(--washu-crimson)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <Navigation size={18} />
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--slate-900)' }}>
              Looking for full campus directions & pins?
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--slate-700)' }}>
              Click the link to explore the live Google MyMaps with test rooms, build arenas, homerooms, and free parking.
            </div>
          </div>
        </div>

        <a
          href={TOURNAMENT_INFO.campusMapUrl}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
          style={{
            padding: '0.65rem 1.35rem',
            fontSize: '0.9rem',
            fontWeight: 700,
            boxShadow: '0 4px 14px rgba(158, 27, 33, 0.35)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            textDecoration: 'none'
          }}
        >
          <MapPin size={18} />
          <span>Click to Open Google MyMaps ↗</span>
        </a>
      </div>

      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '1.75rem'
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
            <MapPin size={22} color="var(--washu-crimson)" />
            <h3 style={{ fontSize: '1.45rem', fontWeight: 600, color: 'var(--slate-900)' }}>
              Danforth Campus Interactive Venue Guide
            </h3>
          </div>
          <p style={{ fontSize: '0.9rem', color: 'var(--slate-600)' }}>
            Search campus buildings, laboratory test rooms, build flight zones, homerooms, and parking garages below or click to open Google MyMaps.
          </p>
        </div>

        <a
          href={TOURNAMENT_INFO.campusMapUrl}
          target="_blank"
          rel="noreferrer"
          className="btn btn-secondary btn-sm"
          style={{ padding: '0.6rem 1.15rem', fontWeight: 700 }}
        >
          <Navigation size={16} />
          <span>Open Full Interactive Google Map</span>
          <ExternalLink size={14} />
        </a>
      </div>

      {/* Filter Tabs */}
      <div
        style={{
          display: 'flex',
          gap: '0.5rem',
          flexWrap: 'wrap',
          marginBottom: '1.5rem',
          paddingBottom: '1rem',
          borderBottom: '1px solid var(--slate-200)'
        }}
      >
        {[
          { id: 'all', label: 'All Buildings' },
          { id: 'competition', label: 'Testing & Build Venues' },
          { id: 'dining', label: 'Dining & Homerooms' },
          { id: 'hq', label: 'Headquarters & Awards' },
          { id: 'parking', label: 'Bus & Visitor Parking' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedFilter(tab.id as any)}
            style={{
              padding: '0.45rem 0.9rem',
              borderRadius: '8px',
              fontSize: '0.85rem',
              fontWeight: selectedFilter === tab.id ? 700 : 500,
              backgroundColor: selectedFilter === tab.id ? 'var(--slate-900)' : 'var(--slate-100)',
              color: selectedFilter === tab.id ? '#ffffff' : 'var(--slate-700)',
              transition: 'all 0.15s ease'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid: Building List + Selected Details View */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem'
        }}
      >
        {/* Buildings Scrollable Selector */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxHeight: '420px', overflowY: 'auto', paddingRight: '0.25rem' }}>
          {filteredBuildings.map((b) => {
            const isSelected = activeBuilding?.id === b.id;
            const badge = getCategoryBadge(b.type);
            return (
              <div
                key={b.id}
                onClick={() => setActiveBuilding(b)}
                style={{
                  padding: '1rem 1.25rem',
                  borderRadius: '12px',
                  backgroundColor: isSelected ? 'var(--washu-crimson-subtle)' : '#ffffff',
                  border: isSelected ? '1.5px solid var(--washu-crimson)' : '1px solid var(--border-color)',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                  <span style={{ fontWeight: 700, fontSize: '0.95rem', color: isSelected ? 'var(--washu-crimson)' : 'var(--slate-900)' }}>
                    {b.name}
                  </span>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      padding: '0.15rem 0.5rem',
                      borderRadius: '9999px',
                      backgroundColor: badge.bg,
                      color: badge.text
                    }}
                  >
                    {badge.label}
                  </span>
                </div>
                <div style={{ fontSize: '0.825rem', color: 'var(--slate-600)', lineHeight: 1.4, fontWeight: 500 }}>
                  {b.associatedWith}
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Building Details Display */}
        {activeBuilding && (
          <div
            style={{
              backgroundColor: 'var(--slate-50)',
              border: '1px solid var(--border-color)',
              borderRadius: '14px',
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '0.25rem 0.6rem',
                    borderRadius: '6px',
                    backgroundColor: getCategoryBadge(activeBuilding.type).bg,
                    color: getCategoryBadge(activeBuilding.type).text
                  }}
                >
                  {getCategoryBadge(activeBuilding.type).label}
                </span>
              </div>

              <h4 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '0.75rem' }}>
                {activeBuilding.name}
              </h4>

              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--slate-500)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
                  Associated With
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--slate-800)' }}>
                  {activeBuilding.associatedWith}
                </div>
              </div>

              {activeBuilding.highlightedEvents && activeBuilding.highlightedEvents.length > 0 && (
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--slate-500)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                    Events & Key Operations:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                    {activeBuilding.highlightedEvents.map((ev) => (
                      <span
                        key={ev}
                        style={{
                          backgroundColor: '#ffffff',
                          border: '1px solid var(--slate-300)',
                          padding: '0.35rem 0.7rem',
                          borderRadius: '6px',
                          fontSize: '0.825rem',
                          fontWeight: 600,
                          color: 'var(--slate-800)'
                        }}
                      >
                        {ev}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div
              style={{
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '0.75rem'
              }}
            >
              <div style={{ fontSize: '0.825rem', color: 'var(--slate-600)' }}>
                📍 Danforth Campus • Washington University in St. Louis
              </div>
              <a
                href={TOURNAMENT_INFO.campusMapUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-sm"
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.5rem 1rem'
                }}
              >
                <MapPin size={15} />
                <span>Click to Open on Google MyMaps</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
