const fs = require("fs");

// 1. Create a directory
if (!fs.existsSync("MyData")) {
    fs.mkdirSync("MyData");
    console.log("Directory created successfully.");
}

// 2. Create and write to a file
fs.writeFileSync(
    "MyData/student.txt",
    "Name: Aditya\nCourse: Computer Engineering\nYear: Second Year"
);

console.log("File created and data written successfully.");

// 3. Read the file
const data = fs.readFileSync(
    "MyData/student.txt",
    "utf8"
);

console.log("\nFile Contents:");
console.log(data);