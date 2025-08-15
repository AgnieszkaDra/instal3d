import type { ProductItem } from "../config/nav.config";

interface OfferListProps {
  items?: ProductItem[];
}

const OfferList = ({ items }: OfferListProps) => {
  if (!items || items.length === 0) {
    return <p>Brak produktów do wyświetlenia.</p>;
  }

  return (
    <ul className="offer__products">
      {items.map((product, index) => (
        <li key={index} className="offer__product">
          <h3 className="offer__product-name h3-title">{product.name}</h3>
          <img
            src={product.path}
            alt={product.name}
            className="offer__product-image"
          />
          <div className="offer__product-content">
            {product.description && (
              <p className="offer__product-description paragraph">{product.description}</p>
            )}
            {product.features && product.features.length > 0 && (
              <ul className="offer__product-features">
                {product.features.map((feature, i) => (
                  <li key={i} className="offer__product-feature h5-lead">{feature}</li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default OfferList;