import type { JSX } from "react";
import type { InfoBlock, Property } from "../config/products.config";

function isProperty(item: unknown): item is Property {
  return (
    typeof item === "object" &&
    item !== null &&
    "label" in item &&
    (("list" in item && Array.isArray((item as Property).list)) ||
      "description" in item)
  );
}

function isInfoBlock(item: unknown): item is InfoBlock {
  return (
    typeof item === "object" &&
    item !== null &&
    "label" in item &&
    Array.isArray((item as InfoBlock).content)
  );
}

export function renderInfoBlock(block: InfoBlock, index: number): JSX.Element {
  return (
    <div key={index} className="info-block">
      <h4 className="info-block__title h5-title">{block.label}</h4>
      {block.description && (
        <p className="info-block__desc paragraph">{block.description}</p>
      )}

      {block.content && (
        <div className="info-block__content">
          {block.content.some((item) => typeof item === "string") && (
            <ul className="info-block__list">
              {block.content
                .filter((item): item is string => typeof item === "string")
                .map((str, i) => (
                  <li key={i} className="info-block__list-item">{str}</li>
                ))}
            </ul>
          )}

          {block.content.map((item, i) => {
            if (isProperty(item)) {
              return (
                <div key={`prop-${i}`} className="property">
                  <b className="property__label">{item.label}</b>
                  {item.description && (
                    <p className="property__desc paragraph">{item.description}</p>
                  )}
                  {item.list && (
                    <ul className="property__list">
                      {item.list.map((el, j) => (
                        <li key={j} className="property__list-item">{el}</li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            }

            if (isInfoBlock(item)) {
              return renderInfoBlock(item, i);
            }

            return null;
          })}
        </div>
      )}
    </div>
  );
}