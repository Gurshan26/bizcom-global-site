// components/pdf/LinecardPDF.tsx
import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { CATEGORY_ORDER } from "../../lib/linecard"; // relative path

type Item = {
  name: string;
  category: string;
  description?: string;
  website?: string;
  logo?: string; // ignored in PDF
};

const styles = StyleSheet.create({
  page: {
    paddingTop: 40,
    paddingBottom: 40,
    paddingHorizontal: 40,
    fontFamily: "Helvetica",
    fontSize: 10,
    color: "#0F2849",
  },
  header: { marginBottom: 16 },
  eyebrow: { fontSize: 9, textTransform: "uppercase", letterSpacing: 1.5, color: "#667085" },
  title: { fontSize: 22, marginTop: 4, fontWeight: 700 },
  subcopy: { fontSize: 10, color: "#475467", marginTop: 6 },
  metaRow: { marginTop: 8, flexDirection: "row", justifyContent: "space-between", color: "#98A2B3" },
  section: { marginTop: 18 },
  sectionTitle: {
    fontSize: 13,
    fontWeight: 700,
    marginBottom: 8,
    borderBottom: "1px solid #E5E7EB",
    paddingBottom: 4,
  },
  row: { flexDirection: "row", paddingVertical: 8, borderBottom: "1px solid #F2F4F7" },
  colName: { width: "28%", paddingRight: 8 },
  colDesc: { width: "52%", paddingRight: 8 },
  colSite: { width: "20%" },
  name: { fontSize: 11, fontWeight: 700 },
  category: { fontSize: 9, color: "#667085", marginTop: 2 },
  desc: { fontSize: 10, color: "#344054" },
  site: { fontSize: 9, color: "#0F2849", textDecoration: "underline" },
  footer: {
    position: "absolute",
    fontSize: 9,
    color: "#98A2B3",
    left: 40,
    right: 40,
    bottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

function groupByCategory(items: Item[]) {
  const byCat = new Map<string, Item[]>();
  for (const it of items) {
    const key = (it.category || "Uncategorized").trim();
    if (!byCat.has(key)) byCat.set(key, []);
    byCat.get(key)!.push(it);
  }
  const order = new Map(CATEGORY_ORDER.map((c, i) => [c, i]));
  const sections = Array.from(byCat.entries()).sort((a, b) => {
    const ai = order.has(a[0]) ? (order.get(a[0]) as number) : 999;
    const bi = order.has(b[0]) ? (order.get(b[0]) as number) : 999;
    if (ai !== bi) return ai - bi;
    return a[0].localeCompare(b[0]);
  });
  for (const [, arr] of sections) arr.sort((x, y) => x.name.localeCompare(y.name));
  return sections;
}

export default function LinecardPDF({ items }: { items: Item[] }) {
  const sections = groupByCategory(items);
  const today = new Date();
  const dateStr = today.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });

  return (
    <Document title="BizCom Global — Line Card">
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.eyebrow}>BizCom Global — Line Card</Text>
          <Text style={styles.title}>Trusted brands. Global reach.</Text>
          <Text style={styles.subcopy}>
            A curated portfolio across semiconductors, passives, interconnects, protection, timing, and
            emerging technologies—continuously expanded to meet program needs.
          </Text>
          <View style={styles.metaRow}>
            <Text>Updated: {dateStr}</Text>
            <Text>bizcompl.com</Text>
          </View>
        </View>

        {/* Sections */}
        {sections.map(([cat, brands]: [string, Item[]], sIdx: number) => (
          <View key={`${cat}-${sIdx}`} style={styles.section} wrap={false}>
            <Text style={styles.sectionTitle}>{cat}</Text>
            {brands.map((b: Item, idx: number) => (
              <View key={`${b.name}-${idx}`} style={styles.row}>
                <View style={styles.colName}>
                  <Text style={styles.name}>{b.name}</Text>
                  <Text style={styles.category}>{cat}</Text>
                </View>
                <View style={styles.colDesc}>
                  {b.description ? <Text style={styles.desc}>{b.description}</Text> : <Text style={styles.desc}>—</Text>}
                </View>
                <View style={styles.colSite}>{b.website ? <Text style={styles.site}>{b.website}</Text> : null}</View>
              </View>
            ))}
          </View>
        ))}

        {/* Footer */}
        <View style={styles.footer} fixed>
          <Text>© {new Date().getFullYear()} BizCom Global</Text>
          <Text render={({ pageNumber, totalPages }) => `Page ${pageNumber} of ${totalPages}`} />
        </View>
      </Page>
    </Document>
  );
}