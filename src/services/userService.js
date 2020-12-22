
import { storageService } from '../services/storageService';
const STORAGE_KEY = 'loggedInUser';
export const userService = {
    getUser,
    signup,
    transferFunds
}

var currUser;


function getUser() {
    var user = storageService.load(STORAGE_KEY);
    if (!user) {
        user = {errMsg:'Please Login or Singup'}
    }
    currUser = user;
    storageService.store(STORAGE_KEY, user);
    return currUser;
}


function signup(name) {
    var user = {
        name,
        coins: 100,
        moves: []
    }
    storageService.store(STORAGE_KEY, user);
    return user;
}

function transferFunds(sentTo){
    var user = storageService.load(STORAGE_KEY);
    if(!user) return;
    else {
        user.coins -= sentTo.amount
        var date = new Date(sentTo.date).toDateString();
        sentTo.date = date;
        user.moves.push(sentTo);
        storageService.store(STORAGE_KEY,user); 
    }
    return user;
}