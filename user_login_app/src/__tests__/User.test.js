import React from 'react';
import renderer from 'react-test-renderer';

import { MemoryRouter } from 'react-router-dom';

import { User } from "../components/User.js";


it('is User rendered', () => {

    const user={username:"Test"}

    const component = renderer
    .create(
      <MemoryRouter>
        <User user={user} />
      </MemoryRouter>
    )
    .toJSON();

    expect(component).toMatchSnapshot();
});



