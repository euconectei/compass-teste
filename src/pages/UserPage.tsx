import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserDisplay, UserNotFound } from '../components/user';
import { useLoading } from '../contexts/LoadingContext';
import GithubService from '../services/GithubService';
import { UserType } from '../types/UserType';

const UserPage = () => {
  const [userData, setUserData] = useState<UserType>({} as UserType);
  const { username } = useParams<'username'>() as { username: string };
  const { setLoading } = useLoading();

  const getData = async () => {
    setLoading(true, 'Carregando dados do usuário...');
    if (username) {
      setUserData(await GithubService.getUser(username));
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();

    return () => {
      setUserData({} as UserType);
    };
  }, []);

  return <UserDisplay user={userData} username={username} />;
};

export default UserPage;
