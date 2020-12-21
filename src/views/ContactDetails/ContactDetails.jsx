
import React, { Component } from 'react'
import './ContactDetails.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getById, deleteContact } from '../../store/actions/contactActions';
import { TransferFund } from '../../cmps/TransferFund/TransferFund.jsx';


class _ContactDetails extends Component {


    componentDidMount() {
        this.loadContact();
    }


    async loadContact() {
        await this.props.getById(this.props.match.params.id);
    }

    goBack = () => {
        this.props.history.push('/contacts');
    }

    deleteContact = () => {
        this.props.deleteContact(this.props.match.params.id);
        this.props.history.push('/contacts');
    }


    render() {
        const { contact } = this.props;
        if (!contact) return <div>Loading Contact...</div>
        return (
            <div className="contact-details">
                {contact &&
                    <div className="user-details">
                        <img src={"https://robohash.org/" + contact._id} />
                        <h1>{contact.name}</h1>
                        <h2>{contact.email}</h2>
                        <h2>{contact.phone}</h2>
                        <TransferFund name={contact.name}/>

                        <div className="user-btns">
                            <Link to={`/contact/edit/${contact._id}`}>Edit Contact <i className="fas fa-user-edit"></i></Link>
                            <button onClick={this.deleteContact}>Delete Contact</button>
                            <button className="return" onClick={this.goBack}>Return</button>
                        </div>
                    </div>
                }
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    contact: state.contactReducer.currContact
})

const mapDispatchToProps = {
    getById,
    deleteContact
}

export const ContactDetails = connect(mapStateToProps, mapDispatchToProps)(_ContactDetails);