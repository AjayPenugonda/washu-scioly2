import React, { useState, useEffect } from 'react';
import { ToastProvider } from './components/Toast';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuickSearchModal } from './components/QuickSearchModal';
import { HomePage } from './pages/HomePage';
import { TournamentPage } from './pages/TournamentPage';
import { RegisterPage } from './pages/RegisterPage';
import { AboutPage } from './pages/AboutPage';
import { ResultsPage } from './pages/ResultsPage';
import { ArchiveHubPage } from './pages/ArchiveHubPage';
import { Archive2025_26 } from './pages/Archive2025_26';
import { Archive2024_25 } from './pages/Archive2024_25';
import { Archive2023_24 } from './pages/Archive2023_24';

export const App: React.FC = () => {
  // Normalize current path from window location hash or pathname
  const getNormalizedPath = (): string => {
    const hash = window.location.hash.replace(/^#/, '');
    const pathname = window.location.pathname;
    const path = hash || pathname || '/';

    // Route legacy Wix URL aliases
    if (path.includes('event-info') || path.includes('2025-26-tournament')) return '/tournament';
    if (path.includes('about-us-1') || path.includes('about-us')) return '/about';
    if (path.includes('copy-of-results-exams')) return '/archive/2025-26';
    if (path.includes('copy-of-2023-24-divsion-c')) return '/archive/2024-25';
    if (path.includes('copy-of-about-us')) return '/archive/2023-24';
    if (path.includes('copy-of-results')) return '/archive';
    if (path.includes('results')) return '/results';
    if (path.includes('register')) return '/register';

    return path;
  };

  const [currentPath, setCurrentPath] = useState<string>(getNormalizedPath());
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Sync with browser navigation
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(getNormalizedPath());
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    // Register global trigger for search
    (window as any).__openSearchModal = () => setIsSearchOpen(true);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateTo = (path: string) => {
    window.location.hash = path;
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render Page Content based on route
  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage onNavigate={navigateTo} />;
      case '/tournament':
        return <TournamentPage onNavigate={navigateTo} />;
      case '/register':
        return <RegisterPage onNavigate={navigateTo} />;
      case '/about':
        return <AboutPage onNavigate={navigateTo} />;
      case '/results':
        return <ResultsPage onNavigate={navigateTo} />;
      case '/archive':
        return <ArchiveHubPage onNavigate={navigateTo} />;
      case '/archive/2025-26':
        return <Archive2025_26 onNavigate={navigateTo} />;
      case '/archive/2024-25':
        return <Archive2024_25 onNavigate={navigateTo} />;
      case '/archive/2023-24':
        return <Archive2023_24 onNavigate={navigateTo} />;
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <ToastProvider>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar
          currentPath={currentPath}
          onNavigate={navigateTo}
          onOpenSearch={() => setIsSearchOpen(true)}
        />

        <main style={{ flex: 1 }}>{renderPage()}</main>

        <Footer onNavigate={navigateTo} />

        <QuickSearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          onNavigate={navigateTo}
        />
      </div>
    </ToastProvider>
  );
};

export default App;
