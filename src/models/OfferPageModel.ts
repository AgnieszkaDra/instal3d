import type { OfferNavItem } from "../config/nav.config";

export class OfferPageModel {
  private item: OfferNavItem | null;

  constructor(items: Record<number, OfferNavItem>, category?: string, section?: string) {
    this.item = OfferPageModel.findBySlug(items, category, section);
  }

  private static findBySlug(
    items: Record<number, OfferNavItem>,
    category?: string,
    section?: string
  ): OfferNavItem | null {
    const slug = section ?? category;
    if (!slug) return null;

    for (const key in items) {
      const item = items[key];
      if (!item) continue;

      if (item.slug === slug) return item;

      if (item.childrenIds?.length) {
        const children: Record<number, OfferNavItem> = {};
        for (const childId of item.childrenIds) {
          if (items[childId]) children[childId] = items[childId];
        }
        const found = OfferPageModel.findBySlug(children, category, section);
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