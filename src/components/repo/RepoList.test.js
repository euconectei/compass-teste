import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { reposMock } from '../../types/__mocks__/repos.mock';
import RepoList from './RepoList';

describe('Testing UserDisplay Component', () => {
  it('shold render the component', () => {
    const component = renderer.create(<RepoList repos={reposMock} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render the component with an empty repos', () => {
    const { getByText } = render(<RepoList repos={[]} />);
    expect(getByText('Nenhum repositório encontrado.')).toBeInTheDocument();
  });

  it('should render the component with repos', () => {
    const { getByText } = render(<RepoList repos={reposMock} />);
    expect(getByText('AcessibilidadeUsabilidade')).toBeInTheDocument();
  });
});
