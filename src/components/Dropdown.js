import React from 'react';

const DropDown = props => {
    return (
        <div 
        id='character-dropdown'
        style={{
            left: props.offsetX,
            top: props.offsetY
        }}>
            <p>coordinates: {props.coords[0] + ', ' + props.coords[1]}</p>
            <ul>
                {props.characters.map(character => {
                    return <li
                            onClick={()=> {props.checkCharacter(character.name)}}>
                                {character.name}
                            </li>
                })}
            </ul>
        </div>
    );
};

export default DropDown;