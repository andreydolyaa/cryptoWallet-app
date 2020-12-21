import contactService from '../../services/contactService.js';


export function loadContacts(filterBy) {
    return async dispatch => {
        const contacts = await contactService.getContacts(filterBy);
        dispatch({ type: 'SET_CONTACTS', contacts });
    }
}

export function getById(contactId) {
    return async dispatch => {
        const contact = await contactService.getContactById(contactId);
        dispatch({ type: 'SET_CONTACT', contact });
    }
}


export function addContact(contact) {
    return async dispatch => {
        const savedContact = await contactService.saveContact(contact);
        dispatch({ type: 'ADD_CONTACT', contact: savedContact });
    }
}

export function updateContact(contact) {
    return async dispatch => {
        const updatedContact = await contactService.saveContact(contact);
        dispatch({ type: 'UPDATE_CONTACT', contact: updatedContact });
    }
}

export function deleteContact(contactId) {
    return async dispatch => {
        await contactService.deleteContact(contactId);
        dispatch({ type: 'DELETE_CONTACT', contactId })
    }
}