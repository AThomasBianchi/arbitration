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
                team: 'Orlando Renegades',
                arbYear: 1
            },
            biddingTeam: 'Young Bucks',
            bid: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDecline = this.handleDecline.bind(this);
    }

    handleChange(event) {
        this.setState({ bid: event.target.value })
    }

    handleSubmit(event) {
        alert('you submitted a bid of ' + this.state.bid);
        event.preventDefault();
    }

    handleDecline(event) {
        alert('You declined to bid');
        event.preventDefault();
    }

    render() {
        // const calculated_arb = 

        return (
            <div>
                {/* Timer */}
                <Player
                    name={this.state.player.name}
                    team={this.state.player.team}

                />
                <Team team={this.state.biddingTeam} />
                <Bid
                    handleSubmit={this.handleSubmit}
                    handleDecline={this.handleDecline}
                    handleChange={this.handleChange}
                    bid={this.state.bid}
                />
                {/* Schedule / Results */}
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);