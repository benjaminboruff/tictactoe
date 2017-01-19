import React from 'react';
import './PlaceHolder.css';

function PlaceHolder(props) {
  return <div className="place-holder" onClick={props.handleClick}>X</div>;
}

export default PlaceHolder;
