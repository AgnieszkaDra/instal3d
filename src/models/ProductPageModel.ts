import type { OfferNavItem } from "../config/nav.config";
import type { ProductItem } from "../config/products.config";

export class ProductPageModel {
  private item: ProductItem | null;

  constructor(items: OfferNavItem[], slug: string) {
    this.item = ProductPageModel.findBySlug(items, slug);
  }

  private static findBySlug(items: OfferNavItem[], slug: string): ProductItem | null {
    for (const item of items) {
      if (item.products) {
        const found = item.products.find((p) => p.slug === slug);
        if (found) return found;
      }
      if (item.children) {
        const found = ProductPageModel.findBySlug(item.children, slug);
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
}