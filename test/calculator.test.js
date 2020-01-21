import Calculator from '../src/calculator';

const test = new Calculator();

// Test Positive Cases

it('adds 1 + 2 to equal 3', () => {
  expect(test.add(1, 2)).toBe(3);
});

it('subtracts 3 - 1 to equal 2', () => {
  expect(test.substract(3, 1)).toBe(2);
});

it('divides 12 / 3 to equal 4', () => {
  expect(test.divide(12, 3)).toBe(4);
});

it('multiply 3 * 4 to equal 12', () => {
  expect(test.multiply(3, 4)).toBe(12);
});

// Test Negative Cases

it('adds 1 + 2 to not equal 4', () => {
  expect(test.add(1, 2)).not.toBe(4);
});

it('subtracts 3 - 1 to not equal 1', () => {
  expect(test.substract(3, 1)).not.toBe(1);
});

it('divides 12 / 3 to not equal 5', () => {
  expect(test.divide(12, 3)).not.toBe(5);
});

it('multiply 3 * 4 to not equal 15', () => {
  expect(test.multiply(3, 4)).not.toBe(15);
});
