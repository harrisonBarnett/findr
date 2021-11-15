import React from 'react';
import Dropdown from './Dropdown'

const SelectionWindow = props => {
    return (
        <div 
            id='selection-window'
            style={{
                left: `${props.coords[0]}px`,
                top: `${props.coords[1]}px`,
                display: props.coords.length === 0 ? 'none' : 'block'
            }}> 
            <Dropdown 
            offset={props.coords[0] >= 800 ? '-200%' : '100%'}/>    
        </div>
    );
};

export default SelectionWindow;