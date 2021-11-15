import React from 'react';

const Gameboard = () => {
    const handleGameboardClick = (event) => {
        const parent = document.querySelector('.App')
        const bounds = parent.getBoundingClientRect()
        const x = event.clientX - bounds.left
        const y = event.clientY - bounds.top

        console.log(x, y)
    }
    return (
        <div 
        id='gameboard'
        onClick={handleGameboardClick}>
            
        </div>
    );
};

export default Gameboard;