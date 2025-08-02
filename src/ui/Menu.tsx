import { motion } from 'framer-motion';
import { Link, useLocation } from "react-router-dom";
import navItems from "../config/nav.config";

export default function Menu() {
  const { pathname } = useLocation();

  return (
    <motion.div
      className='menu'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
    >
      <div className="menu__list-wrapper">
        <ul 
          className="menu__list"
          role="menu"
          tabIndex={-1}
          aria-label="Main menu"
        >
          {navItems.map(({ label, href, match }) => (
            <li key={href} className="menu__item">
              <Link
                className={`menu__link ${
                  match(pathname) ? 'underline' : ''
                }`}
                to={href}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}