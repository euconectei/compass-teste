import { UserType } from '../../types/UserType';
import UserNotFound from './UserNotFound';

type UserDisplayComponentType = {
  user: UserType;
  username: string;
};

const UserDisplay = ({ user, username }: UserDisplayComponentType) => {
  if (Object.keys(user).length === 0) {
    return <UserNotFound username={username} />;
  }

  return (
    <>
      <div className='m-3'>
        <div className='card user-card'>
          <img
            src={user.avatar_url}
            alt={`Foto de ${user.login}`}
            className='card-img-top'
          />
          <div className='card-body'>
            <h5 className='card-title'>{user.login}</h5>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                <span className='font-weight-bold'>Nome:</span> {user.name}
              </li>
              <li className='list-group-item'>
                <span className='font-weight-bold'>E-mail:</span> {user.email}
              </li>
              <li className='list-group-item'>
                <span className='font-weight-bold'>Repositórios:</span>{' '}
                {user.public_repos}
              </li>
              <li className='list-group-item'>
                <span className='font-weight-bold'>Seguidores:</span>{' '}
                {user.followers}
              </li>
              <li className='list-group-item'>
                <span className='font-weight-bold'>Seguindo:</span>{' '}
                {user.following}
              </li>
            </ul>
            <hr className='divider' />
            <div className='d-flex justify-content-between'>
              <a href={`/${user.login}/repos`} className='btn btn-primary'>
                Repos
              </a>
              <a href={`/${user.login}/starred`} className='btn btn-primary'>
                Starred
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDisplay;
