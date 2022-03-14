import { useEffect } from 'react';
import { FiGithub } from 'react-icons/fi';
import { useLoading } from '../contexts/LoadingContext';
import AuthService from '../services/AuthService';

const HomeSignedOut = () => {
  const { setLoading } = useLoading();

  const getAccessToken = async () => {
    try {
      const params = new URLSearchParams(window.location.search);
      const code = params.get('code');
      if (code) {
        setLoading(true, 'Solicitando token de acesso...');
        const res = await AuthService.getAccessToken(code);
        const { access_token } = res;
        localStorage.setItem('access_token', access_token);
      }
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAccessToken();
  }, []);

  const { REACT_APP_CLIENT_ID } = process.env;
  const redirect_uri = 'http://localhost:3000';

  return (
    <div className='text-center'>
      <a
        className='login-link'
        href={`https://github.com/login/oauth/authorize?scope=user&client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${redirect_uri}`}
      >
        <div>
          <FiGithub size='3rem' />
        </div>
        Entrar com GitHub
      </a>
      <p>Autentique-se para realizar buscas</p>
    </div>
  );
};

export default HomeSignedOut;
