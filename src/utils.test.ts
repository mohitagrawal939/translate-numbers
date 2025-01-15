import { convertToLanguage } from './utils.js';

import { test, expect } from 'vitest';

test('convert language 1', () => {
  expect(convertToLanguage(123, 'hindi')).toBe('१२३');
});
test('convert language 2', () => {
  expect(convertToLanguage(123, 'japanese')).toBe('一二三');
});
test('convert language 3', () => {
  expect(convertToLanguage(123, 'japanese')).toBeTruthy();
});
test('convert language 4', () => {
  expect(convertToLanguage(123, 'japanese')).toContain('一');
});
test('convert language 5', () => {
  expect(convertToLanguage(123, 'japanese')).toHaveLength(3);
});
