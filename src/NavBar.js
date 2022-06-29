import React from "react";
import {Box, Button, Flex, Spacer} from "@chakra-ui/react";



const NavBar = ({accounts, setAccounts}) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }

    return (
        <Flex justify="space-between" align="center" padding="30px">
        
           

            <Flex 
            justify="space-around"
            align="center"
            width="40%"
            padding="30px 30px 30px 30px"
            >
                <Box margin="0 15 px">Mint</Box>
                <Spacer />
                <Box margin="0 15 px">Team</Box>
                <Spacer />
                <Box margin="0 15 px">About</Box>
                <Spacer />

                {isConnected ? (
                
                <Box margin="0 15 px">Connected</Box>
                
            ) : (
                <Button
                backgroundColor ="#D6517D"
                borderRadius="5px"
                bowShadow="0px 2px 2px 1px #0F0F0F"
                color="white"
                cursor ="pointer"
                fontFamily="inherit"
                padding="15 px"
                margin = " 0 15 px"
                onClick={connectAccount}>Connect</Button>
            )}

            </Flex>

      

        </Flex>
    )
}
export default NavBar;
