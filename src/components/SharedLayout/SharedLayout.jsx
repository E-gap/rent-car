import Container from '../Container/Container';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};

export default SharedLayout;
