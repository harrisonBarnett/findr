import React, { useEffect, useState } from 'react';
import charsLevel1 from '../charsLevel1'
import SelectionWindow from './SelectionWindow'

import Image from '../static/images/futurama.png'

const Gameboard = () => {
    const [selectionCoords, setSelectionCoords] = useState([])

    const handleGameboardClick = (event) => {
        const parent = document.querySelector('#play-area')
        const bounds = parent.getBoundingClientRect()
        const x = event.clientX - bounds.left
        const y = event.clientY - bounds.top

        setSelectionCoords([x, y])
    }

    function checkCharacter(name) {
        alert(name)
    }
    return (
        <div 
        id='gameboard'
        onClick={handleGameboardClick}>
            <img src={Image}></img>
            <SelectionWindow 
            coords={selectionCoords}
            characters={charsLevel1}
            checkCharacter={checkCharacter}/>
        </div>
    );
};

export default Gameboard;