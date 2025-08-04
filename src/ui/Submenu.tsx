import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useSubmenuContext } from '../hooks/useSubmenuContext';
import type { NavItem } from '../config/nav.config';

interface SubmenuProps {
  item: NavItem;
  submenuId: string;
  pathname: string;
}

export default function Submenu({ item, submenuId, pathname }: SubmenuProps) {
  const { toggleSubmenu } = useSubmenuContext();
  return (
    <motion.div
      className="submenu"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.4 }}
    >
      <ul
        id={submenuId}
        className="submenu__list"
        role="submenu"
        tabIndex={-1}
      >
        {item.children?.map((child) => (
          <li key={child.href} role="none">
            <Link
              className={`submenu__link ${child.match(pathname) ? 'underline' : ''}`}
              to={child.href}
              role="submenuitem"
              tabIndex={0}
              onClick={() => toggleSubmenu(null)}
            >
              {child.label}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}