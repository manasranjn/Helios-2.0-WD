const path = require('path') //inbuilt module of nodejs
// console.log(path);


//! Getting file from a path
// console.log(path.basename("/Path Module/app.js"));

//! Getting directory name from a path
// console.log(path.dirname("/Nodejs/Path Modules/app.js"));

//! Getting file extension from a path
// console.log(path.extname("Path Module/app.js"));

//! Getting the abslute path of a file
// console.log(path.resolve("app.js"));
// console.log(path.isAbsolute("C:/Users/91801/Desktop/Web Bocket Classes/Helios 2.0-WD/NodeJS/Path Modules/app.js"));


//! Getting special path property
console.log(__filename);
console.log(__dirname);