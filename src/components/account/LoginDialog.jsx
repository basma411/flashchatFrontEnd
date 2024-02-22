import './style.css'
import React, { useContext } from "react";
import { Box, Dialog, List, ListItem, Typography, styled } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import  jwtDecode  from "jwt-decode";
import {AccountContext} from '../../context/AccountProvider'
import { addUser } from "../../service/api";


const LoginDialogue = () => {
  const { setAccount } = useContext(AccountContext);

  const onLoginSuccess = async (res) => {
    // Decoding logic using jwtDecode
    const decode = jwtDecode(res.credential);

    setAccount(decode);
    await addUser(decode);
  };

  const onLoginError = (res) => {
    console.log('failed', res);
  };

  return (
    <div>
      <section>
        <div className="signin">
          <div className="content">
            <h2>Sign In</h2>

            <Box >
              <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
            </Box>
            <a href="#">or</a>

            <div className="form">
              <div className="inputBox">
                <input type="email" placeholder="Enter your email" />
                <i>Email</i>
              </div>
              <div className="inputBox">
                <input type="password" placeholder="Enter your password" />
                <i>Password</i>
              </div>
              <div className="links">
                <a href="#">showPassword</a>
                <a href="#">Signup</a>
              </div>
              <div className="inputBox">
                <input type="submit" value="Login" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginDialogue;
