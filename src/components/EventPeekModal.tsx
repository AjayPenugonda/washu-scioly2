import React, { useEffect } from 'react';
import {
  X,
  Clock,
  MapPin,
  Users,
  BookOpen,
  ShieldAlert,
  Archive,
  Bookmark,
  Share2,
  Calendar,
  Sparkles,
  Info
} from 'lucide-react';
import { SciOlyEvent } from '../types';
import { useToast } from './Toast';

interface EventPeekModalProps {
  event: SciOlyEvent | null;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (eventId: string) => void;
}

export const EventPeekModal: React.FC<EventPeekModalProps> = ({
  event,
  onClose,
  isBookmarked,
  onToggleBookmark
}) => {
  const { showToast } = useToast();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!event) return null;

  const getCategoryColor = (category: string) => {
    if (category.includes('Life')) return { bg: '#ecfdf5', text: '#065f46', border: '#a7f3d0', dot: '#10b981' };
    if (category.includes('Earth')) return { bg: '#fffbeb', text: '#92400e', border: '#fde68a', dot: '#f59e0b' };
    if (category.includes('Physical') || category.includes('Chemistry'))
      return { bg: '#fff1f2', text: '#9f1239', border: '#fecdd3', dot: '#e11d48' };
    if (category.includes('Technology') || category.includes('Engineering'))
      return { bg: '#eff6ff', text: '#1e40af', border: '#bfdbfe', dot: '#3b82f6' };
    return { bg: '#f5f3ff', text: '#5b21b6', border: '#ddd6fe', dot: '#8b5cf6' };
  };

  const catStyle = getCategoryColor(event.category);

  const handleShare = () => {
    navigator.clipboard.writeText(
      `WashU SciOly Event: ${event.name} (Div ${event.division}) - ${event.block} at ${event.location}`
    );
    showToast({
      type: 'info',
      title: 'Event Details Copied',
      description: `Copied ${event.name} details to your clipboard.`
    });
  };

  return (
    <div className="peek-overlay" onClick={onClose}>
      <div
        className="peek-modal"
        onClick={(e) => e.stopPropagation()}
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '90vh',
          width: '100%',
          maxWidth: '680px',
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        {/* Fixed Top Header Banner */}
        <div
          style={{
            backgroundColor: '#0f172a',
            color: '#ffffff',
            padding: '1.5rem 1.75rem',
            position: 'relative',
            flexShrink: 0,
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          {/* Close "X" Button */}
          <button
            onClick={onClose}
            aria-label="Close Event Peek"
            style={{
              position: 'absolute',
              top: '1.25rem',
              right: '1.25rem',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
              zIndex: 10,
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--washu-crimson)';
              e.currentTarget.style.transform = 'rotate(90deg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
              e.currentTarget.style.transform = 'rotate(0deg)';
            }}
          >
            <X size={18} />
          </button>

          {/* Elemental Symbol Badge + Category Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', paddingRight: '2rem' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '14px',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                border: `2px solid ${catStyle.dot}`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: `0 0 16px ${catStyle.dot}44`,
                flexShrink: 0
              }}
            >
              <span style={{ fontSize: '0.725rem', fontFamily: 'var(--font-mono)', color: '#cbd5e1' }}>
                {event.atomicNumber || 1}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.55rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  lineHeight: 1
                }}
              >
                {event.symbol || 'Sc'}
              </span>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
                <span
                  style={{
                    backgroundColor: event.division === 'B' ? '#10b981' : 'var(--washu-crimson)',
                    color: '#ffffff',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    padding: '0.15rem 0.5rem',
                    borderRadius: '999px',
                    fontFamily: 'var(--font-heading)'
                  }}
                >
                  DIVISION {event.division}
                </span>

                <span
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    color: '#e2e8f0',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    padding: '0.15rem 0.55rem',
                    borderRadius: '999px'
                  }}
                >
                  {event.type} Event
                </span>
              </div>

              <h2
                style={{
                  color: '#ffffff',
                  fontSize: '1.45rem',
                  fontWeight: 700,
                  margin: 0,
                  lineHeight: 1.2
                }}
              >
                {event.name}
              </h2>
            </div>
          </div>
        </div>

        {/* Scrollable Content Body with Dedicated Scroller */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '1.75rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem'
          }}
        >
          {/* Category Pill */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.35rem 0.85rem',
                borderRadius: '999px',
                backgroundColor: catStyle.bg,
                color: catStyle.text,
                border: `1px solid ${catStyle.border}`,
                fontSize: '0.825rem',
                fontWeight: 600
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: catStyle.dot
                }}
              />
              {event.category}
            </div>
          </div>

          {/* Description */}
          <div>
            <h4
              style={{
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: '#64748b',
                marginBottom: '0.4rem',
                fontWeight: 700
              }}
            >
              Event Overview & Syllabus
            </h4>
            <p
              style={{
                fontSize: '0.95rem',
                color: '#334155',
                lineHeight: 1.6,
                margin: 0
              }}
            >
              {event.description}
            </p>
          </div>

          {/* Grid of Key Logistics Info */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '0.875rem',
              backgroundColor: '#f8fafc',
              padding: '1.15rem',
              borderRadius: '14px',
              border: '1px solid #e2e8f0'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <Clock size={18} color="var(--washu-crimson)" style={{ marginTop: '2px', flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: '0.725rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
                  TIME BLOCK
                </div>
                <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#0f172a' }}>{event.block}</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <MapPin size={18} color="var(--washu-crimson)" style={{ marginTop: '2px', flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: '0.725rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
                  LOCATION
                </div>
                <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#0f172a' }}>{event.location}</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <Users size={18} color="var(--washu-crimson)" style={{ marginTop: '2px', flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: '0.725rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
                  TEAM SIZE
                </div>
                <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#0f172a' }}>
                  {event.teamSize || 'Up to 2 competitors'}
                </div>
              </div>
            </div>

            {event.impound && (
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <Archive size={18} color="#d97706" style={{ marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.725rem', fontWeight: 700, color: '#d97706', textTransform: 'uppercase' }}>
                    IMPOUND REQUIRED
                  </div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#92400e' }}>
                    {event.impoundTime || '7:30 AM - 8:30 AM'}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Resources & Safety Specifications */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            {event.allowedResources && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  padding: '0.9rem 1rem',
                  borderRadius: '10px',
                  backgroundColor: '#f0fdf4',
                  border: '1px solid #bbf7d0'
                }}
              >
                <BookOpen size={18} color="#15803d" style={{ marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.775rem', fontWeight: 700, color: '#166534', textTransform: 'uppercase' }}>
                    ALLOWED DOCUMENTATION & CALCULATORS
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#14532d', marginTop: '0.2rem', lineHeight: 1.5 }}>
                    {event.allowedResources}
                  </div>
                </div>
              </div>
            )}

            {event.safetySpecs && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  padding: '0.9rem 1rem',
                  borderRadius: '10px',
                  backgroundColor: '#fef2f2',
                  border: '1px solid #fecaca'
                }}
              >
                <ShieldAlert size={18} color="#b91c1c" style={{ marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.775rem', fontWeight: 700, color: '#991b1b', textTransform: 'uppercase' }}>
                    SAFETY & EYE PROTECTION REGULATIONS
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#7f1d1d', marginTop: '0.2rem', lineHeight: 1.5 }}>
                    {event.safetySpecs}
                  </div>
                </div>
              </div>
            )}

            {event.supervisors && event.supervisors.length > 0 && (
              <div
                style={{
                  fontSize: '0.85rem',
                  color: '#64748b',
                  padding: '0.75rem 1rem',
                  backgroundColor: '#f8fafc',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0'
                }}
              >
                <strong style={{ color: '#334155' }}>Event Supervisors: </strong>
                <span>{event.supervisors.join(', ')}</span>
              </div>
            )}
          </div>
        </div>

        {/* Sticky Fixed Bottom Action Footer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.75rem',
            padding: '1rem 1.75rem',
            borderTop: '1px solid #e2e8f0',
            backgroundColor: '#ffffff',
            flexShrink: 0
          }}
        >
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => onToggleBookmark(event.id)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.55rem 1rem',
                borderRadius: '10px',
                fontSize: '0.85rem',
                fontWeight: 700,
                backgroundColor: isBookmarked ? 'var(--washu-crimson)' : '#f1f5f9',
                color: isBookmarked ? '#ffffff' : '#334155',
                border: isBookmarked ? '1px solid var(--washu-crimson)' : '1px solid #cbd5e1',
                transition: 'all 0.18s ease',
                cursor: 'pointer'
              }}
            >
              <Bookmark size={15} fill={isBookmarked ? '#ffffff' : 'none'} />
              <span>{isBookmarked ? 'Saved to Schedule' : 'Save to Schedule'}</span>
            </button>

            <button
              onClick={handleShare}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.55rem 1rem',
                borderRadius: '10px',
                fontSize: '0.85rem',
                fontWeight: 600,
                backgroundColor: '#ffffff',
                color: '#475569',
                border: '1px solid #cbd5e1',
                cursor: 'pointer'
              }}
            >
              <Share2 size={15} />
              <span>Copy Info</span>
            </button>
          </div>

          <button
            onClick={onClose}
            style={{
              padding: '0.55rem 1.35rem',
              borderRadius: '10px',
              fontSize: '0.85rem',
              fontWeight: 700,
              backgroundColor: '#0f172a',
              color: '#ffffff',
              cursor: 'pointer'
            }}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
