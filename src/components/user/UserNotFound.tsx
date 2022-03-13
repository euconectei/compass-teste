type UserNotFoundType = {
  username: string;
};

const UserNotFound = ({ username }: UserNotFoundType) => {
  return (
    <div className='alert alert-info'>
      O usuário {username} não foi encontrado.
    </div>
  );
};

export default UserNotFound;
