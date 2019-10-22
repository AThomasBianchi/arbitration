import React from 'react';
import ReactDOM from 'react-dom';
import Bid from './bid';
import Team from './team';

class App extends React.Component {
    render() {
        return (
            <div>
                {/* Timer */}
                {/* Player */}
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