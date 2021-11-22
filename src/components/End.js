import React, { useEffect, useState } from 'react';
import Leaderboard from './Leaderboard'

import styled from 'styled-components'
const StyledContainer = styled.div`
    border: 1px solid red;
`
const End = ({gameState, elapsed, resetGame}) => {
    const [score, setScore] = useState(elapsed)

    var ms = score + ''
    ms = ms.slice(ms.length - 3, ms.length)
    var s = parseInt((score /1000 ) % 60)
    if(s<10){s = '0' + s}
    var m = parseInt((score / (1000 * 60)) % 60)
    if(m < 10){m = '0' + m}
    var h = parseInt((score / (1000 * 60 * 60)) % 60)
    if(h < 10)(h = '0' + h)

    useEffect(() => {
        setScore(elapsed)
    }, [elapsed])
    return (
        <StyledContainer 
        id='end-prompt'
        style={{display: gameState === 'end' ? 'block' : 'none'}}>
            <h2>this is the end prompt</h2>
            <h3>time elapsed: {score}</h3>
            <h3>{h}:{m}:{s}:{ms}</h3>
            <button onClick={resetGame}>reset</button>
            <Leaderboard />
        </StyledContainer>
    );
};

export default End