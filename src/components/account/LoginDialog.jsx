import React, { useContext } from "react";
import { Box, Dialog, Typography, styled } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { createContext } from 'react';
import { AccountContext } from '../../context/AccountProvider';
import { addUser } from "../../service/api";

const StyledComponent = styled(Box)`
  display: flex;
`;

const StyledContainer = styled(Box)`
  padding: 56px 0 56px 56px;
`;

const dialogStyle = {
  marginTop: "12%",
  height: "95%",
  width: "60%",
  maxWidth: "100",
  maxHeight: "100%",
  borderRadius: 0,
  boxShadow: "none",
  overflow: "hidden",
};

const LoginDialogue = () => {
  const { setAccount } = useContext(AccountContext);

  const onLoginSuccess = async (res) => {
    const decode = jwtDecode(res.credential);
    setAccount(decode);
    await addUser(decode);
  };

  const onLoginError = (res) => {
    console.log('failed', res);
  };

  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
      <StyledComponent>
        <Box style={{ position: 'relative' }}>
          <Box style={{ position: 'absolute', top: '50%', transform: 'translateX(20%)' }}>
            <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
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
          </Box>
        </Box>
      </StyledComponent>
    </Dialog>
  );
};

export default LoginDialogue;
