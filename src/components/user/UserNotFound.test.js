import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import UserNotFound from './UserNotFound';

const username = 'teste';

describe('Testing UserNotFound Component', () => {
  it('shold render the component', () => {
    const component = renderer.create(<UserNotFound username={username} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('shold render the component with username', () => {
    const { getByText } = render(<UserNotFound username={username} />);
    expect(
      getByText(`O usuário ${username} não foi encontrado.`)
    ).toBeInTheDocument();
  });
});
