
//  bai 1
// const arr1 = [1,2,4,5,6];
// const arr2 = [1, 6, 8, 9, 0];

// const arr = [1,54,6,7]

// const arr3 = arr1.filter((n )=>{
//   return arr2.includes(n)  
// });
// console.log(arr3)



// bai 2
// const Arr4 = arr.map((number) => (number + 5))

// console.log(Arr4)


// bai 3

// const  m = [1,2,4,5,6,7];
// const n = [3,5,675,8,96];

// const w = [1,8,10,96,7];

// const mn = [... m, ...n];



// const arrMn = mn.filter((number)=>{
//     if (w.includes(number) ){
//       return false
//     } else {
//       return true
//     }
    
// })
// console.log(arrMn)


// bai 4

// const players = [
//   { id: 11, name: 'Messi', age: 33 },
//   { id: 12, name: 'Ronaldo', age: 34 },      
//   { id: 13, name: 'Young', age: 35 },        
//   { id: 14, name: 'Mane', age: 21 },          
//   { id: 15, name: 'Salah', age: 24 },
// ];
// const playersModified = players.reduce((result, current) => {
//   result[current.id] = current;
//   return result;
// },{});

// console.log(playersModified)

// bai 5
// ý 1
import {A} from "./module/helpers.mjs"

// var sum = 0;
// for (let i= 0 ; i<A.length;i++){
//     sum += A[i]
// }

// const Tb = sum/A.length;

// console.log(Tb)
// 2

// A.sort((a, b) => b - a);
// console.log(A);

// 3

// const sum = A.reduce((total, item)=>{
//     if ( item > 0){
//         return total + item;
//     } else {
//         item = 0
//         return total + item
//     }
// },0);
// console.log(sum)


// 4 
// const sumOdd = A.reduce((total,item) => {
//     if ( item % 2 === 1){
//         return total + item
//     } else {
//         item = 0
//         return total + item
//     }
// },0)

// console.log(sumOdd)


// 5 
// const Asort = A.sort((a,b) => (b - a))
// const Amax2nd = Asort[1]

// console.log(Amax2nd)


// 6

var count = 0;
// for ( var i=0;i<A.length;i++){
//     if( Math.sqrt(A[i]) % 1 === 0 ){
//         count++
//         console.log(`có ${count} số chính phương là: ${A[i]}`)
//     } 
// }
const B = A.filter(n => {
    if ( Math.sqrt(n) % 1 === 0){
        count ++ 
        return n
    } else {
        return false
    } 
});
console.log(` có ${count} số chính phương là : ${B}`)



// trắc nhiệm

/* 
1. False
2.True
3. True
4. "3"
5."4"
6."1"
7. "4"
8. " 2"
9. "4"
10. "2"
11. "3"
12. "2"
13."4"


*/

