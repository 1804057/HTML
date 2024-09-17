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

// Create a Symbol
const mySymbol = Symbol();

console.log(mySymbol);
// expected output: Symbol()