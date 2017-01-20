import React from 'react';
import { Card, CardTitle, CardText, CardActions , Grid, Cell } from 'react-mdl';
import './Board.css';
 import Move from './Move';
//import PlaceHolder from './PlaceHolder';

function Board(props) {
  let row0 = [0,1,2];
  let row1 = [3,4,5];
  let row2 = [6,7,8];

  let row0Components = row0.map((location) => {
    return <Cell key={location} value={location} turn={props.turn} col={4} component={Move} handleClick={props.handleClick}></Cell>;
  });

  let row1Components = row1.map((location) => {
    return <Cell key={location} value={location} turn={props.turn}  col={4} component={Move} handleClick={props.handleClick}></Cell>;
  });

  let row2Components = row2.map((location) => {
    return <Cell key={location} value={location} turn={props.turn} col={4} component={Move} handleClick={props.handleClick}></Cell>;
  });

  return (
    <div>
      <Card id="board" shadow={3}>
        <CardTitle id="board-title">
          Tic-Tac-Toe
        </CardTitle>
        <CardText>
          <Grid className="rows" shadow={3}>
            {row0Components}
          </Grid>
          <Grid className="rows" shadow={3}>
            {row1Components}
          </Grid>
          <Grid className="rows" shadow={3}>
            {row2Components}
          </Grid>
        </CardText>
        <CardActions>Placeholder</CardActions>
      </Card>
    </div>
  );
}

export default Board;
