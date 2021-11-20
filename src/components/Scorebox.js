import React from 'react'
import Timer from './Timer'
import styled from 'styled-components'

const StyledContainer = styled.div`
position: fixed;
top: 0;
left: 0;
padding: 2em;
background: rgba(10, 140, 186, .75);;
`
const CharacterAvi = styled.div`
    height: 60px;
    width: 60px;
    border-radius: 50%;

    background-position: center;
    background-size: cover;
`

const CharacterList = styled.div`
    display: flex;
`

const Scorebox = props => {
    return (
        <StyledContainer 
        id='scorebox'
        style={{display: props.show}}>
            <Timer timer={props.timer}/>
            <CharacterList id='character-list'>
                {props.characters.map(character => {
                    return <CharacterAvi
                            className='scorebox-character-avi'
                            key={character.name}
                            style={{ 
                                backgroundImage: `url(${character.img})`,
                                opacity: character.found ? '.5' : '1' }}>
                            </CharacterAvi>
                })}
            </CharacterList>
        </StyledContainer>
    )
}

export default Scorebox