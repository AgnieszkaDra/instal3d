export const normalizePath = (path: string) => path.replace(/\/+$/, "");

export class NavMatcher<T extends { href: string; children?: T[] }> {
  private matched: T | null;

  constructor(items: T[], path: string) {
    this.matched = this.findItemByPath(items, path);
  }

  private findItemByPath(items: T[], path: string): T | null {
    const normalizedPath = normalizePath(path);
    for (const item of items) {
      if (normalizePath(item.href) === normalizedPath) return item;
      if (item.children) {
        const found = this.findItemByPath(item.children, path);
        if (found) return found;
      }
    }
    return null;
  }

  get item(): T | null {
    return this.matched;
  }

  get exists(): boolean {
    return this.matched !== null;
  }
}