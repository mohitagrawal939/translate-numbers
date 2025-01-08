import { convertToLanguage } from './utils.js';

import { test, expect } from 'vitest';

test('convert language 1', () => {
  expect(convertToLanguage('123', 'hindi')).toBe('१२३');
});
test('convert language 2', () => {
  expect(convertToLanguage('123', 'japanese')).toBe('一二三');
});
