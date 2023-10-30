const user = {
    name: "Alex",
    phone: "+37529-222-22-22",
    email: "alex.test.com",
    "super-email": "alex@gmail.com",
    sendMessage: function () {
        console.log('Hello');
    }
};


const user1 = new Object(); // user1 = {}
user1.name = "alex1";
user1.phone = "+37529-111-11-11";

console.log(user);
console.log(user1);


const user2 = { ...user };

user2.name = 'Nick';
console.log(user2);

console.log(user.name);
console.log(user.phone);


const { name: firstName, phone, ...partOfUser } = user;

console.log(firstName);
console.log(phone);
console.log(partOfUser);


const { "super-email": em, phone: phone1, email, ...part } = user;

console.log(phone1);
console.log(email);
console.log(em);



// Задачи из класса

// Задача 1 
console.log(`---------------
Задача 1
---------------`);

const person = {
    name: 'Alex',
    age: 28,
    city: 'Minsk'
};

console.log(person.name);
console.log(person.age);
console.log(person.city);

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
};


// Задача 2
console.log(`---------------
Задача 2
---------------`);

const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020
};

car.year = 2023;
console.log(car.year);


// Задача 3
console.log(`---------------
Задача 3
---------------`);

const student = {};

student.name = 'Alex';
student.age = 20;
student.subjects = ['JS', 'Math', 'English']

console.log(student);


// Задача 4 
console.log(`---------------
Задача 4
---------------`);

const book = {
    title: 'Bookname',
    author: 'John Doe',
    year: 2023
};

for (let key in book) {
    console.log(`${key}: ${book[key]}`);
};


// Задача 5 
console.log(`---------------
Задача 5
---------------`);

const countProperties = (obj) => {
    let count = 0;

    for (let key in obj) {
        count = count + 1;
    };

    return `Количество свойств в объекте: ${count}`;
};

console.log(countProperties(book));


// Задача 7 
console.log(`---------------
Задача 7
---------------`);

const person2 = {
    name: 'Alex',
    age: 27,
    city: 'Minsk'
};

const printPersonInfo = (obj) => {
    return `Имя: ${obj.name}, Возраст: ${obj.age}, Город: ${obj.city}`
};

console.log(printPersonInfo(person2));

// через деструктуризацию

const printPersonInfo2 = ({ name, age, city }) => {
    return `Имя: ${name}, Возраст: ${age}, Город: ${city}`
};

console.log(printPersonInfo2(person2));


// Задача 8 
console.log(`---------------
Задача 8
---------------`);

const product = {
    name: 'ProductName',
    price: 100,
    quantity: 56
};

const calculateTotalPrice = ({ price, quantity }) => {
    let totalPrice = price * quantity;
    return `Общая стоимость товара: ${totalPrice}`
};

console.log(calculateTotalPrice(product));