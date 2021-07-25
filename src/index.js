import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

class Square extends React.Component {

}

class Board extends React.Component {

}

class Game extends React.Component {
    render() {
        return(
            <div>
                <h1>Testing change v2</h1>
            </div>
        );
    };
}

// ===========================================

ReactDOM.render(
    <Game/>,
    document.getElementById('root')
);