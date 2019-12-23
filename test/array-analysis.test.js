import arrayAnalysis from '../src/array-analysis';

const array = [1, 2, 3, 4, 5, 6, 7];

it('average', () => expect(arrayAnalysis(array).average).toBe(4));
it('min', () => expect(arrayAnalysis(array).min).toBe(1));
it('max', () => expect(arrayAnalysis(array).max).toBe(7));
it('length', () => expect(arrayAnalysis(array).length).toBe(7));
