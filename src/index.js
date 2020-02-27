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
                arbYear: 1,
                bidValue: '',
            },
            bidder: {
                team: 'Young Bucks',
                bid: '',
            }


        };
        this.handleBidChange = this.handleBidChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDecline = this.handleDecline.bind(this);
    }

    handleBidChange(event) {
        let newBidderState = { ...this.state.bidder };
        newBidderState.bid = event.target.value;
        this.setState({
            bidder: newBidderState,
        });
    }

    calculateBidValue(bid) {
        const MULTIPLIERS = { 1: .4, 2: .6, 3: .8 };
        let value = MULTIPLIERS[this.state.player.arbYear] * bid;
        value = value > 1 ? value : 1;
        console.log(value);
    }

    handleSubmit(event) {
        this.calculateBidValue(this.state.bidder.bid);
        alert('you submitted a bid of ' + this.state.bidder.bid);
        event.preventDefault();
    }

    handleDecline(event) {
        alert('You declined to bid');
        event.preventDefault();
    }

    render() {

        return (
            <div>
                {/* Timer */}
                <Player
                    name={this.state.player.name}
                    team={this.state.player.team}

                />
                <Team team={this.state.bidder.team} />
                <Bid
                    handleSubmit={this.handleSubmit}
                    handleDecline={this.handleDecline}
                    handleChange={this.handleBidChange}
                    bid={this.state.bidder.bid}
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