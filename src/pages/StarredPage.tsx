import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import StarredList from '../components/starred/StarredList';
import { useLoading } from '../contexts/LoadingContext';
import GithubService from '../services/GithubService';
import { StarredType } from '../types/StarredType';

const StarredPage = () => {
  const username = useParams().username;
  const [starreds, setStarreds] = useState<StarredType[]>([]);
  const navigate = useNavigate();
  const { setLoading } = useLoading();

  const handleNavigateUser = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    ev.preventDefault();
    navigate(`/${username}`);
  };

  const getStarred = async () => {
    setLoading(true, 'Carregando starreds...');
    if (username) {
      setStarreds(await GithubService.getStarred(username));
    }
    setLoading(false);
  };

  useEffect(() => {
    getStarred();

    return () => {
      setStarreds([]);
    };
  }, [username]);

  return (
    <>
      <div className='row'>
        <h2>
          Lista de Starreds de{' '}
          <a href='#' onClick={handleNavigateUser}>
            {username}
          </a>
        </h2>
      </div>
      <div className='row'>
        <div className='col-12'>
          <StarredList starreds={starreds} />
        </div>
      </div>
    </>
  );
};

export default StarredPage;
