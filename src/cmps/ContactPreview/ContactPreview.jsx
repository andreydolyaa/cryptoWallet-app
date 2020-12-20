
import React from 'react'
import { Link } from 'react-router-dom';
import './ContactPreview.scss';


export default function ContactPreview({ contact }) {//props


    return (
        <Link to={`/contact/${contact._id}`}>
            <div>
                <li className="user-preview">
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
        </Link>
    )
}
