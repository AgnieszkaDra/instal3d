import type { OfferNavItem } from "../config/nav.config";

export class OfferPageModel {
  private item: OfferNavItem | null;

  constructor(items: OfferNavItem[], path: string) {
    this.item = OfferPageModel.findByPath(items, path);
  }

  private static findByPath(items: OfferNavItem[], path: string): OfferNavItem | null {
    for (const item of items) {
      if (item.href === path) return item;
      if (item.children) {
        const found = OfferPageModel.findByPath(item.children, path);
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