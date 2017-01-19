import React from 'react';
import Board from './Board';
import { shallow } from 'enzyme';

// smoke
it('should render without error', () => {
  expect(shallow(<Board />));
});
