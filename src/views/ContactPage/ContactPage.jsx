

import React, { Component } from 'react';
import contactService from '../../services/contactService.js';
import ContactList from '../../cmps/ContactList/ContactList';
import ContactDetails from '../ContactDetails/ContactDetails.jsx';
import { ContactFilter } from '../../cmps/ContactFilter/ContactFilter.jsx';
import './ContactPage.scss';




export default class ContactPage extends Component {
    state = {
        contacts: null,
        selectedContactId: null,
        filterBy: null
    }


    componentDidMount() {
        this.loadContacts();
    }


    async loadContacts() {
        const contacts = await contactService.getContacts(this.state.filterBy);
        this.setState({ contacts });
    }


    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadContacts);
    }



    onSelectContact = (contactId) => {
        this.setState({ selectedContactId: contactId })
    }



    render() {
        const { contacts, selectedContactId } = this.state;
        return (
            <div>
                <ContactFilter onSetFilter={this.onSetFilter} />
                <div>
                    {contacts && !selectedContactId && <ContactList contacts={contacts} onSelectContact={this.onSelectContact} />}
                    {selectedContactId && <ContactDetails selectedContactId={selectedContactId} onBack={() => this.onSelectContact(null)} />}
                </div>
            </div>
        )
    }
}
