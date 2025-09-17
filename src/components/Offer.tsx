import { useParams } from "react-router-dom";
import navItems from "../config/nav.config";
import { Breadcrumbs } from "../ui";
import OfferList from "../ui/OfferList";
import { OfferPageModel } from "../models/OfferPageModel";

const Offer = () => {
  const { category, section } = useParams<{ category?: string; section?: string }>();
  const offer = new OfferPageModel(navItems, category, section);

  return (
    <section className="offer container">
      <Breadcrumbs />

      {offer.title && <h1 className="offer__title h1-main">{offer.title}</h1>}
      {offer.sublabel && <h2 className="offer__subtitle h2-header">{offer.sublabel}</h2>}
      {offer.sublabelSecond && (
        <h5 className="offer__subtitle--secondary h5-lead">{offer.sublabelSecond}</h5>
      )}

      {offer.features.length > 0 && (
        <ul className="offer__products">
          {offer.features.map((f, i) => (
            <li key={i} className="offer__product">
              <h3 className="offer__product__title h5-lead">{f.title}</h3>
              <p className="offer__product__paragraph paragraph">{f.description}</p>
            </li>
          ))}
        </ul>
      )}

      <OfferList items={offer.products} />
    </section>
  );
};

export default Offer;