import React from 'react'
import styled from 'styled-components'

const Scorebox = props => {
    const StyledContainer = styled.div`
        display: ${props.show};
        position: fixed;
        top: 0;
        left: 0;
        background: white;
    `
    return (
        <StyledContainer id='scorebox'>
            <p>{props.foundCounter}</p>
            <ul id='character-list'>
                {props.characters.map(character => {
                    return <li 
                    key={character.name}
                    style={{background: character.found ? 'gray' : 'white'}}>
                        <p>{character.name}</p>
                    </li>
                })}
            </ul>
        </StyledContainer>
    )
}

export default Scorebox