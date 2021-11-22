import React from 'react'
import { useState, useEffect } from 'react'
import Timer from './Timer'
import styled from 'styled-components'
import Logo from '../static/images/futurama-logo.png'

const StyledContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    padding: 2em;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .5em;
    border-radius: 0 0 1em 0;
    background-image: linear-gradient(rgba(10,140,186,1),
        rgba(10,140,186,.5));
    box-shadow: 
        1px 1px 4px rgba(0,0,0,.4),
        2px 2px 8px rgba(0,0,0,.15);
`
const StyledLogo = styled.img`
    width: 25vmax;
`
const CharacterAvi = styled.div`
    height: 5vmax;
    width: 5vmax;
    border-radius: .5em;

    background-position: center;
    background-size: cover;
`
const CharacterList = styled.div`
    display: flex;
    gap: .5em;
`

const Scorebox = ({timer, show, characters}) => {
    const [avis, setAvis] = useState(characters)
    
    useEffect(() => {
        setAvis(characters)
    }, [characters])
    return (
        <StyledContainer 
        id='scorebox'
        style={{display: show}}>
            <StyledLogo src={Logo} />
            <CharacterList id='character-list'>
                {avis.map(character => {
                    return <CharacterAvi
                            className='scorebox-character-avi'
                            key={character.name}
                            style={{ 
                                backgroundImage: `url(${character.img})`,
                                opacity: character.found ? '.5' : '1' }}>
                            </CharacterAvi>
                })}
            </CharacterList>
            <Timer timer={timer}/>

        </StyledContainer>
    )
}

export default Scorebox