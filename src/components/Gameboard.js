import React from 'react';
import SelectionWindow from './SelectionWindow'

import Image from '../static/images/futurama.png'

const Gameboard = props => {
    return (
        <div 
        id='gameboard'
        onClick={props.handleGameboardClick}>
            <img src={Image} alt='collage of Futurama characters'></img>
            <SelectionWindow 
            coords={props.selectionCoords}
            characters={props.characters}
            checkCharacter={props.checkCharacter}/>
        </div>
    );
};

export default Gameboard;