export function chunk<T = never>(array: T[], size: number): T[][] {
  if (!Array.isArray(array)) {
    throw new TypeError('chunk() requer um array.');
  }
  if (!Number.isSafeInteger(size) || size < 1) {
    throw new RangeError('chunk() requer tamanho inteiro positivo.');
  }

  const result: T[][] = [];

  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }

  return result;
}
