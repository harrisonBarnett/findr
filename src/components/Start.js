import React from 'react';
import styled from 'styled-components'
const Start = props => {
    const StyledContainer = styled.div`
        display: ${props.gameState === 'start' ? 'block' : 'none'};
    ` 
    return (
        <StyledContainer id='start-prompt'>
            <h2>this is the start prompt</h2>
            <button onClick={props.startGame}>start the game</button>
        </StyledContainer>
    );
};

export default Start;