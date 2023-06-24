import { expect, test } from 'vitest';
import { sum } from "./index.js"

test('cumulative sum of an array', () => {
  expect(sum([1,3,5,7])).toBe(16);
  expect(sum([-2,-4,-8])).toBe(-14);
});