import css from './CarsPage.module.css';
import Container from 'components/Container/Container';
import CarsList from 'components/CarsList/CarsList';
import HandlePanel from 'components/HandlePanel/HandlePanel';
import PaginationComponent from '../../components/Pagination/PaginationComponent';

import { selectTotalCars } from '../../redux/selectors';
import { useCallback, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import options from '../../components/Pagination/options';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCars } from '../../redux/cars/carsOperations';
import { selectAllCars } from '../../redux/selectors';

const CarsPage = () => {
  const dispatch = useDispatch();
  const totalCars = useSelector(selectTotalCars);
  const cars = useSelector(selectAllCars);
  const [searchParams, setSearchParams] = useSearchParams();
  const [pageNumber, setPageNumber] = useState(() => {
    const params = searchParams.get('page');
    return params ? params : 1;
  });
  const [sort, setSort] = useState({});
  const [filter, setFilter] = useState({});

  const changeFilter = filterParam => {
    setFilter(filterParam);
    setPageNumber(1);
  };

  const changeSort = sortParam => {
    setSort({ sort: sortParam });
    setPageNumber(1);
  };

  const searchPage = useCallback(pageNumber => {
    setPageNumber(pageNumber);
  }, []);

  useEffect(() => {
    setSearchParams({ ...filter, page: pageNumber, ...sort });
    const { search } = window.location;
    dispatch(getAllCars(search));
  }, [pageNumber, filter, sort, dispatch, setSearchParams]);

  return (
    <div className={css.carsPage}>
      <Container>
        <HandlePanel changeSort={changeSort} changeFilter={changeFilter} />
        <CarsList cars={cars} />
        <PaginationComponent
          total={totalCars}
          searchPage={searchPage}
          options={options.carsOptions}
          sort={sort}
        />
      </Container>
    </div>
  );
};

export default CarsPage;
