var x =true;
var y=true;
var z=false;
console.log(x && y && z);
console.log(x && y && !z);
console.log((x && y) || z);
console.log((x && y) || !z);
console.log(x && (y || z));
console.log(x && !(y || z));
console.log(x && (y || !z));
console.log(x && (!y || z));

// x && y && z → false
// x && y && !z -> true
// (x && y) || z → true
// (x && y) || !z → true
// x && (y || z) → true
// x && !(y || z) → false
// x && (y || !z) → true
// x && (!y || z) → false

// name = 'AAA', age = 20, isGood = true

// age + 10 = 30
// age % 3 = 2
// name + ' BBB' = AAABBB
// !isGood = false

// name == 'aaa' && age >= 20 → False
// name != 'aaa' && isGood → True
// !(age < 10) && !isGood → False

var name="AAA"
var age = 20
var isGood=true
console.log(age + 10);
console.log(age % 3);
console.log(name +' BBB');
console.log(!isGood);
console.log(name == 'aaa' && age >= 20);
console.log(name != 'aaa' && isGood);
console.log(!(age < 10) && !isGood);

// a + b + c = 60 
// a - b / c = 9 1/3
// a - (b * c) =  -590
// d - (a * b) - c = -190 
// a + b + c + d = 6040
// d + a + b + c = 40102030
// d + a - b + c = 4010-20+30 = 4020
// a - b + d - c = -10 + "40" - 30= -1070
// d - c + a - b = 10 + 10 - 20=0
// a * b + d * c = 200 + 1200= 1400
a = 10, b = 20, c = 30, d = '40'
console.log(a + b + c);
console.log(a - b / c);
console.log(a - (b * c));
console.log(d - (a * b) - c);
console.log(a + b + c + d);
console.log(d + a + b + c);
console.log(d + a - b + c);
console.log(a - b + d - c);
console.log(d - c + a - b);
console.log(a * b + d * c);

// x = true, y = false, z = 10

// x && y → false
// x && !y → true
// x && z == 10 → true
// (x && z == 10) → true
// !(x && z == 10) → false
// !(x && z == 50) → true

// x && y && z == 10 → false
// x && !y && z == 10 → true
// x || y || z == 10 → true
// (x && y) || z != 10 → false
// !(x && z == 10) || y → false

x = true, y = false, z = 10

console.log(x && y);
console.log(x && !y);
console.log(x && z == 10);
console.log((x && z == 10));
console.log(!(x && z == 10));
console.log(!(x && z == 50));
console.log(x && y && z == 10);
console.log(x && !y && z == 10);
console.log(x || y || z == 10);
console.log((x && y) || z != 10);
console.log(!(x && z == 10) || y);

// bai 5
// 5. Hãy khai báo các biến và cho biết kết quả của các phép toán dưới đây? 
// Giải thích vì sao có kết quả đó?
// a = 1, b = '2', c = 3, d = '4'

// b + d = 24
// a + b + c + d = 1234 

// a - b + c - d = -27
// a - b - c + d = -54 
// (b + d) - (a + c) = 20 
// (a + b) - (c + d) = 12 - 34 = -22 
// a * c + b * d = 11 
// -b + d = -24
// -b - d = -6 
// -(b + d) = -24
a = 1, b = '2', c = 3, d = '4'
console.log(b + d);
console.log(a + b + c + d);
console.log(a - b + c - d);
console.log(a - b - c + d);
console.log((b + d) - (a + c));
console.log((a + b) - (c + d));
console.log(a * c + b * d);
console.log(-b + d);
console.log(-b - d);
console.log(-(b + d));

// 6. Hãy khai báo các biến và cho biết kết quả của các phép toán dưới đây? 
// Giải thích vì sao có kết quả đó?
// age = 25, isMarried = false, isRich = true

// age > 25 && isMarried && isRich → ?
// (age <= 25 || isMarried) && isRich → ?
// (age > 10 || isRich) && isMarried → ?
// !(age >= 15 && isMarried) && isRich → ?
// !(age <= 20) || !(isMarried && isRich) → ?
// (age > 8 && !isMarried) || isRich → ?
// !(age < 8 && !isMarried) || isRich → ?
// (age == 8 && isMarried) || !isRich → ?

age = 25, isMarried = false, isRich = true
console.log
console.log
console.log
console.log
console.log
console.log
console.log
console.log