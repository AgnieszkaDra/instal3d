import { createContext, useState, type ReactNode } from 'react';

interface SubmenuContextProps {
  openIndex: number | null;
  toggleSubmenu: (index: number | null) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const SubmenuContext = createContext<SubmenuContextProps | undefined>(undefined);

export const SubmenuProvider = ({ children }: { children: ReactNode }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSubmenu = (index: number | null) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <SubmenuContext.Provider value={{ openIndex, toggleSubmenu }}>
      {children}
    </SubmenuContext.Provider>
  );
};

