import fs from "fs";
import { SitemapStream, streamToPromise } from "sitemap";

const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/preguntas", changefreq: "monthly", priority: 0.8 },
  { url: "/sobre-nosotros", changefreq: "monthly", priority: 0.8 },
  { url: "/privacy-policy", changefreq: "yearly", priority: 0.5 },
  { url: "/cookies-policy", changefreq: "yearly", priority: 0.5 },
];

const hostname = "https://killalibros.com";
const stream = new SitemapStream({ hostname });

const generateSitemap = async () => {
  links.forEach((link) => stream.write(link));
  stream.end();

  const sitemap = await streamToPromise(stream);
  fs.writeFileSync("./public/sitemap.xml", sitemap.toString(), "utf8");
  console.log("✅ Sitemap generado correctamente.");
};

generateSitemap();
