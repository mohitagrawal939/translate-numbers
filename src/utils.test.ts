import { convertToNumbers, convertToLanguage } from './utils.js';

import { test, expect } from 'vitest';

test('convert numbers 1', () => {
  expect(convertToNumbers('१२३', 'hindi')).toBe('123');
});
test('convert numbers 2', () => {
  expect(convertToNumbers('一二三', 'japanese')).toBe('123');
});

test('convert language 1', () => {
  expect(convertToLanguage('123', 'hindi')).toBe('१२३');
});
test('convert language 2', () => {
  expect(convertToLanguage('123', 'japanese')).toBe('一二三');
});
