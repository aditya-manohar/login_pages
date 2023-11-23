import React, { useState } from "react";
import "./Register.css";
import logo from "../images/Group 33524.svg";
import Input from "./Input";
import RequestButton from "./RequestButton";
import { Link } from "react-router-dom";

export default function Register() {
    const [email, setEmail] = useState('');

    const handleEmailSubmit = (e) => {
        e.preventDefault();

        axios
            .post('http://localhost:3001/send-otp', { email })
            .then(() => {
                console.log('mail sent');
            })
            .catch((error) => {
                console.log(error);
                // Handle error or simply log it
            });
    };

    return (
        <div>
            <center><img src={logo} alt="logo" style={{ padding: '4rem' }} /></center>
            <div className="signup-container">
                <h1 style={{ color: 'white' }}>User Registration</h1>
                <form onSubmit={handleEmailSubmit} >
                    <Input type={'text'} placeholder={'Enter first name'} label={'First Name*'} />
                    <Input type={'text'} placeholder={'Enter last name'} label={'Last Name*'} />
                    <Input type={'email'} placeholder={'Enter email'} label={'Email* (OTP Will Send To Email)'} value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Input type={'password'} placeholder={'Enter password'} label={'Password*'} />
                    <Input type={'password'} placeholder={'Confirm password'} label={'Confirm password*'} />
                    <div className="check"><input type="checkbox" id="termsCheckbox" />
                        <label for="termsCheckbox" style={{ color: 'white' }}>I agree to the terms and conditions</label></div>

                    <center><Link to='/otp'><RequestButton text={"Register"} /></Link></center>
                </form>
            </div>
        </div>
    );
}
