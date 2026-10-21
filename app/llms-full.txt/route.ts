import { getPortfolioContent } from "../lib/i18n";
import { contactEmail, faq, siteName, siteUrl, socialProfiles, summary } from "../lib/site";

export const dynamic = "force-static";

function build() {
  const content = getPortfolioContent("en");
  const { educationItems, careerItems, techGroups, certificateItems, activityItems } = content.portfolio;
  const out: string[] = [];

  out.push(`# ${siteName}`, "", `> ${summary.en}`, "", `Website: ${siteUrl}/`, `Email: ${contactEmail}`, "");

  out.push("## Frequently asked questions", "");
  for (const item of faq) {
    out.push(`### ${item.question}`, "", item.answer, "");
  }

  out.push("## About", "", content.about.body, "");

  out.push("## Education", "");
  for (const item of educationItems) {
    out.push(`- **${item.title}**, ${item.place} (${item.year}): ${item.desc}`);
  }
  out.push("");

  out.push("## Career", "");
  for (const item of careerItems) {
    out.push(`- **${item.role}**, ${item.company} (${item.period}): ${item.desc}`);
  }
  out.push("");

  out.push("## Startups", "");
  for (const item of content.startup.items) {
    out.push(`- **[${item.title}](${item.href})**: ${item.description} Services: ${item.services.join("; ")}.`);
  }
  out.push("");

  out.push("## Tools and tech stack", "");
  for (const group of techGroups) {
    out.push(`- **${group.title}**: ${group.tools.map((tool) => tool.name).join(", ")}`);
  }
  out.push("");

  out.push("## Licenses and certificates", "");
  for (const item of certificateItems) {
    out.push(`- **${item.title}**, ${item.issuer} (${item.year}): ${item.desc}`);
  }
  out.push("");

  out.push("## Activities", "");
  for (const item of activityItems) {
    const where = [item.organization, item.category].filter(Boolean).join(", ");
    out.push(`- **${item.title}**${where ? ` (${where})` : ""}: ${item.desc}`);
  }
  out.push("");

  out.push("## Profiles", "", ...socialProfiles.map((profile) => `- [${profile.label}](${profile.url})`), "");
  return out.join("\n");
}

export function GET() {
  return new Response(build(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
