import React, { Component } from 'react'
import { bitcoinService } from '../../services/bitcoinService';
import { userService } from '../../services/userService';
import './HomePage.scss';
import imgBgc from '../../assets/img/bitcoin.png';
import { connect } from 'react-redux';
import { getUser } from '../../store/actions/userActions.js';



class _HomePage extends Component {
    state = {
        marketPrice: null
    }

    componentDidMount() {
        this.loadUser();
        this.loadMarketPrice();
        console.log(this.props);
    }

    async loadUser() {;
        await this.props.getUser();
    }
    async loadMarketPrice() {
        const market = await bitcoinService.getRate(1);
        this.setState({ marketPrice: market });
    }

    getStarted = () => {
        this.props.history.push("/contacts")
    }


    render() {
        const { user } = this.props;
        const { marketPrice } = this.state;
        return (
            <div className="homepage">
                {user && marketPrice &&
                    <div className="user">
                    {user.name && 
                        <div className="user-details">
                            <p>Welcome back, {user.name}</p>
                            <p><i className="fas fa-wallet"></i> Your Balance: {user.coins} BTC</p>
                            <p><i className="fab fa-bitcoin"></i> Current BTC Rate: {marketPrice}</p>
                        </div>
                    }
                    {user.errMsg &&
                            <div>
                                <p>{user.errMsg}</p>
                            </div>
                    }
                        <div className="bgcImg">
                            <div className="logo">
                                <h1>Mr.Bitcoin.</h1>
                                <h2>Most secure Cryptocurrency wallet on the web.</h2>
                                <button onClick={this.getStarted}>Get Started</button>
                            </div>
                            <div className="imgs">
                                <img src={imgBgc}></img>
                            </div>
                        </div>
                    </div>
                }
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

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(_HomePage);