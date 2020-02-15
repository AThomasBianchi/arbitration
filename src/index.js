import React from 'react';
import ReactDOM from 'react-dom';
import Bid from './Bid';
import Team from './Team';
import Player from './Player';

class App extends React.Component {
    render() {
        return (
            <div>
                {/* Timer */}
                <Player name="Mike Trout" team="Orlando" />
                <Team team="Young Bucks" />
                <Bid />
                {/* Schedule / Results */}
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);