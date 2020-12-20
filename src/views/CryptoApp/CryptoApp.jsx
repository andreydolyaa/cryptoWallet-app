import React, { Component } from 'react'
import HomePage from '../HomePage/HomePage.jsx';
import ContactPage from '../ContactPage/ContactPage.jsx';
import StatisticPage from '../StatisticPage/StatisticPage.jsx';
import AppHeader from '../../cmps/AppHeader/AppHeader.jsx';
import './CryptoApp.scss';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import ContactDetails from '../ContactDetails/ContactDetails.jsx';
import ContactEdit from '../ContactEdit/ContactEdit.jsx';





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
                <Router>
                    <AppHeader />
                    <Switch>
                        <Route path="/contact/edit/:id?" component={ContactEdit}></Route>
                        <Route path="/contact/:id" component={ContactDetails}></Route>
                        <Route path="/contacts" component={ContactPage}></Route>
                        <Route path="/statistics" component={StatisticPage}></Route>
                        <Route path="/" component={HomePage}></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

// <div className="crypto-app">
//                 <Router>
//                     <HomePage />
//                     <div className="toggleChart">
//                         <button onClick={this.showUsers}>Contacts</button>
//                         <button onClick={this.showCharts}>Statistics</button>
//                     </div>
//                     {showUsers && !showCharts && <ContactPage />}
//                     {showCharts && <StatisticPage />}
//                 </Router>
//             </div>
