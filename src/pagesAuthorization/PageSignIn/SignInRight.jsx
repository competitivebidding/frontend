import React, { useState } from 'react';
import validator from 'validator';
import './SignInRight.scss'
import {Link} from 'react-router-dom'

const SignInRight = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [minLengthError, setMinLengthError] = useState(false);
  const [digitError, setDigitError] = useState(false);
  const [upperCaseError, setUpperCaseError] = useState(false);

  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isChecked) {
      setPasswordError(true);
      return;
    }

    if (validator.isEmail(email)) {
      setEmailError(false);
      event.target.submit();
    } else {
      setEmailError(true);
    }

    const hasUpperCase = /[A-Z]/.test(password);
    const hasDigit = /\d/.test(password);
    const isMinLength = password.length >= 6;

    if (!hasUpperCase || !hasDigit || !isMinLength) {
      setMinLengthError(!isMinLength);
      setDigitError(!hasDigit);
      setUpperCaseError(!hasUpperCase);
      setPasswordError(true);
    } else {
      setPasswordError(false);
    } 
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (validator.isEmail(event.target.value)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <>
      <form className="form form__sign" onSubmit={handleSubmit} noValidate>
        <h2 className="form__title">Sign in</h2>
        <div className="form__descr">
          <p>Already have an account?<span>
            <Link to='/LogIn'>Log In</Link> 
            </span></p>
        </div>
        <div className={`form__group ${emailError ? 'has-error' : ''}`}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required value={email} onChange={handleEmailChange} />
          {emailError && <div className="error__message">Please enter a valid email address</div>}
        </div>
        <div className={`form__group ${passwordError ? 'has-error' : ''}`}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required value={password} onChange={(event) => setPassword(event.target.value)} />
          {passwordError && (
            <div className="error__message">
              Minimum 6 characters, at least 1 digit, at least 1 upper case character
            </div>
          )}
        </div>

        <label className="checkbox__container">
          <input type="checkbox" name="text" onChange={handleCheckboxChange} />
          <span className="checkmark"></span>
          I have read and agree with <span className='text__blue'>the terms and conditions of the Competitive Bidding</span>
        </label>
        {!isChecked && passwordError && <div className="error__message">You need to accept our terms and conditions </div>}


        <div className="form__group">
          <button type="submit" className="btn">Sign in</button>
        </div>
        
      </form>
    </>
  )
}


  export default SignInRight
