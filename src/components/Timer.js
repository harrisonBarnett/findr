import React from 'react';

const Timer = props => {
    return (
        <div id='timer'>
            <p>{props.timer}</p>
        </div>
    );
};

export default Timer;