

const fs = require('fs');

// created a folder
// fs.mkdir('thapa',(err) =>{});

// new file created
fs.writeFile('thapa/bio.txt'," Ki haal ho ban gayil file", (err) =>{
    console.log("folder created ");
});

fs.appendFile('thapa/bio.txt', " ..again fill data", (err) =>{
    console.log(" data added");
});

fs.readFile('thapa/bio.txt','utf-8', (err, data) =>{
    console.log(data);
});

fs.rename("thapa/bio.txt", "thapa/myBio.txt", (err)=>{ 
    console.log(" file renamed ");
});

// fs.unlink("thapa/myBio.txt", (err)=>{
//     console.log("file deleted");
    
// });    // delete filem                                                                                      