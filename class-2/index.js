const fs = require('fs');


/* Create or Overwrite a new file; */

// fs.writeFile(
//     'demo_1.html',
//     `<html>
//         <body>
//             <h1>Created New file</h1>
//         </body>
//     </html>`,
//     (err)=> {
//         if(err){
//             console.log(err);
//             return false;
//         }
//         console.log("Successfuly Created a new file");
//     }
// );


/* Add new data in existing file/ Create also if file not found; */

// fs.appendFile(
//     'demo_1.txt',
//     `Aro Notun text dici`,
//     (err)=> {
//         if(err){
//             console.log(err);
//             return false;
//         }
//         console.log("Successfuly append new line in file");
//     }
// );

/* Read a file; */

// fs.readFile(
//     'demo_1.html',
//     'utf-8',
//     (err, data)=> {
//         if(err){
//             console.log(err);
//             return false;
//         }
//         console.log("Successfuly read a file", data);
//     }
// );

/* Rename a file; */

// fs.rename(
//     'existing_file.txt',
//     'existing_file--renamed.txt',
//     (err)=> {
//         if(err){
//             console.log(err);
//             return false;
//         }
//         console.log("Successfully Renamed a file");
//     }
// );


/* Delete a file; */

// fs.unlink(
//     'demo_2.html',
//     (err)=>{
//         if(err){
//             console.log(err);
//             return false;
//         }
//         console.log("Successfully deleted a file");
//     }
// );

/* Check Exists a file; */

// fs.exists(
//     'demo_1.html',
//     (response)=> {
//         if(!response){ // response == false
//             console.log("Not Exists");
//             return false;
//         }
//         console.log("This file Exists"); // response == true
//     }
// );


// let isThere = fs.existsSync('demo_1.html');
// console.log(isThere);