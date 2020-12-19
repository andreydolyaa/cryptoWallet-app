import React, { Component } from 'react'
import HomePage from '../HomePage/HomePage.jsx';
import ContactPage from '../ContactPage/ContactPage.jsx';
import StatisticPage from '../StatisticPage/StatisticPage.jsx';
import './CryptoApp.scss';




export default class CryptoApp extends Component {
    state = {
        showCharts: false,
        showUsers: true,
    }

    showCharts = () => {
        this.setState({
            showUsers: false,
            showCharts: true
        })
    }

    showUsers = () => {
        this.setState({
            showUsers: true,
            showCharts: false
        })
    }



    render() {
        const { showCharts, showUsers } = this.state;
        return (
            <div className="crypto-app">
                <HomePage />
                <div className="toggleChart">
                    <button onClick={this.showUsers}>Contacts</button>
                    <button onClick={this.showCharts}>Statistics</button>
                </div>
                {showUsers && !showCharts && <ContactPage />}
                {showCharts && <StatisticPage />}
            </div>
        )
    }
}


