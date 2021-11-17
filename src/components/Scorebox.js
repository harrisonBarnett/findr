import React from 'react'


const Scorebox = props => {
    return (
        <div id='scorebox'>
            <ul id='character-list'>
                {props.characters.map(character => {
                    return <li style={{background: character.found ? 'gray' : 'white'}}>
                        <p>{character.name}</p>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Scorebox