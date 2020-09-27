const csv = require('csv-parser');
const fs = require('fs');
const output = [];


fs.createReadStream('Person_Data.csv')
    .pipe(csv({}))
    .on('data', (data) => output.push(data))
    .on('end', () => {
        console.log(output);
    });

/* const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
 */
/* fs.createReadStream('Person_Data.csv')
    .pipe(parse({ headers: true }))
    .pipe(csv({}))
    .on('data', (data) => output.filter(options).push(data))
    .on('end', readline.question('Filter Data on ? ', options => {
            console.log(`Hey there ${options}!`);
            readline.close();
        });

 */