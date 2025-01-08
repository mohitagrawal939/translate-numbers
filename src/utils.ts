import { numberMappings } from './translateNumbersMapping.js';
import type { TNLanguage } from './translateType.js';

export type { TNLanguage as default };

export function convertToNumbers(input: string, language: TNLanguage): string {
  const mapping = numberMappings[language];
  if (!mapping) {
    throw new Error(`Language ${language} not supported.`);
  }

  const regex = new RegExp(Object.keys(mapping).join('|'), 'g');

  return input.replace(regex, (match) => mapping[match] || match);
}

export function convertToLanguage(input: string, language: TNLanguage): string {
  const mapping = numberMappings[language];
  if (!mapping) {
    throw new Error(`Language ${language} not supported.`);
  }

  const reversedMapping = Object.fromEntries(
    Object.entries(mapping).map(([key, value]) => [value, key]),
  );

  return input
    .split('')
    .map((char) => reversedMapping[char] || char)
    .join('');
}
