import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type GameMode = 'runner' | 'walker' | 'cyclist';

interface ModeContextType {
  mode: GameMode;
  setMode: (mode: GameMode) => void;
  modeColor: string;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<GameMode>('runner');

  const modeColor = {
    runner: 'var(--color-runner)',
    walker: 'var(--color-walker)',
    cyclist: 'var(--color-cyclist)',
  }[mode];

  useEffect(() => {
    document.documentElement.setAttribute('data-mode', mode);
  }, [mode]);

  return (
    <ModeContext.Provider value={{ mode, setMode, modeColor }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const context = useContext(ModeContext);
  if (context === undefined) {
    throw new Error('useMode must be used within a ModeProvider');
  }
  return context;
}
