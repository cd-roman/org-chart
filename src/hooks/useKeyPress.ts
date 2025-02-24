import { useEffect } from 'react';

type KeyHandler = (event: KeyboardEvent) => void;

interface KeyHandlerOptions {
  key: string;
  ctrl?: boolean;
  shift?: boolean;
  alt?: boolean;
}

export const useKeyPress = (options: KeyHandlerOptions, handler: KeyHandler) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const matchesKey = event.key === options.key;
      const matchesCtrl = options.ctrl ? event.ctrlKey : true;
      const matchesShift = options.shift ? event.shiftKey : true;
      const matchesAlt = options.alt ? event.altKey : true;

      if (matchesKey && matchesCtrl && matchesShift && matchesAlt) {
        handler(event);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [handler, options]);
};

