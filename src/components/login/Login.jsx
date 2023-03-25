import React, { useState } from 'react'
import "./login.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const [pass, setPass] = useState(false)
  const history = useNavigate();
  return (
    <div className=' d-flex align-items-center justify-content-center flex-column main-outer-container-me'>

      <div className=' login-main-me '>
        <div className='heading-me '>
          <p>Welcome to <br />Systempackage </p>
        </div>
        <form className="input-group  login-form-me" >

          <input
            type="text"
            className="form-control login-input-username-me"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            autocomplete="false"
          />
          <div className='option-me'>
            <select className="form-select form-options-me " id="inputGroupSelect01" >
              <option selected="">@heads.design</option>
              <option value={1}>One</option>
              <option value={2}>Two</option>
              <option value={3}>Three</option>
            </select>
          </div>




          <input
            type="password"
            className="form-control login-input-password-me"
            placeholder="Password"
            aria-label="Username"
            aria-describedby="basic-addon1"
            id='password'
          />

          {!pass ? <FontAwesomeIcon icon={faEyeSlash} style={{ color: "#7A7A85", }} className="eye-icon-me " onClick={() => {
            const password = document.querySelector('#password');
            const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
            password.setAttribute('type', type);
            setPass(!pass)
          }} /> :
            <FontAwesomeIcon icon={faEye} style={{ color: "#7A7A85", }} className="eye-icon-me " onClick={() => {
              const password = document.querySelector('#password');
              const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
              password.setAttribute('type', type);
              setPass(!pass)
            }} />
          }
          <button className="btn btn-primary login-btn-me " onClick={() => {
            history("/otp")

          }}>
            Next
          </button>

          <p className='forgot-password-me '>
            Forgot your password?
          </p>


        </form>
      </div>

    </div>


  )
}

export default Login