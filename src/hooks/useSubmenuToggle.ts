import { useState } from 'react';

export const useSubmenuToggle = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSubmenu = (index: number | null) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  const isSubmenuOpen = (index: number) => openIndex === index;

  return {
    openIndex,
    toggleSubmenu,
    isSubmenuOpen,
  };
};