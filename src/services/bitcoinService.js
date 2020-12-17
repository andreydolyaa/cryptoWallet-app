

import axios from 'axios';
import {storageService} from './storageService.js';
const STORAGE_KEY = 'crypto';


export const bitcoinService = {
    getRate,
    getMarketPrice

}


async function getRate(coins){
    const res = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`);
    return res.data;
}

async function getMarketPrice(){
    var crypto = storageService.load(STORAGE_KEY);
    // if(!crypto || !crypto.length){
    //     var res = await axios.get(`https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`);
    //     crypto = res.data
    //     storageService.store(STORAGE_KEY,crypto);
    // }
    return crypto;
}


async function getConfirmedTransactions(){

}