import React from 'react';
import renderer from 'react-test-renderer';

import { MemoryRouter } from 'react-router-dom';

import { App } from '../App.js';

it('is app rendered', () => {
  const component = renderer
  .create(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )
  .toJSON();

  expect(component).toMatchSnapshot();
})
