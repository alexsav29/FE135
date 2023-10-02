/*
for (; ;) {
    const number = +prompt('Введите цифру 1!');
    if (number === 1) {
        console.log('end');
        break;
    }
    console.log(number);
}
*/

/*
for (let i = 1; i <= 20; i = i + 1) {
    if (!(i % 2)) {
        console.log(i);
    }
    console.log(!!i);
}
*/

/*
let str = 'В 1996 году компания Microsoft выпустила аналог языка JavaScript, названный JScript. Анонсирован этот язык был 18 июля 1996 года[29]. Первым браузером, поддерживающим эту реализацию, был Internet Explorer 3.0.';
let count = 0;

for (let i = 0; i < str.length; i = i + 1) {
    if (str[i] === ' ') continue;
    if (!isNaN(str[i])) {
        console.log(str[i]);
        count = count + 1;
    }
}

console.log(count);

*/


// Задача 1
console.log(`---------------
Задача 1
---------------`);
let arr = [1, 2, 3, 4, 89, 156, 215];
let sum = 0;

for (let i = 0; i < arr.length; i = i + 1) {
    sum = sum + arr[i];
}

console.log(`Сумма элементов массива - ${sum}`);


// Задача 2
console.log(`---------------
Задача 2
---------------`);
arr = [1, 2, 3, -4, 89, 156, -215, 58, -9];

for (let i = 0; i < arr.length; i = i + 1) {
    if (arr[i] < 0) {
        console.log(`Первый отрицательный элемент массива - ${arr[i]}
Его индекс - ${i}`);
        break;
    }
}

// Задача 3
console.log(`---------------
Задача 3
---------------`);
arr = [1, 2, 3, -4, 89, 156, -215, 58, -9];
let max = -Infinity;
let min = +Infinity;
sum = 0;

for (let i = 0; i < arr.length; i = i + 1) {
    min = arr[i] < min ? arr[i] : min;
    max = arr[i] > max ? arr[i] : max;
}

sum = min + max;
console.log(`Минимальный - ${min}
Максимальный - ${max}
Сумма минимального и максимального - ${sum}`);


// Задача 4
console.log(`---------------
Задача 4
---------------`);
console.log(`Первый способ
---------------`);
arr = [0, 'N', 98, 'Text', 3, 5];
let newArr = [];

for (let i = 0; i < arr.length; i = i + 1) {
    newArr[i] = arr[arr.length - 1 - i]
}
console.log(`Исходный массив`);
console.log(arr);
console.log(`Перевёрнутый массив`);
console.log(newArr);

console.log(`---------------
Второй способ
---------------`);
arr = [0, 'N', 98, 'Text', 3, 5];
newArr = arr.reverse();

console.log(`Перевёрнутый массив`);
console.log(newArr);


console.log(`---------------
Третий способ
---------------`);
arr = [0, 'N', 98, 'Text', 3, 5];
newArr = [];

for (let i = arr.length - 1; i >= 0; i = i - 1) {
    newArr.push(arr[i]);
}

console.log(`Исходный массив`);
console.log(arr);
console.log(`Перевёрнутый массив`);
console.log(newArr);


// Задача 5
console.log(`---------------
Задача 5
---------------`);
console.log(`Первый способ
---------------`);
let arr1 = [12, 4, 0];
let arr2 = [8, 7, 6];
let arr3 = [];

for (let i = 0; i < arr1.length; i = i + 1) {
    arr3.push(arr1[i] + arr2[i]);
}

console.log(arr3);

console.log(`Второй способ
---------------`);
arr1 = [12, 4, 0];
arr2 = [8, 7, 6];
arr3 = [];

for (let i = 0; i < arr1.length; i = i + 1) {
    arr3[i] = arr1[i] + arr2[i];
}
console.log(arr3);


// Задача 6
console.log(`---------------
Задача 6
---------------`);
console.log(`Первый способ
---------------`);
arr = [1, -5, 0, 3, -4];

for (let i = 0; i < arr.length; i = i + 1) {
    arr[i] = arr[i] * -1;
}

console.log(arr);

console.log(`Второй способ
---------------`);
arr = [1, -5, 0, 3, -4];

for (let i = 0; i < arr.length; i = i + 1) {
    arr[i] = -arr[i];
}
console.log(arr);


// Задача 7
console.log(`---------------
Задача 7
---------------`);

arr = [1, 89, 'Кузя', -5, 'Leo', 'Car', -19, 5, 'Golf', 7, 'Vanilla'];
let countNumber = 0;
let countMinusNumber = 0;
let countStr = 0;

for (let i = 0; i < arr.length; i = i + 1) {
    if (+arr[i] > 0) {
        countNumber = countNumber + 1;
    }

    if (+arr[i] < 0) {
        countMinusNumber = countMinusNumber + 1;
    }

    if (isNaN(arr[i])) {
        countStr = countStr + 1;
    }
}

console.log(`Положительные числа - ${countNumber}
Отрицательные числа - ${countMinusNumber}
Строки - ${countStr}`);


// Задача 8
console.log(`---------------
Задача 8
---------------`);
let arrNames = ['Катя', 'Ангелина', 'Мария', 'Агния', 'Кристина'];

let str = prompt('Введите букву начала имени');

for (let i = 0; i < arrNames.length; i = i + 1) {
    if (str === arrNames[i][0]) {
        console.log(arrNames[i]);
    }
}


// Задача 9
console.log(`---------------
Задача 9
---------------`);
arr = [1, 5, 8, 9, 6, 15, 75, 19, 19, 3, 126, 571, 'day', 'day', 'day'];
let r = false;

for (let i = 0; i < arr.length; i = i + 1) {
    if (arr[i] === arr[i + 1] && arr[i] === arr[i + 2]) {
        r = true;
    }
}
console.log(r);


// Задача 10
console.log(`---------------
Задача 10
---------------`);
arr = [1, 5, 8, 9, 6, 15, 75, 19, 19, 3, 126, 571, 52, 627, 9, -8];
count = 0;

for (let i = 0; i < arr.length; i = i + 1) {
    if (!(arr[i] % 2)) {
        count = count + 1;
    }
}
console.log(`Количество чётных чисел в массиве - ${count}`);

// Задача 11
console.log(`---------------
Задача 11
---------------`);
arr = [1, 5, 8, 9, 6, 15, 75, 19, 19, 3, 126, 571, 52, 627, 9, -8];
sum = 0;
count = 0;

for (let i = 0; i < arr.length; i = i + 1) {
    sum = sum + arr[i];
    count = count + 1;
}
console.log(`Среднее арифметическое элементов массива - ${sum / count}`);


