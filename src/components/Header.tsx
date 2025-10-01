import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { Hamburger, Menu } from '../ui';
import { useSubmenuToggle } from '../hooks/useSubmenuToggle';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useNavbar } from "../hooks/useNavbar";

const Header = () => {
  const { submenuOpen, toggleSubmenu } = useSubmenuToggle();
   const { closeNavbar } = useNavbar();
  const location = useLocation();

  useEffect(() => {
    closeNavbar();
  }, [closeNavbar, location.pathname]);
 
  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.div
        className="header__mobile"
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Hamburger navbarOpen={submenuOpen} toggleNavbar={toggleSubmenu} />
      </motion.div>
      <motion.nav className={`${submenuOpen ? 'nav open' : 'nav'}`}>
        <p className="logo">
          <Link to="/">Logo</Link>
        </p>
        <Menu submenuOpen={submenuOpen}/>
      </motion.nav>
    
      
    </motion.header>
  );
};

export default Header;


// import { motion } from 'framer-motion';
// import { Link, useLocation } from "react-router-dom";
// import { Hamburger, Menu } from '../ui';
// import { useSubmenuToggle } from '../hooks/useSubmenuToggle';
// import { useEffect } from "react";
// import { useNavbar } from "../hooks/useNavbar";

// const Header = () => {
//   const { submenuOpen, toggleSubmenu } = useSubmenuToggle(); // optional if you still need submenu
//   const { navbarOpen, toggleNavbar, closeNavbar } = useNavbar(); // use global navbar state
//   const location = useLocation();

//   // Close navbar on route change
//   useEffect(() => {
//     closeNavbar();
//   }, [location.pathname, closeNavbar]);

//   return (
//     <motion.header
//       className="header"
//       initial={{ opacity: 0, y: -50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, ease: 'easeOut' }}
//     >
//       <motion.div
//         className="header__mobile"
//         transition={{ delay: 0.3, duration: 0.5 }}
//       >
//         {/* Hamburger now controls global navbar state */}
//         <Hamburger navbarOpen={navbarOpen} toggleNavbar={toggleNavbar} />
//       </motion.div>

//       <motion.nav className={`nav ${navbarOpen ? 'open' : ''}`}>
//         <p className="logo">
//           <Link to="/">Logo</Link>
//         </p>
//         <Menu submenuOpen={submenuOpen} /> {/* you can still pass submenuOpen if needed */}
//       </motion.nav>
//     </motion.header>
//   );
// };

// export default Header;