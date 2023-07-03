import axios from 'axios';
import {
    FAIL_VALID_EMAIL_PASSWORD,
    LOGIN_OK,
} from '../../lib/apis/constant/message';
import { URL } from '../../lib/apis/constant/path';

export default async function handleLogin(email, password) {
    const requestPath = '/user/login';
    const requestUrl = `${URL}${requestPath}`;

    const userData = {
        user: {
            email: email,
            password: password,
        },
    };

    const result = {
        state: false,
        message: '',
    };

    // const response = await fetch(requestUrl, {
    //     method: 'POST',
    //     headers: {
    //         'Content-type': 'application/json',
    //     },
    //     body: JSON.stringify(userData),
    // });

    const response = await axios({
        method: 'post',
        url: requestUrl,
        data: userData,
        headers: { 'Content-Type': 'application/json' },
    });

    axios.interceptors.request.use((config) => {
        const token = localStorage.token;
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    });

    const data = await response.data;
    if (!data.user) {
        result.state = false;
        result.message = FAIL_VALID_EMAIL_PASSWORD;
        return result;
    } else {
        result.state = true;
        result.message = LOGIN_OK;
    }

    const token = data.user.token;
    localStorage.setItem('token', token);

    return result;
}
