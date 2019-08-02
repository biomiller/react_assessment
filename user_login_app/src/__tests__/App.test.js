import React from 'react';
import renderer from 'react-test-renderer';

import { App } from '../App.js';

it('is app rendered', () => {
  const tree=renderer.create(<App />).toTree();

  expect(tree).toMatchSnapshot();
})
