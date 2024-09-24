// function removeDuplicates(arr){
//     const unique = Array.from(new Set(arr));
//     return unique;
// }
// let arr=[1, 2, 2, 3, 4, 4, 5];
// console.log("Problem 1: ", removeDuplicates(arr));

// // ------------------------------------------------

// function mergeObjects(o1, o2){
//     return {...o1, ...o2};
// }
// const obj1 = { a: 1, b: 2, c: 3 };
// const obj2 = { b: 4, d: 5 };

// console.log("Proble 2: ",mergeObjects(obj1, obj2));

// // -------------------------------------------------

// function doubleValues(arr){
//     let sum=0;
//     for(i of arr){
//         sum+= i*2;
//     }
//     return sum;
// }
// const arr2 = [1, 2, 3, 4];
// console.log("Problem 3: ", doubleValues(arr2));

// // ------------------------------------------------

// function getUserHobbies(users){
//     let hobbies=[];
//     for(i of users)
//     {
//         if(i.age>18)
//         {
//             hobbies.push(...i.hobbies)
//         }
//     }
//     return hobbies;
// }
// const users = [
//     { name: 'Alice', age: 25, hobbies: ['reading', 'cycling'] },
//     { name: 'Bob', age: 17, hobbies: ['video games', 'skateboarding'] },
//     { name: 'Charlie', age: 30, hobbies: ['swimming', 'running'] }
//   ];
  
// console.log("Problem 4: ",getUserHobbies(users));

// // -------------------------------------------------------------


// function groupByCategory(products){
//     const obj = {};
//     for(product of products)
//     {
//         if(obj.hasOwnProperty(product.category)){
//             obj[product.category].push(product.name);
//         }
//         else
//         {
//             obj[product.category]=[product.name];
//         }
//     }
//     return obj;
// }
// const products = [
//     { name: 'Shirt', category: 'Clothing' },
//     { name: 'Pants', category: 'Clothing' },
//     { name: 'Laptop', category: 'Electronics' },
//     { name: 'Phone', category: 'Electronics' },
//     { name: 'Hat', category: 'Accessories' }
//   ];
  
// console.log("Problem 5: ",groupByCategory(products)); 

// function getTotalSalesByProduct(salesData){
//     const obj={};
//     for(sale of salesData){
//         for(product of sale.products)
//         {
//             if(obj.hasOwnProperty(product.name))
//             {
//                 obj[product.name]+=product.unitsSold;
//             }
//             else
//             {
//                 obj[product.name]=product.unitsSold;
//             }
//         }
//     }
//     return obj;
// }
// const salesData = [
//     {
//       region: 'North America',
//       products: [
//         { name: 'Laptop', unitsSold: 100 },
//         { name: 'Phone', unitsSold: 200 }
//       ]
//     },
//     {
//       region: 'Europe',
//       products: [
//         { name: 'Laptop', unitsSold: 150 },
//         { name: 'Phone', unitsSold: 100 }
//       ]
//     },
//     {
//       region: 'Asia',
//       products: [
//         { name: 'Laptop', unitsSold: 200 },
//         { name: 'Tablet', unitsSold: 150 }
//       ]
//     }
//   ];
  
//   console.log("Problem 6: ",getTotalSalesByProduct(salesData)); 




// const res=[];
// function getAllEmployees(list){
//     for(i of list)
//     {
//         res.push(i.name);
//     }
//     for(i of list)
//     {
//         if(i.subordinates.length>0)
//         {
//             getAllEmployees(i.subordinates);
//         }
//     }
// }

//   const organization = {
//     name: 'John',
//     position: 'CEO',
//     subordinates: [
//       {
//         name: 'Sarah',
//         position: 'CTO',
//         subordinates: [
//           { name: 'Tim', position: 'Lead Developer', subordinates: [] },
//           { name: 'Anna', position: 'Senior Developer', subordinates: [] }
//         ]
//       },
//       {
//         name: 'James',
//         position: 'CFO',
//         subordinates: [
//           { name: 'Karen', position: 'Accountant', subordinates: [] }
//         ]
//       }
//     ]
//   };
// res.push(organization.name);
// getAllEmployees(organization.subordinates)
// console.log("Problem 7: ",res); 

// const obj = {
//     name: "Meem",
//     roll: "1804057",
//     age: 85,
//     hobby: "dance"
// }
// for(prop in obj)
// {
//     console.log(`${prop} : ${obj[prop]}`);
// }
// // Object.preventExtensions(obj);
// obj["car"]=50;
// console.log("--------------------")
// for(prop in obj)
// {
//     console.log(`${prop} : ${obj[prop]}`);
// }
// // console.log(Object.isExtensible(obj));
// let arr = new Map(Object.entries(obj));
// console.log(arr);

// const fruits = [
//     {name:"apples", quantity:300},
//     {name:"bananas", quantity:500},
//     {name:"oranges", quantity:200},
//     {name:"kiwi", quantity:150}
// ];

// // Callback function to select low volumes 
// function myCallback({ quantity }) {
//     return quantity > 200 ? "ok" : "low";
// }

// const result = Object.groupBy(fruits, myCallback);
// console.log(result);


//  console.log("one");
//  setTimeout(()=>{
//     console.log("two");}, 2000);
//  console.log("three");
// function myDisplayer(some) {
//     console.log(some);
// }
  
// function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
// }

// myCalculator(5, 15, myDisplayer);

// function fetchData(callback) {
//     setTimeout(() => {
//       callback("Data fetched!");
//     }, 2000); // Simulate a 2-second data fetching process
//   }
  
//   fetchData((message) => {
//     console.log(message); // "Data fetched!"
//   });



//   function fetchData1(callback, data) {
//     setTimeout(() => {
//       callback("Hello", 1);
//     }, 1000);
//   }

//   function fetchData2(callback, data) {
//     setTimeout(() => {
//       callback("World", 2);
//     }, 1000);
//   }
  
//   fetchData1((message, data)=>{
//     console.log(`${message} ${data}`);
//     fetchData2((message, data)=>{
//         console.log(`${message} ${data}`);
//     })
//   });

// function fetchData1(callback1) {
//     setTimeout(() => {
//       console.log("Data 1 fetched");
//       callback1();
//     }, 1000);
//   }
  
//   function fetchData2(callback2) {
//     setTimeout(() => {
//       console.log("Data 2 fetched");
//       callback2();
//     }, 1000);
//   }
  
//   fetchData1(() => {
//     fetchData2(() => {
//       console.log("All data fetched");
//     });
//   });
  
// const getData = () => {
//     return new Promise ((resolve, reject) => {
//     //some request to the endpoint;

//     if(1){
//     //do something;
//     resolve();
//     }
//     else {
//     reject();
//     }

//   });
// };
// console.log(getData)
// const myPromise = new Promise((resolve, reject) => {
//     const success = true;
//       if (success) {
//         resolve("Promise fulfilled!");
//       } else {
//         reject("Promise rejected!");
//       }
//   });
  
//   myPromise
//     .then((message) => {
//       console.log(message); // "Promise fulfilled!"
//     })
//     .catch((error) => {
//       console.error(error); // If something went wrong
//     });

// const fetchData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false;
//         if(!error){
//             resolve("Data 1 fetched")
//         }
//         else
//         {
//             reject("Error!")
//         }
//     }, 1000);
//   });
  
//   fetchData
//     .then((data) => {
//       console.log(data);
//       return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let error = false;
//             if(!error){
//                 resolve("Data 1 fetched")
//             }
//             else
//             {
//                 reject("Error!")
//             }
//         }, 1000)
//     });
//     })
//     .then((data) => {
//       console.log(data);
//       return new Promise((resolve) => setTimeout(() => resolve("All data fetched"), 1000));
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.error("Error fetching data", error);
//     });


// function task1() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("Task 1 complete");
//         error =false;
//         if(!error)
//         {
//             resolve("Result of Task 1");
//         }
//         else
//         {
//             reject("error found in Task 1");
//         }
//       }, 1000); 
//     });
//   }
  
//   function task2(resultFromTask1) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("Task 2 complete using:", resultFromTask1);
//         error =false;
//         if(!error)
//         {
//             resolve("Result of Task 2");
//         }
//         else
//         {
//             reject("error found in Task 2");
//         }
//       }, 1000); 
//     });
//   }
  
//   function task3(resultFromTask2) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("Task 3 complete using:", resultFromTask2);
//         error =false;
//         if(!error)
//         {
//             resolve("Result of Task 3");
//         }
//         else
//         {
//             reject("error found in Task 3");
//         }
//       }, 1000); 
//     });
//   }
  

//   task1()
//     .then((result1) => task2(result1)) // Pass result from task1 to task2
//     .then((result2) => task3(result2)) // Pass result from task2 to task3
//     .then((result3) => {
//       console.log("All tasks complete. Final result:", result3);
//     })
//     .catch((error) => {
//       console.error("Error caught:", error);
//     });

// const x = task3("Hello");
// console.log(x);

const asyncFunc = async() => {

}
const x = asyncFunc()
console.log(x);