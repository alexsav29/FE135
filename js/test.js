// Задача 11 (не работает)

/*
const printArrElem = function (array) {
    if (array[i] < 0) {
        return
    } else if (array[i] === 0) {
        return console.log(array[i]);
    } else {
        console.log(array[array.length - 1]);
        array.length = array.length - 1;
        return printArrElem(array);
    }
}

printArrElem([1, 2, 3, 4, 5, 6]);
*/

/*
// вариант 2 (не работает)

// const printArrElem = function (array) {

//     for (let elem of array) {
//         if (array[elem] !== undefined) {
//             console.log(array[elem]);
//             printArrElem(array)
//         }
//     }
// }

*/


/*
// вариант 3 (не могу понять почему вылетает бесконечная рекурсия)
// Я же её ограничил условием
// Если писать if (array[i] === array.length), то последний элемент не выводится

let i = 0;

const printArrElem = function (array) {

    if (array[i] > array.length) {
        return
    } else {
        console.log(array[i]);
        i = i + 1;
        return printArrElem(array);
    }

}

printArrElem([1, 2, 3, 4, 5, 6]);
*/


/*
// вариант 4 
// (такой вариант с undefined конечно будет работать, но проблема в том, что в массиве может быть сам элемент undefined. И тогда следующие после него элементы уже не выведутся)

let i = 0;

const printArrElem = function (array) {

    if (array[i] === undefined) {
        return
    } else {
        console.log(array[i]);
        i = i + 1;
        return printArrElem(array);
    }

}

printArrElem([1, 2, 3, 4, 5, 6]);
*/

/*
// тоже слишком большая рекурсия

let i = 0;

const printArrElem = function (array) {
    if (i < array.length) console.log(array[i]);

    i = i + 1;

    printArrElem(array);
}

printArrElem([1, 2, 3, 4, 5, 6]);

*/



// вариант 5 (из видео)

let i = 0;

const printArrElem = function (array) {
    console.log(array[i]);
    i = i + 1;

    if (i < array.length) printArrElem(array);



}

printArrElem([1, 2, 3, 4, 5, 6]);