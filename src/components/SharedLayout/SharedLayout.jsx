import Header from '../Header/Header';
import Footer from 'components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Preloader from 'components/Preloader/Preloader';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Preloader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default SharedLayout;
