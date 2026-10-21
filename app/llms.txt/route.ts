import { contactEmail, sections, siteName, siteUrl, socialProfiles, summary, ventures } from "../lib/site";

export const dynamic = "force-static";

const lines = [
  `# ${siteName}`,
  "",
  `> ${summary.en}`,
  "",
  `Ringkasan (Bahasa Indonesia): ${summary.id}`,
  "",
  "This is the personal portfolio of Abid Hanan Wicaksono. The site is bilingual (English and Indonesian) and all sections live on one page.",
  "",
  "## Portfolio",
  "",
  `- [Portfolio home](${siteUrl}/): Developer Relations portfolio with all sections on one page`,
  ...sections.map((section) => `- [${section.name}](${siteUrl}/#${section.id}): ${section.description}`),
  "",
  "## Ventures",
  "",
  ...ventures.map((venture) => `- [${venture.name}](${venture.url}): ${venture.description}`),
  "",
  "## Profiles and contact",
  "",
  `- [Email](mailto:${contactEmail})`,
  ...socialProfiles.map((profile) => `- [${profile.label}](${profile.url})`),
  "",
  "## Optional",
  "",
  `- [Full profile in Markdown](${siteUrl}/llms-full.txt): education, career, tech stack, certificates, and activities`,
  `- [Sitemap](${siteUrl}/sitemap.xml)`,
  "",
];

export function GET() {
  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
