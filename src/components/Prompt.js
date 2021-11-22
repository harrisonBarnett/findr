import React from 'react';
import { useState, useEffect } from 'react'
import Start from './Start'
import End from './End'

import styled from 'styled-components';
const StyledContainer = styled.div`
    background: #0a8cba;
`
const Prompt = ({gameState, show, elapsed, startGame, resetGame}) => {
    const [score, setScore] = useState(elapsed)

    useEffect(() => {
        setScore(score)
    }, [gameState])
    return (
        <StyledContainer 
        id='prompt-screen'
        style={{ display: show }}>
            <Start 
            startGame={startGame}
            gameState={gameState}/>
            <End
            elapsed={elapsed}
            resetGame={resetGame} 
            gameState={gameState}/>
        </StyledContainer>
    );
};

export default Prompt;