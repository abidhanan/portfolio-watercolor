import { spawnSync } from "node:child_process";

const command = process.platform === "win32" ? "npm.cmd" : "npm";
const result = spawnSync(command, ["run", "build"], {
  stdio: "inherit",
  shell: process.platform === "win32",
  env: {
    ...process.env,
    CLOUDFLARE_BUILD: "1",
    // GA4 and Clarity IDs are public identifiers embedded in the delivered HTML.
    NEXT_PUBLIC_GA_MEASUREMENT_ID:
      process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-CZY95LQ7PB",
    NEXT_PUBLIC_CLARITY_PROJECT_ID:
      process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || "z1hlqrf7pn",
  },
});

if (result.error) {
  console.error(result.error.message);
}

process.exit(result.status ?? 1);
