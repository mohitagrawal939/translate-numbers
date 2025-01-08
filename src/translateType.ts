export type TNLanguage =
  | 'chinese'
  | 'english'
  | 'hindi'
  | 'japanese'
  | 'spanish';

export type LanguageMap = {
  [key in TNLanguage]: { [key: string]: string };
};
