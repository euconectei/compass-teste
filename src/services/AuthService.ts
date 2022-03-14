import axios from 'axios';

const AuthService = {
  getAccessToken: async (code: string) => {
    try {
      const res = await axios({
        url: `http://localhost:5000/token?code=${code}`,
        method: 'get',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      return res.data;
    } catch (error) {
      console.error({ error });
      return {};
    }
  },
};

export default AuthService;
