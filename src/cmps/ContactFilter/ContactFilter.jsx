

import React, { Component } from 'react';
import './ContactFilter.scss';

export class ContactFilter extends Component {
    state = {
        term:'',
    }


    onChangeHandler = (ev) => {
        const field = ev.target.name;
        const value = ev.target.value;
        this.setState({ [field]: value }, () => {
            this.props.onSetFilter({...this.state});
        });
    }


    render() {
        const { term } = this.state;
        return (
            <div className="contact-filter">
                <label htmlFor="term">Search:</label>
                <input name="term" value={term} type="text" placeholder="Search contact..." onChange={this.onChangeHandler} />

            </div>
        )
    }
}

