export function match(
  content: string,
  regex: RegExp,
  fallback: string | null = null,
): string | null {
  if (!content) {
    return fallback;
  }

  const result = content.match(regex);
  // Regex without a capture group is not a valid extraction pattern.
  // Honor the declared string | null contract rather than returning undefined.
  return result && typeof result[1] === 'string' ? result[1] : fallback;
}

export function matches(
  source: string,
  regexes: Record<string, RegExp>,
  fallback: string | null = null,
) {
  if (!source) {
    return fallback;
  }

  for (const [key, regex] of Object.entries(regexes)) {
    if (source.match(regex)) {
      return key;
    }
  }

  return fallback;
}
