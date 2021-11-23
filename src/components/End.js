import React, { useEffect, useState } from 'react';
import Leaderboard from './Leaderboard'



import styled from 'styled-components'
const StyledContainer = styled.div`
    width: 100vw;
    height: 100%;
    flex-direction: column;
`
const StyledTitles = styled.div`
    padding: 2.5vmax;
    text-align: center;
    color: white;
    text-shadow: 1px 1px 2px rgba(0,0,0,.15);
`
const Button = styled.div`
    padding: 1em;
    position: absolute;
    right: .5em;
    top: .5em;
    width: 5em;
    cursor: pointer;
    font-family: Arial;
    color: white;
    background: #ba2317;
    border-radius: .5em;
    box-shadow: 1px 1px 4px rgba(44, 81, 95, 0.35),
    -1px -1px 4px rgba(44, 81, 95, .35);
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
                <Button onClick={resetGame}>try and beat your score!</Button>
            </StyledTitles>
            <Leaderboard 
            score={score}
            h={h}
            m={m}
            s={s}
            ms={ms}/>
        </StyledContainer>
    );
};

export default End