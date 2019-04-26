import axios from 'axios';
import { encode } from 'base-64';

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
export const loadOrdersRequest = () => {
    return {
        type: 'LOAD_ORDERS_REQUEST',
    }
};
export const loadOrdersSuccess = (orders) => {
    return {
        type: 'LOAD_ORDERS_SUCCESS',
        payload: orders,
    }
};
export const loadOrdersFailure = () => {
    return {
        type: 'LOAD_ORDERS_FAILURE',
    }
};

export const loadOrders = (auth) => async dispatch => {
    dispatch(loadOrdersRequest());
    try {
        const options = {
            url: `${auth.url}/admin/orders.json`,
            method: 'GET',
            headers: {
                Authorization: `Basic ${auth.base64}`
            }
        };
        const res = await axios(options);
        dispatch(loadOrdersSuccess(res.data));
    } catch (e) {
        console.log('ошибка загрузки заказов', e);
        dispatch(loadOrdersFailureUrl());
    }
};

