const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = path.join(__dirname, "public", "floors");

if (!fs.existsSync(inputDir)) {
  console.error("❌ Folder public/floors not found");
  process.exit(1);
}

const images = fs.readdirSync(inputDir).filter((f) => f.endsWith(".png"));

images.forEach((filename) => {
  const inputPath = path.join(inputDir, filename);
  const outputPath = path.join(inputDir, filename.replace(".png", "-blur.jpg"));

  sharp(inputPath)
    .resize(20) // resize to 20px width for blur effect
    .jpeg({ quality: 50 })
    .toFile(outputPath)
    .then(() => console.log(`✔️ Created: ${outputPath}`))
    .catch((err) => console.error(`❌ Error: ${filename}`, err));
});
