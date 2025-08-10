export function findInTree<T>(
  items: T[],
  matcher: (item: T) => boolean,
  getChildren: (item: T) => T[] | undefined
): T | null {
  for (const item of items) {
    if (matcher(item)) return item;
    const children = getChildren(item);
    if (children) {
      const found = findInTree(children, matcher, getChildren);
      if (found) return found;
    }
  }
  return null;
}