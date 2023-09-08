import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import { RestrictedRoute } from '../utils/RestrictedRoute';
import { useDispatch, useSelector } from 'react-redux';
import { refresh } from '../redux/auth/authOperations';
import { useEffect } from 'react';
import CarsPage from '../pages/CarsPage/CarsPage';
import SharedLayout from '../components/SharedLayout/SharedLayout';
import Preloader from '../components/Preloader/Preloader';
import OneCarPage from '../pages/OneCarPage/OneCarPage';
import UserPage from '../pages/UserPage/UserPage';
import FavoritePage from '../pages/FavoritePage/FavoritePage';
import UserCarsPage from '../pages/UserCarsPage/UserCarsPage';
import { selectIsUserLoading } from '../redux/selectors';

function App() {
  const dispatch = useDispatch();
  const IsLoading = useSelector(selectIsUserLoading);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <>
      {IsLoading ? (
        <Preloader />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<HomePage />} />
              <Route path="cars/all" element={<CarsPage />} />
              <Route path="cars/:id" element={<OneCarPage />} />
              <Route path="user" element={<UserPage />} />
              <Route path="cars/favorite" element={<FavoritePage />} />
              <Route path="user/userCars" element={<UserCarsPage />} />
              <Route path="*" element={<RestrictedRoute redirectTo="/" />} />
            </Route>
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
