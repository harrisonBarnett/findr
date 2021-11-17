import React from 'react'


const Scorebox = props => {
    return (
        <div id='scorebox'>
            <p>{props.foundCounter}</p>
            <ul id='character-list'>
                {props.characters.map(character => {
                    return <li 
                    key={character.name}
                    style={{background: character.found ? 'gray' : 'white'}}>
                        <p>{character.name}</p>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Scorebox