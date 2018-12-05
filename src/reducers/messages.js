import * as types from './../constant/ActionType'
import * as Message from './../constant/Message'
var data = JSON.parse(localStorage.getItem('CARTS'));

var initialState = Message.MSG_WELCOME;

const messages = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_MESSAGE:
            return action.message;
        default:
            return [...state];
    }
};

export default messages;