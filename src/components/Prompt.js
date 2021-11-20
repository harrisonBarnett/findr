import React from 'react';
import Start from './Start'
import End from './End'

import styled from 'styled-components';
const StyledContainer = styled.div`
    background: #0a8cba;
`
const Prompt = props => {
    return (
        <StyledContainer 
        id='prompt-screen'
        style={{ display: props.show }}>
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