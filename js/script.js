// Задача 1
console.log(`---------------
Задача 1
---------------`);

const func1 = function (num1, num2, num3) {
    let result = (num1 - num2) / num3;
    return result;
}

console.log(func1(5, 2, 3));


// Задача 2
console.log(`---------------
Задача 2
---------------`);

const func2 = function (num) {
    let square = num ** 2;
    let cube = num ** 3;
    return `Исходное число: ${num}. Квадрат числа: ${square}. Куб числа: ${cube}`;
}

console.log(func2(5));


// Задача 3
console.log(`---------------
Задача 3
---------------`);

const min = function (a, b) {
    if (a < b) {
        return `Из чисел ${a} и ${b} наименьшее число: ${a}`
    } else if (a > b) {
        return `Из чисел ${a} и ${b} наименьшее число: ${b}`
    } else {
        return `Числа ${a} и ${b} равны`
    }
}

const max = function (a, b) {
    if (a < b) {
        return `Из чисел ${a} и ${b} наибольшее число: ${b}`
    } else if (a > b) {
        return `Из чисел ${a} и ${b} наибольшее число: ${a}`
    } else {
        return `Числа ${a} и ${b} равны`
    }
}

console.log(min(4, 5));
console.log(max(2, 3));


// Задача 4
console.log(`---------------
Задача 4
---------------`);

const createArray = function (start, end) {
    start = +prompt('Введите начальное значение');
    end = +prompt('Введите конечное значение');
    if (start > end) {
        return `Error. Начальное значение диапозона больше конечного`;
    } else if (isNaN(start) || isNaN(end)) {
        return `Error. В начальное или конечное значение введено не число`;
    } else if (start === ' ' || end === ' ' || start === '' || end === '') {
        return `Error. На месте аргументов введён пробел или пустая строка`;
    } else if (start === undefined || end === undefined) {
        return `Error. Одно из значений аргументов не введено`; // почему-то не захотел отрабатывать
    }
    let arrayNums = [];
    for (let i = start; i <= end; i = i + 1) {
        arrayNums.push(i);
    }
    return arrayNums;
}

const printArray = function (array) {
    return console.log(array);
}

// printArray(createArray(2, 10, 56));
// printArray(createArray(20, 10));
// printArray(createArray(' ', 10));
// printArray(createArray(10));
// printArray(createArray());



// вариант 2 (по другому сделаны проверки)
// Такая альтернатива, наверное, будет получше

const createArray2 = function (start, end) {
    start = +prompt('Введите начальное значение');
    end = +prompt('Введите конечное значение');
    if (start > end) {
        return `Error. Начальное значение диапозона больше конечного`;
    } else if (isNaN(start) || isNaN(end)) {
        return `Error. В начальное или конечное значение введено не число`;
    } else if (start === 0 || end === 0) {
        return `Error. На месте аргументов введён ноль, пробел или пустая строка (значение не введено)`;
    }

    let arrayNums = [];
    for (let i = start; i <= end; i = i + 1) {
        arrayNums.push(i);
    }
    return arrayNums;
}

const printArray2 = function (array) {
    return console.log(array);
}

// printArray2(createArray2());


// Задача 5
console.log(`---------------
Задача 5
---------------`);

const isEven = function (num) {
    return num % 2 === 0 ? true : false;
}


// Задача 6
console.log(`---------------
Задача 6
---------------`);

const arrGetEvenNums = function (array) {
    let arrEven = array.filter((item) => {
        return isEven(item);
    })
    return arrEven;
}

console.log(arrGetEvenNums([79, 56, 23, 38, 1, 15, 100]));


// Задача 7
console.log(`---------------
Задача 7
---------------`);

const drawPyramid = function (amount, symbol) {
    let str = '';
    let strNum = '';

    if (!symbol) {

        for (let i = 1; i <= amount; i = i + 1) {
            for (let j = 1; j <= i; j = j + 1) {
                strNum = `${i}`;
                str = str + strNum;
            }
            console.log(str);
            str = '';
        }

    } else {

        for (let i = 1; i <= amount; i = i + 1) {
            for (let j = 1; j <= i; j = j + 1) {
                str = str + symbol;
            }
            console.log(str);
            str = '';
        }

    }

}

drawPyramid(9);
drawPyramid(9, '*');


// Задача 8
console.log(`---------------
Задача 8
---------------`);

const drawTriangle = function (amount) {
    amount = +prompt('Введите количество рядов треугольника');
    let space = '';
    let symbol = '';

    for (let i = 1; i <= amount; i = i + 1) {
        for (let j = 1; j <= amount - i; j = j + 1) {
            space = space + ' ';
        }

        for (let k = 1; k <= 2 * i - 1; k = k + 1) {
            symbol = symbol + '*'
        }

        console.log(space + symbol);
        space = '';
        symbol = '';
    }
}

// drawTriangle(5);

// Функция для рисования обратной пирамидки

const drawTriangle2 = function (amount) {
    amount = +prompt('Введите количество рядов треугольника');
    let space = '';
    let symbol = '';

    for (let i = amount; i >= 1; i = i - 1) {
        for (let j = 1; j <= amount - i; j = j + 1) {
            space = space + ' ';
        }

        for (let k = 1; k <= 2 * i - 1; k = k + 1) {
            symbol = symbol + '*';
        }

        console.log(space + symbol);
        space = '';
        symbol = '';
    }
}

// drawTriangle2(5);


// Задача 9
console.log(`---------------
Задача 9
---------------`);

const fib = function (index) {
    if (index < 0) {
        return
    } else if (index === 0) {
        return 0;
    }
    else if (index === 1) {
        return 1
    } else {
        return fib(index - 1) + fib(index - 2);
    }
}

console.log(fib(7));

const fibArray = function (end) {
    let arrFib = [];

    for (let i = 0; ; i = i + 1) {
        if (fib(i) < end) {
            arrFib.push(fib(i));
        } else {
            return arrFib;
        }
    }
}

console.log(fibArray(1000));


// Задача 10 (не работает, непонятно как организовывать шаг рекурсии)
console.log(`---------------
Задача 10
---------------`);

const func10 = function (num) {
    if (num <= 9) {
        return num;
    } else {
        num = `${num}`;
        return num[num.length - 1] + func10(num[num.length - 2]);
    }
}

console.log(func10(123));


// Задача 11 (не работает, тоже непонятно как организовывать шаг рекурсии)
console.log(`---------------
Задача 11
---------------`);

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