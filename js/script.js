/*
// вывод сыммы чисел числа 5
let a = 5;
let sum = 0;

for (let i = 0; i <= 5; i = i + 1) {
    sum = sum + i;
}
console.log(sum);
*/

/*
// вывод сыммы каждого из чисел числа 5
let a = 5;
let sum = 0;

for (let i = 1; i <= a; i = i + 1) {
    sum = 0;
    for (let j = 1; j <= i; j = j + 1) {
        sum = sum + j;
    }
    console.log(`Сумма чисел числа ${i} - ${sum}`);
}
*/

/*
for (var i = 0; i < 10; i = i + 1) {
    console.log(i);
}
console.log(`После цикла i равно ${i}`);
console.log(i);
*/

/*
// Задача 9 (ДЗ 2)
const day = 62;
const DAY_IN_YEAR = 365;
// (day < 365) ? day = 'Меньше года' : day = day / 365 ;
const currentYear = day / DAY_IN_YEAR;
const currentMonth = day / 30;
const currentWeek = day / 7;
const currentHour = day * 24;
const currentMinute = currentHour * 60;
const currentSecond = currentMinute * 60;

if (currentYear < 1) {
    console.log('Меньше года');
}

if (currentMonth < 1) {
    console.log('Меньше месяца');
}

if (currentWeek < 1) {
    console.log('Меньше недели');
}
*/

// Задача 10 (ДЗ 2)
/*
const day = 425;
if (!(day >= 1)) {
    console.log('Вы неверно ввели число');
} else {
    let currentYearDay = day % 365;
    (currentYearDay === 0) ? currentYearDay = 365 : currentYearDay = currentYearDay;

    console.log(`Текущий день - ${currentYearDay}`);

    switch (true) {
        case (currentYearDay >= 1 && currentYearDay <= 31):
            console.log('1-ый месяц, январь, зима');
            break;
        case (currentYearDay >= 32 && currentYearDay <= 59):
            console.log('2-ой месяц, февраль, зима');
            break;
        case (currentYearDay >= 60 && currentYearDay <= 90):
            console.log('3-ый месяц, март, весна');
            break;
        case (currentYearDay >= 91 && currentYearDay <= 120):
            console.log('4-ый месяц, апрель, весна');
            break;
        case (currentYearDay >= 121 && currentYearDay <= 151):
            console.log('5-ый месяц, май, весна');
            break;
        case (currentYearDay >= 152 && currentYearDay <= 181):
            console.log('6-ый месяц, июнь, лето');
            break;
        case (currentYearDay >= 182 && currentYearDay <= 212):
            console.log('7-ый месяц, июль, лето');
            break;
        case (currentYearDay >= 213 && currentYearDay <= 243):
            console.log('8-ый месяц, август, лето');
            break;
        case (currentYearDay >= 244 && currentYearDay <= 273):
            console.log('9-ый месяц, сентябрь, осень');
            break;
        case (currentYearDay >= 274 && currentYearDay <= 304):
            console.log('10-ый месяц, октябрь, осень');
            break;
        case (currentYearDay >= 305 && currentYearDay <= 334):
            console.log('11-ый месяц, ноябрь, осень');
            break;
        case (currentYearDay >= 335 && currentYearDay <= 365):
            console.log('12-ый месяц, дкабрь, зима');
            break;
    }
}



// вариант из класса

const day = 425;
const currentYearDay = day % 365;

if (currentYearDay === 0) {
    console.log('12 месяц, декабрь');
}

switch (currentYearDay) {
    case currentYearDay >= 1 && currentYearDay <= 31:
        console.log('зима, январь');
        break;
    case currentYearDay >= 32 && currentYearDay <= 59:
        console.log('зима, февраль');
        break;
    case currentYearDay >= 60 && currentYearDay <= 90:
        console.log('весна, март');
        break;
    case currentYearDay >= 91 && currentYearDay <= 120:
        console.log('весна, апрель');
        break;
    case currentYearDay >= 121 && currentYearDay <= 151:
        console.log('весна, май');
        break;
    case currentYearDay >= 152 && currentYearDay <= 181:
        console.log('лето, июнь');
        break;
}

*/


// ------------------------------------

// Задача 1
console.log(`------------------
Задача 1
------------------`);
for (let i = 0; i <= 10; i = i + 1) {
    console.log(i);
}

// Задача 2
console.log(`------------------
Задача 2
------------------`);
for (let i = 10; i >= 0; i = i - 1) {
    console.log(i);
}

// Задача 3
console.log(`------------------
Задача 3
------------------`);
for (let i = 1; i <= 20; i = i + 1) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log('Вариант 2');

for (let i = 2; i <= 20; i = i + 2) {
    console.log(i);
}

// Задача 4
console.log(`------------------
Задача 4
------------------`);
for (let i = 1; i <= 20; i = i + 1) {
    if (i % 2 === 1) {
        console.log(i);
    }
}

// Задача 5
console.log(`------------------
Задача 5
------------------`);
for (let i = 1; i <= 10; i = i + 1) {
    console.log(`5 x ${i} = ${i * 5}`);
}

// Задача 6
console.log(`------------------
Задача 6
------------------`);
let sum = 0;

for (let i = 1; i <= 100; i = i + 1) {
    sum = sum + i;
}

console.log(`Сумма чисел числа 100 - ${sum}`);

// Задача 7
console.log(`------------------
Задача 7
------------------`);
let mult = 1;

for (let i = 1; i <= 10; i = i + 1) {
    mult = mult * i;
}
console.log(`Произведение чисел от 1 до 10 - ${mult}`);

// Задача 8
console.log(`------------------
Задача 8
------------------`);
for (let i = 1; i <= 10; i = i + 1) {
    console.log(`Число: ${i} квадрат: ${i ** 2}`);
}

// Задача 9
console.log(`------------------
Задача 9
------------------`);
for (let i = 1; i <= 20; i = i + 1) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

console.log('Второй способ');

for (let i = 3; i <= 20; i = i + 3) {
    console.log(i);
}

// Задача 10
console.log(`------------------
Задача 10
------------------`);
let str = '';
for (let i = 1; i <= 5; i = i + 1) {
    str = str + '*';
    console.log(str);
}

console.log('Второй способ');

for (let i = 1; i <= 5; i = i + 1) {
    let str = '';
    for (let j = 1; j <= i; j = j + 1) {
        str = str + '*';
    }
    console.log(str);
}


// Задача 11
console.log(`------------------
Задача 11
------------------`);
let str_2 = 'В 1996 году компания Microsoft выпустила аналог языка JavaScript, названный JScript. Анонсирован этот язык был 18 июля 1996 года[29]. Первым браузером, поддерживающим эту реализацию, был Internet Explorer 3.0.';

let count = 0;

for (let i = 0; i <= str_2.length - 1; i = i + 1) {
    if (isNaN(str_2[i])) {
        continue;
    }

    if (str_2[i] === ' ') {
        continue;
    }
    count = count + 1;
}

console.log(`Количество цифр в строке - ${count}`);