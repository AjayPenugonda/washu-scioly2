import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Search, ExternalLink, Calendar, Award, Sparkles, BookOpen } from 'lucide-react';
import { ARCHIVE_YEARS } from '../data/archiveData';
import { TOURNAMENT_INFO } from '../data/tournamentData';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate, onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [archiveDropdownOpen, setArchiveDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setArchiveDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Tournament', path: '/tournament' },
    { label: 'Register', path: '/register' },
    { label: 'About Us', path: '/about' },
    { label: 'Results + Exams', path: '/results' }
  ];

  const isArchiveActive = currentPath.startsWith('/archive') || currentPath.includes('copy-of');

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    setArchiveDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className="glass-nav"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        width: '100%'
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '74px'
        }}
      >
        {/* Logo / Brand */}
        <div
          onClick={() => handleNavClick('/')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.875rem',
            cursor: 'pointer'
          }}
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              backgroundColor: 'var(--washu-crimson)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 10px rgba(165, 20, 23, 0.25)',
              flexShrink: 0
            }}
          >
            <span
              style={{
                color: '#ffffff',
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                fontSize: '1.25rem',
                letterSpacing: '-0.02em'
              }}
            >
              W
            </span>
          </div>
          <div>
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                fontSize: '1.2rem',
                color: 'var(--slate-900)',
                letterSpacing: '-0.01em',
                lineHeight: 1.15
              }}
            >
              WashU SciOly
            </div>
            <div
              style={{
                fontSize: '0.725rem',
                fontWeight: 600,
                color: 'var(--washu-crimson)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase'
              }}
            >
              Washington University in St. Louis
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '0.5rem'
          }}
          className="desktop-nav"
        >
          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                style={{
                  padding: '0.5rem 0.875rem',
                  fontSize: '0.925rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? 'var(--washu-crimson)' : 'var(--slate-700)',
                  borderRadius: 'var(--radius-md)',
                  position: 'relative',
                  transition: 'all var(--transition-fast)'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'var(--slate-950)';
                  e.currentTarget.style.backgroundColor = 'var(--slate-100)';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'var(--slate-700)';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {item.label}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '0px',
                      left: '0.875rem',
                      right: '0.875rem',
                      height: '2.5px',
                      backgroundColor: 'var(--washu-crimson)',
                      borderRadius: '2px'
                    }}
                  />
                )}
              </button>
            );
          })}

          {/* Archive Dropdown */}
          <div ref={dropdownRef} style={{ position: 'relative' }}>
            <button
              onClick={() => setArchiveDropdownOpen(!archiveDropdownOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                padding: '0.5rem 0.875rem',
                fontSize: '0.925rem',
                fontWeight: isArchiveActive ? 700 : 500,
                color: isArchiveActive ? 'var(--washu-crimson)' : 'var(--slate-700)',
                borderRadius: 'var(--radius-md)',
                transition: 'all var(--transition-fast)'
              }}
              onMouseEnter={(e) => {
                if (!isArchiveActive) e.currentTarget.style.color = 'var(--slate-950)';
                e.currentTarget.style.backgroundColor = 'var(--slate-100)';
              }}
              onMouseLeave={(e) => {
                if (!isArchiveActive) e.currentTarget.style.color = 'var(--slate-700)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              Archive
              <ChevronDown
                size={16}
                style={{
                  transform: archiveDropdownOpen ? 'rotate(180deg)' : 'rotate(0)',
                  transition: 'transform 0.2s ease'
                }}
              />
              {isArchiveActive && (
                <span
                  style={{
                    position: 'absolute',
                    bottom: '0px',
                    left: '0.875rem',
                    right: '0.875rem',
                    height: '2.5px',
                    backgroundColor: 'var(--washu-crimson)',
                    borderRadius: '2px'
                  }}
                />
              )}
            </button>

            {/* Dropdown Menu */}
            {archiveDropdownOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 0.5rem)',
                  right: 0,
                  width: '260px',
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  boxShadow: '0 15px 30px -5px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)',
                  padding: '0.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.25rem',
                  animation: 'fadeIn 0.2s ease-out forwards',
                  zIndex: 1100
                }}
              >
                <div
                  onClick={() => handleNavClick('/archive')}
                  style={{
                    padding: '0.625rem 0.875rem',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--washu-crimson)',
                    backgroundColor: 'var(--washu-crimson-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <BookOpen size={16} />
                  <span>Archive Overview</span>
                </div>

                <div
                  style={{
                    height: '1px',
                    backgroundColor: 'var(--slate-200)',
                    margin: '0.25rem 0.5rem'
                  }}
                />

                {ARCHIVE_YEARS.map((yr) => (
                  <div
                    key={yr.yearId}
                    onClick={() => handleNavClick(yr.path)}
                    style={{
                      padding: '0.625rem 0.875rem',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontSize: '0.875rem',
                      fontWeight: currentPath === yr.path ? 700 : 500,
                      color: currentPath === yr.path ? 'var(--washu-crimson)' : 'var(--slate-800)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'background-color 0.15s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--slate-100)')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    <span>{yr.academicYear}</span>
                    <span
                      style={{
                        fontSize: '0.725rem',
                        color: 'var(--slate-500)',
                        backgroundColor: 'var(--slate-100)',
                        padding: '0.15rem 0.4rem',
                        borderRadius: '4px'
                      }}
                    >
                      {yr.yearId === '2023-24' ? 'Div C' : 'Div B & C'}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Quick Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="btn btn-outline btn-sm"
            title="Search (Cmd + K)"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--slate-600)',
              padding: '0.45rem 0.75rem'
            }}
          >
            <Search size={16} />
            <span className="search-hotkey" style={{ fontSize: '0.75rem', color: 'var(--slate-400)' }}>
              ⌘K
            </span>
          </button>

          {/* Register CTA */}
          <button
            onClick={() => handleNavClick('/register')}
            className="btn btn-primary btn-sm register-header-cta"
            style={{
              padding: '0.5rem 1.15rem',
              fontWeight: 700
            }}
          >
            <Sparkles size={15} />
            <span>Register</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              padding: '0.5rem',
              color: 'var(--slate-800)',
              borderRadius: 'var(--radius-md)'
            }}
            className="mobile-toggle-btn"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: '#ffffff',
            borderBottom: '1px solid var(--border-color)',
            padding: '1rem 1.5rem 1.5rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            animation: 'fadeIn 0.2s ease-out forwards'
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavClick(item.path)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: currentPath === item.path ? 700 : 500,
                color: currentPath === item.path ? 'var(--washu-crimson)' : 'var(--slate-800)',
                backgroundColor: currentPath === item.path ? 'var(--washu-crimson-subtle)' : 'transparent',
                textAlign: 'left'
              }}
            >
              <span>{item.label}</span>
            </button>
          ))}

          {/* Mobile Archive Section */}
          <div
            style={{
              marginTop: '0.5rem',
              paddingTop: '0.75rem',
              borderTop: '1px solid var(--slate-200)'
            }}
          >
            <div
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                color: 'var(--slate-500)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '0.5rem',
                paddingLeft: '0.5rem'
              }}
            >
              Past Tournament Archives
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <button
                onClick={() => handleNavClick('/archive')}
                style={{
                  padding: '0.625rem 1rem',
                  borderRadius: '8px',
                  fontSize: '0.925rem',
                  fontWeight: 600,
                  color: 'var(--washu-crimson)',
                  textAlign: 'left',
                  backgroundColor: 'var(--slate-50)'
                }}
              >
                Archive Overview & Directory
              </button>
              {ARCHIVE_YEARS.map((yr) => (
                <button
                  key={yr.yearId}
                  onClick={() => handleNavClick(yr.path)}
                  style={{
                    padding: '0.625rem 1rem',
                    borderRadius: '8px',
                    fontSize: '0.925rem',
                    fontWeight: currentPath === yr.path ? 700 : 500,
                    color: currentPath === yr.path ? 'var(--washu-crimson)' : 'var(--slate-700)',
                    textAlign: 'left',
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}
                >
                  <span>{yr.title}</span>
                </button>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '0.5rem' }}>
            <button
              onClick={() => {
                window.open(TOURNAMENT_INFO.registrationFormUrl, '_blank');
                setMobileMenuOpen(false);
              }}
              className="btn btn-primary"
              style={{ width: '100%', padding: '0.875rem' }}
            >
              Open Google Registration Form
              <ExternalLink size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Inline styles for responsive breakpoints */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle-btn {
            display: none !important;
          }
        }
        @media (max-width: 899px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: flex !important;
          }
          .search-hotkey {
            display: none !important;
          }
          .register-header-cta {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
