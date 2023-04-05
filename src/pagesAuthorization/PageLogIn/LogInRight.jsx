import React, { useState } from 'react';
import validator from 'validator';
import './LoginRight.scss'

import {Link} from 'react-router-dom'

const LogInRight = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validator.isEmail(email)) {
      setEmailError(false);
      event.target.submit();
    } else {
      setEmailError(true);
    }

    if (!password) {
      setPasswordError(true);
      return;
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

  return (
    <>
      <form className="form" onSubmit={handleSubmit} noValidate>
        <h2 className="form__title">Log in</h2>
        <div className="form__descr">
          <p>No account? <span >
            <Link to='/SignIn'>Create an account</Link>
            </span></p>
        </div>
        <div className={`form__group ${emailError ? 'has-error' : ''}`}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required value={email} onChange={handleEmailChange} />
          {emailError && <div className="error-message">Please enter a valid email address</div>}
        </div>
        <div className={`form__group ${passwordError ? 'has-error' : ''}`}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required value={password} onChange={(event) => setPassword(event.target.value)} />
          {passwordError && <div className="error-message">Please enter your password</div>}
        </div>

        <div className="form__group">
          <button type="submit" className="btn">Log in</button>
        </div>
        <div className='form__group form__forgot'>
          Forgot password?
        </div>
      </form>
    </>
  );
};

export default LogInRight;
