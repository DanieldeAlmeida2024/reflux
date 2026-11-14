/** Small, framework-free validators for public Stremio URL parameters. */
export function positiveSafeId(value: unknown): number | null {
  if (typeof value !== 'string' || !/^[1-9][0-9]*$/.test(value)) return null;
  const id = Number(value);
  return Number.isSafeInteger(id) && id > 0 ? id : null;
}

/** Optional season/episode values default to zero for legacy routes. */
export function optionalIndex(value: unknown): number | null {
  if (value === undefined) return 0;
  if (typeof value !== 'string' || !/^(0|[1-9][0-9]*)$/.test(value)) return null;
  const result = Number(value);
  return Number.isSafeInteger(result) ? result : null;
}

/** Omitted catalog skip is zero; malformed explicit skip is rejected. */
export function catalogSkip(value: string | null): number | null {
  return value === null ? 0 : optionalIndex(value);
}
