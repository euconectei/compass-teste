import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import UserPage from '../pages/UserPage';
import ReposPage from '../pages/ReposPage';
import StarredPage from '../pages/StarredPage';
import Layout from '../templates/Layout';

const RouteMap = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='/:username' element={<UserPage />} />
        <Route path='/:username/repos' element={<ReposPage />} />
        <Route path='/:username/starred' element={<StarredPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default RouteMap;
