import type { JSX } from "react";
import { InfoBlock, Property } from "../config/products.config";

export function renderInfoBlock(block: InfoBlock, index: number): JSX.Element {
  return (
    <div key={index} className="info-block">
      <h4 className="info-block__title">{block.label}</h4>
      {block.description && <p className="info-block__desc">{block.description}</p>}

      {block.content && (
        <div className="info-block__content">
          {block.content.map((item, i) => {
            if (typeof item === "string") {
            return (
                <ul key={i} className="info-block__list">
                  <li>{item}</li>
                </ul>
              );
            } else if (item instanceof Property) {
              return (
                <div key={i} className="property">
                  <h5 className="property__label">{item.label}</h5>
                  {item.description && (
                    <p className="property__desc">{item.description}</p>
                  )}
                  {item.list && (
                    <ul className="property__list">
                      {item.list.map((el, j) => (
                        <li key={j}>{el}</li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            } else if (typeof item === "object" && item !== null && "label" in item && "content" in item) {
              return renderInfoBlock(item as InfoBlock, i);
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
}