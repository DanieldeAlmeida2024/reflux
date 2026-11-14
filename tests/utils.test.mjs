import test from 'node:test';
import assert from 'node:assert/strict';

import { chunk } from '../src/utils/misc.ts';
import { match, matches } from '../src/utils/regex.ts';

test('RFX-U01: agrupa valores e preserva ordem', () => {
  assert.deepEqual(chunk([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);
  assert.deepEqual(chunk(['a', 'b'], 3), [['a', 'b']]);
  assert.deepEqual(chunk([], 5), []);
  assert.deepEqual(chunk([1, 2], 1), [[1], [2]]);
});

test('RFX-U02: tamanhos inválidos não podem bloquear o processo', () => {
  for (const size of [0, -1, -5, NaN, Infinity, -Infinity, 1.5, '2', null, true]) {
    assert.throws(() => chunk([1, 2], size), RangeError, String(size));
  }
  assert.throws(() => chunk(null, 2), TypeError);
});

test('RFX-U03: match respeita capturas e devolve fallback sem grupo', () => {
  assert.equal(match('episodio-42', /episodio-(\d+)/), '42');
  assert.equal(match('episodio-42', /episodio-\d+/, 'ausente'), 'ausente');
  assert.equal(match('episodio-42', /temporada-(\d+)/), null);
  assert.equal(match('', /(x)/, 'nada'), 'nada');
  assert.equal(match('ABC', /(abc)/i), 'ABC');
});

test('RFX-U04: matches seleciona primeira regra encontrada', () => {
  assert.equal(matches('Serie 02', { serie: /Serie/, numerico: /\d+/ }), 'serie');
  assert.equal(matches('S02', { serie: /Serie/, numerico: /\d+/ }), 'numerico');
  assert.equal(matches('nada', { serie: /Serie/ }), null);
  assert.equal(matches('', { empty: /.*/ }, 'default'), 'default');
});
