import React from 'react';

import SelectionWindow from './SelectionWindow'
import Scorebox from './Scorebox'

import styled from 'styled-components'
import Image from '../static/images/futurama.png'

const Gameboard = props => {
    const StyledContainer = styled.div`
    display: ${props.show};
    position: relative;
    width: fit-content;
    height: fit-content;
`
    return (
        <StyledContainer 
        id='gameboard'
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