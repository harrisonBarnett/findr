import React, { useEffect, useState } from 'react';
import SelectionWindow from './SelectionWindow'

const Gameboard = () => {
    const [selectionCoords, setSelectionCoords] = useState([])

    const handleGameboardClick = (event) => {
        const parent = document.querySelector('.App')
        const bounds = parent.getBoundingClientRect()
        const x = event.clientX - bounds.left
        const y = event.clientY - bounds.top

        setSelectionCoords([x, y])
        console.log(x, y)
    }
    return (
        <div 
        id='gameboard'
        onClick={handleGameboardClick}>
            <SelectionWindow coords={selectionCoords}/>
        </div>
    );
};

export default Gameboard;