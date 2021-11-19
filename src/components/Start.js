import React from 'react';

import styled from 'styled-components'
const StyledContainer = styled.div`
` 
const Start = props => {
    return (
        <StyledContainer 
        id='start-prompt'
        style={{display: props.gameState === 'start' ? 'block' : 'none'}}>
            <h2>this is the start prompt</h2>
            <button onClick={props.startGame}>start the game</button>
        </StyledContainer>
    );
};

export default Start;