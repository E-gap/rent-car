import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import { RestrictedRoute } from '../utils/RestrictedRoute';
import { useDispatch } from 'react-redux';
import { refresh } from '../redux/auth/authOperations';
import { useEffect } from 'react';
import CardPage from '../pages/CardPage/CardPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cards" element={<CardPage />} />
        <Route path="*" element={<RestrictedRoute redirectTo="/" />} />
      </Routes>
    </>
  );
}

export default App;
