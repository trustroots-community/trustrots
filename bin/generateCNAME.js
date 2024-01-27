const fs = require("fs");
const path = require("path");

const content = process.env.HOSTNAME;
const filePath = path.join(__dirname, "../out/CNAME");

if (content)
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error("Error writing file:", err);
    } else {
      console.log("CNAME created successfully.");
    }
  });
else {
  console.log("No HOSTNAME provided, CNAME not generated");
}
