// src/components/ThemeToggle.tsx
import React, { useEffect, useState } from 'react';
import { applyTheme, getTheme, THEMES, type ThemeName } from '../utils/theme';

type Props = { show?: boolean; };

const labels: Record<ThemeName,string> = {
  navy: 'Navy (current)',
  teal: 'Teal',
  midnight: 'Midnight',
  royal: 'Royal',
};

export default function ThemeToggle({ show = true }: Props) {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeName>('navy');

  useEffect(() => setTheme(getTheme()), []);

  if (!show) return null;

  const onPick = (t: ThemeName) => {
    setTheme(t);
    applyTheme(t);
    setOpen(false);
  };

  return (
    <div style={{ position:'fixed', right:12, bottom:12, zIndex: 3000 }}>
      {/* launcher */}
      <button
        aria-label="Theme"
        onClick={() => setOpen(v => !v)}
        style={{
          width:44, height:44, borderRadius:12, border:'1px solid rgba(0,0,0,.1)',
          background:'rgba(255,255,255,.85)', backdropFilter:'blur(6px)',
          cursor:'pointer', boxShadow:'0 8px 18px rgba(0,0,0,.15)'
        }}
        title="Change theme"
      >
        🎨
      </button>

      {/* menu */}
      {open && (
        <div
          style={{
            position:'absolute', right:0, bottom:56,
            background:'rgba(255,255,255,.96)', backdropFilter:'blur(8px)',
            border:'1px solid rgba(0,0,0,.08)', borderRadius:12, padding:8,
            boxShadow:'0 12px 24px rgba(0,0,0,.18)', minWidth:180
          }}
        >
          {THEMES.map(t => (
            <button
              key={t}
              onClick={() => onPick(t)}
              style={{
                width:'100%', textAlign:'left', padding:'8px 10px',
                border:'none', background:'transparent', cursor:'pointer',
                borderRadius:8,
                fontWeight: theme === t ? 700 : 500,
                color: theme === t ? '#0b2545' : '#1b1b1b'
              }}
            >
              {labels[t]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
