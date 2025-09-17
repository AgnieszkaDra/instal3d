import type { OfferNavItem } from "../config/nav.config";
import type { ProductItem } from "../config/products.config";

export class ProductPageModel {
  private item: ProductItem | null;

  constructor(items: Record<number, OfferNavItem>, slug: string) {
    // convert root record to an array once
    this.item = ProductPageModel.findBySlug(Object.values(items), items, slug);
  }

  private static findBySlug(
    nodes: OfferNavItem[],
    lookup: Record<number, OfferNavItem>,
    slug: string
  ): ProductItem | null {
    for (const node of nodes) {
      if (node.products) {
        const found = node.products.find((p) => p.slug === slug);
        if (found) return found;
      }
      if (node.childrenIds?.length) {
        const children = node.childrenIds
          .map((id) => lookup[id])
          .filter(Boolean);
        const found = ProductPageModel.findBySlug(children, lookup, slug);
        if (found) return found;
      }
    }
    return null;
  }

  get name(): string | null {
    return this.item?.name ?? null;
  }
  get path(): string | null {
    return this.item?.path ?? null;
  }
  get basicInformations() {
    return this.item?.basicInformations ?? [];
  }
}
