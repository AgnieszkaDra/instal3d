import { useState } from 'react';

export const useNavbarToggle = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen((prevOpen) => !prevOpen);
  };

  return { navbarOpen, toggleNavbar };
};