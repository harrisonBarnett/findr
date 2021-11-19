import React from 'react';
import styled from 'styled-components'
const StyledContainer = styled.div`
`
const Timer = props => {
    return (
        <StyledContainer 
        className='timer'>
            <p id='timer' key={props.timer}>{props.timer}</p>
        </StyledContainer>
    );
};

export default Timer;