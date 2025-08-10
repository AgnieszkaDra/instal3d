import { useLocation } from 'react-router-dom';
import navItems from '../config/nav.config';
import { useSubmenuContext } from '../hooks/useSubmenuContext';
import { Submenu } from '../ui';

export const SubmenuContainer = () => {
  const { pathname } = useLocation();
  const { openIndex } = useSubmenuContext();

  if (openIndex === null) return null;

  const item = navItems[openIndex];
  if (!item || !item.children) return null;

  const submenuId = `submenu-${openIndex}`;

  return (
    <Submenu
      item={item}
      submenuId={submenuId}
      pathname={pathname}
    />
  );
};