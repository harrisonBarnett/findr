import React from 'react';
import Leaderboard from './Leaderboard'

import styled from 'styled-components'
const StyledContainer = styled.div`

`
const End = props => {

    return (
        <StyledContainer 
        id='end-prompt'
        style={{display: props.gameState === 'end' ? 'block' : 'none'}}>
            <h2>this is the end prompt</h2>
            <h3>time elapsed: {props.timeElapsed}</h3>
            <button onClick={props.resetGame}>reset</button>
            <Leaderboard />
        </StyledContainer>
    );
};

export default End