// Задача 1
console.log(`
----------------------
Задача 1
----------------------`);
let name = prompt('Введите ваше имя');
let age = prompt('Введите ваш возраст');
let city = prompt('Введите ваш город');
let phone = prompt('Введите ваш номер телефона');
let email = prompt('Введите ваш email');
let company = prompt('Введите вашу компанию');

console.log(`Меня зовут ${name}. Мне ${age} лет. Я проживаю в городе ${city} и работаю в компании ${company}. Мои контактные данные: ${phone}, ${email}.`);

// Задача 2
console.log(`
----------------------
Задача 2
----------------------`);
let birthYear = 2023 - age;
console.log(`${name} родился в ${birthYear} году`);

// Задача 3
console.log(`
----------------------
Задача 3
----------------------`);
let str_3 = prompt('Введите строку из 6 чисел');
(+str_3[0] + +str_3[1] + +str_3[2] === +str_3[3] + +str_3[4] + +str_3[5]) ? console.log('Да, сумма первых трёх цифр равняется сумме последних трёх') : console.log('Нет, сумма первых трёх цифр не равняется сумме последних трёх');

// Задача 4
console.log(`
----------------------
Задача 4
----------------------`);
let a = +prompt('Введите число a');
console.log(a > 0 ? 'Верно' : 'Неверно');

// Задача 5
console.log(`
----------------------
Задача 5
----------------------`);
a = 10;
let b = 2;
console.log(`Сумма a и b: ${a + b}
             Разность a и b: ${a - b}
             Произведение a и b: ${a * b}
             Частное a и b: ${a / b}`);

if (a + b > 1) console.log(`Квадрат суммы a и b: ${(a + b) ** 2}`);

// Задача 6
console.log(`
----------------------
Задача 6
----------------------`);
(a > 2 && a < 11) || (b > 6 && b < 14) ? console.log('Верно') : console.log('Неверно');
console.log(a, b);


// Задача 7
console.log(`
----------------------
Задача 7
----------------------`);
let n = +prompt('Введите число от 0 до 59');
switch (true) {
    case (n >= 0 && n < 15):
        console.log('Введённое число находится в 1-ой четверти часа');
        break;
    case (n >= 15 && n < 30):
        console.log('Введённое число находится во 2-ой четверти часа');
        break;
    case (n >= 30 && n < 45):
        console.log('Введённое число находится в 3-ей четверти часа');
        break;
    case (n >= 45 && n < 60):
        console.log('Введённое число находится в 4-ой четверти часа');
        break;
    default:
        console.log('Вы ввели число не из промежутка от 0 до 59');
}


// Задача 8
console.log(`
----------------------
Задача 8
----------------------`);
let day = +prompt('Введите число от 1 до 31');
switch (true) {
    case (day >= 1 && day <= 10):
        console.log('Число в 1-ой декаде месяца');
        break;
    case (day >= 11 && day <= 20):
        console.log('Число во 2-ой декаде месяца');
        break;
    case (day >= 21 && day <= 31):
        console.log('Число в 3-ей декаде месяца');
        break;
    default:
        console.log('Вы ввели число не в промежутке от 1 до 31');
}


// Задача 9
console.log(`
----------------------
Задача 9
----------------------`);
let dayAmount = +prompt('Введите количество дней');
let dayAmount_2 = dayAmount;

let yearAmount = (dayAmount < 365) ? 'Меньше года' : Math.floor(dayAmount / 365);
if (dayAmount > 365) dayAmount %= 365;

let monthAmount = (dayAmount < 31) ? 'Меньше месяца' : Math.floor(dayAmount / 31);
if (dayAmount > 31) dayAmount %= 31;

let weekAmount = (dayAmount < 7) ? 'Меньше недели' : Math.floor(dayAmount / 7);
dayAmount %= 7;

let hourAmount = dayAmount_2 * 24;
let minuteAmount = hourAmount * 60;
let secondAmount = minuteAmount * 60;

console.log(`
Количество лет: ${yearAmount}
Количество месяцев: ${monthAmount}
Количество недель: ${weekAmount}
Количество дней: ${dayAmount}
${dayAmount_2} дня(ей) это: ${hourAmount} часов или ${minuteAmount} минут или ${secondAmount} секунд`);

// Можно просто сделать чтобы находил сколько в введённом количестве дней уместится лет, месяцев, недель (как со временем выше)

let monthAmount_2 = (dayAmount_2 < 31) ? 'Меньше месяца' : Math.floor(dayAmount_2 / 31);
let weekAmount_2 = dayAmount_2 / 7;

console.log(`
${dayAmount_2} дня(ей) это: 
лет - ${yearAmount}
или
месяцев - ${monthAmount_2}
или 
недель - ${weekAmount_2}
или 
${hourAmount} часов или ${minuteAmount} минут или ${secondAmount} секунд`);


// Задача 10
console.log(`
----------------------
Задача 10
----------------------`);
// по условию 8 задачи число от 1 до 31

let day_10 = +prompt('Введите день года от 1 до 365');
let month = 0;
let yearTime = '';

if (day_10 < 1 || day_10 > 365) {
    console.log('Вы ввели неверное значение');
} else {
    switch (true) {
        case (day_10 >= 1 && day_10 <= 31):
            month = 1;
            break;
        case (day_10 >= 32 && day_10 <= 59):
            month = 2;
            break;
        case (day_10 >= 60 && day_10 <= 90):
            month = 3;
            break;
        case (day_10 >= 91 && day_10 <= 120):
            month = 4;
            break;
        case (day_10 >= 121 && day_10 <= 151):
            month = 5;
            break;
        case (day_10 >= 152 && day_10 <= 181):
            month = 6;
            break;
        case (day_10 >= 182 && day_10 <= 212):
            month = 7;
            break;
        case (day_10 >= 213 && day_10 <= 243):
            month = 8;
            break;
        case (day_10 >= 244 && day_10 <= 273):
            month = 9;
            break;
        case (day_10 >= 274 && day_10 <= 304):
            month = 10;
            break;
        case (day_10 >= 305 && day_10 <= 334):
            month = 11;
            break;
        case (day_10 >= 335 && day_10 <= 365):
            month = 12;
            break;
    }


    switch (month) {
        case 12:
        case 1:
        case 2:
            yearTime = 'Зима';
            break;
        case 3:
        case 4:
        case 5:
            yearTime = 'Весна';
            break;
        case 6:
        case 7:
        case 8:
            yearTime = 'Лето';
            break;
        case 9:
        case 10:
        case 11:
            yearTime = 'Осень';
            break;

    }

    console.log(`Месяц: ${month}
Пора года: ${yearTime}`);
}