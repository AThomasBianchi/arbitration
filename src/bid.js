import React from 'react';

export default class Bid extends React.Component {
    render() {
        return (
            <form>
                <div>Your Bid {this.props.bid}</div>
                <label htmlFor="bid">Bid</label>
                <input type="number" min="1" max="100" step="any" value={this.props.bid} onChange={this.props.handleChange} name="bid"></input>
                <button onClick={this.props.handleSubmit}>Submit Bid</button>
                <button onClick={this.props.handleDecline}>Decline Bid</button>
            </form>
        );
    }
}