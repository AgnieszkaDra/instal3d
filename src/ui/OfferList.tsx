import { Link, useParams } from "react-router-dom";
import type { ProductItem } from "../config/products.config";

interface OfferListProps {
  items?: ProductItem[];
}

const OfferList = ({ items }: OfferListProps) => {
  const { category, section } = useParams();
  if (!items || items.length === 0) {
    return <p>Brak produktów do wyświetlenia.</p>;
  }

  return (
    <ul className="offer__products">
      {items.map((product, index) => (
        <li key={index} className="offer__product">
          <Link
            to={`/oferta/${category}${section ? `/${section}` : ""}/${product.slug}`}
            className="offer__product-link"
          >
            <img
              src={product.path}
              alt={product.name}
              className="offer__product-image"
            />
          </Link>
          <h3 className="offer__product-name h3-title">{product.name}</h3>
        </li>
      ))}
    </ul>
  );
};

export default OfferList;