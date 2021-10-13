import React from 'react';
import {
  render,
  screen,
  within,
  waitForElementToBeRemoved,
} from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import getLocationsFixture from './msw/fixtures/getLocationsFixture.json';
import AllLocations from './App';

const renderInit = async (): Promise<void> => {
  render(<AllLocations />);
  await waitForElementToBeRemoved(screen.getByTestId('loaderId'));
};

describe('All locations', () => {
  it('should render data on init', async () => {
    await renderInit();

    /* check rendered data from mocked server  */
    const allCards = screen.getAllByRole('button');
    const allNames = getLocationsFixture.map((n) => n.name);
    allCards.forEach((card, index) => {
      within(card).getByText(allNames[index]);
    });
  });
  it('should count user clicks on card', async () => {
    await renderInit();

    const [firstCard] = screen.getAllByRole('button');
    expect(within(firstCard).getByText('0'));
    /* CLICK */
    userEvent.click(firstCard);
    /* should have updated clicks count in modal */
    within(screen.getByRole('dialog')).getByText('1');
    /* ESC */
    userEvent.keyboard('{ctrl/}');
    expect(within(firstCard).getByText('1'));
  });
  it('should check focus on tab, and closing modal with Done button', async () => {
    await renderInit();

    /* jumpt to first card */
    userEvent.tab();
    /* open dialog */
    userEvent.keyboard('{space/}');
    const modal = screen.getByRole('dialog');
    const [, doneButton] = within(modal).getAllByRole('button');
    /* check for second card */
    expect(within(modal).getByText('Description1'));
    /* CLICK */
    userEvent.click(doneButton);
    expect(modal).not.toBeInTheDocument();
  });
  it('should check focus on tab, and closing modal with x button', async () => {
    await renderInit();

    /* jumpt to second card */
    userEvent.tab();
    userEvent.tab();
    /* open dialog */
    userEvent.keyboard('{enter/}');
    const modal = screen.getByRole('dialog');
    const [xButton] = within(modal).getAllByRole('button');
    /* check for second card */
    expect(within(modal).getByText('Description2'));
    /* CLICK */
    userEvent.click(xButton);
    expect(modal).not.toBeInTheDocument();
  });
});
