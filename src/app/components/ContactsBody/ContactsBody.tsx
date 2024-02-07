import { v4 as uuidv4 } from 'uuid';
// import { Contact } from '../../models/Contact';
import { ContactsItem } from '../ContactsItem';
import './ContactsBody.css'
import { Contact } from '../../models/Contact';

type ContactsBodyProps = {
    data: Contact[]
}

export const ContactsBody = ({data}: ContactsBodyProps) => {

    return (
        <ul className='contacts__body'>
            {
                data.length !== 0 
                ?
                data.map((contact) => <ContactsItem  key={uuidv4()} contact={contact} />)
                :
                <h2>Contacts Book is empty</h2>
            }
        </ul>
    )
}