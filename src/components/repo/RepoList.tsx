import { RepoType } from '../../types/RepoType';

type RepoListType = {
  repos: RepoType[];
};

const RepoList = ({ repos }: RepoListType) => {
  if (!repos?.length) {
    return (
      <div className='alert alert-info'>Nenhum repositório encontrado.</div>
    );
  }

  return (
    <ul className='nav flex-column'>
      {repos.map((repo, i) => (
        <li key={`repo-${i}`} className='nav-item'>
          <a href={repo.html_url} className='nav-link'>
            {repo.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default RepoList;
