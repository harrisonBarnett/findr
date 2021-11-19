import React from 'react';

import styled from 'styled-components'
const StyledContainer = styled.div`
position: absolute;
height: 50px;
width: 50px;
transform: translate(-25px, -25px);
border-radius: 50%;
pointer-events: none;
overflow: unset;
border: 1px solid red;
`
const SelectionWindow = props => {
    return (
        <StyledContainer 
            id='selection-window'
            style={{
                display: props.coords.length === 0 ? 'none' : 'block',
                left: `${props.coords[0]}px`,
                top: `${props.coords[1]}px`
            }}>    
        </StyledContainer>
    );
};

export default SelectionWindow;