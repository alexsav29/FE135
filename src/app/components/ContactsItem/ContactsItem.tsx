import { Contact } from "../../models/Contact";
import './ContactsItem.css'

type ContactsItemProps = {
    contact: Contact  
};

export const ContactsItem = ({contact}:ContactsItemProps) => {
    const { name, surname, phone, email } = contact;

    return (
        <li className="contact__item">
            <div className="item__info">
                <p><span>Name:</span> {name}</p>
                <p><span>Surname:</span> {surname}</p>
                <p><span>Phone:</span> {phone}</p>
                <p><span>Email:</span> {email}</p>
            </div>
            <div className="item__btns btn">
                <button className="edit__btn btn">Edit</button>
                <button className="delete__btn btn">Delete</button>
            </div>
        </li>
    )
}