

import axios from 'axios';
import {storageService} from './storageService.js';
const STORAGE_KEY = 'crypto';
const STORAGE_KEY_VOLUME = 'tradeVolume';
const STORAGE_KEY_RATE = 'currRate';


export const bitcoinService = {
    getRate,
    getMarketPrice,
    getConfirmedTransactions
}


async function getRate(coins){
    // const res = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`);
    // return res.data;
    var crypto = storageService.load(STORAGE_KEY_RATE);
    // if(!crypto){
    //     var res = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`);
    //     crypto = res.data
    //     storageService.store(STORAGE_KEY_RATE,crypto);
    // }
    return crypto;
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
    var crypto = storageService.load(STORAGE_KEY_VOLUME);
    // if(!crypto || !crypto.length){
    //     var res = await axios.get(`https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true`);
    //     crypto = res.data
    //     storageService.store(STORAGE_KEY_VOLUME,crypto);
    // }
    return crypto;
}
