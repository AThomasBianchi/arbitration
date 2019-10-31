import React from 'react';

export default class Bid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bid: '',
        }
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleDecline = this.handleDecline.bind(this);
    }

    handleChange(event) {
        this.setState({ bid: event.target.value })
    }

    // handleSubmit(event) {
    //     alert('you submitted a bid of ' + this.state.bid);
    //     event.preventDefault();
    // }


    render() {
        return (
            <form>
                <div>Your Bid {this.state.bid}</div>
                <label htmlFor="bid">Bid</label>
                <input type="number" min="1" max="100" value={this.state.bid} onChange={this.handleChange} name="bid"></input>
                <button>Submit Bid</button>
                <button>Decline Bid</button>
            </form>
        );
    }
}