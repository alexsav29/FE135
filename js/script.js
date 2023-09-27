// Задача 1
console.log(`--------------------
Задача 1
--------------------`);

console.log(`Числа от 1 до 50`);
for (let i = 1; i <= 50; i = i + 1) {
    console.log(i);
}

console.log(`Числа от 35 до 8`);
for (let i = 35; i >= 8; i = i - 1) {
    console.log(i);
}

// Задача 2
document.write(`--------------------<br / >
Задача 2 <br / >
--------------------`);
let i = 89;

while (i >= 11) {
    document.write(`<p>${i}</p><br />`)
    i = i - 1;
}


// Задача 3
console.log(`--------------------
Задача 3
--------------------`);
let sum = 0;
for (let i = 0; i <= 100; i = i + 1) {
    sum = sum + i;
}
console.log(`Сумма чисел от 0 до 100 равна - ${sum}`);


// Задача 4
console.log(`--------------------
Задача 4
--------------------`);

sum = 0;

for (let i = 1; i <= 5; i = i + 1) {
    sum = 0;
    for (let j = 1; j <= i; j = j + 1) {
        sum = sum + j;
    }
    console.log(`Сумма чисел числа ${i} равна - ${sum}`);
}


// Задача 5
console.log(`--------------------
Задача 5
--------------------`);
console.log('Способ через while');
i = 8;
while (i <= 56) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i = i + 1;
}

console.log('Способ через for');

for (let i = 8; i <= 56; i = i + 1) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


// Задача 6
console.log(`--------------------
Задача 6
--------------------`);
for (let i = 2; i <= 10; i = i + 1) {
    for (let j = 1; j <= 10; j = j + 1) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log(`--------------------`);
}


// Задача 7
console.log(`--------------------
Задача 7
--------------------`);
let n = 1000;
let num = 0;
let newN = 0;

for (let i = 0; ; i = i + 1) {
    n = n / 2;
    if (n < 50) break;
    num = num + 1;
    newN = n;
}
console.log(`Количество итераций - ${num}
Получившееся число - ${newN}`);



// Задача 8
console.log(`--------------------
Задача 8
--------------------`);
n = 0;
sum = 0;
let average = 0;

for (; ;) {
    let num = +prompt('Введите число, кроме 0 или пустой строки');

    if (isNaN(num)) {
        alert('Вы ввели не число');
        continue;
    }

    if (num == 0) break; // отрабатывает 0, пустая строка, пробел, null(отмена)

    sum = sum + num;
    n = n + 1;
}

average = sum / n;

console.log(`Общая сумма введённых чисел - ${sum}
Среднее арифметическое введённых чисел - ${average}`);


// Задача 9
console.log(`--------------------
Задача 9
--------------------`);

let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
let newArr = str.split(' ');
// console.log(newArr);
let min = +Infinity;
let max = -Infinity;

for (let i = 0; i < newArr.length; i = i + 1) {
    if (newArr[i] > max) {
        max = newArr[i];
    }

    if (newArr[i] < min) {
        min = newArr[i];
    }
}
console.log(`Наименьшее число - ${min}
Наибольшее число - ${max}`);


console.log('Второй способ');

str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
min = +Infinity;
max = -Infinity;
let buf = '';

for (let i = 0; i < str.length; i = i + 1) {
    if (str[i] !== ' ') {
        buf = buf + str[i];
    } else {
        // console.log(buf);
        if (buf < min) min = buf;
        if (buf > max) max = buf;
        buf = '';
    }

}

console.log(`Наименьшее - ${min}
Наибольшее - ${max}`);

// Задача 10
console.log(`--------------------
Задача 10
--------------------`);

n = prompt('Введите число');
let count = 0;
sum = 0;

for (let i = 0; i < n.length; i = i + 1) {
    console.log(`${i + 1}-я цифра: ${n[i]}`);
    count = count + 1; // можно было через length - указать вместо count - n.length
    sum = sum + +n[i];
}

console.log(`Количество цифр в числе - ${count}
Сумма цифр в числе - ${sum}`);