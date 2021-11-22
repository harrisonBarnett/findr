import React from 'react';
import { useState, useEffect } from 'react'

import styled from 'styled-components'
const StyledComponent = styled.div`
position: absolute;
width: fit-content;
z-index: 3;
pointer-events: initial;
background: rgba(255, 255, 255, .5);
border: 1px solid black;
`
const DropDown = ({ characters, checkCharacter, coords, display}) => {
    const [avis, setAvis] = useState(characters)

    useEffect(() => {
        setAvis(characters)
    }, [characters])
    return (
        <StyledComponent 
        id='character-dropdown'
        style={{
            display: display,
            left: `${coords[0]}px`,
            top: `${coords[1]}px`
        }}>
            <p>coordinates: {coords[0] + ', ' + coords[1]}</p>
            <ul>
                {avis.map(character => {
                    return <li
                    key={character.name}
                    style={{background: character.found ? 'gray' : 'white'}}
                    onClick={()=> {checkCharacter(character.name)}}>
                        {character.name}
                    </li>
                })}
            </ul>
        </StyledComponent>
    );
};
export default DropDown;