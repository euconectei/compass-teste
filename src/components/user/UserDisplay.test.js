import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { userMock } from '../../types/__mocks__/user.mock';
import UserDisplay from './UserDisplay';

describe('Testing UserDisplay Component', () => {
  it('shold render the component', () => {
    const component = renderer.create(<UserDisplay user={userMock} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render the component with no user', () => {
    render(<UserDisplay user={{}} username='aaawewss' />);
    expect(
      screen.getByText('O usuário aaawewss não foi encontrado.')
    ).toBeInTheDocument();
  });
});
