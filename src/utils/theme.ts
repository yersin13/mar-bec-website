// src/utils/theme.ts

export type ThemeName =
  | 'navy'
  | 'teal'
  | 'midnight'
  | 'royal'
  | 'ocean'
  | 'slate'
  | 'sky'
  | 'steel'
  | 'spruce'
  | 'gold'
  | 'mono'
  | 'contrast';

export const THEMES: ThemeName[] = [
  'navy', 'teal', 'midnight', 'royal',
  'ocean', 'slate', 'sky', 'steel', 'spruce', 'gold', 'mono', 'contrast',
];

const KEY = 'theme';

export function isThemeName(x: unknown): x is ThemeName {
  return typeof x === 'string' && (THEMES as string[]).includes(x);
}

/** Apply a theme immediately and persist it. */
export function applyTheme(name: ThemeName) {
  const root = document.documentElement;
  if (name === 'navy') {
    root.removeAttribute('data-theme'); // default palette -> no attribute
  } else {
    root.setAttribute('data-theme', name);
  }
  localStorage.setItem(KEY, name);
}

/** Read stored theme, falling back to 'navy'. */
export function getTheme(): ThemeName {
  const saved = localStorage.getItem(KEY);
  return isThemeName(saved) ? saved : 'navy';
}

/** Try to read a valid ?theme=... from the current URL. */
export function getQueryTheme(win: Window = window): ThemeName | null {
  const q = new URLSearchParams(win.location.search).get('theme');
  return isThemeName(q) ? q : null;
}

/**
 * Initialize theme on app start.
 * - If URL has ?theme=..., use it and persist.
 * - Else use saved theme (or 'navy').
 * Returns the applied theme.
 */
export function initTheme(): ThemeName {
  const q = getQueryTheme();
  if (q) {
    applyTheme(q);
    return q;
  }
  const saved = getTheme();
  applyTheme(saved);
  return saved;
}

/** Convenience setter that accepts any string and normalizes it. */
export function setTheme(name: string): ThemeName {
  const valid = isThemeName(name) ? name : 'navy';
  applyTheme(valid);
  return valid;
}
