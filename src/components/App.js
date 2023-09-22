import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from '../utils/RestrictedRoute';
import { PrivateRoute } from '../utils/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { refresh } from '../redux/auth/authOperations';
import { useEffect, lazy } from 'react';
import SharedLayout from '../components/SharedLayout/SharedLayout';
import Preloader from '../components/Preloader/Preloader';
import { selectIsUserLoading } from '../redux/selectors';
const Register = lazy(() => import('../pages/Register/Register'));
const Login = lazy(() => import('../pages/Login/Login'));
const CarsPage = lazy(() => import('../pages/CarsPage/CarsPage'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));
const UserPage = lazy(() => import('../pages/UserPage/UserPage'));
const FavoritePage = lazy(() => import('../pages/FavoritePage/FavoritePage'));
const OneCarPage = lazy(() => import('../pages/OneCarPage/OneCarPage'));
const UserCarsPage = lazy(() => import('../pages/UserCarsPage/UserCarsPage'));

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
