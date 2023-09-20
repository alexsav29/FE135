// Задача 2
console.log(`
----------------------
Задача 2
----------------------`);

let a1 = 5 % 3; // 2
let a2 = 3 % 5; // 0            ??? типо потому что не делится нацело и остаётся само число 3?
let a3 = 5 + '3';   // '53'
let a4 = '5' - 3;   // 2
let a5 = 75 + 'кг'; // '75кг'
let a6 = 785 * 653; // 512605
let a7 = 100 / 25;  // 4
let a8 = 0 * 0; // 0
let a9 = 0 / 2; // 0
let a10 = 89 / 0;   // Infinity
let a11 = 98 + 2;   // 100
let a12 = 5 - 98;   // -93
let a13 = (8 + 56 * 4) / 5; // 46,4
let a14 = (9 - 12) * 7 / (5 + 2);   // -3
let a15 = +"123";   // 123
let a16 = 1 || 0;   // 1
let a17 = false || true;    // true
let a18 = true > 0; // false    ???     а здесь true преобразуется в 1?

console.log(a1, typeof a1);
console.log(a2, typeof a2);
console.log(a3, typeof a3);
console.log(a4, typeof a4);
console.log(a5, typeof a5);
console.log(a6, typeof a6);
console.log(a7, typeof a7);
console.log(a8, typeof a8);
console.log(a9, typeof a9);
console.log(a10, typeof a10);
console.log(a11, typeof a11);
console.log(a12, typeof a12);
console.log(a13, typeof a13);
console.log(a14, typeof a14);
console.log(a15, typeof a15);
console.log(a16, typeof a16);
console.log(a17, typeof a17);
console.log(a18, typeof a18);


// Задача 3
console.log(`
----------------------
Задача 3
----------------------`);

let width = 10;
let height = 23;
let sRectangle = width * height;
console.log(`Площадь прямоугольника равна: ${sRectangle}`);


// Задача 4
console.log(`
----------------------
Задача 4
----------------------`);
let hCilinder = 10;
let dCilinder = a7;
let VCilindra = ((3.14 * dCilinder * dCilinder) / 4) * hCilinder;

console.log(`Объём цилиндра: ${VCilindra}`);


// Задача 5
console.log(`
----------------------
Задача 5
----------------------`);

let r = 5;
let SKruga = 3.14 * r * r;

console.log(`Площадь круга: ${SKruga}`);


// Задача 6
console.log(`
----------------------
Задача 6
----------------------`);

let a = 5;
let b = 7;
let h = 10;
let STrap = ((a + b) / 2) * h;

console.log(`Площадь трапеции: ${STrap}`);


// Задача 7
console.log(`
----------------------
Задача 7
----------------------`);

let S = 2000000;
let p = 0.1;
let years = 5;
let Pereplata = S * p * years;

console.log(`Переплата по кредиту: ${Pereplata}`);


// Задача 8
console.log(`
----------------------
Задача 8
----------------------`);

a = 8;
b = 3;

let x = (16 + 2 * b - a) / 2; // a + 2*x - 2*b = 16
console.log(`Значение x в 1-ом уравнении: ${x}`);

x = (a - 15 * b) / (b - 6); // b*x + 15*b = a + 6*x
console.log(`Значение x во 2-ом уравнении: ${x}`);

x = 23780 / (3 + a + b); // x+2x+ax+bx=23780
console.log(`Значение x в 3-ем уравнении: ${x}`);