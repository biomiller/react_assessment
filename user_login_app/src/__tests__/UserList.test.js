import React from 'react';
import renderer from 'react-test-renderer';

import { MemoryRouter } from 'react-router-dom';

import { UserList } from "../components/UserList.js";


it('is UserList rendered', () => {

    const data=[{username:"Test"}]

    const component = renderer
    .create(
      <MemoryRouter>
        <UserList data={data} />
      </MemoryRouter>
    )
    .toJSON();

    expect(component).toMatchSnapshot();
});



