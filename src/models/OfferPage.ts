import type { OfferNavItem } from "../config/nav.config";
import { NavMatcher } from "../utils/NavMatcher";

export class OfferPage extends NavMatcher<OfferNavItem> {
  constructor(items: OfferNavItem[], path: string) {
    super(items, path);
  }

  /** Uniwersalny getter dla dowolnego pola */
  private getField<K extends keyof OfferNavItem>(key: K): OfferNavItem[K] | null {
    return this.item?.[key] ?? null;
  }

  get title(): string | null {
    return this.getField("label");
  }

  get sublabel(): string | null {
    const value = this.getField("subTitle");
    return value !== undefined ? value : null;
  }

  get sublabelSecond(): string | null {
    const value = this.getField("subTitleSecond");
    return value !== undefined ? value : null;
  }

  get features(): { title: string; description: string }[] {
    return this.getField("features") ?? [];
  }

  get products(): OfferNavItem["items"] {
    return this.getField("items") ?? [];
  }
}