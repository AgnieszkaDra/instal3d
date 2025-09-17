import { Link, useLocation } from 'react-router-dom';
import navItems, { type OfferNavItem } from '../config/nav.config';
import { findInTree } from '../utils/treeSearch';

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const Breadcrumbs = () => {
  const location = useLocation();
  const segments = location.pathname.split('/').filter(Boolean);
  const pathParts = segments.map(
    (_, index) => '/' + segments.slice(0, index + 1).join('/')
  );

  const itemsArray = Object.values(navItems);

  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      <ul className="breadcrumbs__list">
        {pathParts.map((path, index) => {
          const item = findInTree<OfferNavItem>(
            itemsArray,
            (i) => i.href === path,
            (i) => i.childrenIds?.map((id) => navItems[id])
          );
          const label = item?.label || capitalize(segments[index]);
          const isLast = index === pathParts.length - 1;

          return (
            <li
              key={path}
              className={`breadcrumbs__item${isLast ? ' breadcrumbs__item--current' : ''}`}
              aria-current={isLast ? 'page' : undefined}
            >
              {isLast ? (
                <span className="breadcrumbs__link breadcrumbs__link--current">{label}</span>
              ) : (
                <Link to={path} className="breadcrumbs__link">
                  {label}
                </Link>
              )}
              {!isLast && (
                <span aria-hidden="true" className="breadcrumbs__separator">
                  {' < '}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;