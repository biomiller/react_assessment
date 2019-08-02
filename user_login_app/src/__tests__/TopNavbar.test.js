import React from 'react';
import renderer from 'react-test-renderer';

import { TopNavbar } from "../components/TopNavbar.js";


it('is navbar rendered', () => {
    const tree=renderer.create(<TopNavbar />).toTree();

    expect(tree).toMatchSnapshot();
});
