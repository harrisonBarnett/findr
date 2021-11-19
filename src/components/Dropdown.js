import React from 'react';

import styled from 'styled-components'
const StyledComponent = styled.div`
position: absolute;
width: fit-content;
z-index: 3;
pointer-events: initial;
background: rgba(255, 255, 255, .5);
border: 1px solid black;
`
const DropDown = props => {
  
    return (
        <StyledComponent 
        id='character-dropdown'
        style={{
            display: props.display,
            left: `${props.coords[0]}px`,
            top: `${props.coords[1]}px`
        }}>
            <p>coordinates: {props.coords[0] + ', ' + props.coords[1]}</p>
            <ul>
                {props.characters.map(character => {
                    return <li
                    key={character.name}
                    style={{background: character.found ? 'gray' : 'white'}}
                    onClick={()=> {props.checkCharacter(character.name)}}>
                        {character.name}
                    </li>
                })}
            </ul>
        </StyledComponent>
    );
};

export default DropDown;