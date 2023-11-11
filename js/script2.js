// Автомобиль

const Vehicle = function () {
    let status = false;
    let gear = '';
    let speed = 0;
    let distance = 0;
    let time = 0;
    let type;
    let model;
    let plateNumber;

    this.setInfo = () => {
        type = prompt('Введите тип транспортного средства');
        model = prompt('Введите модель транспортного средства');
        plateNumber = prompt('Введите номер транспортного средства');
    };

    this.engineStartStop = () => {
        if (!status) {
            status = true;
            console.log('Двигатель запущен');
        } else {
            status = false;
            console.log('Двигатель остановлен');
        };
    };

    const gearBox = () => {
        if (status) {
            gear = prompt('Включите передачу: D, N, R');

            switch (gear) {
                case 'D':
                    console.log('Включена передача D');
                    break;
                case 'N':
                    console.log('Включена передача N');
                    break;
                case 'R':
                    console.log('Включена передача R');
                    break;
                default:
                    console.log('Error. Такой передачи нет. Попробуйте ещё раз');
            }
        } else {
            alert('Двигатель не работает. Перед включением передачи нужно запустить двигатель');
        }
    };

    this.drive = () => {
        gearBox();

        if (gear === 'N') {
            console.log('Машина стоит на месте. Включена нейтраль');
        } else if (gear === 'D') {
            console.log('Движемся вперёд');
            getSpeed();
            getTime();
        } else if (gear === 'R') {
            console.log('Движемся назад');
            getSpeed();
            getTime();
        }
    };

    const getSpeed = () => {
        speed = +prompt('Введите желаемую скорость в км/ч');
    };

    const getTime = () => {
        time = +prompt('Введите время в пути');
    };

    const calculator = () => {
        distance = speed * time;
    };

    this.showInfo = () => {
        calculator();

        console.log(`Тип транспортного средства: ${type} 
Модель транспортного средства: ${model}
Номер транспортного средства: ${plateNumber}
Скорость: ${speed}
Время: ${time}
Пройденный путь: ${distance}`);
    }; // почему-то не видит type. Я так понимаю, что не будет видеть и остальные переменные. Как тогда к ним достучаться?
};


const car = new Vehicle();