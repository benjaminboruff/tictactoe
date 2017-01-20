import React from 'react';
import { Card, CardTitle, CardText, CardActions , Grid, Cell } from 'react-mdl';
import './Board.css';
 import Move from './Move';
//import PlaceHolder from './PlaceHolder';

function Board(props) {
  return (
    <div>
      <Card id="board" shadow={3}>
        <CardTitle id="board-title">
          Tic-Tac-Toe
        </CardTitle>
        <CardText>
          <Grid className="rows" shadow={3}>
            <Cell value={props.loc0} turn={props.turn} col={4} component={Move} handleClick={props.handleClick0}></Cell>
            <Cell value={props.loc1} turn={props.turn} col={4} component={Move} handleClick={props.handleClick1}></Cell>
            <Cell value={props.loc2} turn={props.turn} col={4} component={Move} handleClick={props.handleClick2}></Cell>
          </Grid>
          <Grid className="rows" shadow={3}>
          <Cell value={props.loc3} turn={props.turn} col={4} component={Move} handleClick={props.handleClick3}></Cell>
          <Cell value={props.loc4} turn={props.turn} col={4} component={Move} handleClick={props.handleClick4}></Cell>
          <Cell value={props.loc5} turn={props.turn} col={4} component={Move} handleClick={props.handleClick5}></Cell>
          </Grid>
          <Grid className="rows" shadow={3}>
          <Cell value={props.loc6} turn={props.turn} col={4} component={Move} handleClick={props.handleClick6}></Cell>
          <Cell value={props.loc7} turn={props.turn} col={4} component={Move} handleClick={props.handleClick7}></Cell>
          <Cell value={props.loc8} turn={props.turn} col={4} component={Move} handleClick={props.handleClick8}></Cell>
          </Grid>
        </CardText>
        <CardActions>Placeholder</CardActions>
      </Card>
    </div>
  );
}

export default Board;
