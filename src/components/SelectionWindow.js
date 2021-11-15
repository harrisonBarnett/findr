import React from 'react';

const SelectionWindow = props => {
    return (
        <div 
            id='selection-window'
            style={{
                display: props.coords.length === 0 ? 'none' : 'block',
                left: `${props.coords[0]}px`,
                top: `${props.coords[1]}px`
            }}>    
        </div>
    );
};

export default SelectionWindow;