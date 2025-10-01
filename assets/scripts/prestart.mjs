// assets/scripts/prestart.mjs
import fs from "fs";

const args = process.argv.slice(2);

if (args.length < 2) {
    console.error("Usage: node prestart.mjs <template> <output>");
    process.exit(1);
}

const [templateFile, outputFile] = args;

// Read template
let config = fs.readFileSync(templateFile, "utf8");

// Replace placeholders (if you want to add any env substitution later)
config = config.replace(/\$PORT/g, process.env.PORT || "80");

// Write final nginx.conf
fs.writeFileSync(outputFile, config);

console.log(`nginx.conf generated at ${outputFile}`);
