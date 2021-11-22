import React, { useEffect, useState } from 'react';
import Leaderboard from './Leaderboard'

import styled from 'styled-components'
const StyledContainer = styled.div`
    border: 1px solid red;
`
const End = props => {
    const [score, setScore] = useState(props.elapsed)
    const [hours, setHours] = useState('00')
    const [minutes, setMinutes] = useState('00')
    const [seconds, setSeconds] = useState('00')
    const [ms, setMs] = useState('00')

    useEffect(() => {
       let tmpMs = score + ''
       tmpMs = tmpMs.slice(tmpMs.length - 3, tmpMs.length)
       let s = parseInt((score /1000 ) % 60)
       if(s<10){s = '0' + s}
       let m = parseInt((score / (1000 * 60)) % 60)
       if(m < 10){m = '0' + m}
       let h = parseInt((score / (1000 * 60 * 60)) % 60)
       if(h < 10)(h = '0' + h)
 
       setMs(tmpMs)
       setSeconds(s)
       setMinutes(m)
       setHours(h)

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