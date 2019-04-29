import axios from 'axios';
import { encode } from 'base-64';
import AsyncStorage from '@react-native-community/async-storage';

// form
export const inputLogin = (text) => {
    return {
        type: "INPUT_LOGIN",
        payload: text,
    }
};
export const inputPassword = (text) => {
    return {
        type: "INPUT_PASSWORD",
        payload: text,
    }
};
export const inputUrl = (text) => {
    return {
        type: "INPUT_URL",
        payload: text,
    }
};
export const clearForm = () => {
    return {
        type: 'CLEAR_FORM',
    }
};

// login
export const loginRequest = () => {
    return {
        type: 'LOGIN_REQUEST',
    }
};
export const loginSuccess = (user, base64, url) => {
    return {
        type: 'LOGIN_SUCCESS',
        payload: user,
        base64,
        url,
    }
};
export const loginFailureAuth = () => {
    return {
        type: 'LOGIN_FAILURE_AUTH',
    }
};
export const loginFailureUrl = () => {
    return {
        type: 'LOGIN_FAILURE_URL',
    }
};

export const logIn = (login, password, url) => async dispatch => {
    dispatch(loginRequest());
    try {
        const base64 = encode(login + ':' + password);
        const options = {
            url: `${url}/admin/account.json`,
            method: 'GET',
            headers: {
                Authorization: `Basic ${base64}`
            }
        };
        const res = await axios(options);
        dispatch(loginSuccess(res.data, base64, url));
        await AsyncStorage.setItem('auth', base64);
        await AsyncStorage.setItem('url', url);
        dispatch(clearForm());
    } catch (e) {
        if (e.response) {
            if (e.response.status === 401) {
                console.log('Логин или пароль не верны.', e);
                dispatch(loginFailureAuth());
            } else {
                console.log('Ошибка соединения', e);
                dispatch(loginFailureUrl());
            }
        } else {
            console.log('Не верный адресс сайта', e);
            dispatch(loginFailureUrl());
        }
    }
};

// orders
export const loadOrdersRequestFirstPage = () => {
    return {
        type: 'LOAD_ORDERS_REQUEST',
    }
};
export const loadOrdersSuccessFirstPage = (orders) => {
    return {
        type: 'LOAD_ORDERS_SUCCESS',
        payload: orders,
    }
};
export const loadOrdersFailureFirstPage = () => {
    return {
        type: 'LOAD_ORDERS_FAILURE',
    }
};

export const loadOrdersFirstPage = (auth) => async dispatch => {
    dispatch(loadOrdersRequestFirstPage());
    try {
        const options = {
            url: `${auth.url}/admin/orders.json?`,
            params: {page: 1, per_page: 25},
            method: 'GET',
            headers: {
                Authorization: `Basic ${auth.base64}`
            }
        };
        const res = await axios(options);
        dispatch(loadOrdersSuccessFirstPage(res.data));
    } catch (e) {
        console.log('ошибка загрузки заказов', e);
        dispatch(loadOrdersFailureFirstPage());
    }
};

export const loadOrdersRequestMorePage = () => {
    return {
        type: 'LOAD_ORDERS_MORE_REQUEST',
    }
};
export const loadOrdersSuccessMorePage = (orders) => {
    return {
        type: 'LOAD_ORDERS_MORE_SUCCESS',
        payload: orders,
    }
};
export const loadOrdersFailureMorePage = () => {
    return {
        type: 'LOAD_ORDERS_MORE_FAILURE',
    }
};
export const loadOrdersMorePage = (auth, page) => async dispatch => {
    dispatch(loadOrdersRequestMorePage());
    try {
        const options = {
            url: `${auth.url}/admin/orders.json?`,
            params: {page: page, per_page: 25},
            method: 'GET',
            headers: {
                Authorization: `Basic ${auth.base64}`
            }
        };
        const res = await axios(options);
        dispatch(loadOrdersSuccessMorePage(res.data));
    } catch (e) {
        console.log('ошибка загрузки заказов', e);
        dispatch(loadOrdersFailureMorePage());
    }
};
