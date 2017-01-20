import React, { Component } from 'react';
import './Tictactoe.css';
import Board from './components/Board';

class Tictactoe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: ' ',
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

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({turn: 'X', loc1: e.target.value});
    //   if(this.state.turn === ' ' || this.state.turn === 'O') {
    //     switch (e.target.value) {
    //       case 0:
    //         this.setState({loc0: 'X'});
    //         break;
    //       case 1:
    //         this.setState({turn: 'X', loc1: 'X'});
    //         break;
    //       case 2:
    //         this.setState({turn: 'X', loc2: 'X'});
    //         break;
    //       case 3:
    //         this.setState({turn: 'X', loc3: 'X'});
    //         break;
    //       case 4:
    //         this.setState({turn: 'X', loc4: 'X'});
    //         break;
    //       case 5:
    //         this.setState({turn: 'X', loc5: 'X'});
    //         break;
    //       case 6:
    //         this.setState({turn: 'X', loc6: 'X'});
    //         break;
    //       case 7:
    //         this.setState({turn: 'X', loc7: 'X'});
    //         break;
    //       case 8:
    //         this.setState({turn: 'X', loc8: 'X'});
    //         break;
    //       default:
    //         console.log(e.target.value);
    //     }
    //   } else {
    //     switch (e.target.value) {
    //       case 0:
    //         this.setState({turn: 'O', loc0: 'O'});
    //         break;
    //       case 1:
    //         this.setState({turn: 'O', loc1: 'O'});
    //         break;
    //       case 2:
    //         this.setState({turn: 'O', loc2: 'O'});
    //         break;
    //       case 3:
    //         this.setState({turn: 'O', loc3: 'O'});
    //         break;
    //       case 4:
    //         this.setState({turn: 'O', loc4: 'O'});
    //         break;
    //       case 5:
    //         this.setState({turn: 'O', loc5: 'O'});
    //         break;
    //       case 6:
    //         this.setState({turn: 'O', loc6: 'O'});
    //         break;
    //       case 7:
    //         this.setState({turn: 'O', loc7: 'O'});
    //         break;
    //       case 8:
    //         this.setState({turn: 'O', loc8: 'O'});
    //         break;
    //       default:
    //         console.log(e.target.value);
    //   }
    // }
    e.preventDefault();
}

  render() {
    return (
      <div className="App">
        <Board
          turn={this.state.turn}
          handleClick={this.handleClick}
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
