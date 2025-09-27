import { useState } from "react";
import { motion } from "framer-motion";
import { ProductPageModel } from "../models/ProductPageModel";
import { renderInfoBlock } from "./renderInfoBlock";

type ProductTabsProps = {
  matchedProduct: ProductPageModel;
};

const tabs = ["Informacje ogólne", "Do pobrania", "Zapytaj o produkt"];

export function ProductTabs({ matchedProduct }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState("Informacje ogólne");

  return (
    <section>
      <ul className="product-tabs__list">
  {tabs.map((tab) => (
    <li
      key={tab}
      onClick={() => setActiveTab(tab)}
      className={`product-tabs__item h5-lead`}
    >
      {tab}
      {activeTab === tab && (
        <motion.div
          layoutId="underline"
          className="product-tabs__item--current"
          initial={false}
          transition={{ type: "spring", stiffness: 400, damping: 80 }}
        />
      )}
    </li>
  ))}
</ul>

<section className="product-tabs__content">
  {activeTab === "Informacje ogólne" &&
    (matchedProduct.basicInformations.length ? (
      matchedProduct.basicInformations.map((block, i) => (
        <div key={i} className="product-tabs__block"> {renderInfoBlock(block, i)}</div>
      ))
    ) : (
      <p>Brak informacji o produkcie</p>
    ))}
</section>
    </section>
  );
}