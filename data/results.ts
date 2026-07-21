import raw from "./results.json";

export type ResultLink = {
  label: string;
  href: string;
  external: boolean;
};

export type ResultEvent = {
  event: string;
  date: string;
  links: ResultLink[];
};

type RawData = {
  currentYear: number;
  years: Record<string, ResultEvent[]>;
};

const data = raw as RawData;

export const CURRENT_YEAR = data.currentYear;

export const ARCHIVE_YEARS = Object.keys(data.years)
  .map(Number)
  .filter((y) => y !== CURRENT_YEAR)
  .sort((a, b) => a - b);

export function getEventsForYear(year: number): ResultEvent[] {
  return data.years[String(year)] ?? [];
}

export function getCurrentYearEvents(): ResultEvent[] {
  return getEventsForYear(CURRENT_YEAR);
}
