// let a = 20;
// let b = 20;

// a > b ? console.log('Hello') : console.log('Bye');

/*
if (a > b) {
    console.log('Hello');
} else if (a == b) {
    console.log('Bye');
} else {
    console.log('else');
}
*/

// console.log(a > b ? true : false);
/*
let adminRight = false;
let isAdmin = adminRight ? 'верно' : 'Ложь';
console.log(isAdmin);
*/

//  ---------------------------

// Задача 1

let myName = 'Alex';
console.log(myName);

// Задача 2

let isStudent = false;
console.log(isStudent ? 'Я студент' : 'Я не студент');

isStudent ? console.log('Я студент') : console.log('Я не студент');

if (isStudent) {
    console.log('Я студент');
} else {
    console.log('Я не студент');
}

// Задача 3

let temperature = 21;
let tempF = temperature * 1.8 + 32;
console.log(tempF);

// Задача 4

let isAdmin = true;
console.log(isAdmin ? 'Вы Администратор' : 'Вы не Администратор');
if (isAdmin) {
    console.log('Вы Администратор');
} else {
    console.log('Вы не Администратор');
}

// Задача 5

let num1 = 25;
let num2 = 36;

console.log(`Сумма: ${num1 + num2}
Разность: ${num1 - num2}
Произведение: ${num1 * num2}
Частное: ${num1 / num2}
Остаток от деления: ${num1 % num2}`);

// Задача 6

let isEven;
let num = 42;
num % 2 == 0 ? isEven = true : isEven = false;
console.log(isEven ? 'Число чётное' : 'Число нечётное');

// Задача 7

let numStr = '42';
let newNumStr = +numStr;
console.log(newNumStr, typeof newNumStr);

newNumStr = Number(numStr);
console.log(newNumStr, typeof newNumStr);

newNumStr = parseInt(numStr);
console.log(newNumStr, typeof newNumStr);

newNumStr = parseFloat(numStr);
console.log(newNumStr, typeof newNumStr);


// Задача 8

let boolVal = false;
console.log(+boolVal);
console.log(Number(boolVal));


// Задача 9

let mixedValue = '42abc';
console.log(parseInt(mixedValue));
console.log(parseFloat(mixedValue));

// Задача 10

let percentage = 75;
let result = percentage + '%';
console.log(result, typeof result);

// Задача 11

let totalAmount = 100;
let res = totalAmount + '$';
console.log(res, typeof res);
