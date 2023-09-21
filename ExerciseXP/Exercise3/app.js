const {readFile, writeFile} = require("./fileManager.js")

const helloFile = 'HelloWorld.txt';
const byeFile = 'ByeWorld.txt';


readFile(helloFile, (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    // Write to "Bye World.txt"
    writeFile(byeFile, 'Writing to the file', (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('File written successfully.');
    });
});

    




