import React from 'react';

const DropDown = props => {
    return (
        <div 
        id='character-dropdown'
        style={{
            left: props.offset
        }}>
            <p>i'm the dropdown</p>
        </div>
    );
};

export default DropDown;