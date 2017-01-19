import React from 'react';
import './Player.css';

function Player(props) {
  return <div className="player" onClick={props.handleClick}>{props.turn}</div>;
}

export default Player;
