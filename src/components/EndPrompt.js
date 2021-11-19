import React from 'react';

// TODO:
// add form to add initials to leaderboard
// use firebase to retrieve leaderboard results
// use prop functions to restart the game

import Leaderboard from './Leaderboard';

const EndPrompt = props => {
    return (
        <div
        style={{ display: props.show }}>
            <Leaderboard />
        </div>
    );
};

export default EndPrompt;