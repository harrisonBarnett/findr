import React from 'react';
import { useState, useEffect } from 'react'

import styled from 'styled-components'
const StyledComponent = styled.div`
padding: 2.5vmax;
position: absolute;
z-index: 3;
pointer-events: initial;
border-radius: .5em;
background: rgba(10,140,186,.75);
box-shadow: 
1px 1px 4px rgba(0,0,0,.4),
2px 2px 8px rgba(0,0,0,.15);
`
const StyledList = styled.div`
display: flex;
gap: .5em;
`
const CharacterAvi = styled.div`
    width: 5vmax;
    height: 5vmax;
    border-radius .5em;

    background-position: center;
    background-size: cover;
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
            left: `${coords[0] + 20}px`,
            top: `${coords[1] + 20}px`
        }}>
            <StyledList>
                {avis.map(character => {
                    return <CharacterAvi
                    key={character.name}
                    style={{
                        opacity: character.found ? '.5' : '1',
                        backgroundImage: `url(${character.img})`
                    }}
                    onClick={()=> {checkCharacter(character.name)}}>
                    </CharacterAvi>
                })}
            </StyledList>
        </StyledComponent>
    );
};
export default DropDown;