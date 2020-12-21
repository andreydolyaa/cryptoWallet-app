

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ContactList from '../../cmps/ContactList/ContactList';
import { ContactFilter } from '../../cmps/ContactFilter/ContactFilter.jsx';
import { loadContacts } from '../../store/actions/contactActions';
import './ContactPage.scss';




class _ContactPage extends Component {
    state = {
        filterBy: null
    }


    async componentDidMount() {
        await this.props.loadContacts(this.state.filterBy);
    }


    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.props.loadContacts(filterBy));
    }


    render() {
        const { contacts } = this.props;
        return (
            <div>
                <ContactFilter onSetFilter={this.onSetFilter} />
                <div className="add-contact">
                    <Link to="/contact/edit">Add New Contact <i className="far fa-address-book"></i></Link>
                </div>
                <div>
                    {contacts && <ContactList contacts={contacts} />}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    contacts: state.contactReducer.contacts
})

const mapDispatchToProps = {
    loadContacts
}


export const ContactPage = connect(mapStateToProps, mapDispatchToProps)(_ContactPage);
