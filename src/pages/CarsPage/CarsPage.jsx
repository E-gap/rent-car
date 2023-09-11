import css from './CarsPage.module.css';
import Container from 'components/Container/Container';
import CarsList from 'components/CarsList/CarsList';
import HandlePanel from 'components/HandlePanel/HandlePanel';
import PaginationComponent from '../../components/Pagination/PaginationComponent';
import { useSelector } from 'react-redux';
import { selectTotalCars } from '../../redux/selectors';
import { useCallback, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import options from '../../components/Pagination/options';

const CarsPage = () => {
  const totalCars = useSelector(selectTotalCars);
  const [searchParams, setSearchParams] = useSearchParams();
  const [pageNumber, setPage] = useState(() => {
    const params = searchParams.get('page');
    return params ? params : 1;
  });

  /* useEffect(() => {
    setSearchParams({ page: pageNumber });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]); */

  const searchPage = useCallback(pageNumber => {
    setSearchParams({ page: pageNumber });
    setPage(pageNumber);
  }, []);

  console.log('total: ', totalCars);
  return (
    <div className={css.carsPage}>
      <Container>
        <HandlePanel />
        <CarsList page="carsPage" pageNumber={pageNumber} />
        <PaginationComponent
          total={totalCars}
          searchPage={searchPage}
          options={options.carsOptions}
        />
      </Container>
    </div>
  );
};

export default CarsPage;
