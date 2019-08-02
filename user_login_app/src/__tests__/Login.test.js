import React from 'react';
import renderer from 'react-test-renderer';

import { MemoryRouter } from 'react-router-dom';

import { Login } from "../components/Login.js";


it('is Login rendered', () => {
    const component = renderer
    .create(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    )
    .toJSON();

    expect(component).toMatchSnapshot();
});



