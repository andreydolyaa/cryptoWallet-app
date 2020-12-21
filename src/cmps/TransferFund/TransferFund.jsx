
import React, { Component } from 'react'
import { connect } from 'react-redux';
import './TransferFund.scss'
import { transferFunds } from '../../store/actions/userActions.js';

class _TransferFund extends Component {
    state = {
        coins: 0,
        sentTo: {
            name: '',
            amount: '',
            date: ''
        }
    }


    handleFundsTransfer = (ev) => {
        var amount = ev.target.value
        this.setState({ coins: +amount });
        this.setState(prevState => ({ sentTo: { ...prevState.sentTo, name: this.props.name, amount, date: new Date() } }));
    }

    sendFunds = (ev) => {
        ev.preventDefault();
        this.props.transferFunds(this.state.sentTo);
    }

    render() {
        const { coins } = this.state
        return (
            <div className="funds">
                <form onSubmit={this.sendFunds}>
                    <h3 className="toName">Transfer funds to <span className="toNameSpan">{this.props.name}</span></h3>
                    <label className="amount">Amount:</label>
                    <input type="number" value={coins} onChange={this.handleFundsTransfer}></input>
                    <button className="fundt">Transfer</button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    transferFunds
}

export const TransferFund = connect(mapStateToProps, mapDispatchToProps)(_TransferFund);