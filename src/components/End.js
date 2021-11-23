import React, { useEffect, useState } from 'react';
import Leaderboard from './Leaderboard'



import styled from 'styled-components'
const StyledContainer = styled.div`
    width: 100vw;
    height: 100vh;
    flex-direction: column;
`
const StyledTitles = styled.div`
    text-align: center;
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
        style={{display: gameState === 'end' ? 'flex' : 'none'}}>
            <StyledTitles>
                <h2>Whimmy wham wham wozzle! You finished in {h}:{m}:{s}:{ms}!</h2>
                <h3>(that's {score} milliseconds!)</h3>
                <div onClick={resetGame}>click to try and beat your score</div>
            </StyledTitles>
            <Leaderboard score={score}/>
        </StyledContainer>
    );
};

export default End