import { useRef } from "react";
import { v4 as uuidv4 } from 'uuid';
import './ContactsHeader.css'
import { Contact } from "../../models/Contact";

export type ContactsHeaderProps = {
    data: Contact[];
    onAddContact: (data: Contact []) => void
}

export const ContactsHeader = ({data, onAddContact}: ContactsHeaderProps) => {

    const inputName = useRef<HTMLInputElement>(null);
    const inputSurname = useRef<HTMLInputElement>(null);
    const inputPhone = useRef<HTMLInputElement>(null);
    const inputEmail = useRef<HTMLInputElement>(null);

    // const [data = Data(), setData] = useState<Contact[]>();

    const handleAddContact = () => {
        data.push({
            id: uuidv4(),
            name: `${inputName.current?.value}`,
            surname: `${inputSurname.current?.value}`,
            phone: `${inputPhone.current?.value}`,
            email: `${inputEmail.current?.value}`
        });

        console.log(data);
        

        onAddContact(data);
        
        /*
            setData(data.map(data => data));

            setData([...data, {
                id: uuidv4(),
                name: `${inputName.current?.value}`,
                surname: `${inputSurname.current?.value}`,
                phone: `${inputPhone.current?.value}`,
                email: `${inputEmail.current?.value}`
            }]);

            console.log(data);
        */

        inputName.current!.value = '';
        inputSurname.current!.value = '';
        inputPhone.current!.value = '';
        inputEmail.current!.value = '';
    };

    return (
        <div className="contacts__header">
            <div className="header__inputs">
                <input ref={inputName} type="text" name="firstName" placeholder="Name" />
                <input ref={inputSurname} type="text" name="surname" placeholder="Surname" />
                <input ref={inputPhone} type="tel" name="phone" placeholder="Phone" />
                <input ref={inputEmail} type="email" name="email" placeholder="Email" />
            </div>
            <div className="header__btns btn">
                <button onClick={handleAddContact} className="add__btn btn">Add contact</button>
                <button className="delete__all__btn btn">Delete All contact</button>
            </div>
        </div>
    )
}