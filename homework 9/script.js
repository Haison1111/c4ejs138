// 1. Khai báo 1 mảng gồm các số bất kỳ.
const arr = [2, 5, 8, 1, -4, 5, 10, 9];
// Tính tích của các phần tử trong mảng đó.
// let tich = 1;
// for(let i = 0; i < arr.length;i++){
//     tich = tich * arr[i];
// }
// console.log("Tich Cua Mang La: ", tich);

// Tìm số nhỏ nhất mà chia hết cho 2 trong mảng.
//B1: Lọc ra 1 mảng gồm các số chia hết cho 2
//B2: Tìm số min trong mảng vừa lọc
// const newArr = [];
// for(let i = 0; i<arr.length; i++){
//     if(arr[i] % 2 === 0){
//         newArr.push(arr[i]);
//     }
// }

// let min = newArr[0];
// for(let i =0; i<newArr.length; i++){
//     if(min > newArr[i]){
//         min = newArr[i];
//     }
// }

// console.log(min);

// Tìm số lớn nhất mà chia hết cho 3 trong mảng.
// B1: Lọc ra 1 cái mảng gồm các số chia hết cho 3
// B2: Tìm max trong mảng vừa lọc được

// const arrChiaHetcho3 = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 3 === 0) {
//     arrChiaHetcho3.push(arr[i]);
//   }
// }
// let max = arrChiaHetcho3[0];
// for (let j = 0; j < arrChiaHetcho3.length; j++) {
//   if (max < arrChiaHetcho3[j]) {
//     max = arrChiaHetcho3[j];
//   } 
// }
// console.log(max);

// Tính giá trị trung bình của mảng.
// B1: Tính tổng giá trị trong mảng
// B2: Tính trung bình cộng
// let sum = 0;
// for(let i =0 ; i< arr.length; i++){
//     sum = sum + arr[i];
// }
// const result = sum / arr.length;
// console.log(result);

// Lọc ra các số nguyên tố trong mảng.
// B1; Dùng vòng lặp để duyệt qua các phần tử trong mảng
// B2: Với phần tử đang được duyệt đến thì sẽ kiểm tra xem số đấy có phải số nguyên tố không
// for (let i=0;i<arr.length;i++){
//     if (arr[i]<=1){
//         console.log(`${arr[i]} khong la so nguyen to`)
//     }
//     else {
//         let checkSoNguyenTo=0;
//         for (let j=1;j<=arr[i];j++){
//             if (arr[i]%j===0){
//                 checkSoNguyenTo+=1;
//             }
//         }
//         if (checkSoNguyenTo===2){
//             console.log(`${arr[i]} la so nguyen to`)}
//         else {
//             console.log(`${arr[i]} khong la so nguyen to`)
//         }
//     }
// }

// Kiểm tra xem trong mảng có số nhỏ hơn 10 hay không.
// let check=false;
// for(let i=0;i<arr.length;i++){
//     if(arr[i] < 10){
//         check = true;
//         break;
//     }
// }
// if(check){
//     console.log("Mảng có số nhỏ hơn 10");
// }
// else{
//     console.log("Mảng ko có số nhỏ hơn 10");
// }

// Kiểm tra xem tất cả phần tử trong mảng có lớn hơn 20 không.
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] < 20){
//         console.log("Phần tử bé hơn 20: ");
//         break;
//     }
// }

// Nhập vào số n cho đến khi n là 1 số trong mảng s.

// let num;
// for(;true;){
//     num = Number(prompt("Nhập số N vào: "));
//     let so = 0;
//     // for(let s = 0; s < arr.length;s++){
//     //     if(num == arr[s]){
//     //         so = 1;
//     //     }
//     // }
//     // if(so == 1){
//     //     console.log("Số Bạn Nhập Trúng là: ", num);
//     //     break; 
//     // }

//     if(arr.includes(num) == true){
//         console.log("Số Bạn Nhập Trúng là: ", num);
//         break; 
//     }
// }

// Sử dụng thuật toán Bubble Sort để sắp xếp phần tử theo thứ tự tăng dần.

// function bubbleSort(arr) {
  
  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = 0; j < arr.length - 1; j++) {
  //     if (arr[j] > arr[j + 1]) {
  //       // swap elements
  //       let temp = arr[j];
  //       arr[j] = arr[j + 1];
  //       arr[j + 1] = temp;
  //     }
  //   }
  // }
  // console.log(arr)


// bai 2
// Tìm 1 chuỗi đầu tiên có độ dài nhỏ nhất trong mảng

const s = ["hello","text","world","string","coding","Hi"]
// let ChuoiNganNhat = s[0]
// for (let i=0; i < s.length; i++){
    
//     if ( s[0].length > s[i].length ){
//         ChuoiNganNhat = s[i]
//     }
    
// }
// console.log(ChuoiNganNhat)

// Tìm những chuỗi trong mảng có chứa giá trị text
// let word = "text"
// for ( let i = 0; i< s.length;i++){
//     if ( s[i].includes(word) == true ){
//         console.log(i)
//     }
// }

// Tạo mảng mới newS gồm các phần tử có giá trị là 3 ký tự đầu tiên của từng phần tử trong s.

// let News=[];
// let kitudau;
// for ( let i = 0;i<s.length;i++){
//      kitudau = s[i].substring(0,3)
//      News.push(kitudau);
// }
// console.log(News)

// Tạo ra 1 chuỗi là sự kết hợp của các phần tử trong s. Mỗi phần tử cách nhau bởi dấu ‘-’.

// let word = ''
// for ( let i=0;i< s.length;i++){
//     chuoi = s[i]
//     word = word + chuoi
//     if(i < s.length - 1){
//     word += "-"
// }}
// console.log(word)

// bai 3
// Kiểm tra xem tất cả các giá trị số trong d1 có nằm trong d2 không.

const d1 = [ 2, 6 , 9 ,27 ,5];
const d2 = [ 5, 12, 24, 15,7];

// for ( let i = 0; i < d1.length; i ++){
//     if ( d2.includes(d1[i]) == true ){
//         console.log( " có giá trị", d1[i] , "nằm trong d2")
//     }  
// }

// Kiểm tra xem có phần tử nào trong d2 chia hết cho tổng của d1 không.
// let sumd1 = 0;
// for (let i = 0 ; i<d1.length ; i++){
//     sumd1 += d1[i]
// }

// for ( let j=0; j< d2.length ; j++){
//     if ( sumd1 % d2[j] === 0){
//         console.log( d2[j], "là số chia hết cho tổng của d1 là:", sumd1)
//     }
// }

// Tạo mảng mới gồm các số có giá trị là các số chia hết cho 2 lần lượt trong d2 và d1.

// let newd = [];
// let d1chiaHetCho2;
// for ( let i = 0 ; i< d1.length;i++){ 
//     if ( d1[i] % 2===0){
//         d1chiaHetCho2 = d1[i]
//         newd.push(d1chiaHetCho2)
//     } 
    
// }

// let d2chiaHetCho2 ;
// for (let j=0 ; j< d2.length;j++){
//     if ( d2[j] % 2 ===0){
//         d2chiaHetCho2 = d2[j]
//         newd.push(d2chiaHetCho2)
//     }
// }
// console.log(newd)

// Giả sử d1, d2 là các dãy số xếp theo thứ tự tăng dần. Hãy tạo ra 1 dãy số theo thứ tự tăng dần bao gồm các số của d1 và d2 (Sử dụng core của thuật toán Merge Sort).

// let newd= [];



let growth = [
  [5,8,9,16],
  [2,7,1,9],
  [5,6,8,12],
  [10,2,1,8],
  [20,4,9,1]
];

// let year1 = growth.find(item => item[0])
// let year2 = growth.find(item => item[1])
// let year3 = growth.find(item => item[2])
// let year4 = growth.find(item => item[3])
// let year5 = growth.find(item => item[4])

// let AvgGrowthYear = []
// let SumGrowthYear = 0
// let avgGrowth = 0
// for (let i = 0; i<growth.length;i++){
//   for ( let j = 0 ; j <= growth[i].length - 1;j++){
//       if( i -1 < 0){
//          SumGrowthYear += growth[i][j]
// } else {
//   SumGrowthYear +=  growth[i][j] - growth[i-1][j] 
//   } 
//   avgGrowth = SumGrowthYear/growth[i].length
// }  
// AvgGrowthYear.push(avgGrowth)
// }
// /* [1] = 38
//  [2] = 19
//  [3] = 31
//  [4] = 21
//  [5] = 34
// */
// console.log(AvgGrowthYear)

// Tìm giá trị tăng trưởng trung bình theo năm lớn nhất.

// let AvgGrowthYearMax = AvgGrowthYear[0] ;
// for (let n = 0; n <AvgGrowthYear.length; n++){
//     if ( AvgGrowthYear[0] <  AvgGrowthYear[n] ){
//         AvgGrowthYearMax = AvgGrowthYear[n]
//     }
// }
// console.log(AvgGrowthYearMax)


// Tìm giá trị tăng trưởng theo quý lớn nhất.


// let MaxQuaterGrowth = []
// for ( let i = 0; i< growth.length; i++){
//     let QuarterMax = growth[i][0]
//     for ( let j = 0 ; j < growth[i].length; j++){
//         if (growth[i][0] < growth[i][j] ){
//             QuarterMax = growth[i][j]
//         }
//     }
//     MaxQuaterGrowth.push(QuarterMax)
// }
// console.log(MaxQuaterGrowth)
// let MaximusGrowth = MaxQuaterGrowth[0];
// for (let n = 0 ; n < MaxQuaterGrowth.length; n++){
//     if (MaxQuaterGrowth[0] < MaxQuaterGrowth[n]){
//         MaximusGrowth = MaxQuaterGrowth[n]
//     }
// }
// console.log(MaximusGrowth)


// Tính giá trị tăng trưởng trung bình theo quý của các năm (Tính trung bình theo cột).

// let GrowthQuater = 0 ;
// let GrowthQuaterGroup = []
// let AvgGrowthQuarter ;
// for ( let i = 0;i< growth[0].length; i++){
//     for ( let j = 0; j< growth.length ;j++){
//         if ( i-1 < 0){
//             GrowthQuater += growth[j][i]
//         } else {
//             GrowthQuater += growth[j][i] - growth[j][i-1]
//         }
//         AvgGrowthQuarter = GrowthQuater/growth.length
//     }
//       GrowthQuaterGroup.push(AvgGrowthQuarter)
// }
// console.log(GrowthQuaterGroup)
