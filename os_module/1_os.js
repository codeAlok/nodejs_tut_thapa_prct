// *** starting with OS Module

const os = require('os');

console.log(os.arch());  // 32 or 64 bit
console.log(os.hostname()); // host name
console.log(os.platform());
console.log(os.version());
console.log(os.tmpdir());
console.log(os.type());

const freeMemory = os.freemem();
// console.log(freeMemory);

console.log(`${freeMemory /1024/1024/1024}`);  // freememory in gb

const totalMemory = os.totalmem();
console.log(`${totalMemory /1024/1024/1024}`); // toal memory in gb


console.log(os.userInfo()); 