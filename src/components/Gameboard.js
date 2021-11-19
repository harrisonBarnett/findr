import React from 'react';

import SelectionWindow from './SelectionWindow'
import Scorebox from './Scorebox'

import styled from 'styled-components'
import Image from '../static/images/futurama.png'
const StyledContainer = styled.div`
position: relative;
width: fit-content;
height: fit-content;
`

const Gameboard = props => {
    return (
        <StyledContainer 
        id='gameboard'
        style={{ display:props.show }}
        onClick={props.handleGameboardClick}>
            <img src={Image} alt='collage of Futurama characters'></img>
            <SelectionWindow 
            coords={props.selectionCoords}
            characters={props.characters}
            checkCharacter={props.checkCharacter}/>
        </StyledContainer>
    );
};

export default Gameboard;