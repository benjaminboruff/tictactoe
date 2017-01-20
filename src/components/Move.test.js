import React from 'react';
import Move from './Move';
import { shallow } from 'enzyme';

// smoke
it('it should render without error',() => {
  expect(shallow(<Move />));
});
