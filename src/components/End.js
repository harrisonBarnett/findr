import React from 'react';
import Leaderboard from './Leaderboard'
import styled from 'styled-components'

const End = props => {
    const StyledContainer = styled.div`
        display: ${props.gameState === 'end' ? 'block' : 'none'}
    `
    return (
        <StyledContainer id='end-prompt'>
            <h2>this is the end prompt</h2>
            <button onClick={props.resetGame}>reset</button>
            <Leaderboard />
        </StyledContainer>
    );
};

export default End