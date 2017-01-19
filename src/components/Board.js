import React from 'react';
import { Card, CardTitle, CardText, CardActions , Grid, Cell } from 'react-mdl';
import './Board.css';
import Player from './Player';

function Board(props) {
  return (
    <div>
      <Card id="board" shadow={3}>
        <CardTitle id="board-title">
          Tic-Tac-Toe
        </CardTitle>
        <CardText>
          <Grid className="rows" shadow={3}>
            <Cell className="cell" col={4} component={Player}></Cell>
            <Cell className="cell" col={4} component={Player}></Cell>
            <Cell className="cell" col={4} component={Player}></Cell>
          </Grid>
          <Grid className="rows" shadow={3}>
            <Cell className="cell" col={4} component={Player}></Cell>
            <Cell className="cell" col={4} component={Player}></Cell>
            <Cell className="cell" col={4} component={Player}></Cell>
          </Grid>
          <Grid className="rows" shadow={3}>
            <Cell className="cell" col={4} component={Player}></Cell>
            <Cell className="cell" col={4} component={Player}></Cell>
            <Cell className="cell" col={4} component={Player}></Cell>
          </Grid>
        </CardText>
        <CardActions>Placeholder</CardActions>
      </Card>
    </div>
  );
}

export default Board;
