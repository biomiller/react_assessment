import React from 'react';
import renderer from 'react-test-renderer';

import { MemoryRouter } from 'react-router-dom';

import { TopNavbar } from "../components/TopNavbar.js";


it('is TopNavbar rendered', () => {
    const component = renderer
    .create(
      <MemoryRouter>
        <TopNavbar />
      </MemoryRouter>
    )
    .toJSON();

    expect(component).toMatchSnapshot();
});



