import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserDisplay, UserNotFound } from '../components/user';
import GithubService from '../services/GithubService';
import { UserType } from '../types/UserType';

const UserPage = () => {
  const [userData, setUserData] = useState<UserType>({} as UserType);
  const { username } = useParams<'username'>() as { username: string };

  const getData = async () => {
    if (username) {
      setUserData(await GithubService.getUser(username));
    }
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
