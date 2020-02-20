import React from 'react';
import Contract from './Contract';

const Player = props => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.team}</h2>
            <Contract contract={props.contract} />
            {/* Scoring */}
        </div>
    );
};

export default Player;