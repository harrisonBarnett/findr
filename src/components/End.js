import React, { useEffect, useState } from 'react';
import Leaderboard from './Leaderboard'

import styled from 'styled-components'
const StyledContainer = styled.div`
    border: 1px solid red;
`
const End = props => {
    const [score, setScore] = useState(props.timeElapsed / 1000)
    const [hours, setHours] = useState('00')
    const [minutes, setMinutes] = useState('00')
    const [seconds, setSeconds] = useState('00')
    const [ms, setMs] = useState('00')

    useEffect(() => {
        //TODO: CONVERT MS TO HOURS, MINUTES, SECONDS, MS
    })
    return (
        <StyledContainer 
        id='end-prompt'
        style={{display: props.gameState === 'end' ? 'block' : 'none'}}>
            <h2>this is the end prompt</h2>
            <h3>time elapsed: {score}</h3>
            <h3>{hours}:{minutes}:{seconds}:{ms}</h3>
            <button onClick={props.resetGame}>reset</button>
            <Leaderboard />
        </StyledContainer>
    );
};

export default End