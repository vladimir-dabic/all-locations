// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';
import { GET_MOCK_DATA } from '../api';
import getLocationsFixture from './fixtures/getLocationsFixture.json';

export const getLocationsMock = rest.get(GET_MOCK_DATA, (req, res, ctx) =>
  res(ctx.status(200), ctx.json(getLocationsFixture)),
);
