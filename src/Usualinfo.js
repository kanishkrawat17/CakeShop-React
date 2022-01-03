import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

function Usualinfo() {

    const onChange = (value) => {
        console.log('Captcha value:', value);
    }

    

  return (
    <>
    <header><h1> Sign-up Form</h1></header>
      <div className = "usual-info">
       
        <label>Email </label>
        <input
          name="lastname"
        //   onChange={handleChange}
        type= "email"
          placeholder="Email"
        />
        <label>Password </label>
        <input
          name="password"
          type= "password"
        //   onChange={handleChange}
          placeholder="Password"
        />
        <label>Confirm Password </label>
        <input
          name="confirmpassword"
        //   onChange={handleChange}
          placeholder="Confirm Password"
        />
      </div>
      <div className= "captcha">
      <ReCAPTCHA
        sitekey="6LfG8egdAAAAAM5fy5pOoXbvOIwpjBHhZZdOOdHB"
        onChange={onChange}
      />

    <div>
        <button>Submit</button>
    </div>
    </div>

    </>
  );
}

export default Usualinfo;
