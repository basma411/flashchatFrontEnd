import React, { useContext } from "react";
import { Box, Dialog, Typography, styled } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { createContext } from 'react';
import { AccountContext } from '../../context/AccountProvider';
import { addUser } from "../../service/api";

const StyledComponent = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
`;

const StyledContainer = styled(Box)`
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 8px;
`;

const StyledForm = styled("form")`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled("input")`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const StyledButton = styled("button")`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const StyledH2 = styled("h2")`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
  color: #00A884;
`;

const StyledLink = styled("a")`
  color: #000;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  display: block;
`;

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
    <Dialog open={true}>
      <StyledComponent>
        <StyledContainer>
          <StyledH2>Sign In</StyledH2>
          <Box>
            <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
          </Box>
          <Typography variant="body1">
            <StyledLink href="#">or</StyledLink>
          </Typography>
          <StyledForm>
            <StyledInput type="email" placeholder="Enter your email" />
            <StyledInput type="password" placeholder="Enter your password" />
            <StyledButton type="submit">Login</StyledButton>
          </StyledForm>
        </StyledContainer>
      </StyledComponent>
    </Dialog>
  );
};

export default LoginDialogue;
