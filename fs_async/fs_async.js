// ***** vd-7 ******
// const fs = require("fs");

// fs.writeFile('read.txt',"today is awesome day: ", (err) =>{
//     console.log("files is created");
//     console.log(err);   // if any error otherwise null
// });

// fs.appendFile('read.txt'," Plz like and share to my channel", (err) =>{
//     console.log("new content added, completed");
// });

// // reading file and utf-8 to encode that to string
// fs.readFile('read.txt','utf-8', (err, data) =>{
//     console.log(data);
// });



//***************** vd-8 (diff:- sync vs async module )******

const fs = require("fs");

// synchronous version
// const data = fs.readFileSync("read.txt", "utf-8");
// console.log(data);
// console.log("after the data");

//asynchronous version
fs.readFile("read.txt","utf-8", (err, data) =>{
    console.log(data); // it takes time to read data
});
console.log("after the data");  // this shows first


