import { StarredType } from '../../types/StarredType';

type StarredListType = {
  starreds: StarredType[];
};

const StarredList = ({ starreds }: StarredListType) => {
  if (!starreds?.length) {
    return <div className='alert alert-info'>Nenhum starred encontrado.</div>;
  }

  return (
    <ul className='nav flex-column'>
      {starreds.map((starred, i) => (
        <li key={`starred-${i}`} className='nav-item'>
          <a href={starred.html_url} className='nav-link'>
            {starred.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default StarredList;
