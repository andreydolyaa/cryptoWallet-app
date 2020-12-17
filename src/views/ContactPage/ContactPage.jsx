

import React, { Component } from 'react';
import contactService from '../../services/contactService';
import ContactList from '../../cmps/ContactList/ContactList';
import ContactDetails from '../ContactDetails/ContactDetails.jsx';
import './ContactPage.scss';




export default class ContactPage extends Component {
    state = {
        contacts: null,
        selectedContactId: null,
    }


    componentDidMount() {
        this.loadContacts();
    }


    async loadContacts() {
        const contacts = await contactService.getContacts();
        this.setState({ contacts });
    }


    onSelectContact = (contactId) => {
        this.setState({ selectedContactId: contactId })
    }

    render() {
        const { contacts, selectedContactId } = this.state;
        return (
            <div>
                <div>
                    {contacts && !selectedContactId && <ContactList contacts={contacts} onSelectContact={this.onSelectContact} />}
                    {selectedContactId && <ContactDetails selectedContactId={selectedContactId} onBack={() => this.onSelectContact(null)} />}
                </div>
            </div>
        )
    }
}
