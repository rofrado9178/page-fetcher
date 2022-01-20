const fs = require("fs");
const request = require("request");

request(process.argv[2], (error, body) => {
  const content = body;
  fs.writeFile(process.argv[3], content, (error) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log("file written successfully");
  });
});
