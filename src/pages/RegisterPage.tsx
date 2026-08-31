import React, { useState } from 'react';
import { TOURNAMENT_INFO } from '../data/tournamentData';
import { useToast } from '../components/Toast';
import {
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Calendar,
  Users,
  CheckCircle2,
  AlertCircle,
  FileCheck,
  Mail,
  ArrowRight,
  Info,
  Clock
} from 'lucide-react';

interface RegisterPageProps {
  onNavigate: (path: string) => void;
}

export const RegisterPage: React.FC<RegisterPageProps> = ({ onNavigate }) => {
  const { showToast } = useToast();

  // Interactive Coach Checklist State
  const [checklist, setChecklist] = useState({
    headcount: false,
    division: false,
    coachContact: false,
    rosterConsent: false,
    transportation: false
  });

  const handleChecklistToggle = (key: keyof typeof checklist) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const allChecked = Object.values(checklist).every(Boolean);

  const handleOpenGoogleForm = () => {
    window.open(TOURNAMENT_INFO.registrationFormUrl, '_blank');
    showToast({
      type: 'success',
      title: 'Registration Form Opened',
      description: 'Opening the official WashU Science Olympiad Google Form in a new tab.'
    });
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-main)', minHeight: '100vh', paddingBottom: '5rem' }}>
      {/* Page Header */}
      <section
        style={{
          paddingTop: '3.5rem',
          paddingBottom: '3.5rem',
          backgroundColor: '#ffffff',
          borderBottom: '1px solid var(--border-color)'
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
            <span className="badge badge-crimson" style={{ marginBottom: '0.75rem' }}>
              WashU Science Olympiad
            </span>
            <h1 style={{ fontSize: '2.75rem', fontWeight: 500, color: 'var(--slate-900)', marginBottom: '1rem' }}>
              Team Registration Portal
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--slate-600)', lineHeight: 1.6 }}>
              Register your school's Division B (Middle School) or Division C (High School) teams for the 4th Annual WashU Science Olympiad Invitational.
            </p>
          </div>
        </div>
      </section>

      {/* Main Registration Action Card */}
      <section style={{ paddingTop: '3rem', paddingBottom: '2.5rem' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div
            style={{
              backgroundColor: 'var(--slate-900)',
              color: '#ffffff',
              borderRadius: '24px',
              padding: '3rem 2.5rem',
              boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.4)',
              border: '1px solid var(--slate-800)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Background decorative glow */}
            <div
              style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '250px',
                height: '250px',
                borderRadius: '50%',
                backgroundColor: 'rgba(0, 115, 96, 0.25)',
                filter: 'blur(50px)',
                pointerEvents: 'none'
              }}
            />

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '0.4rem 1rem', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 600, color: '#38bdf8', marginBottom: '1.5rem' }}>
              <Sparkles size={16} />
              <span>Official Registration Form</span>
            </div>

            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#ffffff', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              Register for the 2026–2027 Invitational
            </h2>

            <p style={{ fontSize: '1.05rem', color: '#cbd5e1', lineHeight: 1.6, maxWidth: '680px', margin: '0 auto 2.5rem auto' }}>
              Schools are permitted a maximum of <strong>three (3) teams</strong> per school. Division B is limited to 30 teams and Division C to 60 teams. St. Louis region and Midwestern teams receive priority registration consideration.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={handleOpenGoogleForm}
                className="btn btn-primary btn-lg"
                style={{
                  padding: '1rem 2.75rem',
                  fontSize: '1.1rem',
                  fontWeight: 800,
                  boxShadow: '0 10px 25px rgba(165, 20, 23, 0.4)'
                }}
              >
                <span>Click Here to Register!</span>
                <ExternalLink size={20} />
              </button>

              <button
                onClick={() => onNavigate('/tournament')}
                className="btn btn-outline btn-lg"
                style={{ color: '#ffffff', borderColor: 'var(--slate-700)', backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
              >
                <span>View Event Catalog</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Registration Timeline & Deadlines */}
      <section style={{ paddingBottom: '3.5rem' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              border: '1px solid var(--border-color)',
              padding: '2.5rem',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <div style={{ marginBottom: '2rem' }}>
              <span className="badge badge-crimson" style={{ marginBottom: '0.5rem' }}>
                Official Schedule
              </span>
              <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--slate-900)' }}>
                Registration Details & Timeline
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--slate-600)' }}>
                Please review all deadlines carefully. Slots are assigned on a rolling basis.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                {
                  date: 'September 25th 5:00 PM CST, 2026:',
                  title: 'Registration Opens for All Teams',
                  desc: 'Registration opens for teams. Schools are allowed a maximum of three (3) teams per school. St. Louis region teams and Midwestern teams are given priority for registration.',
                  badge: 'Registration Open',
                  color: 'var(--washu-green)'
                },
                {
                  date: 'November 20th 5:00 PM CST, 2026:',
                  title: 'Division B Registration Closes',
                  desc: 'Registration closes for Division B teams. Last date for teams to receive registration status. Teams will likely receive confirmation of registration prior to this date. While there is a limit of three teams that a school can register on our form, not all schools are guaranteed to receive that many slots.',
                  badge: 'Division B Deadline',
                  color: 'var(--washu-crimson)'
                },
                {
                  date: 'November 30th, 5:00 PM CST, 2026:',
                  title: 'Division C Registration Closes (Out-of-State)',
                  desc: 'Registration closes for Division C teams EXCEPT Illinois/Missouri schools. Last date for teams to receive registration status. Teams will likely receive confirmation of registration prior to this date.',
                  badge: 'Division C Non-IL/MO Deadline',
                  color: 'var(--washu-crimson)'
                },
                {
                  date: 'December 5th, 2026:',
                  title: 'Division B Competition Day!',
                  desc: 'In-person tournament day for all competing Division B middle school teams on the Danforth Campus.',
                  badge: 'Div B Tournament',
                  color: 'var(--washu-green)'
                },
                {
                  date: 'December 15th, 5:00 PM CST, 2026:',
                  title: 'Division C Registration Closes (IL & MO Teams)',
                  desc: 'Registration closes for Illinois and Missouri Division C teams.',
                  badge: 'IL & MO Final Deadline',
                  color: 'var(--accent-gold)'
                },
                {
                  date: 'February 6th, 2027:',
                  title: 'Division C Competition Day!',
                  desc: 'In-person tournament day for all competing Division C high school teams on the Danforth Campus.',
                  badge: 'Div C Tournament',
                  color: 'var(--washu-crimson)'
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    borderLeft: `4px solid ${item.color}`,
                    paddingLeft: '1.5rem',
                    paddingTop: '0.25rem',
                    paddingBottom: '0.25rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.875rem',
                        fontWeight: 700,
                        color: item.color
                      }}
                    >
                      {item.date}
                    </span>
                  </div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '0.35rem' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--slate-600)', lineHeight: 1.55, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Coach Readiness Checklist */}
      <section style={{ paddingBottom: '3.5rem' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              border: '1px solid var(--border-color)',
              padding: '2.5rem',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '0.5rem' }}>
              <FileCheck size={22} color="var(--washu-crimson)" />
              <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--slate-900)' }}>
                Coach & Team Registration Pre-Check
              </h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--slate-600)', marginBottom: '1.5rem' }}>
              Check off these items to ensure your school is prepared before submitting the official form:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.75rem' }}>
              {[
                {
                  key: 'headcount' as const,
                  label: 'Identified up to 15 students per team (maximum 3 teams total per school)'
                },
                {
                  key: 'division' as const,
                  label: 'Selected appropriate division (Division B for Grades 6–9, Division C for Grades 9–12)'
                },
                {
                  key: 'coachContact' as const,
                  label: 'Designated primary coach and emergency chaperone contact information'
                },
                {
                  key: 'rosterConsent' as const,
                  label: 'Confirmed school permission and parent travel consent for in-person travel to St. Louis, MO'
                },
                {
                  key: 'transportation' as const,
                  label: 'Reviewed Danforth Campus parking guidelines and bus drop-off zones'
                }
              ].map((item) => (
                <div
                  key={item.key}
                  onClick={() => handleChecklistToggle(item.key)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.875rem',
                    padding: '0.875rem 1.25rem',
                    borderRadius: '10px',
                    backgroundColor: checklist[item.key] ? 'var(--washu-green-subtle)' : 'var(--slate-50)',
                    border: checklist[item.key] ? '1px solid var(--washu-green-border)' : '1px solid var(--border-color)',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <div
                    style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '6px',
                      backgroundColor: checklist[item.key] ? 'var(--washu-green)' : '#ffffff',
                      border: checklist[item.key] ? 'none' : '2px solid var(--slate-300)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      flexShrink: 0
                    }}
                  >
                    {checklist[item.key] && <CheckCircle2 size={16} />}
                  </div>
                  <span
                    style={{
                      fontSize: '0.9rem',
                      color: checklist[item.key] ? 'var(--slate-900)' : 'var(--slate-700)',
                      fontWeight: checklist[item.key] ? 600 : 400
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--slate-500)' }}>
                {allChecked ? 'You are fully ready to complete registration!' : 'Tip: Complete the checklist to make form submission seamless.'}
              </div>
              <button
                onClick={handleOpenGoogleForm}
                className="btn btn-primary btn-sm"
                style={{ padding: '0.6rem 1.5rem' }}
              >
                <span>Launch Google Registration Form</span>
                <ExternalLink size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
