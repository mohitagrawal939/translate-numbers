export type Language = "japanese" | "spanish" | "chinese" | "hindi";

export type LanguageMap = {
    [key in Language]: { [key: string]: string };
};
