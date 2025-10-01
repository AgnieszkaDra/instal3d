import { useState } from 'react';

export const useSubmenuToggle = () => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const toggleSubmenu = () => {
    setSubmenuOpen((prevOpen) => !prevOpen);
  };

  return { submenuOpen, toggleSubmenu };
};