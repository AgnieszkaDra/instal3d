import { useParams } from 'react-router-dom';
import navItems from '../config/nav.config';
import type { NavItem } from '../config/nav.config';
import { Breadcrumbs } from '../ui';

const findItemByPath = (items: NavItem[], path: string): NavItem | null => {
  for (const item of items) {
    if (item.href === path) return item;
    if (item.children) {
      const found = findItemByPath(item.children, path);
      if (found) return found;
    }
  }
  return null;
};

const Offer = ()=> {
  const { category, section } = useParams();
  const fullPath = section
    ? `/oferta/${category}/${section}`
    : `/oferta/${category}`;

  const matched = findItemByPath(navItems, fullPath);

  return (
    <section className='offer container'>
      <Breadcrumbs/>
      {matched?.products ? (
        <ul>
          {matched.products.map((product, index) => (
            <li key={index}>{product}</li>
          ))}
        </ul>
      ) : (
        <p></p>
      )}
    </section>
  );
};

export default Offer;