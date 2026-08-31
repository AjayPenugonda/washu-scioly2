import React, { useState, useEffect } from 'react';
import { Clock, Calendar, Sparkles, MapPin, ExternalLink, Bookmark } from 'lucide-react';
import { TOURNAMENT_INFO } from '../data/tournamentData';
import { useToast } from './Toast';

interface CountdownUnitProps {
  label: string;
  value: number;
}

const CountdownDigit: React.FC<CountdownUnitProps> = ({ label, value }) => {
  const formatted = String(value).padStart(2, '0');

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        borderRadius: '16px',
        padding: '1.25rem 0.5rem',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        transition: 'all 0.2s ease'
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(2rem, 4.5vw, 3rem)',
          fontWeight: 800,
          color: '#ffffff',
          lineHeight: 1,
          letterSpacing: '-0.03em'
        }}
      >
        {formatted}
      </span>
      <span
        style={{
          marginTop: '0.5rem',
          fontSize: '0.75rem',
          fontWeight: 700,
          letterSpacing: '0.08em',
          color: '#94a3b8',
          textTransform: 'uppercase',
          fontFamily: 'var(--font-heading)'
        }}
      >
        {label}
      </span>
    </div>
  );
};

export const CountdownTimer: React.FC = () => {
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState<'B' | 'C'>('B');

  const targets = {
    B: {
      name: 'Division B (Middle School)',
      dateString: '2026-12-05T08:00:00-06:00',
      label: 'Saturday, Dec 5, 2026',
      badge: '30 Teams Cap',
      venue: 'Danforth Campus • St. Louis, MO'
    },
    C: {
      name: 'Division C (High School)',
      dateString: '2027-02-06T08:00:00-06:00',
      label: 'Saturday, Feb 6, 2027',
      badge: '60 Teams Cap',
      venue: 'Danforth Campus • St. Louis, MO'
    }
  };

  const calculateTimeLeft = (targetDate: string) => {
    const diff = new Date(targetDate).getTime() - new Date().getTime();
    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPassed: true };
    }
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
      isPassed: false
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targets[activeTab].dateString));

  useEffect(() => {
    setTimeLeft(calculateTimeLeft(targets[activeTab].dateString));
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targets[activeTab].dateString));
    }, 1000);
    return () => clearInterval(timer);
  }, [activeTab]);

  const handleAddToCalendar = () => {
    const current = targets[activeTab];
    const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      `WashU Science Olympiad ${current.name}`
    )}&dates=${
      activeTab === 'B'
        ? '20261205T140000Z/20261205T230000Z'
        : '20270206T140000Z/20270206T230000Z'
    }&details=${encodeURIComponent(
      'WashU Science Olympiad In-Person Tournament at Washington University in St. Louis Danforth Campus. Info: https://www.washuscioly.com'
    )}&location=${encodeURIComponent('Washington University in St. Louis, St. Louis, MO')}`;

    window.open(googleCalUrl, '_blank');
    showToast({
      type: 'success',
      title: 'Calendar Event Opened',
      description: `Saving ${current.name} (${current.label}) to your Google Calendar.`
    });
  };

  return (
    <div
      style={{
        backgroundColor: '#0c0f17',
        color: '#ffffff',
        borderRadius: '22px',
        padding: '2.25rem',
        boxShadow: '0 25px 50px -12px rgba(12, 15, 23, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.08)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Subtle Crimson Glow */}
      <div
        style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '240px',
          height: '240px',
          borderRadius: '50%',
          backgroundColor: 'rgba(158, 27, 33, 0.22)',
          filter: 'blur(50px)',
          pointerEvents: 'none'
        }}
      />

      {/* Header with Division Switcher */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '2rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              backgroundColor: 'rgba(158, 27, 33, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#f87171',
              border: '1px solid rgba(248, 113, 113, 0.3)'
            }}
          >
            <Clock size={20} />
          </div>
          <div>
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '1.25rem',
                letterSpacing: '0.01em',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <span>Tournament Countdown</span>
              <span
                style={{
                  fontSize: '0.7rem',
                  padding: '0.15rem 0.5rem',
                  borderRadius: '999px',
                  backgroundColor: 'rgba(239, 68, 68, 0.2)',
                  color: '#fca5a5',
                  border: '1px solid rgba(239, 68, 68, 0.3)'
                }}
              >
                LIVE
              </span>
            </div>
            <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
              {targets[activeTab].name} • {targets[activeTab].label}
            </div>
          </div>
        </div>

        {/* Division Selector Tabs */}
        <div
          style={{
            display: 'flex',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            padding: '4px',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          {(['B', 'C'] as const).map((div) => (
            <button
              key={div}
              onClick={() => setActiveTab(div)}
              style={{
                padding: '0.45rem 1.15rem',
                borderRadius: '8px',
                fontSize: '0.85rem',
                fontWeight: 700,
                fontFamily: 'var(--font-heading)',
                color: activeTab === div ? '#ffffff' : '#94a3b8',
                backgroundColor:
                  activeTab === div
                    ? 'var(--washu-crimson)'
                    : 'transparent',
                boxShadow:
                  activeTab === div
                    ? '0 2px 8px rgba(158, 27, 33, 0.4)'
                    : 'none',
                transition: 'all 0.18s ease',
                cursor: 'pointer'
              }}
            >
              {div === 'B' ? 'Division B (Dec 5)' : 'Division C (Feb 6)'}
            </button>
          ))}
        </div>
      </div>

      {/* Clean Digital Countdown Digits Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1rem',
          marginBottom: '2rem',
          maxWidth: '580px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        <CountdownDigit label="Days" value={timeLeft.days} />
        <CountdownDigit label="Hours" value={timeLeft.hours} />
        <CountdownDigit label="Minutes" value={timeLeft.minutes} />
        <CountdownDigit label="Seconds" value={timeLeft.seconds} />
      </div>

      {/* Bottom Information & Action Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          paddingTop: '1.25rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#cbd5e1' }}>
          <Sparkles size={16} color="#fbbf24" />
          <span>{targets[activeTab].venue}</span>
        </div>

        <button
          onClick={handleAddToCalendar}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.55rem 1.15rem',
            borderRadius: '10px',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            color: '#ffffff',
            fontSize: '0.825rem',
            fontWeight: 700,
            fontFamily: 'var(--font-heading)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            transition: 'all 0.2s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--washu-crimson)';
            e.currentTarget.style.borderColor = 'var(--washu-crimson)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
          }}
        >
          <Calendar size={15} />
          <span>Add Date to Calendar</span>
        </button>
      </div>
    </div>
  );
};
