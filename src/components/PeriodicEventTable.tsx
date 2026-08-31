import React, { useState, useMemo } from 'react';
import {
  Search,
  Filter,
  Layers,
  Sparkles,
  Bookmark,
  CheckCircle,
  Clock,
  Shield,
  Info,
  Download
} from 'lucide-react';
import { SciOlyEvent } from '../types';
import { EventPeekModal } from './EventPeekModal';
import { useToast } from './Toast';

interface PeriodicEventTableProps {
  events: SciOlyEvent[];
}

export const PeriodicEventTable: React.FC<PeriodicEventTableProps> = ({ events }) => {
  const { showToast } = useToast();
  const [selectedDivision, setSelectedDivision] = useState<'ALL' | 'B' | 'C'>('B');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedType, setSelectedType] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activePeekEvent, setActivePeekEvent] = useState<SciOlyEvent | null>(null);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('washu_scioly_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const categories = [
    { id: 'ALL', label: 'All Disciplines', color: '#64748b' },
    { id: 'Life, Personal & Social Science', label: 'Life Sciences', color: '#059669', bg: '#ecfdf5', border: '#a7f3d0' },
    { id: 'Earth & Space Science', label: 'Earth & Space', color: '#d97706', bg: '#fffbeb', border: '#fde68a' },
    { id: 'Physical Science & Chemistry', label: 'Physical & Chem', color: '#e11d48', bg: '#fff1f2', border: '#fecdd3' },
    { id: 'Technology & Engineering', label: 'Tech & Engineering', color: '#2563eb', bg: '#eff6ff', border: '#bfdbfe' },
    { id: 'Inquiry & Nature of Science', label: 'Inquiry & Logic', color: '#7c3aed', bg: '#f5f3ff', border: '#ddd6fe' }
  ];

  const types = ['ALL', 'Test', 'Lab', 'Build', 'Hybrid'];

  const toggleBookmark = (id: string) => {
    const updated = bookmarkedIds.includes(id)
      ? bookmarkedIds.filter((b) => b !== id)
      : [...bookmarkedIds, id];
    setBookmarkedIds(updated);
    try {
      localStorage.setItem('washu_scioly_bookmarks', JSON.stringify(updated));
    } catch {}
    
    showToast({
      type: 'success',
      title: bookmarkedIds.includes(id) ? 'Event Removed' : 'Event Saved',
      description: bookmarkedIds.includes(id)
        ? 'Removed from your personalized tournament schedule.'
        : 'Added to your personalized tournament schedule.'
    });
  };

  const filteredEvents = useMemo(() => {
    return events.filter((ev) => {
      const matchesDiv = selectedDivision === 'ALL' || ev.division === selectedDivision;
      const matchesCat = selectedCategory === 'ALL' || ev.category === selectedCategory;
      const matchesType = selectedType === 'ALL' || ev.type === selectedType;
      const matchesSearch =
        searchQuery === '' ||
        ev.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (ev.description && ev.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (ev.symbol && ev.symbol.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (ev.location && ev.location.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesDiv && matchesCat && matchesType && matchesSearch;
    });
  }, [events, selectedDivision, selectedCategory, selectedType, searchQuery]);

  const getTileAccentColor = (category: string) => {
    if (category.includes('Life')) return '#059669';
    if (category.includes('Earth')) return '#d97706';
    if (category.includes('Physical') || category.includes('Chemistry')) return '#e11d48';
    if (category.includes('Technology') || category.includes('Engineering')) return '#2563eb';
    return '#7c3aed';
  };

  const handleExportRoster = () => {
    const header = "Atomic #,Symbol,Event Name,Division,Category,Type,Block,Location\n";
    const rows = filteredEvents.map(e => `"${e.atomicNumber || ''}","${e.symbol || ''}","${e.name}","${e.division}","${e.category}","${e.type}","${e.block}","${e.location}"`).join("\n");
    const blob = new Blob([header + rows], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `WashU_SciOly_Periodic_Events_${selectedDivision}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    showToast({
      type: 'info',
      title: 'Periodic Catalog Exported',
      description: `Downloaded ${filteredEvents.length} events as CSV.`
    });
  };

  return (
    <div style={{ marginTop: '1rem' }}>
      {/* Control Header: Division Switcher + Search + Filters */}
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '18px',
          padding: '1.5rem',
          border: '1px solid var(--border-color)',
          boxShadow: 'var(--shadow-sm)',
          marginBottom: '2rem'
        }}
      >
        {/* Row 1: Division Tabs + Search Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '1.25rem'
          }}
        >
          {/* Division Selector */}
          <div
            style={{
              display: 'flex',
              backgroundColor: '#f1f5f9',
              padding: '4px',
              borderRadius: '12px',
              border: '1px solid #e2e8f0'
            }}
          >
            {(['B', 'C', 'ALL'] as const).map((div) => (
              <button
                key={div}
                onClick={() => setSelectedDivision(div)}
                style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: '9px',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-heading)',
                  color: selectedDivision === div ? '#ffffff' : '#475569',
                  backgroundColor:
                    selectedDivision === div
                      ? 'var(--washu-crimson)'
                      : 'transparent',
                  boxShadow:
                    selectedDivision === div
                      ? '0 2px 6px rgba(158, 27, 33, 0.3)'
                      : 'none',
                  transition: 'all 0.15s ease'
                }}
              >
                {div === 'B'
                  ? 'Division B (Middle School)'
                  : div === 'C'
                  ? 'Division C (High School)'
                  : 'All Divisions'}
              </button>
            ))}
          </div>

          {/* Search Field */}
          <div style={{ position: 'relative', minWidth: '260px', flex: '1', maxWidth: '380px' }}>
            <Search
              size={17}
              color="#94a3b8"
              style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)' }}
            />
            <input
              type="text"
              placeholder="Search elements by name, symbol, or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.6rem 1rem 0.6rem 2.4rem',
                borderRadius: '10px',
                border: '1.5px solid #cbd5e1',
                fontSize: '0.875rem',
                outline: 'none',
                fontFamily: 'var(--font-sans)',
                backgroundColor: '#f8fafc'
              }}
            />
          </div>
        </div>

        {/* Row 2: Category Legend Filter Chips */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            flexWrap: 'wrap',
            paddingTop: '1rem',
            borderTop: '1px solid #f1f5f9'
          }}
        >
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              color: '#64748b',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginRight: '0.25rem'
            }}
          >
            Series:
          </span>

          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '999px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  backgroundColor: isSelected ? cat.color : '#f8fafc',
                  color: isSelected ? '#ffffff' : '#475569',
                  border: `1px solid ${isSelected ? cat.color : '#e2e8f0'}`,
                  transition: 'all 0.15s ease'
                }}
              >
                {cat.id !== 'ALL' && (
                  <span
                    style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      backgroundColor: isSelected ? '#ffffff' : cat.color
                    }}
                  />
                )}
                <span>{cat.label}</span>
              </button>
            );
          })}

          <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.5rem' }}>
            <button
              onClick={handleExportRoster}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.35rem 0.75rem',
                borderRadius: '8px',
                fontSize: '0.775rem',
                fontWeight: 600,
                color: '#475569',
                backgroundColor: '#f1f5f9',
                border: '1px solid #cbd5e1'
              }}
            >
              <Download size={13} />
              <span>Export CSV</span>
            </button>
          </div>
        </div>
      </div>

      {/* Periodic Table Instruction Ribbon */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1.25rem',
          padding: '0.75rem 1.25rem',
          backgroundColor: 'rgba(158, 27, 33, 0.05)',
          borderRadius: '12px',
          border: '1px solid rgba(158, 27, 33, 0.15)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: '#1e293b' }}>
          <Info size={16} color="var(--washu-crimson)" />
          <span>
            <strong>Periodic Catalog View:</strong> Click any element tile to open its full syllabus, room location, and allowed resources peek window.
          </span>
        </div>
        <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--washu-crimson)' }}>
          Showing {filteredEvents.length} Elements
        </div>
      </div>

      {/* The Periodic Table Matrix Grid */}
      {filteredEvents.length === 0 ? (
        <div
          style={{
            textAlign: 'center',
            padding: '4rem 2rem',
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            border: '1px dashed #cbd5e1'
          }}
        >
          <Layers size={36} color="#94a3b8" style={{ margin: '0 auto 1rem' }} />
          <h3 style={{ fontSize: '1.25rem', color: '#1e293b', marginBottom: '0.5rem' }}>
            No Matching Events Found
          </h3>
          <p style={{ fontSize: '0.9rem', color: '#64748b' }}>
            Try broadening your search query or selecting "All Disciplines".
          </p>
        </div>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(175px, 1fr))',
            gap: '1rem'
          }}
        >
          {filteredEvents.map((event) => {
            const accent = getTileAccentColor(event.category);
            const isSaved = bookmarkedIds.includes(event.id);

            return (
              <div
                key={event.id}
                className="periodic-tile"
                style={
                  {
                    '--tile-accent': accent
                  } as React.CSSProperties
                }
                onClick={() => setActivePeekEvent(event)}
                title={`Click to peek at ${event.name}`}
              >
                {/* Header inside tile: Atomic Number + Division Tag */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%'
                  }}
                >
                  <span className="periodic-tile-num">
                    #{event.atomicNumber || '00'}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <span
                      style={{
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        padding: '0.1rem 0.35rem',
                        borderRadius: '4px',
                        backgroundColor:
                          event.division === 'B' ? '#ecfdf5' : '#fff1f2',
                        color:
                          event.division === 'B' ? '#065f46' : '#9f1239',
                        border: `1px solid ${
                          event.division === 'B' ? '#a7f3d0' : '#fecdd3'
                        }`
                      }}
                    >
                      Div {event.division}
                    </span>
                    {isSaved && (
                      <Bookmark size={12} color="var(--washu-crimson)" fill="var(--washu-crimson)" />
                    )}
                  </div>
                </div>

                {/* Main Chemical Symbol */}
                <div style={{ margin: '0.35rem 0' }}>
                  <div className="periodic-tile-symbol" style={{ color: accent }}>
                    {event.symbol || event.name.substring(0, 2)}
                  </div>
                  <div className="periodic-tile-name">{event.name}</div>
                </div>

                {/* Footer in tile: Event Type & Block info */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '0.4rem',
                    borderTop: '1px solid #f1f5f9',
                    fontSize: '0.7rem',
                    color: '#64748b'
                  }}
                >
                  <span style={{ fontWeight: 600 }}>{event.type}</span>
                  <span style={{ color: '#94a3b8' }}>
                    {event.block ? (event.block.includes('Walk-in') ? 'Walk-in' : event.block.split(' ')[0]) : 'TBD'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Peek Drawer / Modal */}
      {activePeekEvent && (
        <EventPeekModal
          event={activePeekEvent}
          onClose={() => setActivePeekEvent(null)}
          isBookmarked={bookmarkedIds.includes(activePeekEvent.id)}
          onToggleBookmark={toggleBookmark}
        />
      )}
    </div>
  );
};
