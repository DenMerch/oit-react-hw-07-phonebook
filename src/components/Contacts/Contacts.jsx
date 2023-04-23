import { useDispatch, useSelector } from 'react-redux';
import css from './Contacts.module.css'
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from ';service/apiContacts';
export const Contacts = () => {
    const contacts = useSelector(state => state.contacts.items)
    const filter = useSelector(state => state.filter)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])
    const foundedName = (filter, contacts) => {
        if (filter) {
            return contacts.filter(contact => contact.name.toLowerCase().replace(" ", '')
                .includes(filter))
        }
        return contacts
    };
    const contactDelet = id => {
        dispatch(deleteContact(id));

    };
    console.log(foundedName(filter, contacts));

    const listItems = foundedName(filter, contacts).map((contact) => {
        console.log(contact);


        return (< li className={css.item} key={contact.id}> {contact.name}: {contact.phone
        }<button className={css.btn} onClick={() => {
            contactDelet(contact.id)

        }}>Delete
            </button>
        </li>)
    });

    return (
        <ul>
            {listItems}
        </ul>
    )
}