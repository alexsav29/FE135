// Задача 1
console.log(`---------------
Задача 1
---------------`);

let str1 = 'aaa@bbb@ccc';

let str2 = str1.replace(/@/g, '!');
console.log(str2);


// Задача 2
console.log(`---------------
Задача 2
---------------`);

let date1 = new Date('2025-12-31');

const printNewDate = (date) => {
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();

    return `${day}/${month + 1}/${year}` // почему здесь он не считает как надо месяц (приходится прибавлять 1)?
}
console.log(date1);
console.log(printNewDate(date1));


// Задача 3
console.log(`---------------
Задача 3
---------------`);

let str3 = 'Я учу javascript!';

// учу
let strSub1 = str3.substr(2, 3);
let strSub2 = str3.substring(2, 5);
let strSub3 = str3.slice(2, 5);
console.log(strSub1);
console.log(strSub2);
console.log(strSub3);

// javascript
let strSub1_2 = str3.substr(6, 10);
let strSub2_2 = str3.substring(6, 16);
let strSub3_2 = str3.slice(6, 16);
console.log(strSub1_2);
console.log(strSub2_2);
console.log(strSub3_2);


// Задача 4
console.log(`---------------
Задача 4
---------------`);

const arr4 = [4, 2, 5, 19, 13, 0, 10];

// вариант 1 (цикл for)
const getSqrtCube = (array) => {
    let sum = 0;
    let res = 0;

    for (let i = 0; i < array.length; i = i + 1) {
        sum = sum + Math.pow(array[i], 3);
    };

    res = Math.sqrt(sum);

    return `Квадратный корень из суммы кубов элементов массива: ${res}`
}

console.log(getSqrtCube(arr4));


// вариант 2 (метод map и forEach)
console.log(`***************
Вариант 2`);
const getSqrtCube2 = (array) => {
    let sum = 0;
    let res = 0;

    const arr = array.map((item) => Math.pow(item, 3));
    arr.forEach((item) => sum = sum + item);
    res = Math.sqrt(sum);

    return `Квадратный корень из суммы кубов элементов массива: ${res}`
};

console.log(getSqrtCube2(arr4));


// Задача 5
console.log(`---------------
Задача 5
---------------`);

const func5 = (a, b) => {
    let c = Math.abs(a - b);
    return c
};

console.log(func5(3, 5));
console.log(func5(6, 1));


// Задача 6
console.log(`---------------
Задача 6
---------------`);

// 12:59:59 31.12.2014

let date = new Date();

const addDigit = (str) => str.toString().padStart(2, '0');

const printCurrentDate = (date) => {
    let year = addDigit(date.getFullYear());
    let month = addDigit(date.getMonth() + 1);
    let day = addDigit(date.getDate());
    let hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours(); // можно ли было здесь как-то применить .toLocaleTimeString('ru', { hour: "2-digit" }) ???
    hours = addDigit(hours);
    let minutes = addDigit(date.getMinutes());
    let seconds = addDigit(date.getSeconds());

    return `${hours}:${minutes}:${seconds} ${day}.${month}.${year}`
};
console.log(printCurrentDate(new Date()));


// Задача 7
console.log(`---------------
Задача 7
---------------`);

let str7 = 'aa aba abba abbba abca abea';

const mathcAba = (str) => {
    let regExp = /[a][b]+[a]/g;
    return str.match(regExp);
};

console.log(mathcAba(str7));


// Задача 8
console.log(`---------------
Задача 8
---------------`);
// +370 (xxx) xx-xxx
// +1 (xxx) xxx-xxxx
// +7 (ххх) ххх-хх-хх
// +375 (хх) ххх-хх-хх

// вариант 1
const phoneValidation = (phone) => {
    let regExp = /[\+][\d]{1,3}[\s|-]?[\d]{2,3}[\s|-]?[\d]{2,3}[\s|-]?[\d]{2,4}[\s|-]?[\d]{2}/; // когда после последнего набора ставлю знак вопроса (то что набор символов в квадратных скобках может быть, а может и не быть) почему-то вылетает ошибка  -> [\d]{2}?

    return regExp.test(phone);
};

console.log(phoneValidation('+370-655-77-434'));
console.log(phoneValidation('+1-579-999-898')); // не могу понять почему такой вариант выдаёт false, когда судф по регулярке должен давать true. Я же указал количество от 2 до 4. Т.е. 3 символа должны подходить
console.log(phoneValidation('+1-579-999-8988'));
console.log(phoneValidation('+7-495-677-89-89'));
console.log(phoneValidation('+375-29-777-89-89'));

console.log(phoneValidation('+375-29-77-89-89')); // получается чтобы совсем была строгая валидация, нужно писать функция через switch, чтобы при введённом коде страны, у каждой страны была своя регулярка?


// вариант 2 
console.log('Вариант 2');

const phoneValidation2 = (phone) => {
    let regExp = /([\+][\d]{1,3}[\s|-]?[\d]{2,3})[\s|-]?([\d]{2,3}[\s|-]?[\d]{2,4}[\s|-]?[\d]{2}){5,7}/;

    return regExp.test(phone);
};

console.log(phoneValidation('+370-655-77-434'));
console.log(phoneValidation('+1-579-999-898'));
console.log(phoneValidation('+1-579-999-8988'));
console.log(phoneValidation('+7-495-677-89-89'));
console.log(phoneValidation('+375-29-777-89-89'));

console.log(phoneValidation('+375-29-77-89-89'));


// Задача 9
console.log(`---------------
Задача 9
---------------`);
// как указать в регулярке, что цифры не могут быть единственными в имени адреса электронной почты? Ъотя, если указать так как я, что имя не может начинаться с цифр, то так работает и для случая, когда имя не должно полностью состоять из цифр.
// Так и нужно делать?

let testEmail = 't-est_1@test.com';

const emailValidation = (email) => {
    let regExp = /(^[^\d][\w-]{2,})@([\w-]{2,11}\.[A-za-z]{2,11})/;

    return regExp.test(email);
};

console.log(emailValidation(testEmail)); // указал, что в домене верхнего уровня не может быть больше 11 символов. На сайте по проверке регулярок всё работает нормально, в браузере нет...


// Задача 10
console.log(`---------------
Задача 10
---------------`);
// ([http]+[s]?:\/\/)([\w-\.]) -> ещё так начинал, но не работало

// эту делал сам

const parseEmail = (email) => {
    let regExp = /(http[s]?:\/\/[\w\-\.]+)([\/\w\-]+)?(\?[\w_=&]+)?(#[\w]+)?/;

    return email.match(regExp);
};

console.log(parseEmail('https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3'));


// более красивый вывод в консоль без всего адреса 

let arrParseEmail = parseEmail('https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3');

const filterParseEmail = (array) => array.filter((_, index) => index !== 0);

console.log(filterParseEmail(arrParseEmail));


/*
// почему в этом случае регулярка отрабатывает криво?

const parseEmail = (email) => {
    let regExp = /([https?:\/\/][\w\-\.]+)([\/\w\-]+)?(\?[\w_=&]+)?(#[\w]+)?/;

    return email.match(regExp);
};

console.log(parseEmail('https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3'));

*/