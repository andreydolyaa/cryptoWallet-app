import React, { Component } from 'react'
import { bitcoinService } from '../../services/bitcoinService';
import { userService } from '../../services/userService';
import './HomePage.scss';



export default class HomePage extends Component {
    state = {
        user: null,
        marketPrice:null
    }

    componentDidMount() {
        this.loadUser();
        this.loadMarketPrice();
    }

    async loadUser() {
        const user = await userService.getUser();
        this.setState({ user });
    }
    async loadMarketPrice(){
        const market = await bitcoinService.getMarketPrice();
        this.setState({marketPrice:market});
    }


    render() {
        const { user,marketPrice } = this.state;
        return (
            <div>
            {user && marketPrice &&
                <div className="user">
                    <h4>Hi, {user.name}</h4>
                    <p>Your Balance: {user.coins} BTC</p>
                    <p>Current BTC Rate: {marketPrice.values[150].y + marketPrice.unit}</p>
                </div>
            }
            </div>
        )
    }
}
