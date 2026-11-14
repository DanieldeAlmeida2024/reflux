import test from 'node:test';
import assert from 'node:assert/strict';
import { positiveSafeId, optionalIndex, catalogSkip } from '../src/utils/request-params.ts';

test('RFX-U05: IDs positivos e seguros com representação canônica', () => {
  assert.equal(positiveSafeId('1'), 1);
  assert.equal(positiveSafeId('12345678'), 12345678);
  assert.equal(positiveSafeId('9007199254740991'), Number.MAX_SAFE_INTEGER);
  for (const input of [undefined, null, '', '0', '-1', '1.5', 'Infinity', 'NaN',
    '0x10', '01', '1e5', '9007199254740992', '1/2', true, 1]) {
    assert.equal(positiveSafeId(input), null, String(input));
  }
});

test('RFX-U06: temporada e episódio aceitam apenas inteiros não negativos', () => {
  assert.equal(optionalIndex(undefined), 0);
  assert.equal(optionalIndex('0'), 0);
  assert.equal(optionalIndex('13'), 13);
  for (const input of ['', '-1', '1.2', '2e2', ' 1 ', 'Infinity',
    '9007199254740992', null, false]) {
    assert.equal(optionalIndex(input), null, String(input));
  }
});

test('RFX-U07: paginação default zero, sem NaN/frações/infinito', () => {
  assert.equal(catalogSkip(null), 0);
  assert.equal(catalogSkip('0'), 0);
  assert.equal(catalogSkip('20'), 20);
  for (const input of ['', '-1', '0.5', 'Infinity', '1e9', '9007199254740992']) {
    assert.equal(catalogSkip(input), null, String(input));
  }
});
