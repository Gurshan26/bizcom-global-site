export function GET() {
  return new Response(`User-agent: *
Allow: /
Sitemap: https://www.example.com/sitemap.xml
`, { headers: { "Content-Type": "text/plain" }});
}
