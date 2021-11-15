import React, { useEffect, useState } from 'react';
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
    return (
        <div 
        id='gameboard'
        onClick={handleGameboardClick}>
            <img src={Image}></img>
            <SelectionWindow coords={selectionCoords}/>
        </div>
    );
};

export default Gameboard;