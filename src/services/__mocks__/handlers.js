import { rest } from 'msw';
import { reposMock } from '../../types/__mocks__/repos.mock';
import { starredsMock } from '../../types/__mocks__/starreds.mock';
import { userMock } from '../../types/__mocks__/user.mock';

export const handlers = [
  rest.get('https://api.github.com/users/:user/repos', (req, res, ctx) => {
    return res(ctx.json(reposMock));
  }),
  rest.get('https://api.github.com/users/:user/starred', (req, res, ctx) => {
    return res(ctx.json(starredsMock));
  }),
  rest.get('https://api.github.com/users/:user', (req, res, ctx) => {
    return res(ctx.json(userMock));
  }),
];
