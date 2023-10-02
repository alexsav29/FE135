// Задача 1
console.log(`----------------
Задача 1
----------------`);

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i = i + 1) {
    console.log(arr[i]);
}


// Задача 2
console.log(`----------------
Задача 2
----------------`);
arr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for (let i = 0; i < arr.length; i = i + 1) {
    if (arr[i] < 0 && arr[i] > -10 && arr[i] < -3) {
        console.log(arr[i]);
    }
}

// Задача 3
console.log(`----------------
Задача 3
----------------`);
let result = 0;

arr = [];

let i = 23;

while (i <= 57) {
    // arr[i] = i;
    arr.push(i);
    i = i + 1;
}
console.log(arr);

arr = [];

for (let i = 23; i <= 57; i = i + 1) {
    arr.push(i);

}
console.log(arr);

for (let i = 0; i < arr.length; i = i + 1) {
    result = result + arr[i];
}

console.log(`Сумма элементов массива - ${result}`);

// Задача 4
console.log(`----------------
Задача 4
----------------`);

arr = ['10', '20', '30', '50', '235', '3000'];

for (let i = 0; i < arr.length; i = i + 1) {
    if (+arr[i][0] === 1 || +arr[i][0] === 2 || +arr[i][0] === 5) {
        console.log(arr[i]);
    }
}

// Задача 5
document.write(`----------------<br />
Задача 5 <br />
----------------`);
let arrDays = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

for (let i = 0; i < arrDays.length; i = i + 1) {
    if (arrDays[i] !== 'СБ' && arrDays[i] !== 'ВС') { // Почему здесь нужна логика И , а не ИЛИ???
        document.write(`<p>${arrDays[i]}</p><br />`);
    } else {
        document.write(`<h2>${arrDays[i]}</h2><br />`);
    }
}


// Задача 6
console.log(`----------------
Задача 6
----------------`);
arr = ['Котик', true, -9, 853, [789, -52], false, 'love', 'tape'];
arr.push('Привет');

console.log(`Последний элемент массива - ${arr[arr.length - 1]}`);

/*
// Задача 7
console.log(`----------------
Задача 7
----------------`);
arr = [];
let arrSort = [];

for (; ;) {
    let n = prompt('Введите числовое значение');
    if (isNaN(n)) {
        alert('Вы ввели не число. Попробуйте ещё раз');
        continue;
    }

    if (!+n) {
        break;
    }

    arr.push(n);
}

arrSort = [...arr]; // или же можно перегонять циклом (значения из исходного массива в новый)
arrSort.sort((a, b) => a - b);

console.log(`Получившийся массив`);
console.log(arr);
console.log(`Отсортированный массив`);
console.log(arrSort);
*/

// Задача 8
console.log(`----------------
Задача 8
----------------`);
console.log(`Через цикл while
----------------`);
arr = [12, false, 'Текст', 4, 2, -5, 0];
let arrRev = [];

i = 0;

while (i < arr.length) {
    arrRev[i] = arr[arr.length - 1 - i];
    i = i + 1;
}

console.log(`Перевёрнутый массив`);
console.log(arrRev);


console.log(`----------------
Через метод reverse
----------------`);
arr = [12, false, 'Текст', 4, 2, -5, 0];
arrRev = [];

arrRev = [...arr];
arrRev.reverse();

console.log(`Перевёрнутый массив`);
console.log(arrRev);


// Задача 9
console.log(`----------------
Задача 9
----------------`);

arr = [5, 9, 21, , , 9, 78, , , , 6];
let count = 0;

for (let i = 0; i < arr.length; i = i + 1) {
    if (arr[i] === undefined) {
        count = count + 1;
    }
}

console.log(`Количество пустых элементов в массиве - ${count}`);


// Задача 10
console.log(`----------------
Задача 10
----------------`);
arr = [48, 9, 0, 4, 21, 2, 1, 0, 8, 84, 76, 8, 4, 13, 2];

let firstIndex = arr.indexOf(0);
let lastIndex = arr.lastIndexOf(0);

if (firstIndex === -1 || lastIndex === -1 || firstIndex === lastIndex) {
    console.log(`В массиве нет двух нулей, чтобы искать между ними сумму элементов
    0`);
} else {
    let sum = 0;

    for (let i = firstIndex; i <= lastIndex; i = i + 1) {
        sum = sum + arr[i];
    }

    console.log(`Сумма элементов массива между двумя крайними нулями - ${sum}`);
}


// Задача 11
console.log(`----------------
Задача 11
----------------`);

let h = +prompt('Введите высоту треугольника');


for (let i = 1; i <= h; i = i + 1) {
    let str = '';
    let p = '';

    for (let j = 0; j < h - i; j = j + 1) {
        str = str + ' ';
    }

    for (let a = 0; a < i * 2 - 1; a = a + 1) {
        p = p + '^';
    }

    console.log(`${str + p}`);
}