import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { useSubmenuContext } from "../hooks/useSubmenuContext";
import type { OfferNavItem } from "../config/nav.config";
import navItems from "../config/nav.config";

interface SubmenuProps {
  item: OfferNavItem;
  submenuId: string;
  pathname: string;
}

function renderMenuItems(
  items: OfferNavItem[],
  pathname: string,
  toggleSubmenu: (val: null) => void
) {
  return items.map((child) => {
    const hasChildren = child.childrenIds && child.childrenIds.length > 0;

    return (
      <li key={child.id} role="none" className="submenu__item">
        <Link
          className={`submenu__link ${
            pathname === child.href ? "underline" : ""
          }`}
          to={child.href}
          role="menuitem"
          tabIndex={0}
          onClick={() => toggleSubmenu(null)}
        >
          {child.label}
        </Link>

        {hasChildren && (
          <ul className="submenu__nested-list" role="menu">
            {renderMenuItems(
              child.childrenIds!.map((id) => navItems[id]),
              pathname,
              toggleSubmenu
            )}
          </ul>
        )}
      </li>
    );
  });
}

export default function Submenu({ item, submenuId, pathname }: SubmenuProps) {
  const { toggleSubmenu } = useSubmenuContext();

  const children =
    item.childrenIds?.map((id) => navItems[id]) ?? [];

  return (
    <motion.div
      className="submenu"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
      id={submenuId}
      role="menu"
      tabIndex={-1}
    >
      <button
        className="submenu__close"
        onClick={() => toggleSubmenu(null)}
        aria-label="Close submenu"
      >
        <X />
      </button>
      <ul className="submenu__list" role="menubar">
        {renderMenuItems(children, pathname, toggleSubmenu)}
      </ul>
    </motion.div>
  );
}