import { useState } from 'react';
import { FiGithub } from 'react-icons/fi';

const HomeSignedOut = () => {
  const [data, setData] = useState({});

  const { REACT_APP_CLIENT_ID } = process.env;
  const redirect_uri = 'http://localhost:3000';

  return (
    <div className='text-center'>
      <a
        className='login-link'
        href={`https://github.com/login/oauth/authorize?scope=user&client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${redirect_uri}`}
        onClick={() => {
          setData({ ...data, errorMessage: '' });
        }}
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
