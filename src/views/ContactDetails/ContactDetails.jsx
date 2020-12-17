
import React, { Component } from 'react'
import contactService from '../../services/contactService';
import './ContactDetails.scss';



export default class ContactDetails extends Component {

    state = {
        contact: null,
    }

    async componentDidMount() {
        const contact = await contactService.getContactById(this.props.selectedContactId);
        this.setState({ contact });
    }


    render() {
        const { contact } = this.state;
        return (
            <div className="contact-details">
                {contact &&
                    <div>
                    <img src={"https://robohash.org/" + contact._id} />
                        <h1>{contact.name}</h1>
                        <h2>{contact.email}</h2>
                        <h2>{contact.phone}</h2>
                        <button onClick={this.props.onBack}>Return</button>
                    </div>
                }
            </div>
        )
    }
}
