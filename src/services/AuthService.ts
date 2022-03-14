import instance from './instance';

const AuthService = {
  getAccessToken: async (code: string) => {
    try {
      const res = await instance.post(
        '/login/oauth/access_token',
        {},
        {
          params: {
            client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
            client_secret: process.env.REACT_APP_GITHUB_CLIENT_SECRET,
            code,
          },
          baseURL: 'https://github.com',
        }
      );
      return res.data;
    } catch (error) {
      console.error({ error });
      return {};
    }
  },
};

export default AuthService;
