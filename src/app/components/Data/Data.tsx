// !!! Почти сделал Контактную книгу. Но есть проблема. То что я захардкодил в массив - выводится в DOM, а то что добавляется не выводится, хотя в массив обавляется.


import { Contact } from "../../models/Contact";
import { v4 as uuidv4 } from 'uuid';

export const Data = () => {
    const data: Contact[] = [
        {
            id: uuidv4(),
            name: 'Alex',
            surname: 'Sav',
            phone: '+37529-111-22-33',
            email: 'sav@test.com'
        },
        {
            id: uuidv4(),
            name: 'Bob',
            surname: 'Sinclar',
            phone: '+37529-222-33-44',
            email: 'bob@test.com'
        }
    ];

    return data;
}