const { readFileSync, writeFileSync, read } = require("fs");
//Similiar to below code
// const fs = require("fs");
// fs.readFileSync()

console.log("start");
//reading file
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

// console.log(first, second);

//is the file is not present node will create one
//but if the file is present node will overwrite the file
//flag: used to append the file
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`,
  { flag: "a" }
);

console.log("done with the task");
console.log("starting the next one");
