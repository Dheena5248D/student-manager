import { loginRequest, loginSuccess, loginFailure, registerRequest, registerSuccess, registerFailure } from '../slices/authSlice';
import axios from 'axios';

export const register = (email, name, password) => async (dispatch) => {
    dispatch(registerRequest());
    try {
        const response = await axios.post('/api/register', { email, name, password });
        dispatch(registerSuccess(response.data));
    } catch (error) {
        dispatch(registerFailure(error.response.data));
    }
}

export const login = (email, password) => async (dispatch) => {
    dispatch(loginRequest());
    try {
        const response = await axios.post('/api/login', { email, password });
        dispatch(loginSuccess(response.data));
    } catch (error) {
        dispatch(loginFailure(error.response.data));
    }
}