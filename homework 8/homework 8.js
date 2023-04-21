// in ra các số chia hết cho 2 và 3 từ 1 - 300
// for ( statment1;statment2;statment3){

// }
// for(let i=1; i<=300; i+=1){
//     if ( i%6===0){
//         console.log(i)
//     }
// }
// break dùng để dừng vòng lặp
// continue bỏ qua vòng lặp hiện tại

// for ( let i=1 ; i<=500; i++){
//     console.log(i);
// }

// bai 2 


// // let sumEvennumber1 = -30;
// // for ( let i = 1; -30 <= i <=50; i++){
// //     if (i%2===0){
// //         sumEvennumber1=sumEvennumber1+i
// //     }
// //     console.log(sumEvennumber1);
// }

// bài 5


// 5. Nhập vào 3 số a, b, x (a < b). Tìm trong khoảng a, b số nhỏ nhất mà chia hết cho x.

// let a = Number(prompt("Mời bạn nhập giá trị của a: "));
// let b;
// for(;true;){
//     b = Number(prompt("Mời bạn nhập giá trị của b:"));
//     if(b>a){
//         break;
//     }
// }
// let x = Number(prompt("Mời bạn nhập x: "))

// for(let i = a; i<b; i++){
//     if( i % x ===0){
//         console.log(i);
//         break;
//     }
// }

// 8. Nhập vào số n. Viết chương trình kiểm tra xem n có phải số nguyên tố không.

// let n = Number(prompt("Mời bận nhập n"));
// let checkSoNguyenTo = 0;

// for(let i = 1; i<=n; i++){
//     if( n % i ==0){
//         checkSoNguyenTo +=1;
//     }
// }

// if(checkSoNguyenTo === 2){
//     console.log("Đây là số nguyên tố")
// } else {
//     console.log("Đây không phải số nguyên tố")
// }

// 13. Nhập vào số n (2 <= n <= 10). Hãy in ra bảng cửu chương của số n.
// let n = Number(prompt("Mời bận nhập n"));
// for(let i = 1; i<=10; i++){
//     // console.log(n + "x" + i+"="+ n*i)
//     console.log(`${n} x ${i} = ${n*i}`)
// }

// 14. Nhập vào số n (n >= 2). Hãy in ra màn hình hình vuông có độ dài cạnh = n.

// let n = 5;
// for(;true;){
//     n = Number(prompt("Mời bạn nhập n: "));
//     if(n >= 2){
//         break;
//     }
// }

// let hv ="";
// for (let i = 1; i<=n; i++){
//     for(let j = 1 ; j <=n; j++){
//         hv += "*";
//     }
//     console.log(hv);
//     hv=""
// }

// 16. Nhập vào số n (n >= 3). Hãy in ra màn hình hình tam giác vuông cân có độ dài cạnh góc vuông = n.

// let n = 4;
// for(let i = 1; i<=n;i++){
//     let tamGiac = "";
//     for(let j = 1; j<=i;j++){
//         tamGiac += "*";
//     }
//     console.log(tamGiac);
// }

// 17. Nhập vào 2 số w và h là chiều cao và cân nặng của 1 người. 
// Hãy tính chỉ số BMI và đưa ra kết quả:
// Nếu BMI < 18.5 → in ra “Nhẹ cân”
// Nếu 18.5 <= BMI < 23 → in ra “Bình thường” 
// Nếu 23 <= BMI < 25 → in ra “Thừa cân”
// 23 <=BMI <25;
// 23 <=BMI && BMI < 25
// Nếu BMI >= 25 → in ra “Béo phì”

// let w=prompt ("nhập cân nặng")
// let h=prompt("nhập chiều cao")

// const BMI = w/h*2
// const BMI = 40;
// if(BMI>=40){
//     console.log("thừa cân cấp 3")
// }
// if(BMI<40 && BMI>=35){
//     console.log("thừa cân cấp 2")
// }
// if(BMI<35 && BMI>=30){
//     console.log("thừa cân cấp 1")
// }
// if(BMI<30 && BMI>=25){
//     console.log("bình thường")
// }
// if(BMI<25 && BMI>=18.5){
//     console.log("gầy độ  1")
// }
// if(BMI<18.5 && BMI>=17){
//     console.log("gầy độ 2")
// }
// if(BMI<16){
//     console.log("gầy độ 3")
// }


// bai 4 
    // let n= Number (prompt( "nhap n:"))
    // let fact = 1;
    // for (i = 1; i <= n; i++) {
    //     fact = fact* i;
    // }
    // console.log(`giai thua cua ${n} la ${fact}.`);  

// bai 7

// let n = Number (prompt('nhập vào số n: '))
// for (i=0;i<=n;i++){
//     if(n%i===0){
//         console.log(`uoc cua ${n} la ${i}`)
//     }
// }

// bai 9
// let s = String (prompt("nhap vao so s: "))
// let i = Number (prompt("nhap vao so i: "))
// for (x=1;x<=i;x++){
//     s= x * '0' + s 
// }
// console.log(s)

// bai 10 

// let m = Number (prompt("nhap vao m: "));
// let n = Number (prompt("nhap vao n: "));

// for ( let x = 2; x<=m && x<=n ; x++){
//     if ( m%x===0 && n%x===0 ){
//           i = x
//         }
//     }

// console.log(i)

//  bai 11

// let m=Number(prompt(" nhap vao m: "));
// let n=Number (prompt("nhap vao n: "));
// for ( let x=1;  ; x++){
//     if ( x%m===0 && x%n===0 && x/m!=1 && x/n!=1){
//         console.log(x)
//         break;
//     }
    
// }

// bai 12
// let correct = Math.floor(Math.random() * 20) + 1;
// let count = 0;

// while (count < 5) {
//   let answer = prompt("Hãy đoán số từ 1 đến 20:");
//   if (answer === null) {
//     break;
//   }
//   answer = parseInt(answer);
//   if (isNaN(answer)) {
//     continue;
//   }
//   if (answer === correct) {
//     alert("Đoán đúng!");
//     break;
//   } else {
//     alert("Đoán sai!");
//     count++;
//   }
// }

// if (count === 5) {
//   alert("Bạn đã thua cuộc! Số đúng là " + correct);
// }


//  bai 15 
// let n ;
// for(;true;){
//     n = Number(prompt("Mời bạn nhập n: "));
//     if(n >= 2){
//         break;
//     }
// }

// let m ;
// for(;true;){
//     m = Number(prompt("Mời bạn nhập m: "));
//     if(m >= 2){
//         break;
//     }
// }

// for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= m; j++) {
//       row += "*";
//     }
//     console.log(row);
//   }

// bai 6

// let n ;
// for(;true;){
//     n = Number(prompt("Mời bạn nhập n: "));
//     if(n >= 2){
//         break;
//     }
// }
// let sum = 0
// for(i=1 ; i<= n; i++ ){
//      sum = sum + 1 / (i *(i + 1));
// }
// console.log(sum)


// let a = Number(prompt("nhap vao so a: "))

// let b;
// for(;;){
//     b= Number (prompt("nhap vao so b: "))
//     if (b>=a){
//         break;
//     }
// } 

// let x = Number (prompt("nhap vao so x: "))

// for(let i=a;i<b;i++){
//     if( i%x===0){
//         console.log(i)
//         break;
//     }
// }
let n = Number (prompt("nhap vao n:"))
const numLines = 2 * n - 1;
let diamond = '';

// Vẽ nửa trên của hình kim cương
for (let i = 1; i <= n; i++) {
  let row = '';
  for (let j = 1; j <= numLines; j++) {
    if (Math.abs(j - n) <= i - 1) {
      row += '*';
    } else {
      row += ' ';
    }
  }
  diamond += row + '\n';
}

// Vẽ nửa dưới của hình kim cương
// for (let i = n - 1; i >= 1; i--) {
//   let row = '';
//   for (let j = 1; j <= numLines; j++) {
//     if (Math.abs(j - n) <= i - 1) {
//       row += '*';
//     } else {
//       row += ' ';
//     }
//   }
//   diamond += row + '\n';
// }

console.log(diamond);