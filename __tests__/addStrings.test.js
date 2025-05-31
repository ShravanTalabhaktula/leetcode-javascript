import { addStrings } from '../code/addStrings';

test('add small numbers correctly', () => {
  expect(addStrings('123', '456')).toBe('579');
});

test('adds large numbers correctly', () => {
  expect(addStrings('9333852702227987', '85731737104263')).toBe(
    '9419584439332250'
  );
});

test('adds numbers with different lengths', () => {
  expect(addStrings('1', '999')).toBe('1000');
});

test('adds numbers with carry over at each step', () => {
  expect(addStrings('999', '999')).toBe('1998');
});

test('adds zero correctly', () => {
  expect(addStrings('0', '0')).toBe('0');
  expect(addStrings('123', '0')).toBe('123');
  expect(addStrings('0', '456')).toBe('456');
});

test('empty strings treated as zero', () => {
  expect(addStrings('', '')).toBe('0');
  expect(addStrings('0', '')).toBe('0');
});
