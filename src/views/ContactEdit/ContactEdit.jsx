
import React, { Component } from 'react';
import contactService from '../../services/contactService';
import { userService } from '../../services/userService';
import './ContactEdit.scss';

export default class ContactEdit extends Component {
    state = {
        user: {
            name: '',
            email: '',
            phone: ''
        }
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        const user = id ? await contactService.getContactById(id) : await contactService.getEmptyContact();
        this.setState({ user })
    }


    handleChange = (ev) => {
        const field = ev.target.name;
        const value = ev.target.value;
        this.setState(prevState => ({ user: { ...prevState.user, [field]: value } }));
    }


    saveChanges = async (ev) => {
        ev.preventDefault();
        await contactService.saveContact(this.state.user);
        this.props.history.push('/');
    }

    render() {
        const { name, email, phone } = this.state.user;
        return (
            <form onSubmit={this.saveChanges} className="edit-contact">
            <h1>Edit Contact -</h1>
                <div>
                    <label>* Name:</label>
                    <input type="text" placeholder="name" name="name" value={name} onChange={this.handleChange} />
                </div>
                <div>
                    <label>* Email:</label>
                    <input type="text" placeholder="email" name="email" value={email} onChange={this.handleChange} />
                </div>
                <div>
                    <label>* Phone:</label>
                    <input type="text" placeholder="phone" name="phone" value={phone} onChange={this.handleChange} />
                </div>
                <button>Save</button>
            </form>
        )
    }
}
