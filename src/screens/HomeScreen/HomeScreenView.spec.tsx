import {HomeScreenView} from './HomeScreenView';
import React from 'react';
import renderer from 'react-test-renderer';

describe('HomeScreenView', () => {
  it('renders correctly base', () => {
    const tree = renderer
      .create(<HomeScreenView usingHermes={false} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
