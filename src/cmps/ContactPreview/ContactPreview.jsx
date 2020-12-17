
import React from 'react'
import './ContactPreview.scss';


export default function ContactPreview({ contact, onSelectContact }) {//props


    function selectContact(ev) {
        ev.stopPropagation();
        onSelectContact(contact._id);
    }
    return (
        <div>
            <li className="user-preview" onClick={selectContact}>
                <div>
                    <img src={"https://robohash.org/" + contact._id} />
                </div>
                <div>
                    <p>Name: {contact.name}</p>
                    <p>Email: {contact.email}</p>
                    <p>Phone: {contact.phone}</p>
                </div>
            </li>
        </div>
    )
}
