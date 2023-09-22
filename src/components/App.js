import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import { RestrictedRoute } from '../utils/RestrictedRoute';
import { PrivateRoute } from '../utils/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { refresh } from '../redux/auth/authOperations';
import { useEffect } from 'react';
import CarsPage from '../pages/CarsPage/CarsPage';
import SharedLayout from '../components/SharedLayout/SharedLayout';
import Preloader from '../components/Preloader/Preloader';
import OneCarPage from '../pages/OneCarPage/OneCarPage';
import UserPage from '../pages/UserPage/UserPage';
import FavoritePage from '../pages/FavoritePage/FavoritePage';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
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
              <Route
                path="login"
                element={
                  <RestrictedRoute component={Login} redirectTo="/cars/all" />
                }
              />
              <Route
                path="register"
                element={
                  <RestrictedRoute
                    component={Register}
                    redirectTo="/cars/all"
                  />
                }
              />
              <Route path="cars/all" element={<CarsPage />} />
              <Route path="cars/:id" element={<OneCarPage />} />
              <Route
                path="user"
                element={
                  <PrivateRoute component={UserPage} redirectTo="/login" />
                }
              />
              <Route
                path="cars/favorite"
                element={
                  <PrivateRoute component={FavoritePage} redirectTo="/login" />
                }
              />
              <Route
                path="user/userCars"
                element={
                  <PrivateRoute component={UserCarsPage} redirectTo="/login" />
                }
              />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
