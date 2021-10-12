// eslint-disable-next-line import/no-extraneous-dependencies
import { setupServer } from 'msw/node';
import { getLocationsMock } from './handlers';

export const server = setupServer(getLocationsMock);
