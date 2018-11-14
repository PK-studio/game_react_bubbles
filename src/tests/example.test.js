import sum from './example';

test('example test adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('example test adds 12 + 2 to equal 14', () => {
  expect(sum(12, 2)).toBe(14)
})