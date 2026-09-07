import { readFile, writeFile, mkdir } from "node:fs/promises";
import { createServer, loadEnv } from "vite";
import { pageMetadata, businessSchema } from "../src/lib/seo.js";

const env = loadEnv("production", process.cwd(), "VITE_");
const site = (env.VITE_SITE_URL || "").replace(/\/$/, "");
if (site && !/^https:\/\/[^/]+$/.test(site)) throw new Error("VITE_SITE_URL must be an HTTPS origin, without a path.");
const escape = value => value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
const template = await readFile("dist/index.html", "utf8");
const server = await createServer({ server: { middlewareMode: true, hmr: false, ws: false }, appType: "custom" });
try {
  const { render } = await server.ssrLoadModule("/src/entry-server.jsx");
  for (const route of ["/", "/testimonials/"]) {
    const { title, description } = pageMetadata(route);
    const image = (site || "") + "/images/hero/hero-wedding-joy-desktop-v2.webp";
    const tags = `
      <meta name="description" content="${escape(description)}">
      <meta name="robots" content="index,follow,max-image-preview:large">
      <meta property="og:title" content="${escape(title)}">
      <meta property="og:description" content="${escape(description)}">
      <meta property="og:type" content="website">
      <meta property="og:site_name" content="Green Events Maroc">
      <meta property="og:locale" content="fr_MA">
      <meta property="og:image" content="${escape(image)}">
      <meta name="twitter:card" content="summary_large_image">
      <meta name="twitter:title" content="${escape(title)}">
      <meta name="twitter:description" content="${escape(description)}">
      <meta name="twitter:image" content="${escape(image)}">
      ${site ? `<link rel="canonical" href="${site + route}"><meta property="og:url" content="${site + route}">` : ""}
      <script type="application/ld+json">${JSON.stringify(businessSchema(site)).replaceAll("<", "\\u003c")}</script>
    `;
    const html = template.replace(/<title>.*?<\/title>/s, `<title>${title}</title>`)
      .replace(/<meta\s+(?:name="(?:description|twitter:[^"]+)"|property="og:[^"]+")[\s\S]*?>/g, "")
      .replace("</head>", tags + "</head>")
      .replace('<div id="root"></div>', `<div id="root">${render(route)}</div>`);
    const directory = route === "/" ? "dist" : "dist/testimonials";
    await mkdir(directory, { recursive: true });
    await writeFile(directory + "/index.html", html);
  }
  await writeFile("dist/robots.txt", "User-agent: *\nAllow: /\n" + (site ? `Sitemap: ${site}/sitemap.xml\n` : ""));
  if (site) await writeFile("dist/sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${["/", "/testimonials/"].map(route => `<url><loc>${site + route}</loc></url>`).join("")}</urlset>`);
  console.log("Prerendered homepage and testimonials." + (site ? " Sitemap generated." : " Set VITE_SITE_URL before publishing to generate canonical URLs and sitemap."));
} finally { await server.close(); }
