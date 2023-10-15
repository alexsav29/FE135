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


// Задача 10 
// (переделал)
console.log(`---------------
Задача 10
---------------`);
/*
// (не работает, непонятно как организовывать шаг рекурсии)
const func10 = function (num) {
    if (num <= 9) {
        return num;
    } else {
        num = `${num}`;
        return num[num.length - 1] + func10(num[num.length - 2]);
    }
}

console.log(func10(123));
*/

// вариант 2 (переделал)
// так с цикллом можно было или нужно было, чтобы прямо всё-всё было через рекурсию?
const func10 = function (num) {
    if (num <= 9) {
        return num;
    } else {
        num = `${num}`;
        let sum = 0;
        for (let i = 0; i < num.length; i = i + 1) {
            sum = sum + +num[i];
        }
        return func10(sum);
    }

}

console.log(func10(1234));


// Задача 11 
// (в файл test.js сбросил первые варианты, которые не особо работают. Непонятно как организовывать шаг рекурсии)
console.log(`---------------
Задача 11
---------------`);

let i = 0;

const printArr = function (arr) {
    console.log(arr[i]);

    if (arr[i] < arr.length) {
        i = i + 1;
        printArr(arr);
    } else {
        return
    }

}

printArr([1, 2, 3, 4, 5, 6]);




// Задача 12
// (ниже в коде написал место, где возник вопрос)
console.log(`---------------
Задача 12
---------------`);

const concatStr = function (str, length) {
    if (str.length < length) {
        for (let i = 0; i < length; i = i + 1) {
            str = str + ' ';
        }

        for (let i = 0; i < length; i = i + 1) {
            str = '* ' + str;
            str = str + ' *';
        }

        return str;
    } else {
        return str;
    }
}


const printCard = function (name, surName, secondName, groupNumber) {
    name = prompt('Введите ваше имя');
    surName = prompt('Введите вашу фамилию');
    secondName = prompt('Введите ваше отчество');
    groupNumber = prompt('Введите номер вашей группы');

    let length = 0;

    let str1 = `Домашняя работа: «Функции»`;
    let str2 = `Выполнил: студент гр. ${groupNumber}`;
    let str3 = `${surName} ${name} ${secondName}`;
    let strStar = '';

    switch (true) {
        case (str1.length > length): length = str1.length;
            break;
        case (str2.length > length): length = str2.length;
            break;
        case (str3.length > length): length = str3.length;
            break;

    }

    for (let i = 1; i <= length + 4; i = i + 1) {
        strStar = strStar + '*';
    }

    for (let i = 1; i <= 3; i = i + 1) {
        str = str + `${i}`; // может здесь что-то можно придумать, чтобы при каждой итерации цикла имя переменной менялось: str1, потом str2, затем str3.
        concatStr(str, length);
    }


    console.log(`
${strStar}
${str1}
${str2}
${str3}
${strStar}
`);
}

printCard();

