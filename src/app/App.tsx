import { useState } from 'react';
import './App.css'
import { ContactsBody } from './components/ContactsBody'
import { ContactsHeader } from './components/ContactsHeader'
import { Data } from './components/Data';
import { Contact } from './models/Contact';

export const App = () => {
    // const data: Contact[] = Data();

    const [data, setData] = useState<Contact[]>(Data());

    // setData([...data]);

    const handleAddContact = (newData: Contact[]) => {
        setData([...newData]);
    };

    return (
        <>
            <ContactsHeader onAddContact={handleAddContact} data={data} />
            <ContactsBody data={data} />
        </>
    )
}