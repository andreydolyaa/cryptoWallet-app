import React, { Component } from 'react'
import { HomePage } from '../HomePage/HomePage.jsx';
import { ContactPage } from '../ContactPage/ContactPage.jsx';
import StatisticPage from '../StatisticPage/StatisticPage.jsx';
import AppHeader from '../../cmps/AppHeader/AppHeader.jsx';
import './CryptoApp.scss';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { ContactDetails } from '../ContactDetails/ContactDetails.jsx';
import { ContactEdit } from '../ContactEdit/ContactEdit.jsx';
import { Signup } from '../Signup/Signup';
import { PersonalArea } from '../PersonalArea/PersonalArea.jsx';





export default class CryptoApp extends Component {
    state = {
        style: 'none',
        icon:'block'
    }

    toggleMenu = () => {
        var { style } = this.state;
        if (style === 'none') this.setState({ style: 'flex',icon:'none' });
        else this.setState({ style: 'none',icon:'block' });
        console.log(this.state);
    }

    render() {
        return (
            <div className="crypto-app">
                <Router>
                    <AppHeader toggleMenu={this.toggleMenu} onOff={this.state.style} icon={this.state.icon}/>
                    <Switch>
                        <Route path="/contact/edit/:id?" component={ContactEdit}></Route>
                        <Route path="/contact/:id" component={ContactDetails}></Route>
                        <Route path="/contacts" component={ContactPage}></Route>
                        <Route path="/statistics" component={StatisticPage}></Route>
                        <Route path="/signup" component={Signup}></Route>
                        <Route path="/personal-area" component={PersonalArea}></Route>
                        <Route path="/" component={HomePage}></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}
