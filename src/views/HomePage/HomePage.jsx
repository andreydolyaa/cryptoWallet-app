import React, { Component } from 'react'
import { bitcoinService } from '../../services/bitcoinService';
import { userService } from '../../services/userService';
import './HomePage.scss';



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


    render() {
        const { user, marketPrice } = this.state;
        return (
            <div class="homepage">
            <h1><i class="fab fa-bitcoin"></i> Mister Bitcoin</h1>
                {user && marketPrice &&
                    <div className="user">
                        <div class="name">
                            <h4>Hi, {user.name}</h4>
                        </div>
                        <p><i class="fas fa-wallet"></i> Your Balance: {user.coins} BTC</p>
                        <p><i class="fab fa-bitcoin"></i> Current BTC Rate: {marketPrice}</p>
                    </div>
                }
            </div>
        )
    }
}
