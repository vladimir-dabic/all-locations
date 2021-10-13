import React from 'react';
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';

import {} from '@testing-library/user-event';
import AllLocations from './App';

describe('All locations', () => {
  it('should render data on init', async () => {
    render(<AllLocations />);

    await waitForElementToBeRemoved(screen.getByTestId('loaderId'));
    // screen.debug();
    // await waitFor(() => {
    //   expect(screen.getByText('name1')).toBeInTheDocument();
    // });
    // console.log('hoj');
  });
});
