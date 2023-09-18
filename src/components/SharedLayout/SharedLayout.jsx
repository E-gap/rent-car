import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<p>loading</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
