import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { starredsMock } from '../../types/__mocks__/starreds.mock';
import StarredList from './StarredList';

describe('Testing StarredList Component', () => {
  it('shold render the component', () => {
    const component = renderer.create(<StarredList starreds={starredsMock} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render the component with an empty starreds', () => {
    render(<StarredList starreds={[]} />);
    expect(screen.getByText('Nenhum starred encontrado.')).toBeInTheDocument();
  });

  it('should render the component with starreds', () => {
    render(<StarredList starreds={starredsMock} />);
    expect(screen.getByText('awesome-hyper')).toBeInTheDocument();
  });
});
