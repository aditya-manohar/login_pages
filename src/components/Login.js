import React from 'react'
import './Login.css';
import logo from '../images/Group 33524.svg';
import { Link } from 'react-router-dom'
import Input from './Input';
import RequestButton from './RequestButton';

export default function Login() {

    const handleGoogleLogin = () => {
        window.open('http://localhost:3001/auth/google', '_self')
    }

    const handleGithubLogin = () => {
        window.open('http://localhost:3001/auth/github', '_self')
    }


    return (
        <>
            <center><img src={logo} alt='logo' style={{ padding: '3rem' }} /></center>
            <div className="login-container">
                <div className='welcome'>
                    <h3 style={{ color: 'gray' }}>Welcome👋</h3>
                    <h1 style={{ color: 'white', marginTop: '-1rem' }}>Login Account</h1>
                </div>
                <div className="social-buttons">
                    <button className='login-button' onClick={handleGoogleLogin}><img width="30" height="30" src="https://img.icons8.com/color/30/google-logo.png" alt="google-logo" />Google</button>
                    <button className='login-button' onClick={handleGithubLogin}><img width="42" height="42" src="https://img.icons8.com/sf-regular-filled/48/000000/github.png" alt="github" />Github</button>
                </div>
                <center><h3 style={{ color: '#4245cb' }}>Or</h3></center>
                <label for="email" className='label'>Email address*</label><br></br>
                <Input placeholder={'Enter email address'} type={'text'} /><br></br>

                <label for="password" className='label'>Password*</label><br></br>
                <Input placeholder={'Enter password'} type={'password'} />

                <center><RequestButton text={'Login'} /></center>

                <center><p style={{ fontSize: '15px', color: 'dimgray' }}>You don't have an account?<Link to='/register'> <a href="#" class="register-link">Register account</a></Link></p></center>
            </div>

        </>
    )
}
