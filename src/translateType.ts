export type TNLanguage =
  | 'chinese'
  | 'english'
  | 'hindi'
  | 'japanese'
  | 'spanish'
  | 'korean';

export type LanguageMap = {
  [key in TNLanguage]: { [key: string]: string };
};
