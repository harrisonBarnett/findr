import React from 'react';

const DropDown = props => {
    return (
        <div 
        id='character-dropdown'
        style={{
            display: props.display,
            left: props.offsetX,
            top: props.offsetY
        }}>
            <p>coordinates: {props.coords[0] + ', ' + props.coords[1]}</p>
            <ul>
                {props.characters.map(character => {
                    return <li
                    key={character.name}
                    style={{background: character.found ? 'gray' : 'white'}}
                    onClick={()=> {props.checkCharacter(character.name)}}>
                        {character.name}
                    </li>
                })}
            </ul>
        </div>
    );
};

export default DropDown;