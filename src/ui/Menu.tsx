import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useSubmenuToggle } from '../hooks/useSubmenuToggle'; 
import navItems from '../config/nav.config';

export default function Menu() {
  const { pathname } = useLocation();
  const { toggleSubmenu, isSubmenuOpen } = useSubmenuToggle();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleSubmenu(index);
    }

    if (e.key === 'Escape') {
      e.preventDefault();
      toggleSubmenu(null);
    }
  };

  return (
    <motion.div
      className="menu"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
    >
      <div className="menu__list-wrapper">
        <ul 
          className="menu__list" 
          role="menubar" 
          aria-label="Main menu"
          tabIndex={-1}
        >
          {navItems.map((item, index) => {
            const submenuId = `submenu-${index}`;
            const isOpen = isSubmenuOpen(index);
            const isActive = item.match(pathname);

            return (
              <li key={item.href} role="none" className="menu__item">
                {item.children ? (
                  <>
                    <button
                      className={`menu__link`}
                      onClick={() => toggleSubmenu(index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      aria-haspopup="true"
                      aria-expanded={isOpen}
                      aria-controls={submenuId}
                      role="menuitem"
                    >
                      {item.label}
                    </button>
                    {isOpen && (
                      <ul
                        id={submenuId}
                        className="menu__submenu"
                        role="menu"
                        tabIndex={-1}
                      >
                        {item.children.map((child) => (
                          <li key={child.href} role="none">
                            <Link
                              className={`menu__link ${child.match(pathname) ? 'underline' : ''}`}
                              to={child.href}
                              role="menuitem"
                              tabIndex={0}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    className={`menu__link ${isActive ? 'underline' : ''}`}
                    to={item.href}
                    role="menuitem"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
}