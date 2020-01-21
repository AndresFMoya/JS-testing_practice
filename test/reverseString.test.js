import reverseString from '../src/reverseString';

it('takes a string and returns it reversed', () => {
  expect(reverseString('myString')).toBe('gnirtSym');
});

it('takes a string and returns it reversed', () => {
  expect(reverseString('myString')).not.toBe('nirtSym');
});
