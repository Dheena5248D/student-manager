// import './Login.css'

import { useState, useEffect } from "react"
import { useDispatch } from "react-redux";
import { login } from "../actions/authActions";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { clearAuth } from '../slices/authSlice';

import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Login() {
    const { isAuthenticated, error } = useSelector((state) => state.authReducer);
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    }
    
    useEffect(() => {
        
        if(isAuthenticated) {
            dispatch(clearAuth());
            navigate('/dashboard');
        }
        if(error) {
            toast.error(error.message);
            }
        
    }, [dispatch, isAuthenticated, navigate, error]);
    
    return (
        <div class="container container-fluid">
        <div class="row wrapper"> 
		<div class="col-10 col-lg-5">
        <form onSubmit={handleSubmit} class="shadow-lg">
            <h1 class="mb-3">Login</h1>
            <div class="form-group">
              <label for="email_field">Email</label>
              <input
                type="email"
                id="email_field"
                class="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
  
            <div class="form-group">
              <label for="password_field">Password</label>
              <input
                type="password"
                id="password_field"
                class="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
  
            <button
              id="login_button"
              type="submit"
              class="btn btn-block py-3"
            >
              LOGIN
            </button>

            <a href="/register" class="float-right mt-3">New User?</a>
          </form>
		  </div>
    </div>
</div>
        
    );
}
