// const Mongodbconnect = require("./Mongo_Connection/MongoDbConnect");
// const mongoose = require("mongoose");
// const express = require("express");
// const app = express();
// const cors = require("cors");
// const userRouter = require("./routes/Routing");

// console.log("bye")

// Mongodbconnect().then(()=>
// {
//   app.use(express.json());
//   const PORT=5000;

// app.use(cors());

// app.use("/TodoApp", userRouter);



// app.listen(PORT, () => {
//     console.log("server is running");
//   });

// });



  
// console.log("hello")


// let arr=[1,0,1,0,1,0,1,0];

// let onearr=arr.filter((item)=>
// {
//   return item==1;
// })


// let zeroarr=arr.filter((item)=>
// {
//   return item==0;
// })


// // console.log(zeroarr)

// let newarr=[...onearr,...zeroarr]

// console.log(newarr);


// let arr=[1,0,1,0,1,0,1,0];

// let pos;




// for (let i=0;i<arr.length;i++)
// {



//   if(arr[i]==0 && arr[i+1]==1)
//   {
//     arr[i]=arr[i+1];
//     // arr[arr.length-i]=arr[i];
//     i=0;
    

//   }
//   else{
//     continue;
//   }
  
// }

// console.log(arr)


let arr=[0,1,2,3,4,[5,6,7,8,[9,10,11,12]]];

let brr=[...arr];



// console.log(brr);

brr[5][4].push(13);


console.log(brr)
console.log(arr)


// console.log()



// console.log(brr)


// ...............
console.log("..............")

let crr=[0,1,2,3,4];

let drr=crr;

console.log(drr);

crr.push(5);

console.log(drr)









