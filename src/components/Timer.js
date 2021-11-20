import React from 'react';
import styled from 'styled-components'
const StyledContainer = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 120px;
    border-radius: 1em;
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