import { fireEvent, render, screen } from '@testing-library/react';
import { rest } from 'msw';

import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';
import renderer from 'react-test-renderer';
import AuthProvider from '../contexts/AuthContext';
import LoadingProvider from '../contexts/LoadingContext';
import GithubService from '../services/GithubService';
import { server } from '../services/__mocks__/server';
import Layout from '../templates/Layout';
import { reposMock } from '../types/__mocks__/repos.mock';
import { userMock } from '../types/__mocks__/user.mock';

import ReposPage from './ReposPage';

const userExisting = 'euconectei';
const userNotExisting = 'euconectei123';

const Providers = ({ children }) => {
  return (
    <>
      <LoadingProvider>
        <AuthProvider>{children}</AuthProvider>
      </LoadingProvider>
    </>
  );
};

const renderWithProviders = (ui) => render(ui, { wrapper: Providers });

describe('Testing ReposPage Page', () => {
  it('should render the ReposPage component', () => {
    const page = renderer.create(
      <BrowserRouter>
        <ReposPage />
      </BrowserRouter>
    );
    expect(page).toMatchSnapshot();
  });

  it.only('should render the ReposPage component with a user', async () => {
    // jest.useFakeTimers();

    server.use(
      rest.get(
        `https://api.github.com/users/${userExisting}/repos`,
        (req, res, ctx) => {
          return res(ctx.delay(300), ctx.json(reposMock));
        }
      )
    );

    const { debug, rerender } = renderWithProviders(
      <MemoryRouter initialEntries={[`/${userExisting}/repos`]}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/:username/repos' element={<ReposPage />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    // debug();

    // localhost:3000/:username/repos

    // testar se o loading esta funcionando
    // jest.advanceTimersByTime(10);
    expect(screen.getByText('Carregando')).toBeInTheDocument();
    // testar se o usuario está sendo renderizado
    expect(screen.getByText(userExisting)).toBeInTheDocument();
    // jest.advanceTimersByTime(3000);
    // rerender();
    debug();
    screen.waitFor(() => {
      expect(screen.getByText(reposMock[0].name)).toBeInTheDocument();
    });
  });

  it('should render the ReposPage component with a user not found', async () => {
    GithubService.getUser = jest.fn().mockResolvedValue(userNotFound);

    render(
      <BrowserRouter>
        <ReposPage />
      </BrowserRouter>
    );

    const userInput = screen.getByPlaceholderText('Usuário do Github');
    fireEvent.change(userInput, { target: { value: userNotFound } });

    const submitButton = screen.getByText('Buscar');
    fireEvent.click(submitButton);

    expect(userInput.value).toBe(userExisting);
    await wait(() =>
      expect(screen.getByText('Usuário não encontrado')).toBeInTheDocument()
    );
  });
});
