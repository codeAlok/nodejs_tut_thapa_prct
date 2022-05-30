 // ****** stargin with path module

 const path = require('path');

 // show the foldername where it present
 console.log(path.dirname('D:/Web_Development/nodeJs_thapa/path_module/1_path_mod.js'));

// check extension of that file
 console.log(path.extname('D:/Web_Development/nodeJs_thapa/path_module/1_path_mod.js'));

// file name
 console.log(path.basename('D:/Web_Development/nodeJs_thapa/path_module/1_path_mod.js'));

// all of the above in one
 const myPath = path.parse('D:/Web_Development/nodeJs_thapa/path_module/1_path_mod.js');

 console.log(myPath);

 console.log(myPath.name); // only name