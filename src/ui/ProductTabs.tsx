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
      <ul className="info__list">
        {tabs.map((tab) => (
          <li
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`info__item h5-lead ${
              activeTab === tab ? "is-active" : ""
            }`}
          >
            {tab}
            {activeTab === tab && (
              <motion.div
                layoutId="underline"
                className="underline"
                initial={false}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </li>
        ))}
      </ul>

      <section className="product__basic-info">
        {activeTab === "Informacje ogólne" &&
          (matchedProduct.basicInformations.length ? (
            matchedProduct.basicInformations.map((block, i) => (
              <div key={i}>{renderInfoBlock(block, i)}</div>
            ))
          ) : (
            <p>Brak informacji o produkcie</p>
          ))}
      </section>
    </section>
  );
}