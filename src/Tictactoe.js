import React, { Component } from 'react';
import './Tictactoe.css';
import Board from './components/Board';

class Tictactoe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      computer: 'X',
      turn: 'start',
      gameOver: false,
      loc0: '0',
      loc1: '1',
      loc2: '2',
      loc3: '3',
      loc4: '4',
      loc5: '5',
      loc6: '6',
      loc7: '7',
      loc8: '8'
    };

    this.win = false;

    this.handleClick0 = this.handleClick0.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleClick4 = this.handleClick4.bind(this);
    this.handleClick5 = this.handleClick5.bind(this);
    this.handleClick6 = this.handleClick6.bind(this);
    this.handleClick7 = this.handleClick7.bind(this);
    this.handleClick8 = this.handleClick8.bind(this);
  }

  ai() {
    let move = this.winOrBlock();
    // if there is a "winning" move, take it.
    // if the winning move is the computer's, the computer wins (human error);
    // otherwise the "win" was the player's, and thus blocks it.
    if(move) {
      let location = 'loc' + move;
      this.setState({turn: this.state.computer, [location]: this.state.computer});
      setTimeout(() => {this.checkForWin(this.state.computer)},0);
    } else {
      // if there is no winning move, then pick a random, unoccupied
      // location and move there.
      let foundOne = false;
      console.log("Win state: " + this.win);
      while(this.available() && !foundOne){
        let randomMoveLocation = Math.floor(Math.random() * 9);
        let randomMove = 'loc' + randomMoveLocation.toString();
        if(this.state[randomMove].match(/\d/)) {
          foundOne = true;
          this.setState({turn: this.state.computer, [randomMove]: this.state.computer});
          setTimeout(() => {this.checkForWin(this.state.computer)},0);
        }
      }
    }
  }

  available() {
    for(let i = 0; i < 9; i++) {
      let location = 'loc' + i.toString();
      if(this.state[location].match(/\d/) !== null) {
        return true;
      }
    }
    this.setState({gameOver: true});
    return false;
  }

  playFork() {

  }

  detectFork() {
    
  }

  playCenter() {

  }

  playOppCorner() {

  }

  playEmptyCorner() {

  }

  playEmptySide() {

  }

  checkForWin(move) {
    let row0 = this.state.loc0 + this.state.loc1 + this.state.loc2;
    let row1 = this.state.loc3 + this.state.loc4 + this.state.loc5;
    let row2 = this.state.loc6 + this.state.loc7 + this.state.loc8;
    let col0 = this.state.loc0 + this.state.loc3 + this.state.loc6;
    let col1 = this.state.loc1 + this.state.loc4 + this.state.loc7;
    let col2 = this.state.loc2 + this.state.loc5 + this.state.loc8;
    let diag0 = this.state.loc0 + this.state.loc4 + this.state.loc8;
    let diag1 = this.state.loc2 + this.state.loc4 + this.state.loc6;
    let triple = move.repeat(3);

    switch(triple) {
      case row0:
        console.log(`${move} wins`);
        this.setState({gameOver: true});
        this.win = true;
        return true;
      case row1:
        console.log(`${move} wins`);
        this.setState({gameOver: true});
        this.win = true;
        return true;
      case row2:
        console.log(`${move} wins`);
        this.setState({gameOver: true});
        this.win = true;
        return true;
      case col0:
        console.log(`${move} wins`);
        this.setState({gameOver: true});
        this.win = true;
        return true;
      case col1:
        console.log(`${move} wins`);
        this.setState({gameOver: true});
        this.win = true;
        return true;
      case col2:
        console.log(`${move} wins`);
        this.setState({gameOver: true});
        this.win = true;
        return true;
      case diag0:
        console.log(`${move} wins`);
        this.setState({gameOver: true});
        this.win = true;
        return true;
      case diag1:
        console.log(`${move} wins`);
        this.setState({gameOver: true});
        this.win = true;
        return true;
      default:
        console.log(`No ${move} Winner yet`);
    }

    return false;
  }

  // ai: either win, or block opponents win
  winOrBlock() {
    let row0 = this.state.loc0 + this.state.loc1 + this.state.loc2;
    let row1 = this.state.loc3 + this.state.loc4 + this.state.loc5;
    let row2 = this.state.loc6 + this.state.loc7 + this.state.loc8;
    let col0 = this.state.loc0 + this.state.loc3 + this.state.loc6;
    let col1 = this.state.loc1 + this.state.loc4 + this.state.loc7;
    let col2 = this.state.loc2 + this.state.loc5 + this.state.loc8;
    let diag0 = this.state.loc0 + this.state.loc4 + this.state.loc8;
    let diag1 = this.state.loc2 + this.state.loc4 + this.state.loc6;
    let board = [row0,row1,row2,col0,col1,col2,diag0,diag1];
    let xTest = /(X\dX)|(XX\d)|(\dXX)/;
    let oTest = /(O\dO)|(OO\d)|(\dOO)/;

    let possibleWin = board.map((rowStr) => {
      let positionX = rowStr.match(xTest);
      let positionO = rowStr.match(oTest);
      return positionX !== null ? positionX[0] : positionO !== null ? positionO[0] : null;
    });
    let winner = possibleWin.find((rowStr) => {
      return rowStr !== null;
    });
    let winningLocation = winner !== undefined ? winner.match(/\d/)[0] : null;
    console.log(winningLocation);
    return winningLocation !== null ? winningLocation : false;
  }

  handleClick0(e) {
    if(this.state.loc0 !== 'X' && this.state.loc0 !== 'O' && this.win === false) {
      if(this.state.turn === 'start' || this.state.turn === 'O') {
        this.setState({turn: 'X', loc0: 'X'});
        setTimeout(() => {this.checkForWin('X')},0);
      } else {
        this.setState({turn: 'O', loc0: 'O'});
        setTimeout(() => {this.checkForWin('O')},0);
      }
    } else {
      console.log("Game over");
      this.win = true;
    }
    e.preventDefault();
}

  handleClick1(e) {
    if(this.state.loc1 !== 'X' && this.state.loc1 !== 'O' && this.win === false) {
      if(this.state.turn === 'start' || this.state.turn === 'O') {
        this.setState({turn: 'X', loc1: 'X'});
        setTimeout(() => {this.checkForWin('X')},0);
      } else {
        this.setState({turn: 'O', loc1: 'O'});
        setTimeout(() => {this.checkForWin('O')},0);
      }
    }else {
      console.log("Game over");
      this.win = true;
    }
    e.preventDefault();
  }

  handleClick2(e) {
    if(this.state.loc2 !== 'X' && this.state.loc2 !== 'O' && this.win === false) {
      if(this.state.turn === 'start' || this.state.turn === 'O') {
        this.setState({turn: 'X', loc2: 'X'});
        setTimeout(() => {this.checkForWin('X')},0);
      } else {
        this.setState({turn: 'O', loc2: 'O'});
        setTimeout(() => {this.checkForWin('O')},0);
      }
    }else {
      console.log("Game over");
      this.win = true;
    }
    e.preventDefault();
  }

  handleClick3(e) {
    if(this.state.loc3 !== 'X' && this.state.loc3 !== 'O' && this.win === false) {
      if(this.state.turn === 'start' || this.state.turn === 'O') {
        this.setState({turn: 'X', loc3: 'X'});
        setTimeout(() => {this.checkForWin('X')},0);
      } else {
        this.setState({turn: 'O', loc3: 'O'});
        setTimeout(() => {this.checkForWin('O')},0);
      }
    }else {
      console.log("Game over");
      this.win = true;
    }
    e.preventDefault();
  }

  handleClick4(e) {
    if(this.state.loc4 !== 'X' && this.state.loc4 !== 'O' && this.win === false) {
      if(this.state.turn === 'start' || this.state.turn === 'O') {
        this.setState({turn: 'X', loc4: 'X'});
        setTimeout(() => {this.checkForWin('X')},0);
      } else {
        this.setState({turn: 'O', loc4: 'O'});
        setTimeout(() => {this.checkForWin('O')},0);
      }
    }else {
      console.log("Game over");
      this.win = true;
    }
    e.preventDefault();
  }

  handleClick5(e) {
    if(this.state.loc5 !== 'X' && this.state.loc5 !== 'O' && this.win === false) {
      if(this.state.turn === 'start' || this.state.turn === 'O') {
        this.setState({turn: 'X', loc5: 'X'});
        setTimeout(() => {this.checkForWin('X')},0);
      } else {
        this.setState({turn: 'O', loc5: 'O'});
        setTimeout(() => {this.checkForWin('O')},0);
      }
    }else {
      console.log("Game over");
      this.win = true;
    }
    e.preventDefault();
  }

  handleClick6(e) {
    if(this.state.loc6 !== 'X' && this.state.loc6 !== 'O' && this.win === false) {
      if(this.state.turn === 'start' || this.state.turn === 'O') {
        this.setState({turn: 'X', loc6: 'X'});
        setTimeout(() => {this.checkForWin('X')},0);
      } else {
        this.setState({turn: 'O', loc6: 'O'});
        setTimeout(() => {this.checkForWin('O')},0);
      }
    }else {
      console.log("Game over");
      this.win = true;
    }
    e.preventDefault();
  }

  handleClick7(e) {
    if(this.state.loc7 !== 'X' && this.state.loc7 !== 'O' && this.win === false) {
      if(this.state.turn === ' ' || this.state.turn === 'O') {
        this.setState({turn: 'X', loc7: 'X'});
        setTimeout(() => {this.checkForWin('X')},0);
      } else {
        this.setState({turn: 'O', loc7: 'O'});
        setTimeout(() => {this.checkForWin('O')},0);
      }
    }else {
      console.log("Game over");
      this.win = true;
    }
    e.preventDefault();
  }

  handleClick8(e) {
    if(this.state.loc8 !== 'X' && this.state.loc8 !== 'O' && this.win === false) {
      if(this.state.turn === ' ' || this.state.turn === 'O') {
        this.setState({turn: 'X', loc8: 'X'});
        setTimeout(() => {this.checkForWin('X')},0);
      } else {
        this.setState({turn: 'O', loc8: 'O'});
        setTimeout(() => {this.checkForWin('O')},0);
      }
    }else {
      console.log("Game over");
      this.win = true;
    }
    e.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <Board
          turn={this.state.turn}
          handleClick0={this.handleClick0}
          handleClick1={this.handleClick1}
          handleClick2={this.handleClick2}
          handleClick3={this.handleClick3}
          handleClick4={this.handleClick4}
          handleClick5={this.handleClick5}
          handleClick6={this.handleClick6}
          handleClick7={this.handleClick7}
          handleClick8={this.handleClick8}
          loc0={this.state.loc0}
          loc1={this.state.loc1}
          loc2={this.state.loc2}
          loc3={this.state.loc3}
          loc4={this.state.loc4}
          loc5={this.state.loc5}
          loc6={this.state.loc6}
          loc7={this.state.loc7}
          loc8={this.state.loc8} />
      </div>
    );
  }
}

export default Tictactoe;
