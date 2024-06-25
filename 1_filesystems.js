// fs is the module when we have to use while working with the files

const fs = require("fs");


// files and directories
fs.writeFileSync("file.txt", "I wrote some content in the file"); // path, data


// it will write / overwrite the content

console.log("overwritting started");

fs.writeFileSync("file.txt", "I overwritten the file");

console.log("overwritting stopped");
 

// it will append this content with current

fs.appendFileSync("file.txt", " I have appended some content");
console.log( );
 

// read the content

// data -> binery -> hexadecimal -> buffer

const contentBuffer = fs.readFileSync("file.txt");
const content = fs.readFileSync("file.txt", "utf-8");

console.log(contentBuffer, content);

console.log("creating directory");
fs.mkdirSync("nodeDirec");

 

/**
* server -> file 2gb -> needs 5 sec
* sync in every method signifies -> syncronous behaviour
*/


/**
*
* Read file
*/

console.log("Before");

fs.readFile("file.txt", "utf8", function( err, data) {

    if(err) {
        console.log(err);

    } else {
        console.log(data);
    }

})

console.log("After");

 

/**
*
* another way of using async function - > promises
* async version of function -> that is given by nodeJS, will always have first param as error
*
* -------------- This is recommended method -------------->
*/

console.log("Before");

const filePromise = fs.promises.readFile("file.txt", "utf8");

filePromise.then((data) => {

    console.log(data);

})
 
console.log("After");