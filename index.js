const csv = require('csv-parser');
const fs = require('fs');
const output = [];
//const options = window.prompt("Filter Data on ?");

fs.createReadStream('Person_Data.csv')
    .pipe(csv({ headers: true }))
    .on('data', (data) => output.push(data))
    .on('end', () => {
        console.log(output);
    });


/*   fs.createReadStream('Person_Data.csv')
  .pipe(csv({}))
  .on('data', (data) => output.push(data))
  .on('end', () => {
      console.log(output);
  }); */