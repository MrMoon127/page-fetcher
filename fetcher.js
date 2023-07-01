const fs = require('fs');
const request = require('request');

let args = process.argv.slice(2);

request(args[0], (error, response, body) => {
  fs.writeFile(`./${args[1]}`, body, err => {
    if (err) {
      console.error(err);
    };
    console.log(`Downloaded and saved ${body.length} bytes to ${args[1]}`)
  });
})
