
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userSignup } from '../../store/actions/userActions.js';

class _Signup extends Component {
    state = {
        user: {
            name: ''
        }
    }

    setUserName = (ev) => {
        var { name } = this.state.user
        name = ev.target.value;
        this.setState(prevState => ({ user: { ...prevState.user, name } }));
    }

    onSignup = (ev) => {
        ev.preventDefault();
        this.props.userSignup(this.state.user.name);
        this.props.history.push('/');
    }


    render() {
        const { name } = this.state.user;
        return (
            <div>
                <form onSubmit={this.onSignup}>
                    <label>Username: </label>
                    <input type="text" placeholde="Enter a username" value={name} onChange={this.setUserName}></input>
                    <button>Signup</button>
                </form>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    userSignup
}

export const Signup = connect(null, mapDispatchToProps)(_Signup);
