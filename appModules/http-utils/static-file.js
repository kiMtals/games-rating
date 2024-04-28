const fs = require("fs");
const mimeTypes = require("./mime-types");

function staticFile(res, filePath, ext) {
    res.setHeader("Content-Type", mimeTypes[ext]);
    fs.readFile("./public" + filePath, (err, data) => {
        console.log(err);
      if (err) {
        res.statusCode = 404;
        res.end("Not Found2");
      }
      res.end(data);
    });
  }
  
  module.exports = staticFile;