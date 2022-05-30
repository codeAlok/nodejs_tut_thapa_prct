
const fs =  require('fs');

// fs.mkdirSync('thapa');  // create new folder;

// fs.writeFileSync("thapa/bio.txt", "My name is alok kumar");  //overwrite or create new file

fs.appendFileSync("thapa/bio.txt", " My name is alok kumar");


const data = fs.readFileSync("thapa/bio.txt", "utf-8");  // file encoding utf-8 to not return buffer data

console.log(data);

fs.renameSync("thapa/bio.txt", "thapa/myBio.txt"); // rename file name

fs.unlinkSync("thapa/myBio.txt");  // delete the file

fs.rmdirSync('thapa');  // delete a folder


