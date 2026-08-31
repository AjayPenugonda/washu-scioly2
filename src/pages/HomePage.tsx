import React, { useState } from 'react';
import washuCampusHero from '../assets/images/backgroundimage.png';
import { CountdownTimer } from '../components/CountdownTimer';
import { TimelineTracker } from '../components/TimelineTracker';
import { CampusMapGuide } from '../components/CampusMapGuide';
import { TOURNAMENT_INFO } from '../data/tournamentData';
import { ARCHIVE_YEARS } from '../data/archiveData';
import { useToast } from '../components/Toast';
import {
  Calendar,
  Sparkles,
  Award,
  Users,
  MapPin,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  BookOpen,
  Mail,
  ShieldCheck,
  Zap,
  Layers,
  FileSpreadsheet,
  FolderDown
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { showToast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleMailingListSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast({ type: 'error', title: 'Invalid Email', description: 'Please enter a valid email address.' });
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      // Save locally
      try {
        const stored = JSON.parse(localStorage.getItem('washu_scioly_mailing_list') || '[]');
        stored.push({ email, date: new Date().toISOString() });
        localStorage.setItem('washu_scioly_mailing_list', JSON.stringify(stored));
      } catch (err) {}

      showToast({
        type: 'success',
        title: 'Subscribed to Updates!',
        description: 'Thank you for joining our mailing list. You will receive tournament bulletins & key deadline reminders.'
      });
      setEmail('');
    }, 600);
  };

  return (
    <div>
      {/* Hero Section with Campus Background */}
      <section
        style={{
          position: 'relative',
          paddingTop: '5rem',
          paddingBottom: '4.5rem',
          backgroundImage: `linear-gradient(180deg, rgba(15, 23, 42, 0.72) 0%, rgba(15, 23, 42, 0.84) 60%, rgba(15, 23, 42, 0.94) 100%), url(${washuCampusHero})`,
          backgroundPosition: 'center top',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          overflow: 'hidden'
        }}
      >
        <div className="container">
          {/* Main Headline */}
          <div style={{ maxWidth: '920px', margin: '1rem auto 2.5rem auto', textAlign: 'center' }}>
            <h1
              style={{
                fontSize: 'clamp(3.25rem, 7.5vw, 5.75rem)',
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '0.02em',
                lineHeight: 1.15,
                marginBottom: '1.35rem',
                textShadow: '0 3px 14px rgba(0, 0, 0, 0.45)'
              }}
            >
              WashU{' '}
              <span
                style={{
                  color: '#f87171',
                  fontStyle: 'italic',
                  fontWeight: 700,
                  textShadow: '0 0 25px rgba(248, 113, 113, 0.5)'
                }}
              >
                Science
              </span>{' '}
              Olympiad
            </h1>

            <p
              style={{
                fontSize: 'clamp(0.95rem, 1.6vw, 1.125rem)',
                color: '#e2e8f0',
                lineHeight: 1.6,
                maxWidth: '680px',
                margin: '0 auto',
                textShadow: '0 1px 4px rgba(0, 0, 0, 0.3)'
              }}
            >
              Washington University in St. Louis warmly invites middle school (Div B) and high school (Div C) teams nationwide to our premier in-person Science Olympiad invitational on the Danforth Campus.
            </p>
          </div>

          {/* Key Quick CTAs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
              marginBottom: '3.5rem'
            }}
          >
            <button
              onClick={() => onNavigate('/register')}
              className="btn btn-primary btn-lg"
              style={{
                boxShadow: '0 10px 25px -3px rgba(158, 27, 33, 0.5)',
                padding: '0.95rem 2.25rem',
                fontWeight: 700
              }}
            >
              <span>Register Your School</span>
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => onNavigate('/tournament')}
              className="btn btn-secondary btn-lg"
              style={{
                padding: '0.95rem 2rem',
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                backdropFilter: 'blur(8px)'
              }}
            >
              <span>Event Info & Logistics</span>
            </button>

            <button
              onClick={() => onNavigate('/archive')}
              className="btn btn-outline btn-lg"
              style={{
                padding: '0.95rem 1.75rem',
                color: '#f1f5f9',
                borderColor: 'rgba(255, 255, 255, 0.3)',
                backgroundColor: 'rgba(0, 0, 0, 0.2)'
              }}
            >
              <BookOpen size={18} />
              <span>Explore Archive</span>
            </button>
          </div>

          {/* Quick Metrics Bar */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1.25rem',
              maxWidth: '960px',
              margin: '0 auto'
            }}
          >
            {[
              { value: '$0.00', label: '100% Free Registration', sub: 'Zero entry fees for all schools' },
              { value: '90+', label: 'Teams Hosted', sub: '30 Div B & 60 Div C slots' },
              { value: '46', label: 'Total Events Run', sub: 'Tests, Builds & Wet Labs' },
              { value: 'Danforth', label: 'In-Person Campus', sub: 'St. Louis, Missouri' }
            ].map((stat, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.5)',
                  borderRadius: '16px',
                  padding: '1.25rem 1rem',
                  textAlign: 'center',
                  boxShadow: '0 12px 28px rgba(0, 0, 0, 0.22)'
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '2rem',
                    fontWeight: 900,
                    color: idx === 0 ? 'var(--washu-green)' : 'var(--slate-900)',
                    lineHeight: 1.1,
                    marginBottom: '0.25rem'
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--slate-800)' }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)' }}>
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tournament Countdown Section */}
      <section
        style={{
          paddingTop: '3.5rem',
          paddingBottom: '3.5rem',
          backgroundColor: 'var(--bg-main)',
          borderBottom: '1px solid var(--border-color)'
        }}
      >
        <div className="container" style={{ maxWidth: '960px' }}>
          <CountdownTimer />
        </div>
      </section>

      {/* Tournament Divisions Section */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem auto' }}>
            <span className="badge badge-crimson" style={{ marginBottom: '0.75rem' }}>
              Season 2026–2027
            </span>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 500, color: 'var(--slate-900)', marginBottom: '0.75rem' }}>
              Tournaments Hosted at WashU
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--slate-600)' }}>
              We are pleased to host our annual in-person tournaments across two competition divisions on the Danforth Campus.
            </p>
          </div>

          {/* Tournament Cards */}
          <div className="grid-2" style={{ maxWidth: '960px', margin: '0 auto' }}>
            {/* Division B Card */}
            <div
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderTop: '4px solid var(--washu-green)',
                position: 'relative'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      backgroundColor: 'var(--washu-green-subtle)',
                      color: 'var(--washu-green)',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '6px',
                      border: '1px solid var(--washu-green-border)'
                    }}
                  >
                    Middle School
                  </span>
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--slate-500)' }}>
                    Cap: 30 Teams
                  </span>
                </div>

                <h3 style={{ fontSize: '1.45rem', fontWeight: 600, color: 'var(--slate-900)', marginBottom: '0.5rem' }}>
                  Division B Invitational
                </h3>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--washu-green)',
                    marginBottom: '1.25rem'
                  }}
                >
                  <Calendar size={18} />
                  <span>December 5, 2026</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.825rem', color: 'var(--slate-700)', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <CheckCircle2 size={16} color="var(--washu-green)" />
                    <span>Max 3 teams per school</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <CheckCircle2 size={16} color="var(--washu-green)" />
                    <span>National-caliber test writers & review</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <CheckCircle2 size={16} color="var(--washu-green)" />
                    <span>Reg deadline: November 20, 2026 (5 PM CST)</span>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  onClick={() => onNavigate('/register')}
                  className="btn btn-green btn-sm"
                  style={{ flex: 1 }}
                >
                  Register Div B
                </button>
                <button
                  onClick={() => onNavigate('/tournament?div=B')}
                  className="btn btn-outline btn-sm"
                >
                  Events
                </button>
              </div>
            </div>

            {/* Division C Card */}
            <div
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderTop: '4px solid var(--washu-crimson)',
                position: 'relative'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      backgroundColor: 'var(--washu-crimson-subtle)',
                      color: 'var(--washu-crimson)',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '6px',
                      border: '1px solid var(--washu-crimson-border)'
                    }}
                  >
                    High School
                  </span>
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--slate-500)' }}>
                    Cap: 60 Teams
                  </span>
                </div>

                <h3 style={{ fontSize: '1.45rem', fontWeight: 600, color: 'var(--slate-900)', marginBottom: '0.5rem' }}>
                  Division C Invitational
                </h3>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--washu-crimson)',
                    marginBottom: '1.25rem'
                  }}
                >
                  <Calendar size={18} />
                  <span>February 6, 2027</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.825rem', color: 'var(--slate-700)', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <CheckCircle2 size={16} color="var(--washu-crimson)" />
                    <span>Max 3 teams per school</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <CheckCircle2 size={16} color="var(--washu-crimson)" />
                    <span>National-caliber test writers & review</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <CheckCircle2 size={16} color="var(--washu-crimson)" />
                    <span>Reg closes Nov 30 / Dec 15 (IL/MO)</span>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  onClick={() => onNavigate('/register')}
                  className="btn btn-primary btn-sm"
                  style={{ flex: 1 }}
                >
                  Register Div C
                </button>
                <button
                  onClick={() => onNavigate('/tournament?div=C')}
                  className="btn btn-outline btn-sm"
                >
                  Events
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-main)' }}>
        <div className="container">
          <TimelineTracker />
        </div>
      </section>

      {/* Interactive Campus Guide Widget */}
      <section className="section" style={{ backgroundColor: '#ffffff', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <CampusMapGuide />
        </div>
      </section>

      {/* Past Archive Highlights Teaser */}
      <section className="section" style={{ backgroundColor: 'var(--bg-main)' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '2.5rem'
            }}
          >
            <div>
              <span className="badge badge-slate" style={{ marginBottom: '0.5rem' }}>
                Open-Access Repository
              </span>
              <h2 style={{ fontSize: '2.25rem', fontWeight: 500, color: 'var(--slate-900)' }}>
                Past Tournament Archives
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--slate-600)' }}>
                Explore tests, keys, spreadsheets, and officer rosters from all past WashU Invitationals.
              </p>
            </div>

            <button onClick={() => onNavigate('/archive')} className="btn btn-secondary btn-sm">
              <span>View All Archive Subpages</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid-3">
            {ARCHIVE_YEARS.map((yr) => (
              <div
                key={yr.yearId}
                className="card card-interactive"
                onClick={() => onNavigate(yr.path)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        backgroundColor: 'var(--washu-crimson-subtle)',
                        color: 'var(--washu-crimson)',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '4px'
                      }}
                    >
                      {yr.academicYear}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--slate-500)' }}>
                      {yr.links.length} Resources
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--slate-900)', marginBottom: '0.5rem' }}>
                    {yr.title}
                  </h3>

                  <p style={{ fontSize: '0.85rem', color: 'var(--slate-600)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                    {yr.description}
                  </p>
                </div>

                <div>
                  <div
                    style={{
                      paddingTop: '0.75rem',
                      borderTop: '1px solid var(--border-color)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '0.825rem',
                      fontWeight: 600,
                      color: 'var(--washu-crimson)'
                    }}
                  >
                    <span>Open {yr.academicYear} Archive</span>
                    <ArrowRight size={15} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mailing List & Contact Section */}
      <section
        className="section"
        style={{
          backgroundColor: 'var(--slate-900)',
          color: '#ffffff',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              backgroundColor: 'rgba(158, 27, 33, 0.35)',
              border: '1px solid rgba(158, 27, 33, 0.6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem auto',
              color: '#f87171'
            }}
          >
            <Mail size={24} />
          </div>

          <h2 style={{ fontSize: '2.25rem', fontWeight: 500, color: '#ffffff', marginBottom: '0.75rem' }}>
            Join the WashU SciOly Mailing List
          </h2>

          <p style={{ fontSize: '1.05rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '2rem' }}>
            Receive tournament bulletins, prompt updates on registration openings and deadlines, schedule announcements, and test releases.
          </p>

          <form
            onSubmit={handleMailingListSubmit}
            style={{
              display: 'flex',
              gap: '0.75rem',
              maxWidth: '520px',
              margin: '0 auto 1.5rem auto',
              flexWrap: 'wrap'
            }}
          >
            <input
              type="email"
              placeholder="Enter coach, student, or school email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              style={{
                flex: '1 1 280px',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                color: '#ffffff',
                borderColor: 'rgba(255, 255, 255, 0.15)'
              }}
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary"
              style={{ padding: '0.75rem 1.75rem', fontWeight: 700 }}
            >
              {isSubmitting ? 'Subscribing...' : 'Join List'}
            </button>
          </form>

          <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
            Have specific questions? Email our tournament directors directly at{' '}
            <a
              href={`mailto:${TOURNAMENT_INFO.contactEmail}`}
              style={{ color: '#ffffff', textDecoration: 'underline' }}
            >
              {TOURNAMENT_INFO.contactEmail}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
