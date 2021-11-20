import React from 'react';
import Logo from '../static/images/futurama-logo.png'

import styled from 'styled-components'
const StyledContainer = styled.div`
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
` 
const StyledLogo = styled.img`
    width: 100vw;
`
const StyledButton = styled.button`
    margin: 0 auto;
    border: none;
    outline: none;
    padding: 1em 2em;
    color: white;
    font-size: 1em;
    background: #BA2317;
`

const Start = props => {
    return (
        <StyledContainer 
        style={{display: props.gameState === 'start' ? 'flex' : 'none'}}>
            <StyledLogo 
            src={Logo}/>
            <StyledButton onClick={props.startGame}>start the game</StyledButton>
        </StyledContainer>
    );
};

export default Start;