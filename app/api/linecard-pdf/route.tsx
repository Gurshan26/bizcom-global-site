// app/api/linecard-pdf/route.ts
import { NextResponse } from "next/server";
import { renderToStream } from "@react-pdf/renderer";

// ✅ use RELATIVE imports (no "@")
import { fetchLinecard } from "../../../lib/linecard";
import LinecardPDF from "../../../components/pdf/LinecardPDF";
import { categories as fallbackCategories } from "../../../data/linecard";

export const runtime = "nodejs"; // streaming PDFs need the Node runtime

type FallbackBrand = {
  name: string;
  tagline?: string;
  website?: string;
  logo?: string;
};
type FallbackCategory = {
  name: string;
  brands: FallbackBrand[];
};

function flattenFallback(cats: FallbackCategory[]) {
  const items: { name: string; category: string; description?: string; website?: string; logo?: string }[] = [];
  for (const c of cats) {
    for (const b of c.brands) {
      items.push({
        name: b.name,
        category: c.name,
        description: b.tagline,
        website: b.website,
        logo: b.logo,
      });
    }
  }
  return items;
}

export async function GET() {
  try {
    let items = await fetchLinecard(); // [{ name, category, description, website?, logo? }]
    if (!items || items.length === 0) {
      items = flattenFallback(fallbackCategories as unknown as FallbackCategory[]);
    }

    const stream = await renderToStream(<LinecardPDF items={items as any} />);

    return new NextResponse(stream as any, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="BizCom-Global-Linecard.pdf"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("[linecard-pdf] Failed to generate PDF:", err);
    return NextResponse.json({ ok: false, error: "Failed to generate PDF" }, { status: 500 });
  }
}