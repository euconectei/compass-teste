import { Outlet } from 'react-router-dom';

import { useAuth } from '../contexts/AuthContext';
import HomeSignedOut from '../pages/HomeSignedOut';
import { useLoading } from '../contexts/LoadingContext';
import { FiArrowLeft } from 'react-icons/fi';

const Layout = () => {
  const { isAuthenticated, user } = useAuth();
  const { isLoading, message } = useLoading();
  const isHome = window.location.pathname === '/';

  return (
    <>
      {isLoading && (
        <div
          data-testid='loading'
          className='loading_bg d-flex justify-content-center align-items-center'
        >
          <div className='loading text-center'>
            <div className='spinner-border' role='status'></div>
            <div className='m-3'>{message}</div>
          </div>
        </div>
      )}

      <div className='d-flex justify-content-center align-items-center flex-grow-1'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 p-3'>
              {isHome ? null : (
                <a href='/' className='btn btn-outline-primary'>
                  <FiArrowLeft size='1.25rem' /> início
                </a>
              )}
              <h1 className='layout-title'>Pesquise um Usuário</h1>
            </div>
            <div className='col-md-6 p-3'>
              <main>{isAuthenticated ? <Outlet /> : <HomeSignedOut />}</main>
            </div>
          </div>

          <div>{user}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
