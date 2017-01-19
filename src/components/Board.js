import React from 'react';
import { Card, CardTitle, CardText, CardActions , Grid, Cell } from 'react-mdl';
import './Board.css';
// import Player from './Player';
import PlaceHolder from './PlaceHolder';

function Board(props) {
  return (
    <div>
      <Card id="board" shadow={3}>
        <CardTitle id="board-title">
          Tic-Tac-Toe
        </CardTitle>
        <CardText>
          <Grid className="rows" shadow={3}>
            <Cell col={4} component={PlaceHolder} handleClick={props.handleClick}></Cell>
            <Cell col={4} component={PlaceHolder} handleClick={props.handleClick}></Cell>
            <Cell col={4} component={PlaceHolder} handleClick={props.handleClick}></Cell>
          </Grid>
          <Grid className="rows" shadow={3}>
            <Cell col={4} component={PlaceHolder} handleClick={props.handleClick}></Cell>
            <Cell col={4} component={PlaceHolder} handleClick={props.handleClick}></Cell>
            <Cell col={4} component={PlaceHolder} handleClick={props.handleClick}></Cell>
          </Grid>
          <Grid className="rows" shadow={3}>
            <Cell col={4} component={PlaceHolder} handleClick={props.handleClick}></Cell>
            <Cell col={4} component={PlaceHolder} handleClick={props.handleClick}></Cell>
            <Cell col={4} component={PlaceHolder} handleClick={props.handleClick}></Cell>
          </Grid>
        </CardText>
        <CardActions>Placeholder</CardActions>
      </Card>
    </div>
  );
}

export default Board;
