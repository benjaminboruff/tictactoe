import React from 'react';
import './Move.css';

class Move extends React.Component {
  render(){
    return <div value={this.props.value} className="move" onClick={this.props.handleClick}>{this.props.value}</div>;
  }
}

export default Move;
