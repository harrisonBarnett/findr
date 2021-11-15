import React from 'react';

const SelectionWindow = props => {
    return (
        <div 
            id='selection-window'
            style={{
                left: `${props.coords[0]}px`,
                top: `${props.coords[1]}px`,
                display: props.coords.length === 0 ? 'none' : 'block'
            }}>     
        </div>
    );
};

export default SelectionWindow;