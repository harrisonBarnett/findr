import React from 'react';
import Start from './Start'
import End from './End'

import styled from 'styled-components';

const Prompt = props => {
    const StyledContainer = styled.div`
        display: ${props.show};
    `
    return (
        <StyledContainer id='prompt-screen'>
            <h1>this is the prompt screen</h1>
            <Start 
            startGame={props.startGame}
            gameState={props.gameState}/>
            <End
            resetGame={props.resetGame} 
            gameState={props.gameState}/>
        </StyledContainer>
    );
};

export default Prompt;