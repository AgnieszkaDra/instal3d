import { createContext, useContext, useState, type ReactNode } from "react";

interface NavbarContextProps {
  navbarOpen: boolean;
  toggleNavbar: () => void;
  closeNavbar: () => void;
}

// Create context
const NavbarContext = createContext<NavbarContextProps | undefined>(undefined);

// Provider
export const NavbarProvider = ({ children }: { children: ReactNode }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => setNavbarOpen((prev) => !prev);
  const closeNavbar = () => setNavbarOpen(false);

  const value = { navbarOpen, toggleNavbar, closeNavbar };
  console.log("NavbarContext value:", value); // Debugging line

  return (
    <NavbarContext.Provider value={value}>
      {children}
    </NavbarContext.Provider>
  );
};

// Hook to use context
// eslint-disable-next-line react-refresh/only-export-components
export const useNavbar = () => {
  const context = useContext(NavbarContext);
  if (!context) throw new Error("useNavbar must be used within NavbarProvider");
  return context;
};