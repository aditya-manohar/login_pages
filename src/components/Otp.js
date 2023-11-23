import React, { useState, useRef } from 'react';
import RequestButton from './RequestButton';
import logo from '../images/Group 33524.svg';
import './Otp.css';

function Otp() {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef([]);

    const handleOtpChange = (index, value) => {
        const updatedOtp = [...otp];
        updatedOtp[index] = value;
        setOtp(updatedOtp);

        if (value !== '' && index < otp.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleBackspace = (index) => {
        const updatedOtp = [...otp];
        updatedOtp[index] = '';
        setOtp(updatedOtp);
        if (index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };


    return (
        <>
            <center><img src={logo} alt='logo' style={{ padding: '4rem' }} /></center>
            <div className="otp-container">
                <h1 style={{ color: 'white' }}>OTP Verification</h1>
                <p style={{ color: '#707181' }}>OTP sent to your Email Address</p>
                <form>
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            type="text"
                            className="otpinput"
                            maxLength="1"
                            placeholder='0'
                            value={digit}
                            onChange={(e) => handleOtpChange(index, e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Backspace') {
                                    handleBackspace(index);
                                }
                            }}
                            style={{ backgroundColor: '#212428', fontSize: '1.2rem' }}
                            ref={(inputRef) => (inputRefs.current[index] = inputRef)}
                        />
                    ))}
                </form>
                <center>
                    <p style={{ color: '#686978' }}>Didn't Receive code</p>
                    <div className='resend-link'>
                        <a href="#" className="resend-link">
                            Resend Code
                        </a>
                    </div>
                    <RequestButton text={'Confirm'} />
                </center>
            </div>
        </>
    );
}

export default Otp;
