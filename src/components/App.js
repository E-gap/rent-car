import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import { RestrictedRoute } from '../utils/RestrictedRoute';
import { useDispatch } from 'react-redux';
import { refresh } from '../redux/auth/authOperations';
import { useEffect } from 'react';
import CardPage from '../pages/CardPage/CardPage';
import SharedLayout from '../components/SharedLayout/SharedLayout';

function App() {
  const dispatch = useDispatch();

  /* useEffect(() => {
    dispatch(refresh());
  }, [dispatch]); */

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/cars" element={<CardPage />} />
        <Route path="*" element={<RestrictedRoute redirectTo="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
