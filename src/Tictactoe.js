import React, { Component } from 'react';
import './Tictactoe.css';
import Board from './components/Board';

class Tictactoe extends Component {
  render() {
    return (
      <div className="App">
        <Board />
      </div>
    );
  }
}

export default Tictactoe;
