const fs = require('fs'); 

// sync  // bloking code
// fs.writeFileSync('./test.txt','file systme overwrite')

// async // non bloking request
// fs.writeFile('./asyn.text',"this is async file.", (err)=>{})

//  non bloking request {
console.log(1)
  fs.readFile('./test.txt','utf-8', (err,res)=>{
    console.log(res)
  })
  console.log(2)
  

    // read sync files // blocking request
//     console.log(1)
//     const result = fs.readFileSync('./test.txt','utf-8')
//     console.log(result)
// console.log(2)

// // read async file // non-blocking 
//      fs.readFile('./contact.txt','utf-8', (err, result)=> {

//         if(err){
//           console.log('error',err);
//         }
//         else{
//             console.log("result",result)
//         }
//      })


// append sync file  // blocking 
// fs.appendFileSync('./test.txt','\n hey this is append file')


// copy on file to another file a
// fs.cpSync("./test.txt","./copy.text");


// DELETE FILES  
// fs.unlinkSync("./copy.txt");


// check status of file  
// console.log(fs.statSync("./test.txt"));