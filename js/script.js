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

        const body = document.querySelector('.table__body');
        let usersList = '';

        usersArray.forEach((user) => {
            const { firstName, lastName, age, email, phone } = user;

            user = `${firstName} ${lastName}`;

            usersList += `
                            <tr>
                                <td class="table__body__user">${user}</td>
                                <td>${phone}</td>
                                <td>${email}</td>
                                <td>${age}</td>
                            </tr>
                         `;
        });

        body.innerHTML = usersList;
    };

    render() {
        const app = document.getElementById('app');

        const container = document.createElement('div');
        container.classList.add('container');
        container.innerHTML = `
                                <div class="container__wrapper">
                                    <table class="table">
                                        <thead class="table__header">
                                            <tr class="table__header__title">
                                                <th>Пользователь</th>
                                                <th>Номер телефона</th>
                                                <th>Email</th>
                                                <th>Возраст</th>
                                            </tr>
                                        </thead>
                                        <tbody class="table__body">
                                    
                                        </tbody>
                                        <tfoot class="table__footer"></tfoot>
                                    </table>
                                </div>
                              `;

        app.appendChild(container);
    };
};

new Users();