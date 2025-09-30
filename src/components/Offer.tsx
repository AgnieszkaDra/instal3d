import { useParams } from "react-router-dom";
import navItems from "../config/nav.config";
import { Breadcrumbs } from "../ui";
import OfferList from "../ui/OfferList";
import { OfferPageModel } from "../models/OfferPageModel";

const Offer = () => {
  const { category, section } = useParams<{ category?: string; section?: string }>();

  const offer = new OfferPageModel(navItems, category, section);

  return (
    <>
      <Breadcrumbs />
      <section className="offer container">
      
      {offer.title && <h1 className="offer__title h1-main">{offer.title}</h1>}
      {offer.sublabel && <h2 className="h2-header">{offer.sublabel}</h2>}
      {offer.sublabelSecond && (
        <h5 className="h5-lead">{offer.sublabelSecond}</h5>
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

      {!category && !section && (offer.childrenIds?.length ?? 0) > 0 && (
        <ul className="offer__categories">
          {(offer.childrenIds ?? []).map((id) => {
            const child = navItems[id];
            if (!child) return null;

            return (
              <li key={id} className="offer__category">
                <a href={child.href} className="h5-lead">
                  {child.label}
                </a>
              </li>
            );
          })}
        </ul>
      )}
      <OfferList items={offer.products} />
      </section>
    </>
  );
};

export default Offer;