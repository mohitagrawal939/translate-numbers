import { numberMappings } from './translateNumbersMapping.js';
import type { TNLanguage } from './translateType.js';

export type { TNLanguage as default };

export function convertToLanguage(input: number, language: TNLanguage): string {
  const mapping = numberMappings[language];
  if (!mapping) {
    throw new Error(`Language ${language} not supported.`);
  }

  if (!input) {
    throw new Error(`Input number is required to convert.`);
  }

  return input
    ?.toString()
    .split('')
    .map((char) => mapping[char] || char)
    .join('');
}
