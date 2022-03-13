import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { userMock } from '../types/__mocks__/user.mock';
import GithubService from '../services/GithubService';
import HomePage from './HomePage';

const userExisting = 'euconectei';
const userNotFound = 'euconectei123';

// jest.mock('../services/GithubService.ts');

describe('Testing HomePage Page', () => {
  it('should render the HomePage component', () => {
    const page = renderer.create(<HomePage />);
    expect(page).toMatchSnapshot();
  });

  // it('should render the HomePage component with a user', async () => {
  //   GithubService.getUser = jest.fn().mockResolvedValue(userMock);

  //   render(<HomePage />);

  //   const userInput = screen.getByPlaceholderText('Usuário do Github');
  //   fireEvent.change(userInput, { target: { value: userExisting } });

  //   const submitButton = screen.getByText('Buscar');
  //   fireEvent.click(submitButton);

  //   // expect(userInput.value).toBe(userExisting);
  //   await wait(() => expect(screen.getByText('Rafael')).toBeInTheDocument());
  // });
});
