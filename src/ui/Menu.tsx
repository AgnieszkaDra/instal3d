import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useSubmenuContext } from "../hooks/useSubmenuContext";
import navItems, { rootMenuIds } from "../config/nav.config";
import Submenu from "./Submenu";

type MenuProps = {
  submenuOpen: boolean;
};

export default function Menu({ submenuOpen }: MenuProps) {
  const { pathname } = useLocation();
  const { toggleSubmenu, openIndex } = useSubmenuContext();

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleSubmenu(index);
    }
    if (e.key === "Escape") {
      e.preventDefault();
      toggleSubmenu(null);
    }
  };

  const topLevelItems = rootMenuIds.map((id) => navItems[id]);

  return (
    <motion.div
      className="menu"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
    >
      <ul
        className="menu__list"
        role="menubar"
        aria-label="Main menu"
        tabIndex={-1}
      >
        {topLevelItems.map((item, index) => {
          const isOpen = submenuOpen && openIndex === index;
          const isActive = pathname === item.href;
          const submenuId = `submenu-${index}`;
          const hasChildren = (item.childrenIds ?? []).length > 0;

          return (
            <li key={item.id} role="none" className="menu__item">
              {hasChildren ? (
                <>
                  <button
                    className="menu__link"
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
                    <Submenu
                      item={item}
                      submenuId={submenuId}
                      pathname={pathname}
                    />
                  )}
                </>
              ) : (
                <Link
                  className={`menu__link ${isActive ? "underline" : ""}`}
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
    </motion.div>
  );
}
