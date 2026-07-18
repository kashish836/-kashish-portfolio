import { useEffect } from 'react';

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

export function useKonamiCode(onActivate: () => void) {
  useEffect(() => {
    let position = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      const expectedKey = KONAMI_CODE[position];

      if (e.key === expectedKey) {
        position++;

        if (position === KONAMI_CODE.length) {
          onActivate();
          position = 0;
        }
      } else {
        position = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onActivate]);
}
