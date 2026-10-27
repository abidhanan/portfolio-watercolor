import { spawnSync } from "node:child_process";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

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

if ((result.status ?? 1) !== 0) {
  process.exit(result.status ?? 1);
}

// Keep the server-rendered page immediately readable while postponing React
// hydration briefly on small screens. This prevents framework chunks from
// competing with the hero, CSS, and fonts on slow mobile connections.
const indexPath = path.resolve("out", "index.html");
let html = await readFile(indexPath, "utf8");
const scripts = [];

const flightPayload = [];
html = html.replace(
  /<script>((?:\(self\.__next_f|self\.__next_f)[\s\S]*?)<\/script>/g,
  (_tag, source) => {
    flightPayload.push(source);
    return "";
  },
);

if (flightPayload.length > 0) {
  const flightPath = path.resolve("out", "__next-flight.js");
  await writeFile(flightPath, `${flightPayload.join(";\n")};\n`);
  scripts.push({ src: "/__next-flight.js", noModule: false });
}

html = html.replace(
  /<script src="([^"]*\/_next\/static\/chunks\/[^"]+\.js)"([^>]*)><\/script>/g,
  (_tag, src, attributes) => {
    scripts.push({ src, noModule: /\bnoModule\b/.test(attributes) });
    return "";
  },
);

if (scripts.length > 0) {
  const loader = `<script data-cfasync="false">(()=>{const q=${JSON.stringify(scripts)};let started=false;try{const stored=localStorage.getItem("portfolio-language");const preferred=stored||navigator.languages?.[0]||navigator.language;if(preferred?.toLowerCase().startsWith("id")){document.documentElement.lang="id";const heading=document.getElementById("home-heading");const role=heading?.querySelector("span");const copy=document.querySelector("#home .home-copy-outline");if(heading?.firstChild)heading.firstChild.nodeValue="Saya Abid Hanan";if(role)role.textContent="Developer Relations";if(copy)copy.textContent="Saya menghubungkan teknologi dengan komunitas melalui komunikasi yang jelas, edukatif, dan kolaborasi yang bermakna."}}catch{}const load=()=>{if(started)return;started=true;for(const item of q){const script=document.createElement("script");script.src=item.src;script.async=false;if(item.noModule)script.noModule=true;document.head.appendChild(script)}};if(matchMedia("(max-width: 767px)").matches){for(const event of ["pointerdown","keydown","touchstart"]){addEventListener(event,load,{once:true,passive:true})}setTimeout(load,5000)}else{load()}})();</script>`;
  html = html.replace("</body>", `${loader}</body>`);
  await writeFile(indexPath, html);
}
