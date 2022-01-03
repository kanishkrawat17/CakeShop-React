import React, {useState} from "react";
import { useNavigate } from "react-router";

const loginDetails = {
    email : "test@gmail.com",
    password : "1234"
}

const Login = () => {

    const navigate = useNavigate();
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [isAuthenticatesUser, setIsAuthenticatesUser] = useState(false)

    const emailHandler= (e) => {
        const {value} = e.target;
        setEmailInput(value)
    }
    const passwordHandler= (e) => {
        const {value} = e.target;
        setPasswordInput(value)
    }
    const submitHandler = (e)=>{
        e.preventDefault();
        const {email, password} = loginDetails;
        if(passwordInput === password && emailInput === email){
            navigate("/cakeform")
        } else{
            setIsAuthenticatesUser(true)
        }
    }

  return (
    <div className = "login-form">
        <header><h1>Login</h1></header>
        <div className="form-container">
      <div >
        <label>Email </label>
        <input
          name="email"
          onChange={emailHandler}
          placeholder="John@gmail.com"
          value = {emailInput}
        />
        </div>
        <br/>
        <div>
        <label>Password</label>
        <input
          type= "password"
          name="password"
          onChange={passwordHandler}
          placeholder="Password"
          value = {passwordInput}
        />
        
        {isAuthenticatesUser ? <p>Incorrect Email or Password</p> : null}
        <br/>
        <br/>
        <button onClick = {submitHandler}> Submit</button>
      </div>
      </div>
    </div>
  );
};

export default Login;
