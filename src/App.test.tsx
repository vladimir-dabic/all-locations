import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import AllLocations from './App';

describe('All locations', () => {
  it('should work', async () => {
    render(<AllLocations />);

    await waitFor(() => {
      expect(screen.getByText('name1')).toBeInTheDocument();
    });
    screen.debug();
    console.log('hoj');
  });
});
