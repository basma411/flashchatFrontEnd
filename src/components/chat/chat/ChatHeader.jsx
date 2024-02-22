import { useContext } from 'react';

import { Box, Typography, styled } from '@mui/material';
import { Search, MoreVert } from '@mui/icons-material';

import { AccountContext } from '../../../context/AccountProvider';
import { defaultProfilePicture } from '../../../constants/data';

const Header = styled(Box)`
    height: 44px;
    background: #ededed;
    display: flex;
    padding: 8px 16px;
    align-items: center;
`;
const Statu = styled(Box)`

display: flex;

`;

const Image = styled('img')({
    width: 40,
    height: 40,
    objectFit: 'cover',
    borderRadius: '50%'
})

const Name = styled(Typography)`
    margin-left: 12px !important;
`;

const RightContainer = styled(Box)`
    margin-left: auto;
    & > svg {
        padding: 8px;
        font-size: 22px;
        color: #000;
    }
`;

const Status = styled(Typography)`
    font-size: 12px !important;
    color: rgb(0, 0, 0, 0.6);
    margin-left: 12px !important;
`;

const ChatHeader = ({ person }) => {  
    
    const { activeUsers } = useContext(AccountContext);

    return (
        <Header>
            <Image src={person.picture} alt="dp" />     
            <Statu>
                <Name>{person.name}</Name>
                <Status>
    {activeUsers?.find(user => user.sub === person.sub) ? (
        <div
            style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: 'green',
                display: 'inline-block',
                // marginRight: '5px'
            }}
        ></div>
    ) : (
<div
            style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: 'gray',
                display: 'inline-block',
                // marginRight: '5px'
            }}
        ></div>    )}
</Status>
            </Statu>   
            <RightContainer>
                <Search />
                <MoreVert />    
            </RightContainer> 
        </Header>
    )
}

export default ChatHeader;