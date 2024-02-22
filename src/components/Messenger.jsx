import { useContext } from 'react';
import { AppBar, Toolbar, styled, Box } from '@mui/material';

import { AccountContext } from '../context/AccountProvider';
import { emptyChatImage } from '../constants/data';

//components
import ChatDialog from './chat/ChatDialog';
import LoginDialogue from './account/LoginDialog';
import Login from './account/Login';

const Component = styled(Box)`
    height: 100vh;
    background: #DCDCDC;
`;

const Header = styled(AppBar)`
    background-color: #00A884;
    height: 125px;
    box-shadow: none;
`;
const HeaderLogin = styled(AppBar)`
    background: url(${emptyChatImage}) center/cover;
    height: 100%;
    box-shadow: none;
`;
const LoginHeader = styled(AppBar)`
    background: #00bfa5;
    height: 200px;
    box-shadow: none;
`;

const Messenger = () => {
    const { account } = useContext(AccountContext);
    
    return (
        <Component>
            {
                account ? 
                <>
                    <Header>
                        <Toolbar></Toolbar>
                    </Header>
                    <ChatDialog />
                </>
                :
                <>
                    {/* <HeaderLogin>
                        <Toolbar></Toolbar>
                    </HeaderLogin> */}
                    <LoginDialogue />
                </>
            }
        </Component>
    )
}

export default Messenger;