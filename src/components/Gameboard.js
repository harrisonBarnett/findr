import React from 'react';
import { useState, useEffect } from 'react'

import SelectionWindow from './SelectionWindow'

import styled from 'styled-components'
import Image from '../static/images/futurama.png'
const StyledContainer = styled.div`
position: relative;
width: fit-content;
height: fit-content;
`

const Gameboard = ({show, handleGameboardClick, checkCharacter, selectionCoords, characters}) => {
    const [avis, setAvis] =  useState(characters)

    useEffect(() => {
        setAvis(characters)
    }, [characters])
    return (
        <StyledContainer 
        id='gameboard'
        style={{ display:show }}
        onClick={handleGameboardClick}>
            <img src={Image} alt='collage of Futurama characters'></img>
            <SelectionWindow 
            coords={selectionCoords}
            characters={avis}
            checkCharacter={checkCharacter}/>
        </StyledContainer>
    );
};

export default Gameboard;