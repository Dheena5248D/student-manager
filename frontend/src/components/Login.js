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
        <div className="container container-fluid">
        <div className="row wrapper"> 
		<div className="col-10 col-lg-5">
        <form onSubmit={handleSubmit} className="shadow-lg">
            <h1 className="mb-3">Login</h1>
            <div className="form-group">
              <label htmlFor="email_field">Email</label>
              <input
                type="email"
                id="email_field"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
  
            <div className="form-group">
              <label htmlFor="password_field">Password</label>
              <input
                type="password"
                id="password_field"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
  
            <button
              id="login_button"
              type="submit"
              className="btn btn-block py-3"
            >
              LOGIN
            </button>

            <a href="/register" className="float-right mt-3">New User?</a>
          </form>
		  </div>
    </div>
</div>
        
    );
}
