import type { ReactNode } from "react";
import { airconditioningFeatures } from "./features.config";
import { airConditionProducts } from "./products.config";

export type OfferNavItem = {
  label: string;
  href: string;
  match: (path: string) => boolean;
  path?: string;
  name?: ReactNode;
  slug?: string;
  subTitle?: string;
  subTitleSecond?: string;
  children?: OfferNavItem[];
  products?: typeof airConditionProducts;       
  features?: typeof airconditioningFeatures;
};

const makeItem = (
  label: string,
  href: string,
  opts: Partial<Omit<OfferNavItem, "label" | "href" | "match">> = {},
  matchMode: "equals" | "startsWith" = "equals"
): OfferNavItem => {
  const parts = href.split("/").filter(Boolean);
  const slug = parts[parts.length - 1] || undefined;

  return {
    label,
    href,
    slug,
    match:
      matchMode === "equals"
        ? (path) => path === href
        : (path) => path.startsWith(href),
    ...opts,
  };
};

const navItems: OfferNavItem[] = [
  makeItem("Oferta", "/oferta/", {
    children: [
      makeItem("Fotowoltaika", "/oferta/fotowoltaika/", {
        children: [
          makeItem("Kalkulator oszczędności", "/oferta/fotowoltaika/kalkulator"),
          makeItem("Realizacje", "/oferta/fotowoltaika/realizacje"),
        ],
      }),
      makeItem("Pompy ciepła", "/oferta/pompy-ciepla/", {
        children: [
          makeItem("Kalkulator oszczędności", "/oferta/pompy-ciepla/kalkulator"),
          makeItem("Realizacje", "/oferta/pompy-ciepla/realizacje"),
        ],
      }),
      makeItem("Klimatyzacja", "/oferta/klimatyzacja/", {
        subTitle: "Popraw jakość życia",
        subTitleSecond: "Niech wysokie temperatury nie będą już Twoim problemem",
        features: airconditioningFeatures,
        children: [
          makeItem("Realizacje", "/oferta/klimatyzacja/realizacje"),
          makeItem("Produkty", "/oferta/klimatyzacja/produkty", {
            products: airConditionProducts,
          }),
        ],
      }),
      makeItem("Rekuperacja", "/oferta/rekuperacja/", {
        children: [makeItem("Produkty", "/oferta/rekuperacja/produkty")],
      }),
      makeItem("Hydraulika", "/oferta/hydraulika/", {
        children: [makeItem("Produkty", "/oferta/hydraulika/produkty")],
      }),
      makeItem("Posadzki anhydrytowe", "/oferta/posadzki-anhydrytowe/", {
        children: [makeItem("Realizacje", "/oferta/posadzki-anhydrytowe/realizacje")],
      }),
      makeItem("Woda lodowa", "/oferta/woda-lodowa/"),
    ],
  }),
  makeItem("Dofinansowania", "/dofinansowania/", {}, "startsWith"),
  makeItem("Realizacje", "/realizacje/", {}, "startsWith"),
  makeItem("O nas", "/o-nas/", {}, "startsWith"),
];

export default navItems;