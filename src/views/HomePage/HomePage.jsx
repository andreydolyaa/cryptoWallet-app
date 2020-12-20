import React, { Component } from 'react'
import { bitcoinService } from '../../services/bitcoinService';
import { userService } from '../../services/userService';
import './HomePage.scss';
import imgBgc from '../../assets/img/bitcoin.png'



export default class HomePage extends Component {
    state = {
        user: null,
        marketPrice: null
    }

    componentDidMount() {
        this.loadUser();
        this.loadMarketPrice();
    }

    async loadUser() {
        const user = await userService.getUser();
        this.setState({ user });
    }
    async loadMarketPrice() {
        const market = await bitcoinService.getRate(1);
        this.setState({ marketPrice: market });
    }

    getStarted = () =>{
        this.props.history.push("/contacts")
    }


    render() {
        const { user, marketPrice } = this.state;
        return (
            <div class="homepage">
                {user && marketPrice &&
                    <div className="user">
                        <div className="user-details">
                            <p>Welcome back, {user.name}</p>
                            <p><i class="fas fa-wallet"></i> Your Balance: {user.coins} BTC</p>
                            <p><i class="fab fa-bitcoin"></i> Current BTC Rate: {marketPrice}</p>
                        </div>
                        <div className="bgcImg">
                            <div className="logo">
                                <h1>Mr.Bitcoin.</h1>
                                <h2>Most secure Cryptocurrency wallet on the web.</h2>
                                <button onClick={this.getStarted}>Get Started</button>
                            </div>
                            <div class="imgs">
                                <img src={imgBgc}></img>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}
