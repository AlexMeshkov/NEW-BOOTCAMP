const fs = require('fs');

const sourceContent = fs.readFileSync('source.txt', 'utf-8');

fs.writeFileSync('destination.txt', sourceContent);

console.log('File copied successfully');