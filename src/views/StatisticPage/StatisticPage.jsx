
import React, { Component } from 'react';
import Chart from '../../cmps/Chart';
import { bitcoinService } from '../../services/bitcoinService';
import './StatisticPage.scss';


export default class StatisticPage extends Component {
    state = {
        marketPrice: null,
        tradingVolume: null
    }

    componentDidMount() {
        this.loadMarketPrice();
        this.loadTradingVolume();
    }

    async loadMarketPrice() {
        const marketPrice = await bitcoinService.getMarketPrice();
        this.setState({ marketPrice });
    }

    async loadTradingVolume() {
        const tradingVolume = await bitcoinService.getConfirmedTransactions();
        this.setState({ tradingVolume });
    }

    render() {
        const { marketPrice, tradingVolume } = this.state;
        return (
            <div className="charts">
                {marketPrice && tradingVolume && <Chart marketPrice={marketPrice.values} tradingVolume={tradingVolume.values} />}
            </div>
        )
    }
}
