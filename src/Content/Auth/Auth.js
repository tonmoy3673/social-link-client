import React from 'react';
import './Auth.css';
const Auth = () => {
    return (
        <div className='Auth'>
            <LogIn/>
        </div>
        
    );
};
function LogIn() {
    return (
      <div className="a-right">
        <form className="infoForm authForm">
          <h3>Log In</h3>
  
          <div>
            <input
              type="email"
              placeholder="Email Address"
              className="infoInput"
              name="email"
            />
          </div>
  
          <div>
            <input
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
            />
          </div>
  
          <div>
              <span style={{ fontSize: "12px" }}>
                Don't have an account Sign up
              </span>
            <button className="button infoButton">Login</button>
          </div>
        </form>
      </div>
    );
  }
function SignUp() {
    return(
        <div className='a-right'>
            <form className='infoForm'>
                <h3>SignUp</h3>
                <div>
                    <input type='text' placeholder='First Name' className='infoInput' name='firstName'/>
                    <input type='text' placeholder='Last Name' className='infoInput' name='lastName'/>
                </div>
                <div>
          <input
            type="email"
            className="infoInput"
            name="email"
            placeholder="Email Address"
          />
        </div>

        <div>
          <input
            type="password"
            className="infoInput"
            name="password"
            placeholder="Password"
          />
          <input
            type="password"
            className="infoInput"
            name="confirmpass"
            placeholder="Confirm Password"
          />
        </div>
        <div>
            <span style={{fontSize: '12px'}}>Already have an account. Login!</span>
        </div>
        <button className="button infoButton" type="submit">Signup</button>
            </form>
        </div>
    )
}
export default Auth;