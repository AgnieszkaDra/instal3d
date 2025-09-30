import { airconditioningFeatures } from "./features.config";
import { airConditionProducts } from "./products.config";

export type OfferNavItem = {
  id: number;
  label: string;
  title?: string;
  href: string;
  slug?: string;
  subTitle?: string;
  subTitleSecond?: string;
  features?: typeof airconditioningFeatures;
  products?: typeof airConditionProducts;
  childrenIds?: number[];
};

export const rootMenuIds = [0, 17, 18, 19];

export const navItems: Record<number, OfferNavItem> = {
  0: { id: 0, label: "Oferta", href: "/oferta/", slug: "oferta", childrenIds: [1, 2, 3, 4, 5, 6, 7] },
  1: { id: 1, label: "Fotowoltaika", title: "Fotowoltaika", href: "/oferta/fotowoltaika/", slug: "fotowoltaika", childrenIds: [8, 9] },
  2: { id: 2, label: "Pompy ciepła", title: "Pompy ciepła", href: "/oferta/pompy-ciepla/", slug: "pompy-ciepla", childrenIds: [10, 11] },
  3: {
    id: 3,
    label: "Klimatyzacja",
    href: "/oferta/klimatyzacja/",
    slug: "klimatyzacja",
    subTitle: "Popraw jakość życia",
    subTitleSecond: "Niech wysokie temperatury nie będą już Twoim problemem",
    features: airconditioningFeatures,
    childrenIds: [12, 13],
  },
  4: { id: 4, label: "Rekuperacja", title: "Rekuperacja", href: "/oferta/rekuperacja/", slug: "rekuperacja", childrenIds: [14] },
  5: { id: 5, label: "Hydraulika", title: "Hydraulika", href: "/oferta/hydraulika/", slug: "hydraulika", childrenIds: [15] },
  6: { id: 6, label: "Posadzki anhydrytowe", title: "Posadzki anhydrytowe", href: "/oferta/posadzki-anhydrytowe/", slug: "posadzki-anhydrytowe", childrenIds: [16] },
  7: { id: 7, label: "Woda lodowa", title: "Woda lodowa", href: "/oferta/woda-lodowa/", slug: "woda-lodowa" },
  8: { id: 8, label: "Kalkulator oszczędności", href: "/oferta/fotowoltaika/kalkulatorsloneczny", slug: "kalkulatorsloneczny" },
  9: { id: 9, label: "Realizacje", href: "/oferta/fotowoltaika/realizacje", slug: "realizacje" },
  10: { id: 10, label: "Kalkulator oszczędności", href: "/oferta/pompy-ciepla/kalkulator", slug: "kalkulator" },
  11: { id: 11, label: "Realizacje", href: "/oferta/pompy-ciepla/realizacje", slug: "realizacje" },
  12: { id: 12, label: "Realizacje", href: "/oferta/klimatyzacja/realizacje", slug: "realizacje" },
  13: { id: 13, label: "Produkty", href: "/oferta/klimatyzacja/produkty", slug: "produkty", products: airConditionProducts },
  14: { id: 14, label: "Produkty", href: "/oferta/rekuperacja/produkty", slug: "produkty" },
  15: { id: 15, label: "Produkty", href: "/oferta/hydraulika/produkty", slug: "produkty" },
  16: { id: 16, label: "Realizacje", href: "/oferta/posadzki-anhydrytowe/realizacje", slug: "realizacje" },
  17: { id: 17, label: "Dofinansowania", href: "/dofinansowania/", slug: "dofinansowania" },
  18: { id: 18, label: "Realizacje", href: "/realizacje/", slug: "realizacje" },
  19: { id: 19, label: "O nas", href: "/o-nas/", slug: "o-nas" },
};

export default navItems;