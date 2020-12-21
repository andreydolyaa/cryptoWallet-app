
import React, { Component } from 'react';
import contactService from '../../services/contactService';
import { connect } from 'react-redux';
import { addContact, updateContact } from '../../store/actions/contactActions';
import './ContactEdit.scss';

class _ContactEdit extends Component {
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
        const { user } = this.state;
        if (user._id) {
            console.log(user._id);
            await this.props.updateContact(user)
        }
        else {
            await this.props.addContact(user);
            console.log(this.props);
        }
        this.props.history.push('/contacts');
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


const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    addContact,
    updateContact
}


export const ContactEdit = connect(null, mapDispatchToProps)(_ContactEdit);