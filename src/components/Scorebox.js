import React from 'react'
import Timer from './Timer'
import styled from 'styled-components'

const StyledContainer = styled.div`
position: fixed;
top: 0;
left: 0;
background: white;
`

const Scorebox = props => {
    return (
        <StyledContainer 
        id='scorebox'
        style={{display: props.show}}>
            <p>{props.foundCounter}</p>
            <p>time: {props.timer}</p>
            <Timer timer={props.timer}/>
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