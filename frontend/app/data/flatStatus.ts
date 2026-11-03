// Jediné miesto, kde sa mení stav bytov.
// Kľúč = id bytu (rovnaké id ako v /detail/[id] a v public/data/flats.json).
// Byt, ktorý tu nie je uvedený, sa zobrazuje ako voľný.

export type FlatStatus = "volny" | "rezervovany" | "predany";

export const FLAT_STATUS: Partial<Record<number, FlatStatus>> = {
  // 1. NP
  101: "volny",
  102: "volny",
  103: "volny",

  // 2. NP
  104: "rezervovany",
  105: "volny",
  106: "predany",
  107: "volny",

  // 3. NP
  108: "volny",
  109: "predany",
  110: "predany",
  111: "predany",
};

export function getFlatStatus(id: number): FlatStatus {
  return FLAT_STATUS[id] ?? "volny";
}

export const STATUS_LABEL: Record<FlatStatus, string> = {
  volny: "Voľný",
  rezervovany: "Rezervovaný",
  predany: "Predaný",
};
