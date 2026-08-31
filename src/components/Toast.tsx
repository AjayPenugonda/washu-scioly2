import React, { createContext, useContext, useState, useCallback } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

interface ToastContextType {
  showToast: (toast: Omit<ToastMessage, 'id'>) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = useCallback((toast: Omit<ToastMessage, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast: ToastMessage = { ...toast, id };
    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  }, []);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          right: '1.5rem',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          maxWidth: '380px',
          width: 'calc(100% - 3rem)',
          pointerEvents: 'none'
        }}
      >
        {toasts.map((t) => (
          <div
            key={t.id}
            style={{
              pointerEvents: 'auto',
              background: '#0f172a',
              color: '#ffffff',
              padding: '1rem 1.25rem',
              borderRadius: '12px',
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.875rem',
              animation: 'fadeIn 0.25s ease-out forwards',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            {t.type === 'success' && <CheckCircle2 size={20} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />}
            {t.type === 'error' && <AlertCircle size={20} color="#ef4444" style={{ flexShrink: 0, marginTop: '2px' }} />}
            {t.type === 'info' && <Info size={20} color="#38bdf8" style={{ flexShrink: 0, marginTop: '2px' }} />}
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: '0.925rem' }}>{t.title}</div>
              {t.description && (
                <div style={{ fontSize: '0.825rem', color: '#94a3b8', marginTop: '0.2rem' }}>
                  {t.description}
                </div>
              )}
            </div>
            <button
              onClick={() => removeToast(t.id)}
              style={{
                color: '#94a3b8',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: '2px'
              }}
            >
              <X size={16} />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
