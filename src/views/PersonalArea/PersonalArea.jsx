

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../store/actions/userActions.js';
import './PersonalArea.scss'
///////////////////////////// MOVES LIST //////////////////////////////////////////////////
class _PersonalArea extends Component {

    componentDidMount() {
        this.loadUser();
    }
    async loadUser() {
        await this.props.getUser();
        console.log(this.props.user);
    }



    render() {
        const { user } = this.props;
        if (!user) return <div>Loading..</div>
        // var moves = user.moves.map((move) => <li key={move.name}>{move.name}</li>)
        return (
            <div class="personal-area">
                <div class="welcome">
                    <i class="fab fa-bitcoin"></i>
                    <h1>Welcome back, {user.name}!</h1>
                    <h3>Your Balance {user.coins} BTC</h3>
                </div>
                <div class="history">
                    {
                        user.moves.map(userMove => {
                            return (<div key={userMove.name} className="user-transactions">
                                <p>You have transfered <span>{userMove.amount}</span> BTC to <span>{userMove.name}</span> At <span>{userMove.date}</span></p>
                            </div>)
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.userReducer.user
})

const mapDispatchToProps = {
    getUser
}

export const PersonalArea = connect(mapStateToProps, mapDispatchToProps)(_PersonalArea);