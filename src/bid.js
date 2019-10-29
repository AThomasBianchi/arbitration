import React from 'react';

export default class Bid extends React.Component {
    render() {
        return (
            <div>
                <input type="number" min="1" max="100"></input>
                <button>Submit Bid</button>
                <button>Decline Bid</button>
            </div>
        );
    }
}