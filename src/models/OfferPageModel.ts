import type { OfferNavItem } from "../config/nav.config";

export class OfferPageModel {
  private item: OfferNavItem | null;

  constructor(items: OfferNavItem[], category?: string, section?: string) {
    this.item = OfferPageModel.findBySlug(items, category, section);
  }

  private static findBySlug(
    items: OfferNavItem[],
    category?: string,
    section?: string
  ): OfferNavItem | null {
    for (const item of items) {
      if (item.slug === (section ?? category)) {
        return item;
      }
      if (item.children) {
        const found = OfferPageModel.findBySlug(item.children, category, section);
        if (found) return found;
      }
    }
    return null;
  }

  get title(): string | null {
    return this.item?.label ?? null;
  }
  get sublabel(): string | null {
    return this.item?.subTitle ?? null;
  }
  get sublabelSecond(): string | null {
    return this.item?.subTitleSecond ?? null;
  }
  get features(): { title: string; description: string }[] {
    return this.item?.features ?? [];
  }
  get products(): OfferNavItem["products"] {
    return this.item?.products ?? [];
  }
}