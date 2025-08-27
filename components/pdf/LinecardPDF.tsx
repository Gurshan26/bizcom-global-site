// components/pdf/LinecardPDF.tsx
import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";
import { CATEGORY_ORDER } from "../../lib/linecard";

/** Data shape coming in from the route */
type Item = {
  name: string;
  category: string;
  description?: string;
  website?: string;
  logo?: string; // Ignored in PDF for simplicity/reliability
};

/* ----------- Styles (A4, brand colors) ----------- */
const BRAND_NAVY = "#0F2849";
const BRAND_GOLD = "#C9A227";
const INK = BRAND_NAVY;

const styles = StyleSheet.create({
  // ----- Cover Page -----
  coverPage: {
    paddingTop: 72,
    paddingBottom: 72,
    paddingHorizontal: 72,
    color: INK,
    fontFamily: "Helvetica",
  },
  eyebrow: {
    fontSize: 10,
    textTransform: "uppercase",
    letterSpacing: 2,
    color: "#98A2B3",
  },
  coverTitle: {
    fontSize: 38,
    marginTop: 8,
    fontWeight: 700,
    lineHeight: 1.15,
  },
  coverSub: {
    marginTop: 14,
    fontSize: 12.5,
    color: "#475467",
    lineHeight: 1.45,
    maxWidth: 420,
  },
  infoCard: {
    marginTop: 28,
    padding: 16,
    borderRadius: 8,
    border: "1pt solid #E5E7EB",
    backgroundColor: "#FBFBFD",
    maxWidth: 360,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 8,
  },
  infoItem: {
    fontSize: 12,
    color: "#344054",
    lineHeight: 1.5,
  },
  goldBar: {
    height: 4,
    width: 64,
    backgroundColor: BRAND_GOLD,
    borderRadius: 999,
    marginTop: 24,
  },
  coverMetaRow: {
    marginTop: 18,
    fontSize: 10,
    color: "#98A2B3",
  },

  // ----- Content Pages -----
  page: {
    paddingTop: 40,
    paddingBottom: 40,
    paddingHorizontal: 40,
    fontFamily: "Helvetica",
    fontSize: 10,
    color: INK,
  },
  headerBlock: {
    marginBottom: 6,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 700,
  },
  meta: { fontSize: 9, color: "#98A2B3", marginTop: 2 },

  columns: {
    flexDirection: "row",
    gap: 14,
    marginTop: 10,
  },
  column: { width: "50%" },

  sectionBlock: { marginBottom: 12 },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 700,
    marginBottom: 6,
    paddingBottom: 3,
    borderBottom: "1pt solid #E5E7EB",
  },

  row: {
    paddingVertical: 6,
    borderBottom: "1pt solid #F2F4F7",
  },
  name: { fontSize: 10.5, fontWeight: 700 },
  desc: { fontSize: 10, color: "#344054", marginTop: 1.5 },
  site: { fontSize: 9, color: INK, textDecoration: "underline", marginTop: 2 },

  footer: {
    position: "absolute",
    left: 40,
    right: 40,
    bottom: 20,
    fontSize: 9,
    color: "#98A2B3",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

/* ----------- Helpers ----------- */
function groupByCategory(items: Item[]) {
  const byCat = new Map<string, Item[]>();
  for (const it of items) {
    const key = (it.category || "Uncategorized").trim();
    if (!byCat.has(key)) byCat.set(key, []);
    byCat.get(key)!.push(it);
  }

  // Sort categories by your preferred order, then alpha
  const order = new Map(CATEGORY_ORDER.map((c, i) => [c, i]));
  const sections = Array.from(byCat.entries()).sort((a, b) => {
    const ai = order.has(a[0]) ? order.get(a[0])! : 999;
    const bi = order.has(b[0]) ? order.get(b[0])! : 999;
    if (ai !== bi) return ai - bi;
    return a[0].localeCompare(b[0]);
  });

  // Sort brands alpha within each section
  for (const [, arr] of sections) arr.sort((x, y) => x.name.localeCompare(y.name));
  return sections;
}

/** split the [ [cat, items], ... ] sections across 2 columns by alternating */
function splitIntoTwoColumns<T>(sections: [string, T[]][]) {
  const left: [string, T[]][] = [];
  const right: [string, T[]][] = [];
  sections.forEach((s, i) => (i % 2 === 0 ? left.push(s) : right.push(s)));
  return { left, right };
}

/* ----------- Component ----------- */
export default function LinecardPDF({ items }: { items: Item[] }) {
  const sections = groupByCategory(items);
  const { left, right } = splitIntoTwoColumns(sections);

  const updated = new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Document title="BizCom Global — Line Card">
      {/* COVER PAGE */}
      <Page size="A4" style={styles.coverPage}>
        <Text style={styles.eyebrow}>BizCom Global</Text>
        <Text style={styles.coverTitle}>Trusted brands.{'\n'}Global reach.</Text>
        <Text style={styles.coverSub}>
          A curated portfolio across semiconductors, passives, interconnects,
          protection, timing, and emerging technologies—continuously expanded
          to meet program needs.
        </Text>

        <View style={styles.infoCard}>
          <Text style={styles.eyebrow}>BizCom Global</Text>
          <Text style={styles.infoTitle}>Head office</Text>

          {/* ADDRESS (your provided details) */}
          <Text style={styles.infoItem}>10 Jalan Besar #06-03</Text>
          <Text style={styles.infoItem}>Sim Lim Tower</Text>
          <Text style={styles.infoItem}>Singapore 208787</Text>

          <Text style={[styles.infoItem, { marginTop: 10 }]}>
            Email: sales@bizcompl.com
          </Text>
          <Text style={styles.infoItem}>Phone: +65 9023317</Text>
          <Text style={[styles.infoItem, { marginTop: 6 }]}>Website: bizcompl.com</Text>
        </View>

        <View style={styles.goldBar} />
        <Text style={styles.coverMetaRow}>Updated: {updated}</Text>
      </Page>

      {/* CONTENT PAGES (2 columns) */}
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.headerBlock}>
          <Text style={styles.headerTitle}>Line card</Text>
          <Text style={styles.meta}>Updated: {updated} • bizcompl.com</Text>
        </View>

        <View style={styles.columns}>
          {/* LEFT COLUMN */}
          <View style={styles.column}>
            {left.map(([cat, brands]) => (
              <View style={styles.sectionBlock} key={cat} wrap={false}>
                <Text style={styles.sectionTitle}>{cat}</Text>
                {brands.map((b, idx) => (
                  <View style={styles.row} key={`${cat}-${b.name}-${idx}`}>
                    <Text style={styles.name}>{b.name}</Text>
                    {b.description ? (
                      <Text style={styles.desc}>{b.description}</Text>
                    ) : null}
                    {b.website ? (
                      <Link src={b.website} style={styles.site}>
                        {b.website}
                      </Link>
                    ) : null}
                  </View>
                ))}
              </View>
            ))}
          </View>

          {/* RIGHT COLUMN */}
          <View style={styles.column}>
            {right.map(([cat, brands]) => (
              <View style={styles.sectionBlock} key={cat} wrap={false}>
                <Text style={styles.sectionTitle}>{cat}</Text>
                {brands.map((b, idx) => (
                  <View style={styles.row} key={`${cat}-${b.name}-${idx}`}>
                    <Text style={styles.name}>{b.name}</Text>
                    {b.description ? (
                      <Text style={styles.desc}>{b.description}</Text>
                    ) : null}
                    {b.website ? (
                      <Link src={b.website} style={styles.site}>
                        {b.website}
                      </Link>
                    ) : null}
                  </View>
                ))}
              </View>
            ))}
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer} fixed>
          <Text>© {new Date().getFullYear()} BizCom Global</Text>
          <Text render={({ pageNumber, totalPages }) => `Page ${pageNumber} of ${totalPages}`} />
        </View>
      </Page>
    </Document>
  );
}