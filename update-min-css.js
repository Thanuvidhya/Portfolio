const fs = require('fs');
const path = require('path');

// Read the current CSS
const cssPath = path.join(__dirname, 'css', 'style.css');
const cssContent = fs.readFileSync(cssPath, 'utf8');

// Simple CSS minification function
function minifyCSS(css) {
    return css
        // Remove comments
        .replace(/\/\*[\s\S]*?\*\//g, '')
        // Remove whitespace
        .replace(/\s+/g, ' ')
        // Remove semicolons before closing braces
        .replace(/;}/g, '}')
        // Remove spaces around braces, colons, semicolons
        .replace(/\s*{\s*/g, '{')
        .replace(/\s*}\s*/g, '}')
        .replace(/\s*;\s*/g, ';')
        .replace(/\s*:\s*/g, ':')
        // Remove spaces after commas
        .replace(/,\s+/g, ',')
        // Remove leading/trailing whitespace
        .trim();
}

// Minify and save
const minifiedCSS = minifyCSS(cssContent);
fs.writeFileSync(path.join(__dirname, 'css', 'style.min.css'), minifiedCSS);

console.log('CSS minified with timeline fix!');
console.log(`Original: ${cssContent.length} bytes`);
console.log(`Minified: ${minifiedCSS.length} bytes`);
