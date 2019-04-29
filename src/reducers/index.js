import { combineReducers } from "redux";


const initState = {
    login: 'jerakrus@gmail.com',
    password: 'hmNmmICC',
    url: 'http://myshop-vs509.myinsales.ru',
};

const authForm = (state = initState, action) => {
    switch (action.type) {
        case 'INPUT_LOGIN': {
            return { ...state, login: action.payload };
        }
        case 'INPUT_PASSWORD': {
            return { ...state, password: action.payload };
        }
        case 'INPUT_URL': {
            return { ...state, url: action.payload };
        }
        case 'CLEAR_FORM': {
            return initState;
        }
        default: {
            return state;
        }
    }
};

const isLogin = (state = 'none', action) => {
    switch (action.type) {
        case 'LOGIN_REQUEST': {
            return 'request'
        }
        case 'LOGIN_SUCCESS': {
            return 'success';
        }
        case 'LOGIN_FAILURE_AUTH': {
            return 'failure_auth';
        }
        case 'LOGIN_FAILURE_URL': {
            return 'failure_url';
        }
        default: {
            return state;
        }
    }
};

const auth = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS': {
            return {
                base64: action.base64,
                url: action.url,
            };
        }
        default: {
            return state;
        }
    }
};

const isLoadOrders = (state = '', action) => {
    switch (action.type) {
        case 'LOAD_ORDERS_REQUEST': {
            return 'request';
        }
        case 'LOAD_ORDERS_SUCCESS': {
            return 'success';
        }
        case 'LOAD_ORDERS_FAILURE': {
            return 'failure';
        }
        default: {
            return state;
        }
    }
};

const orders = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_ORDERS_SUCCESS': {
            return action.payload;
        }
        case 'LOAD_ORDERS_MORE_SUCCESS':
            return [...state, ...action.payload];
        default: {
            return state;
        }
    }
};

export default combineReducers({
    authForm,
    isLogin,
    auth,
    isLoadOrders,
    orders,
});