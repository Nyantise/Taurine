type Primitive = string | number | boolean | bigint | symbol | null | undefined;

// Helper to decrement depth
type Prev = [never, 0, 1, 2, 3, 4, 5];

export type LeafPaths<
  T,
  D extends number = 5,
  F extends keyof T = keyof T
> = [D] extends [never]
  ? never
  : T extends Primitive
  ? ""
  : {
    [K in keyof T]: K extends F
    ? T[K] extends Primitive
    ? `${K & string}`
    : `${K & string}.${LeafPaths<T[K], Prev[D]>}`
    : never
  }[keyof T]; // ✅ Use full keyof T for final union extraction

type LastSegment<T> = T extends `${string}.${infer Tail}` ? LastSegment<Tail> : T;

// Final: just the terminal keys of all paths
export type LeafKeys<T> = LastSegment<LeafPaths<T>>;

// Optional: format them like "...key"
export type PrefixedWithDots<T> = `..${LeafKeys<T>}`;


export type DirectLeafPaths<T> = {
  [K in keyof T]: T[K] extends object
  ? {
    [P in keyof T[K]]: T[K][P] extends Primitive
    ? `${K & string}.${P & string}`
    : never
  }[keyof T[K]]
  : never;
}[keyof T];
export type FilterDirectLeafPaths<T, K extends keyof T = keyof T> = {
  [P in K]: T[P] extends object
  ? {
    [Q in keyof T[P]]: T[P][Q] extends Primitive
    ? `${P & string}.${Q & string}`
    : never
  }[keyof T[P]]
  : never;
}[K];



type AnyObject = Record<string, any>;

export function searchObject(
  obj: AnyObject,
  searchPath: string[],
  currentPath: string[] = []
): string | undefined {
  for (const key in obj) {
    const value = obj[key];
    const newPath = [...currentPath, key];

    // Check if current path ends with the searchPath
    if (
      newPath.length >= searchPath.length &&
      newPath.slice(-searchPath.length).join('.') === searchPath.join('.')
    ) {
      return newPath.join('.');
    }

    if (typeof value === 'object' && value !== null) {
      const found = searchObject(value, searchPath, newPath);
      if (found) return found;
    }
  }
  return undefined;
}