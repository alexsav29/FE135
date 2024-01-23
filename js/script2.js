// другой вариант структуры таблицы

class Users {
    constructor() {
        this.getFetchData();
    };

    async getFetchData() {
        try {
            const response = await fetch('https://dummyjson.com/users');
            if (response.status === 200) {
                const data = await response.json();
                console.log(data.users);

                this.dataMapper(data.users);

            };
        } catch (error) {
            console.log(error);
        };
    };

    dataMapper(usersArray) {
        this.render();

        const userName = document.querySelector('.user__name');
        const userPhone = document.querySelector('.user__phone');
        const userEmail = document.querySelector('.user__email');
        const userAge = document.querySelector('.user__age');

        usersArray.forEach((user) => {
            const { firstName, lastName, age, email, phone } = user;

            user = `${firstName} ${lastName}`;

            this.createCell(userName, user);
            this.createCell(userPhone, phone);
            this.createCell(userEmail, email);
            this.createCell(userAge, age);
        });
    };

    createCell(target, info) {
        const td = document.createElement('td');
        td.innerHTML = info;

        target.appendChild(td);
    };

    render() {
        const app = document.getElementById('app');

        const container = document.createElement('div');
        container.classList.add('container');
        container.innerHTML = `
                                <div class="container__wrapper">
                                    <table class="table">
                                        <thead class="table__header">
                                            <tr>
                                                <th class="table__title">Users List</th>
                                            </tr>
                                        </thead>
                                        <tbody class="table__body">
                                            <tr class="user__name">
                                                <td style="font-weight: bold">Пользователь</td>
                                            </tr>
                                            <tr class="user__phone">
                                                <td style="font-weight: bold">Номер телефона</td>
                                            </tr>
                                            <tr class="user__email">
                                                <td style="font-weight: bold">Email</td>
                                            </tr>
                                            <tr class="user__age">
                                                <td style="font-weight: bold">Возраст</td>
                                            </tr>
                                        </tbody>
                                        <tfoot class="table__footer"></tfoot>
                                    </table>
                                </div>
                              `;

        app.appendChild(container);
    };
};

new Users();