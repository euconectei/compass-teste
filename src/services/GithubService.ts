import { RepoType } from '../types/RepoType';
import { StarredType } from '../types/StarredType';
import { UserType } from '../types/UserType';
import instance from './instance';

const GithubService = {
  getRepos: async (user: string): Promise<RepoType[]> => {
    try {
      const res = await instance.get(`/users/${user}/repos`);
      return res.data;
    } catch (error) {
      return [];
    }
  },

  getStarred: async (user: string): Promise<StarredType[]> => {
    try {
      const res = await instance.get(`/users/${user}/starred`);
      return res.data;
    } catch (error) {
      return [];
    }
  },

  getUser: async (user: string): Promise<UserType> => {
    try {
      const res = await instance.get(`/users/${user}`);
      return res.data;
    } catch (error) {
      return {} as UserType;
    }
  },
};

export default GithubService;
