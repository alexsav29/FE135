let a = 10;

if (10 > 9) {
    let a = 15;
}

// console.log(a);

// -----------------------

// Задача 1
let num_1 = +prompt('Введите первое число');
let num_2 = +prompt('Введите второе число');
let result = +prompt('Введите результат умножения');
alert((result === num_1 * num_2) ? `Правильно. Это ${result}` : `Неправльно, это не ${result}. Правильный ответ ${num_1 * num_2}`);


// Задача 2
let n = +prompt('Ведите число от 0 до 59');
switch (true) {
    case (n >= 0 && n < 15):
        console.log('Ваше число в 1-ой четверти');
        break;
    case (n >= 15 && n < 30):
        console.log('Ваше число во 2-ой четверти');
        break;
    case (n >= 30 && n < 45):
        console.log('Ваше число в 3-ей четверти');
        break;
    case (n >= 45 && n <= 59):
        console.log('Ваше число в 4-ой четверти');
        break;
    default:
        console.log('Вы ввели значение не в промежутке от 0 до 59');
}


// Задача 3

let str_3 = prompt('Введите строку символов, чтобы проверить является ли первым символом "a"');
str_3[0] === 'a' ? console.log('Да, первый символ "a"') : console.log(`Нет, первый символ ${str_3[0]}`);



// Задача 4

let str_4 = prompt('Введите строку из чисел, чтобы проверить является ли первый символ 1, 2 или 3');
(str_4[0] === '1' || str_4[0] === '2' || str_4[0] === '3') ? console.log(`Да, первый символ ${str_4[0]}`) : console.log(`Нет, первый символ не 1, 2 или 3, а ${str_4[0]}`);


// Задача 5
// 1 способ
let str_5 = prompt('Введите трёхзначное число, чтобы найти сумму его цифр');
console.log(`Сумма цифр числа ${str_5} равна ${+str_5[0] + +str_5[1] + +str_5[2]}`);

// 2 способ
let firstSymbol_5 = +str_5[0];
let secondSymbol_5 = +str_5[1];
let thirdSymbol_5 = +str_5[2];
let result_5 = firstSymbol_5 + secondSymbol_5 + thirdSymbol_5;
console.log(`Сумма цифр числа ${str_5} равна ${result_5}`);


// Задача 6
let a6 = +prompt('Введите число');
console.log((a6 === 0 || a6 === 2) ? (a6 = a6 + 7) : (a6 / 7));



// Задача 7
let age = +prompt('Введите возраст Stive');

// 1 способ (if else)
if (age >= 0 && age < 12) {
    console.log('Steve is a child');
} else if (age >= 12 && age < 18) {
    console.log('Steve is a teenager');
} else {
    console.log('Steve is an adult');
};

// 2 способ (switch)
switch (true) {
    case (age >= 0 && age < 12):
        console.log('Steve is a child');
        break;
    case (age >= 12 && age < 18):
        console.log('Steve is a teenager');
        break;
    default:
        console.log('Steve is an adult');
}

// 3 способ (? и :)
(age >= 0 && age < 12) ? console.log('Steve is a child') :
    (age >= 12 && age < 18) ? console.log('Steve is a teenager') : console.log('Steve is an adult');



// Задача 8
let number_1 = +prompt('Введите первое число');
let number_2 = +prompt('Введите второе число');

if (number_1 > number_2) {
    alert(`Максимальное число первое - ${number_1}`);
} else if (number_2 > number_1) {
    alert(`Максимальное число второе - ${number_2}`);
} else {
    alert(`Числа равны`);
}


// Задача 9
let x = +prompt('Введите первое число');
let y = +prompt('Введите второе число');
(x > y) ? console.log('x больше, чем y') :
    (x < y) ? console.log('x не больше, чем y') : console.log('x равен y');



// Задача 10
let firstSide = +prompt('Введите первую сторону треугольника');
let secondSide = +prompt('Введите вторую сторону треугольника');
let thirdSide = +prompt('Введите третью сторону треугольника');
if ((firstSide + secondSide > thirdSide) && (firstSide + thirdSide > secondSide) && (secondSide + thirdSide > firstSide)) {
    console.log('Да, треугольник может существовать');
} else {
    console.log('Нет, треугольник не может существовать');
}


// Задача 11
let ageMag = +prompt('Введите возраст для обучения в магистратуре');

switch (true) {
    case (ageMag >= 0 && ageMag < 20):
        console.log('Вам ещё нельзя учиться в магистратуре');
        break;
    case (ageMag >= 20 && ageMag < 30):
        console.log('Вам можно учиться в магистратуре');
        break;
    case (ageMag >= 30):
        console.log('В зависимости от обстоятельств');
        break;
    default:
        console.log('Вы ввели отрицательное значение возраста');
}

if (ageMag >= 0 && ageMag < 20) {
    console.log('Вам ещё нельзя учиться в магистратуре');
} else if (ageMag >= 20 && ageMag < 30) {
    console.log('Вам можно учиться в магистратуре');
} else if (ageMag >= 30) {
    console.log('В зависимости от обстоятельств');
} else {
    console.log('Вы ввели отрицательное значение возраста');
}



// Задача 12
// 1 вариант
let num_12 = +prompt('Введите число');

(num_12 > 0 && num_12 % 5 == 0) ? console.log(`Число ${num_12} положительное и кратно 5`) : console.log(`Число ${num_12} не является одновременно положительным и кратным 5`);

// 2 вариант (хотел пойти от обратного, почему-то не заработал нориально)
num_12 = +prompt('Введите число');
((num_12 < 0) && (num_12 % 5 != 0)) ? console.log(`Число ${num_12} не является одновременно положительным и кратным 5`) : console.log(`Число ${num_12} является положительным и кратным 5`);


// Задача 13
let num_13 = prompt('Введите число');
(num_13[0] && num_13[1] && !num_13[2]) ? console.log('Число двузначное') : console.log('Число не двузначное');



