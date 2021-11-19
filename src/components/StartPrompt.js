import React, { useState } from 'react';

const StartPrompt = props => {

    return (
        <div 
        id='start-prompt'
        style={{ display: props.show}}>
            <div id='start-prompt-window'>
                <p>this is the start prompt</p>
                <button onClick={props.startGame}>start game</button>
            </div>
        </div>
    );
};

export default StartPrompt;