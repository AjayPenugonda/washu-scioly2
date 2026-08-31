import React, { useState, useEffect, useMemo } from 'react';
import { Search, X, FileText, Users, Calendar, MapPin, ExternalLink, HelpCircle } from 'lucide-react';
import { EVENTS_DATA, TOURNAMENT_INFO } from '../data/tournamentData';
import { EXECUTIVE_BOARD, ADVISORY_BOARD, SUPERVISORS_DIV_B, SUPERVISORS_DIV_C } from '../data/teamData';
import { ARCHIVE_YEARS } from '../data/archiveData';
import { FAQS_DATA } from '../data/faqs';

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate
}) => {
  const [query, setQuery] = useState('');

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open
          (window as any).__openSearchModal?.();
        }
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Reset query on open
  useEffect(() => {
    if (isOpen) setQuery('');
  }, [isOpen]);

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();

    const results: {
      type: 'event' | 'team' | 'archive' | 'faq' | 'page';
      title: string;
      subtitle: string;
      action: () => void;
      isExternal?: boolean;
    }[] = [];

    // Search Pages
    const pages = [
      { title: 'Home Page', subtitle: 'Overview, Countdown & Highlights', path: '/' },
      { title: 'Tournament Information & Logistics', subtitle: 'Schedule, Info Packets & Campus Map', path: '/tournament' },
      { title: 'Registration Hub', subtitle: 'Deadlines, Team Limits & Guidelines', path: '/register' },
      { title: 'About Us & Leadership', subtitle: 'Executive Board, Advisory Board & Supervisors', path: '/about' },
      { title: 'Results & Exams Hub', subtitle: 'Current Season Spreadsheets & Exams', path: '/results' },
      { title: 'Archive Directory', subtitle: 'All Past Tournament Years', path: '/archive' }
    ];

    pages.forEach((p) => {
      if (p.title.toLowerCase().includes(q) || p.subtitle.toLowerCase().includes(q)) {
        results.push({
          type: 'page',
          title: p.title,
          subtitle: p.subtitle,
          action: () => {
            onNavigate(p.path);
            onClose();
          }
        });
      }
    });

    // Search Events
    EVENTS_DATA.forEach((ev) => {
      if (
        ev.name.toLowerCase().includes(q) ||
        ev.category.toLowerCase().includes(q) ||
        ev.supervisors?.some((s) => s.toLowerCase().includes(q))
      ) {
        results.push({
          type: 'event',
          title: `${ev.name} (Div ${ev.division})`,
          subtitle: `${ev.category} • ${ev.type} • ${ev.supervisors?.join(', ')}`,
          action: () => {
            onNavigate(`/tournament?event=${encodeURIComponent(ev.id)}`);
            onClose();
          }
        });
      }
    });

    // Search Team & Supervisors
    const allPeople = [
      ...EXECUTIVE_BOARD.map((o) => ({ name: o.name, role: o.role, category: 'Executive Board' })),
      ...SUPERVISORS_DIV_B.flatMap((s) => s.supervisors.map((name) => ({ name, role: `Supervisor (${s.eventName} - Div B)`, category: 'Division B Supervisor' }))),
      ...SUPERVISORS_DIV_C.flatMap((s) => s.supervisors.map((name) => ({ name, role: `Supervisor (${s.eventName} - Div C)`, category: 'Division C Supervisor' })))
    ];

    allPeople.forEach((p) => {
      if (p.name.toLowerCase().includes(q) || p.role.toLowerCase().includes(q)) {
        results.push({
          type: 'team',
          title: p.name,
          subtitle: `${p.role} • ${p.category}`,
          action: () => {
            onNavigate('/about');
            onClose();
          }
        });
      }
    });

    // Search Archives
    ARCHIVE_YEARS.forEach((yr) => {
      if (yr.title.toLowerCase().includes(q) || yr.description.toLowerCase().includes(q)) {
        results.push({
          type: 'archive',
          title: yr.title,
          subtitle: yr.description,
          action: () => {
            onNavigate(yr.path);
            onClose();
          }
        });
      }
      yr.links.forEach((link) => {
        if (link.label.toLowerCase().includes(q)) {
          results.push({
            type: 'archive',
            title: link.label,
            subtitle: `${yr.academicYear} • ${link.badge || 'Archive Link'}`,
            action: () => {
              window.open(link.url, '_blank');
              onClose();
            },
            isExternal: true
          });
        }
      });
    });

    // Search FAQs
    FAQS_DATA.forEach((faq) => {
      if (faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q)) {
        results.push({
          type: 'faq',
          title: faq.question,
          subtitle: `${faq.category} FAQ: ${faq.answer.slice(0, 80)}...`,
          action: () => {
            onNavigate('/tournament#faq');
            onClose();
          }
        });
      }
    });

    return results.slice(0, 10);
  }, [query, onNavigate, onClose]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.65)',
        backdropFilter: 'blur(8px)',
        zIndex: 10000,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '5rem 1rem 2rem 1rem',
        animation: 'fadeIn 0.2s ease-out forwards'
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '640px',
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          overflow: 'hidden',
          border: '1px solid var(--border-color)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '1rem 1.25rem',
            borderBottom: '1px solid var(--border-color)',
            backgroundColor: '#ffffff'
          }}
        >
          <Search size={20} color="#64748b" />
          <input
            type="text"
            placeholder="Search events, past exams, scores, officers, FAQs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            style={{
              width: '100%',
              fontSize: '1rem',
              border: 'none',
              outline: 'none',
              color: '#0f172a',
              backgroundColor: 'transparent'
            }}
          />
          <button
            onClick={onClose}
            style={{
              padding: '4px',
              borderRadius: '6px',
              color: '#64748b',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Results List */}
        <div style={{ maxHeight: '420px', overflowY: 'auto', padding: '0.5rem' }}>
          {query.trim() === '' ? (
            <div style={{ padding: '2rem 1.5rem', textAlign: 'center', color: '#64748b' }}>
              <div style={{ fontWeight: 600, fontSize: '0.95rem', color: '#1e293b', marginBottom: '0.5rem' }}>
                Quick Navigation & Search
              </div>
              <div style={{ fontSize: '0.85rem' }}>
                Try searching for <em>"Anatomy"</em>, <em>"Drive Exams"</em>, <em>"Jeff Hwang"</em>, or <em>"Campus Map"</em>.
              </div>
              <div
                style={{
                  display: 'flex',
                  gap: '0.5rem',
                  justifyContent: 'center',
                  marginTop: '1.25rem',
                  flexWrap: 'wrap'
                }}
              >
                {['Division B Exams', 'Division C Results', 'Schedule', 'Register', 'Executive Board'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    style={{
                      padding: '0.35rem 0.75rem',
                      borderRadius: '9999px',
                      fontSize: '0.775rem',
                      background: '#f1f5f9',
                      color: '#475569',
                      fontWeight: 500,
                      border: '1px solid #e2e8f0'
                    }}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : searchResults.length === 0 ? (
            <div style={{ padding: '2.5rem 1.5rem', textAlign: 'center', color: '#64748b' }}>
              <div style={{ fontWeight: 600, fontSize: '0.95rem', color: '#1e293b', marginBottom: '0.25rem' }}>
                No results found for "{query}"
              </div>
              <div style={{ fontSize: '0.85rem' }}>
                Check your spelling or explore the navigation tabs above.
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {searchResults.map((item, idx) => (
                <div
                  key={idx}
                  onClick={item.action}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    transition: 'background-color 0.15s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f8fafc')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                    <div
                      style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background:
                          item.type === 'event'
                            ? '#fef2f2'
                            : item.type === 'archive'
                            ? '#f0fdf4'
                            : item.type === 'team'
                            ? '#fffbeb'
                            : '#f1f5f9',
                        color:
                          item.type === 'event'
                            ? 'var(--washu-crimson)'
                            : item.type === 'archive'
                            ? 'var(--washu-green)'
                            : item.type === 'team'
                            ? 'var(--accent-gold)'
                            : '#475569',
                        flexShrink: 0
                      }}
                    >
                      {item.type === 'event' && <FileText size={18} />}
                      {item.type === 'archive' && <Calendar size={18} />}
                      {item.type === 'team' && <Users size={18} />}
                      {item.type === 'page' && <MapPin size={18} />}
                      {item.type === 'faq' && <HelpCircle size={18} />}
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.925rem', color: '#0f172a' }}>
                        {item.title}
                      </div>
                      <div style={{ fontSize: '0.775rem', color: '#64748b' }}>
                        {item.subtitle}
                      </div>
                    </div>
                  </div>
                  {item.isExternal ? (
                    <ExternalLink size={15} color="#94a3b8" />
                  ) : (
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 500 }}>
                      Jump →
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer info */}
        <div
          style={{
            padding: '0.75rem 1.25rem',
            backgroundColor: '#f8fafc',
            borderTop: '1px solid var(--border-color)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.75rem',
            color: '#64748b'
          }}
        >
          <span>Press <strong>ESC</strong> to close</span>
          <span>Tip: Use <strong>Cmd + K</strong> anytime</span>
        </div>
      </div>
    </div>
  );
};
