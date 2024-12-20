//Presenter = אביב דהן

const fs = require("fs");
const path = require("path");

// Array with the file names
const arr = [
  "1.txt",
  "2.txt",
  "3.txt",
  "4.txt",
  "5.txt",
  "6.txt",
  "7.txt",
  "8.txt",
  "9.txt",
  "10.txt",
];

// Create or initialize the output file
const outputFile = path.join(__dirname, "output.txt");
fs.writeFileSync(outputFile, ""); // Initialize the output file with an empty string

// Loop through all files in the array
for (let i = 0; i < arr.length; i++) {
  const filePath = path.join(__dirname, arr[i]);
  const numOfLines = i + 1; // Number of lines to read: 1 for the first file, 2 for the second, etc.

  // Check if the file exists
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, "utf-8").split("\n"); // Read the file and split it into lines

    // Get the required number of lines, but ensure we don't exceed available lines
    const linesToWrite = content.slice(0, Math.min(numOfLines, content.length));

    // Append the lines directly to the output file if there are any
    if (linesToWrite.length > 0) {
      fs.appendFileSync(outputFile, `${linesToWrite.join("\n")}\n\n`);
    }
  }
}

console.log("File contents have been successfully combined into output.txt.");
