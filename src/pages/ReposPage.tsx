import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import GithubService from '../services/GithubService';
import { RepoType } from '../types/RepoType';
import { useLoading } from '../contexts/LoadingContext';
import RepoList from '../components/repo/RepoList';

const ReposPage = () => {
  const username = useParams().username;
  const [repos, setRepos] = useState<RepoType[]>([]);
  const navigate = useNavigate();
  const { setLoading } = useLoading();

  const handleNavigateUser = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    ev.preventDefault();
    navigate(`/${username}`);
  };

  const getRepos = async () => {
    setLoading(true, 'Carregando repositórios...');
    if (username) {
      setRepos(await GithubService.getRepos(username));
    }
    setLoading(false);
  };

  useEffect(() => {
    getRepos();

    return () => {
      setRepos([]);
    };
  }, [username]);

  return (
    <>
      <div className='row'>
        <h2>
          Lista de Repositórios de{' '}
          <a href='#' onClick={handleNavigateUser}>
            {username}
          </a>
        </h2>
      </div>
      <div className='row'>
        <div className='col-12'>
          <RepoList repos={repos} />
        </div>
      </div>
    </>
  );
};

export default ReposPage;
