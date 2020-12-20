
import React, { Component } from 'react'
import contactService from '../../services/contactService';
import './ContactDetails.scss';
import { Link } from 'react-router-dom';


export default class ContactDetails extends Component {

    state = {
        contact: null,
    }

    async componentDidMount() {
        console.log(this.props);
        const contact = await contactService.getContactById(this.props.match.params.id);
        this.setState({ contact });
    }

    goBack = () => {
        this.props.history.push('/contacts');
    }


    render() {
        const { contact } = this.state;
        return (
            <div className="contact-details">
                {contact &&
                    <div className="user-details">
                        <img src={"https://robohash.org/" + contact._id} />
                        <h1>{contact.name}</h1>
                        <h2>{contact.email}</h2>
                        <h2>{contact.phone}</h2>
                        <div className="user-btns">
                        <Link to={`/contact/edit/${contact._id}`}>Edit Contact <i class="fas fa-user-edit"></i></Link>
                        <button onClick={this.goBack}>Return</button>
                        </div>
                    </div>
                }
            </div>
        )
    }
}
