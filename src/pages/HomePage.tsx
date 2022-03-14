import { useState } from 'react';
import { FiGithub } from 'react-icons/fi';
import { UserDisplay } from '../components/user';
import { useLoading } from '../contexts/LoadingContext';
import GithubService from '../services/GithubService';
import { UserType } from '../types/UserType';

const HomePage = () => {
  const [username, setUsername] = useState('');
  const [result, setResult] = useState<UserType>({} as UserType);
  const [searchedUser, setSearchedUser] = useState<string>('');
  const { setLoading } = useLoading();

  const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setLoading(true, 'Procurando usuário no Github...');
    setSearchedUser(username);
    setResult(await GithubService.getUser(username));
    setLoading(false);
  };

  const renderResult = () => {
    if (!searchedUser) {
      return null;
    }

    return (
      <>
        <hr className='divider' />
        <UserDisplay user={result} username={searchedUser} compact />
      </>
    );
  };

  return (
    <div className='container'>
      <h2 className='page-title'>Buscar usuário</h2>
      <form action='#' onSubmit={handleSubmit}>
        <div className='mb-3'>
          <div className='input-group mb-3'>
            <span className='input-group-text' id='username'>
              <FiGithub size='1.5rem' />
            </span>
            <input
              type='text'
              id='username'
              onChange={(ev) => setUsername(ev.target.value)}
              className='form-control'
              placeholder='Usuário do Github'
              required
            />
          </div>
        </div>
        <div className='text-end'>
          <button type='submit' className='btn btn-primary'>
            Buscar
          </button>
        </div>
      </form>

      {renderResult()}
    </div>
  );
};

export default HomePage;
