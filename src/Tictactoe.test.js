import React from 'react';
import ReactDOM from 'react-dom';
import Tictactoe from './Tictactoe';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Tictactoe />, div);
});
