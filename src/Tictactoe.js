import React, { Component } from 'react';
import './Tictactoe.css';
import Board from './components/Board';

class Tictactoe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: 'start',
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

  checkForWin() {
    let row0 = this.state.loc0 + this.state.loc1 + this.state.loc2;
    let row1 = this.state.loc3 + this.state.loc4 + this.state.loc5;
    let row2 = this.state.loc6 + this.state.loc7 + this.state.loc8;
    let col0 = this.state.loc0 + this.state.loc3 + this.state.loc6;
    let col1 = this.state.loc1 + this.state.loc4 + this.state.loc7;
    let col2 = this.state.loc2 + this.state.loc5 + this.state.loc8;
    let diag0 = this.state.loc0 + this.state.loc4 + this.state.loc8;
    let diag1 = this.state.loc2 + this.state.loc4 + this.state.loc6;

    switch('XXX') {
      case row0:
        console.log("X wins");
        this.win = true;
        return true;
      case row1:
        console.log("X wins");
        this.win = true;
        return true;
      case row2:
        console.log("X wins");
        this.win = true;
        return true;
      case col0:
        console.log("X wins");
        this.win = true;
        return true;
      case col1:
        console.log("X wins");
        this.win = true;
        return true;
      case col2:
        console.log("X wins");
        this.win = true;
        return true;
      case diag0:
        console.log("X wins");
        this.win = true;
        return true;
      case diag1:
        console.log("X wins");
        this.win = true;
        return true;
      default:
        console.log("No X Winner yet");
        //return false;
    }

    switch('OOO') {
      case row0:
        console.log("O wins");
        this.win = true;
        return true;
      case row1:
        console.log("O wins");
        this.win = true;
        return true;
      case row2:
        console.log("O wins");
        this.win = true;
        return true;
      case col0:
        console.log("O wins");
        this.win = true;
        return true;
      case col1:
        console.log("O wins");
        this.win = true;
        return true;
      case col2:
        console.log("O wins");
        this.win = true;
        return true;
      case diag0:
        console.log("O wins");
        this.win = true;
        return true;
      case diag1:
        console.log("O wins");
        this.win = true;
        return true;
      default:
        console.log("No O Winner yet");
        //return false;
    }

    return false;

  }

  handleClick0(e) {
    if(this.state.loc0 !== 'X' && this.state.loc0 !== 'O' && this.win === false) {
      if(this.state.turn === 'start' || this.state.turn === 'O') {
        this.setState({turn: 'X', loc0: 'X'});
      } else {
        this.setState({turn: 'O', loc0: 'O'});
      }
    }
    e.preventDefault();
    setTimeout(() => {this.checkForWin()},0);
}

  handleClick1(e) {
    if(this.state.loc1 !== 'X' && this.state.loc1 !== 'O' && this.win === false) {
      if(this.state.turn === 'start' || this.state.turn === 'O') {
        this.setState({turn: 'X', loc1: 'X'});
      } else {
        this.setState({turn: 'O', loc1: 'O'});
      }
    }
    e.preventDefault();
    setTimeout(() => {this.checkForWin()},0);
  }

  handleClick2(e) {
    if(this.state.loc2 !== 'X' && this.state.loc2 !== 'O' && this.win === false) {
      if(this.state.turn === 'start' || this.state.turn === 'O') {
        this.setState({turn: 'X', loc2: 'X'});
      } else {
        this.setState({turn: 'O', loc2: 'O'});
      }
    }
    e.preventDefault();
    setTimeout(() => {this.checkForWin()},0);
  }
  handleClick3(e) {
    if(this.state.loc3 !== 'X' && this.state.loc3 !== 'O' && this.win === false) {
      if(this.state.turn === 'start' || this.state.turn === 'O') {
        this.setState({turn: 'X', loc3: 'X'});
      } else {
        this.setState({turn: 'O', loc3: 'O'});
      }
    }
    e.preventDefault();
    setTimeout(() => {this.checkForWin()},0);
  }
  handleClick4(e) {
    if(this.state.loc4 !== 'X' && this.state.loc4 !== 'O' && this.win === false) {
      if(this.state.turn === 'start' || this.state.turn === 'O') {
        this.setState({turn: 'X', loc4: 'X'});
      } else {
        this.setState({turn: 'O', loc4: 'O'});
      }
    }
    e.preventDefault();
    setTimeout(() => {this.checkForWin()},0);
  }
  handleClick5(e) {
    if(this.state.loc5 !== 'X' && this.state.loc5 !== 'O' && this.win === false) {
      if(this.state.turn === 'start' || this.state.turn === 'O') {
        this.setState({turn: 'X', loc5: 'X'});
      } else {
        this.setState({turn: 'O', loc5: 'O'});
      }
    }
    e.preventDefault();
    setTimeout(() => {this.checkForWin()},0);
  }
  handleClick6(e) {
    if(this.state.loc6 !== 'X' && this.state.loc6 !== 'O' && this.win === false) {
      if(this.state.turn === 'start' || this.state.turn === 'O') {
        this.setState({turn: 'X', loc6: 'X'});
      } else {
        this.setState({turn: 'O', loc6: 'O'});
      }
    }
    e.preventDefault();
    setTimeout(() => {this.checkForWin()},0);
  }
  handleClick7(e) {
    if(this.state.loc7 !== 'X' && this.state.loc7 !== 'O' && this.win === false) {
      if(this.state.turn === ' ' || this.state.turn === 'O') {
        this.setState({turn: 'X', loc7: 'X'});
      } else {
        this.setState({turn: 'O', loc7: 'O'});
      }
    }
    e.preventDefault();
    setTimeout(() => {this.checkForWin()},0);
  }
  handleClick8(e) {
    if(this.state.loc8 !== 'X' && this.state.loc8 !== 'O' && this.win === false) {
      if(this.state.turn === ' ' || this.state.turn === 'O') {
        this.setState({turn: 'X', loc8: 'X'});
      } else {
        this.setState({turn: 'O', loc8: 'O'});
      }
    }
    e.preventDefault();
    setTimeout(() => {this.checkForWin()},0);
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
