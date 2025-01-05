export type Language = 'japanese' | 'spanish' | 'chinese' | 'hindi' | 'english';

export type LanguageMap = {
  [key in Language]: { [key: string]: string };
};
