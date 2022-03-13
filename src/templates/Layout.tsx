import { Outlet } from 'react-router-dom';

import { useAuth } from '../contexts/AuthContext';
import HomeSignedOut from '../pages/HomeSignedOut';
import { useLoading } from '../contexts/LoadingContext';

const Layout = () => {
  const { isAuthenticated, user } = useAuth();
  const { isLoading, message } = useLoading();

  return (
    <>
      {isLoading && (
        <div className='loading_bg d-flex justify-content-center align-items-center'>
          <div className='loading text-center'>
            <div className='spinner-border' role='status'></div>
            <div>{message}</div>
          </div>
        </div>
      )}

      <div className='d-flex justify-content-center align-items-center flex-grow-1'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 p-3'>
              <h1 className='layout-title'>Pesquise um Usuário</h1>
            </div>
            <div className='col-md-6 p-3'>
              <main>{!isAuthenticated ? <Outlet /> : <HomeSignedOut />}</main>
            </div>
          </div>

          <div>{user}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
