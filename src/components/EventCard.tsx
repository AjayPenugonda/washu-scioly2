import React, { useState } from 'react';
import { SciOlyEvent } from '../types';
import { Clock, MapPin, Users, Award, BookOpen, ChevronRight, Check } from 'lucide-react';

interface EventCardProps {
  event: SciOlyEvent;
  onSelect?: (event: SciOlyEvent) => void;
}

export const EventCard: React.FC<EventCardProps> = ({ event, onSelect }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'Life, Personal & Social Science':
        return { bg: '#ecfdf5', text: '#065f46', border: '#a7f3d0' };
      case 'Earth & Space Science':
        return { bg: '#eff6ff', text: '#1e40af', border: '#bfdbfe' };
      case 'Physical Science & Chemistry':
        return { bg: '#fef2f2', text: '#991b1b', border: '#fecaca' };
      case 'Technology & Engineering':
        return { bg: '#fffbeb', text: '#92400e', border: '#fde68a' };
      default:
        return { bg: '#f5f3ff', text: '#5b21b6', border: '#ddd6fe' };
    }
  };

  const catColors = getCategoryColor(event.category);

  return (
    <div
      className="card card-interactive"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        position: 'relative'
      }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div>
        {/* Top Badges */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
          <span
            style={{
              fontSize: '0.725rem',
              fontWeight: 700,
              padding: '0.2rem 0.6rem',
              borderRadius: '6px',
              backgroundColor: catColors.bg,
              color: catColors.text,
              border: `1px solid ${catColors.border}`,
              letterSpacing: '0.02em'
            }}
          >
            {event.category}
          </span>

          <div style={{ display: 'flex', gap: '0.35rem' }}>
            <span
              style={{
                fontSize: '0.725rem',
                fontWeight: 700,
                padding: '0.2rem 0.5rem',
                borderRadius: '6px',
                backgroundColor: event.division === 'B' ? 'var(--washu-green-subtle)' : 'var(--washu-crimson-subtle)',
                color: event.division === 'B' ? 'var(--washu-green)' : 'var(--washu-crimson)',
                border: `1px solid ${event.division === 'B' ? 'var(--washu-green-border)' : 'var(--washu-crimson-border)'}`
              }}
            >
              Div {event.division}
            </span>

            <span
              style={{
                fontSize: '0.725rem',
                fontWeight: 600,
                padding: '0.2rem 0.5rem',
                borderRadius: '6px',
                backgroundColor: 'var(--slate-100)',
                color: 'var(--slate-700)'
              }}
            >
              {event.type}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--slate-900)', marginBottom: '0.5rem', lineHeight: 1.3 }}>
          {event.name}
        </h3>

        {/* Description */}
        <p style={{ fontSize: '0.875rem', color: 'var(--slate-600)', marginBottom: '1.25rem', lineHeight: 1.5 }}>
          {event.description}
        </p>
      </div>

      {/* Footer Info */}
      <div>
        <div
          style={{
            paddingTop: '0.875rem',
            borderTop: '1px solid var(--border-color)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            fontSize: '0.8rem',
            color: 'var(--slate-600)'
          }}
        >
          {event.block && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Clock size={14} color="var(--slate-500)" />
              <span>{event.block}</span>
            </div>
          )}

          {event.location && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <MapPin size={14} color="var(--washu-crimson)" />
              <span>{event.location}</span>
            </div>
          )}

          {event.supervisors && event.supervisors.length > 0 && (
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem' }}>
              <Users size={14} color="var(--washu-green)" style={{ marginTop: '2px', flexShrink: 0 }} />
              <span>
                <strong>Supervisors:</strong> {event.supervisors.join(', ')}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
