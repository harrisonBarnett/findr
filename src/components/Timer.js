import React from 'react';
import styled from 'styled-components'
const StyledContainer = styled.div`
    margin: 0 auto;
    display: grid;
    justify-content: center;
    align-items: center;
    height: 5vmax;
    width: 10vmax;
    border-radius: .5em;
    background: #BA2317;
`
const StyledText = styled.p`
    font-size: 1.2em;
    color: white;
`
const Timer = props => {
    return (
        <StyledContainer 
        className='timer'>
            <StyledText id='timer' key={props.timer}>{props.timer}</StyledText>
        </StyledContainer>
    );
};

export default Timer;