import React from 'react';
import Player from './Player';
import { shallow } from 'enzyme';

// smoke
it('it should render without error',() => {
  expect(shallow(<Player />));
});
