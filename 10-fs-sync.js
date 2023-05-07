const {readFileSync, writeFileSync} = require('fs');
console.log("start");
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

//console.log(first, second);
writeFileSync('./content/result.txt',`hello this is the result file ${first} ${second}`,{flag:'a'})
console.log("end of first task");
const third = readFileSync('./content/result.txt','utf8');
//console.log(third);
console.log("End of last task");