/*
date = new Date(159556626165);
console.log(date);

console.log(Date.now());

date = new Date();
console.log(date.toISOString());
*/


let date = new Date('2023 , Oc , 1');
console.log(date);

console.log(date.getDate());

console.log(date.getTimezoneOffset()); // -180  // в минутах

date = new Date();

console.log(date.toLocaleString('ru', {
    era: "narrow"
})); // 19.10.2023 н.э., 16:53:31


console.log(date.toISOString()); // 2023-10-19T13:53:31.169Z



// пн, 14 января, 2023 год - 19:00
// вариант без форматирования
/*
const getCurrentDate = (date) => {

    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, 0);
    const minutes = date.getMinutes().toString().padStart(2, 0);
    const numberOfDay = date.getDate().toString().padStart(2, 0);
    const month = date.getMonth();
    const day = date.getDay();

    const dayArray = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    const monthArray = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

    return `${dayArray[day]}, ${numberOfDay} ${monthArray[month]}, ${year} год - ${hours}:${minutes}`
    // return `пн, 14 января, 2023 год - 19:00`

};

const result = getCurrentDate(new Date(2023, 1, 9));
console.log(result);
document.write(`<h1>${result}</h1>`);
*/




// пн, 14 января, 2023 год - 19:00
// (вариант с форматированием)

const formating = (number, length, elem) => number.toString().padStart(length, elem);

const getCurrentDate = (date) => {

    const year = date.getFullYear();
    const hours = formating(date.getHours(), 2, 0);
    const minutes = formating(date.getMinutes(), 2, 0);
    const numberOfDay = formating(date.getDate(), 2, 0);
    const month = date.getMonth();
    const day = date.getDay();

    const dayArray = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    const monthArray = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

    return `${dayArray[day]}, ${numberOfDay} ${monthArray[month]}, ${year} год - ${hours}:${minutes}`
    // return `пн, 14 января, 2023 год - 19:00`

};

const result = getCurrentDate(new Date(2023, 1, 9));
console.log(result);
document.write(`<h1>${result}</h1>`)


/*
const str = "Hello";
console.log(str.charAt(1)); // Вывод: "e"
console.log(str.charCodeAt(1)); // Вывод: 101

console.log('e'.charCodeAt()); // Вывод: 101
*/



// Задача 10 (ДЗ 6)

// https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3


const parseURL = (url) => {

    const regExp = /(https?:\/\/[A-Za-z0-9-\.]{5,})([\/A-Za-z0-9-]*)([\?\w=&-]*)?([#\w]{2,})/;

    const partsOfUrl = url.match(regExp);

    return partsOfUrl.filter((_, index) => index !== 0)
};

const parseResult = parseURL('https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3');

console.log(parseResult);

/*
const arrUrl = parseURL('https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3');

arrUrl.forEach(element => {
    console.log(element);
});
*/