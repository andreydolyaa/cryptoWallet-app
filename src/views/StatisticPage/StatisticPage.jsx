
import React, { Component } from 'react';
import Chart from '../../cmps/Chart';
import { bitcoinService } from '../../services/bitcoinService';
import './StatisticPage.scss';


export default class StatisticPage extends Component {
    state = {
        marketPrice: null,
    }

    componentDidMount() {
        this.loadMarketPrice();
    }

    async loadMarketPrice() {
        const marketPrice = await bitcoinService.getMarketPrice();
        this.setState({ marketPrice });
    }

    render() {
        const { marketPrice } = this.state;
        return (
            <div>
                {marketPrice && <Chart marketPrice={marketPrice.values} />}
            </div>
        )
    }
}
