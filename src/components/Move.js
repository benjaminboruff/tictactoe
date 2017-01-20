import React from 'react';
import './Move.css';

function Move(props) {
  if(props.turn === ' ') {
    return <div className="move" onClick={props.handleClick}>{props.value}</div>;
  } if(props.turn === 'X') {
    return <div className="move" onClick={props.handleClick}>{'X'}</div>;
  } else {
    return <div className="move" onClick={props.handleClick}>{'O'}</div>;
  }
}

export default Move;
