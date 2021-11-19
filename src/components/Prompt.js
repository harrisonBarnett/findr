import React from 'react';
import Start from './Start'
import End from './End'

import styled from 'styled-components';
const StyledContainer = styled.div`

`
const Prompt = props => {
    return (
        <StyledContainer 
        id='prompt-screen'
        style={{ display: props.show }}>
            <h1>this is the prompt screen</h1>
            <Start 
            startGame={props.startGame}
            gameState={props.gameState}/>
            <End
            timeElapsed={props.timeElapsed}
            resetGame={props.resetGame} 
            gameState={props.gameState}/>
        </StyledContainer>
    );
};

export default Prompt;