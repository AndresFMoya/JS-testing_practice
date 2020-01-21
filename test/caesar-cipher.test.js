import caesar from '../src/caesar-cipher';

it('happy flow', () => expect(caesar('abc', 2)).toBe('cde'));
it('negative offset', () => expect(caesar('def', -1)).toBe('cde'));
it('overfow cycle', () => expect(caesar('xyz', 1)).toBe('yza'));
it('leave ponctuation', () => expect(caesar('abc, def', 1)).toBe('bcd, efg'));
it('large offset', () => expect(caesar('abc', 1001)).toBe('bcd'));
it('preserve case', () => expect(caesar('Tiago Brito', 12)).toBe('Fumsa Ndufa'));
