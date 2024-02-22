import React, { useContext } from "react";
import { Box, Dialog, List, ListItem, Typography, styled } from "@mui/material";
import { qrCodeImage } from "../../constants/data";
import { GoogleLogin } from "@react-oauth/google";
import  jwtDecode  from "jwt-decode";
import {createContext} from 'react'
import {AccountContext} from '../../context/AccountProvider'
import { addUser } from "../../service/api";
const StyledComponent = styled(Box)`
  display: flex;
`;
const StyledContainer = styled(Box)`
  padding: 56px 0 56px 56px;
`;
const QRCode = styled("img")({
  height: 264,
  width: 264,
  margin: "50px 0 0 50px",
});
const StyledTitle = styled(Typography)({
  fontSize: "26px",
  color: "#525252",
  fontWeight: "300",
  fontFamily: "inherit",
  marginBottom: "25px",
});
const StyledList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
    font-size: 18px;
    line-height: 28px;
    color: #4a4a4a;
  }
`;
const dialogStyle = {
  marginTop: "12%",
  height: "60%",
  width: "40%",
  maxWidth: "100",
  maxHeight: "100%",
  borderRadius: 0,
  boxShadow: "none",
  overflow: "hidden",
  backgroundColor: "rgba(255, 255, 255, 0.8)", // Adjust the alpha value (0 to 1) for transparency
};



const LoginDialogue = () => {
  const {setAccount}=useContext(AccountContext)

  const onLoginSuccess = async(res) => {
    const decode =  jwtDecode(res.credential);

     setAccount(decode)
     await addUser(decode)

  };
  const onLoginError = (res) => {
    console.log('failed',res)
  };

  return (
    <Dialog
      open={true}
     
      PaperProps={{ sx: dialogStyle }}
      hideBackdrop={true}
    >
      <StyledComponent>
      
        <Box style={{position:'relative'}}> 
          <QRCode src={qrCodeImage} alt="qr-code" />
          <Box style={{ position: 'absolute', top: '50%', transform: 'translateX(20%)' }}>
            <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
          </Box>
        </Box>
      </StyledComponent>
    </Dialog>
  );
};

export default LoginDialogue;
