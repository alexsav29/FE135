// Лампочка

/*
const Bulb = function () {
    this.getInfo = () => {
        const power = prompt('Введите мощность лампочки');
        const price = prompt('Введите стоимость электроэнергии (кВт*ч)');

        // return `Мощность лампочки: ${this.power}; Стоимость электроэнергии: ${this.price}`

        return {
            this.power = power,
            this.price = price
        }
    };

    this.showInfo = () => {
        // console.log(this.getInfo);

        const info = this.getInfo();

        console.log(`Мощность лампочки: ${this.power}; Стоимость электроэнергии: ${this.price}`);
    }
};

const bulb = new Bulb();
*/


// Лампочка

const Bulb = function () {
    let status = false;
    let power = 0;
    let price = 0;
    let time = 0;
    let start = 0;
    let end = 0;
    let count = 0;


    this.getInfo = () => {
        power = prompt('Введите мощность лампочки');
        price = prompt('Введите стоимость электроэнергии');
    };


    this.showInfo = () => {
        console.log(`Мощность лампочки: ${power}. Стоимость электроэнергии: ${price}`);
    };

    const startTime = () => {
        start = new Date();
        return start
    };

    const endTime = () => {
        end = new Date();
        return end
    };

    this.switchOnOff = () => {
        if (!status) {
            status = true;

            startTime();

            return `Лампочка включена`
        } else {
            status = false;

            endTime();

            return `Лампочка выключена`
        }
    };


    const counter = () => {
        time = (end - start) / (1000 * 60 * 60); // вычисляется время в часах

        return time
    };



    const totalAmount = () => {
        // count = time * price * power - расчёт платы за электроэнергию

        counter();

        count = time * price * power;

        return count

    };

    const total = totalAmount();

    this.showTotalAmount = () => {
        console.log(`Сумма за электроэнергию составила: ${total}, time: ${time}, start: ${start}, end: ${end}`); // не понимаю, почему здесь не отрабатывает как надо. Сумма постоянно 0
    };

};


const bulb = new Bulb();







// вопрос

// Хотел сделать проверку на методе включения лампочки: если пользователь не ввёл информацию по ней, чтобы лампочка не включалась и вылетела ошибка. Но что-то не пошло. Как нужно было такое сделать? Метод getInfo() возвращает power и price. Если мы их не ввели, то они undefined

/*

// Лампочка

const Bulb = function () {
    let status = false;

    const getInfo = () => {
        const power = prompt('Введите мощность лампочки');
        const price = prompt('Введите стоимость электроэнергии');

        return { power, price }
    };

    this.showInfo = () => {
        const info = getInfo();
        const { power, price } = info;

        console.log(`Мощность лампочки: ${power}. Стоимость электроэнергии: ${price}`);
    };

    const startTime = () => {
        const start = new Date();
        return start
    };

    const endTime = () => {
        const end = new Date();
        return end
    };

    const counter = () => {
        const time = (endTime() - startTime()) / (1000 * 60 * 60); // вычисляется время в часах

        return time
    };

    this.switchOnOff = () => {
        if (!getInfo()) {
            alert('Вы не ввели информацию о лампочке');
        } else {
            if (!status) {
                status = true;

                startTime();

                return `Лампочка включена`
            } else {
                status = false;

                endTime();

                return `Лампочка выключена`
            }
        }
    };


    this.showPriceInfo = () => {
        // count = time * price * power - расчёт платы за электроэнергию

        const count = count() * price * power;
        return count
    };
};


const bulb = new Bulb();
*/