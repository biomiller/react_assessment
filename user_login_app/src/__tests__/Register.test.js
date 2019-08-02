import React from 'react';
import renderer from 'react-test-renderer';

import { MemoryRouter } from 'react-router-dom';

import { Register } from "../components/Register.js";


it('is Register rendered', () => {
    const component = renderer
    .create(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    )
    .toJSON();

    expect(component).toMatchSnapshot();
});



