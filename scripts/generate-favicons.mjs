import { Buffer } from "node:buffer";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import pngToIco from "png-to-ico";
import sharp from "sharp";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const sourcePath = resolve(
  projectRoot,
  "src/assets/fevicon/Fevicon 50x50.svg",
);
const publicPath = resolve(projectRoot, "public");
const brandBackground = "#082f2b";
const sourceViewBox = "0 0 37.5 37.499999";

function extractSvgBody(svg) {
  const match = svg.match(/<svg\b[^>]*>([\s\S]*)<\/svg>\s*$/i);

  if (!match) {
    throw new Error(`Unable to read the root SVG element from ${sourcePath}`);
  }

  return match[1];
}

function composeIconSvg(sourceBody, { artworkScale, cornerRadius }) {
  const artworkSize = 512 * artworkScale;
  const artworkOffset = (512 - artworkSize) / 2;

  return [
    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" viewBox="0 0 512 512">',
    `  <rect width="512" height="512" rx="${cornerRadius}" fill="${brandBackground}"/>`,
    `  <svg x="${artworkOffset}" y="${artworkOffset}" width="${artworkSize}" height="${artworkSize}" viewBox="${sourceViewBox}" preserveAspectRatio="xMidYMid meet">`,
    sourceBody,
    "  </svg>",
    "</svg>",
    "",
  ].join("\n");
}

async function writePng(svg, size, filename) {
  await sharp(Buffer.from(svg), { density: 384 })
    .resize(size, size, { fit: "fill", kernel: sharp.kernel.lanczos3 })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(resolve(publicPath, filename));
}

async function main() {
  await mkdir(publicPath, { recursive: true });

  const sourceSvg = await readFile(sourcePath, "utf8");
  const sourceBody = extractSvgBody(sourceSvg);
  const browserSvg = composeIconSvg(sourceBody, {
    artworkScale: 0.84,
    cornerRadius: 96,
  });
  const platformSvg = composeIconSvg(sourceBody, {
    artworkScale: 0.78,
    cornerRadius: 0,
  });
  const maskableSvg = composeIconSvg(sourceBody, {
    artworkScale: 0.56,
    cornerRadius: 0,
  });

  await writeFile(resolve(publicPath, "favicon.svg"), browserSvg, "utf8");

  await Promise.all([
    writePng(browserSvg, 16, "favicon-16x16.png"),
    writePng(browserSvg, 32, "favicon-32x32.png"),
    writePng(browserSvg, 48, "favicon-48x48.png"),
    writePng(browserSvg, 96, "favicon-96x96.png"),
    writePng(platformSvg, 180, "apple-touch-icon.png"),
    writePng(platformSvg, 192, "web-app-manifest-192x192.png"),
    writePng(platformSvg, 512, "web-app-manifest-512x512.png"),
    writePng(maskableSvg, 512, "web-app-manifest-512x512-maskable.png"),
  ]);

  const ico = await pngToIco([
    resolve(publicPath, "favicon-16x16.png"),
    resolve(publicPath, "favicon-32x32.png"),
    resolve(publicPath, "favicon-48x48.png"),
  ]);
  await writeFile(resolve(publicPath, "favicon.ico"), ico);

  console.log(`Generated favicon assets from ${sourcePath}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
