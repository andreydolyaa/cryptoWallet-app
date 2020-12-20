
import './ContactList.scss';
import ContactPreview from '../ContactPreview/'


export default function ContactList({ contacts }) {
    return (
        <div>
            <ul className="user-list">
                {
                    contacts.map(contact => <ContactPreview contact={contact} key={contact._id} />)
                }
            </ul>
        </div>
    )
}

