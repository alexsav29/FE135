// Задача 11 (ещё раз)

let h = +prompt('Введите высоту треугольника');
let space = '';
let elem = '';

for (let i = 1; i <= h; i = i + 1) {
    space = '';
    elem = '';
    for (let j = 1; j <= h - i; j = j + 1) {
        space = space + ' ';
    }

    for (let k = 1; k <= 2 * i - 1; k = k + 1) {
        elem = elem + '^';
    }

    console.log(space + elem);
}

