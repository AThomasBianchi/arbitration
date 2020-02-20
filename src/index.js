import React from 'react';
import ReactDOM from 'react-dom';
import Bid from './Bid';
import Team from './Team';
import Player from './Player';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player: {
                name: 'Mike Trout',
                team: 'Orlando Renegade'
            },
            biddingTeam: 'Young Bucks'
        }
    }
    render() {
        return (
            <div>
                {/* Timer */}
                <Player name={this.state.player.name} team={this.state.player.team} />
                <Team team={this.state.biddingTeam} />
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