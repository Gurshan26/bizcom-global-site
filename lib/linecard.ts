// lib/linecard.ts
export type Brand = {
  name: string;
  category: string;
  description?: string;
  logo?: string;     // URL or local filename
  website?: string;  // URL
};

export const CATEGORY_ORDER = [
  "Semiconductors",
  "Passives",
  "Interconnect & Electromechanical",
  "Timing / RF / Power",
  "Emerging & Specialized",
];

// If the sheet cell contains just "ti.svg", treat it as /logos/ti.svg in /public
function resolveLogoUrl(raw?: string): string | undefined {
  const v = (raw || "").trim();
  if (!v) return undefined;
  if (/^https?:\/\//i.test(v)) return v;     // already a URL
  return `/logos/${v}`;                       // local file in /public/logos
}

function normalizeRow(row: string[]): Brand | null {
  // A=Name, B=Category, C=Description, D=Logo, E=Website
  const [name, category, description, logo, website] = row;
  if (!name || !category) return null;
  return {
    name: name.trim(),
    category: category.trim(),
    description: (description || "").trim() || undefined,
    logo: resolveLogoUrl(logo),
    website: (website || "").trim() || undefined,
  };
}

export async function fetchLinecard(): Promise<Brand[]> {
  const key = process.env.GOOGLE_SHEETS_API_KEY!;
  const sheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID!;
  const sheetName = process.env.GOOGLE_SHEETS_SHEET_NAME || "Linecard";

  // NOTE: now A..E (5 columns)
  const range = encodeURIComponent(`${sheetName}!A2:E1000`);
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${key}`;

  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`Sheets fetch failed: ${res.status}`);

  const json = (await res.json()) as { values?: string[][] };
  const rows = json.values || [];

  const items = rows.map(normalizeRow).filter(Boolean) as Brand[];

  // Sort: category order then name
  const order = new Map(CATEGORY_ORDER.map((c, i) => [c, i]));
  items.sort((a, b) => {
    const ai = order.has(a.category) ? order.get(a.category)! : 999;
    const bi = order.has(b.category) ? order.get(b.category)! : 999;
    if (ai !== bi) return ai - bi;
    return a.name.localeCompare(b.name);
  });

  return items;
}