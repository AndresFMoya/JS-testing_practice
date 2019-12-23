import Example from '../src/sum';

const test = Example();

it('adds 1 + 2 to equal 3', () => {
  expect(test.sum(1, 2)).toBe(3);
});
