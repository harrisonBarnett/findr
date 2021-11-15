import React, { useState } from 'react';

const StartPrompt = () => {
    const [show, setShow] = useState('')

    const handleStartClick = () => {
        setShow('none')
    }
    return (
        <div 
        id='start-prompt'
        style={{ display: show}}>
            <div id='start-prompt-window'>
                <p>this is the start prompt</p>
                <button onClick={handleStartClick}>start game</button>
            </div>
        </div>
    );
};

export default StartPrompt;