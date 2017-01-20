import React, { Component } from 'react';
import './Tictactoe.css';
import Board from './components/Board';

class Tictactoe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: ' ',
      positions: {
        loc0: ' ',
        loc2: ' ',
        loc3: ' ',
        loc4: ' ',
        loc5: ' ',
        loc6: ' ',
        loc7: ' ',
        loc8: ' ',
        loc9: ' '
      }
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
      e.preventDefault();
      if(this.state.turn === ' ' || this.state.turn === 'O') {
        this.setState({turn: 'X'});
      } else {
        this.setState({turn: 'O'});
      }
  }

  render() {
    return (
      <div className="App">
        <Board turn={this.state.turn} positions={this.state.posiitons} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default Tictactoe;
