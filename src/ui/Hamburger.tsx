import { motion } from 'framer-motion';
import { FaBars as BurgerIcon } from 'react-icons/fa';
import { IoClose as CloseIcon } from 'react-icons/io5';

type HamburgerProps = {
  navbarOpen: boolean;
  toggleNavbar: () => void;
};

const Hamburger = ({ navbarOpen, toggleNavbar }: HamburgerProps) => {
  return (
    <motion.button
      className={`burger-menu ${navbarOpen ? 'open' : ''}`}
      onClick={toggleNavbar}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      <motion.div
        animate={{ rotate: navbarOpen ? 90 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {navbarOpen ? (
            <CloseIcon size={30} className="icon open" />
          ) : (
            <BurgerIcon size={30} className="icon" />
          )}
        </motion.div>
      </motion.div>
    </motion.button>
  );
};

export default Hamburger;