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
import { selectIsCarsLoading, selectCarsError } from '../../redux/selectors';
// import Preloader from '../../components/Preloader/Preloader';
import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';

const CarsPage = () => {
  const isLoading = useSelector(selectIsCarsLoading);
  const carsError = useSelector(selectCarsError);
  const dispatch = useDispatch();
  const totalCars = useSelector(selectTotalCars);
  const cars = useSelector(selectAllCars);
  const [searchParams, setSearchParams] = useSearchParams();
  const [pageNumber, setPageNumber] = useState(() => {
    const params = searchParams.get('page');
    return params ? params : 1;
  });
  const [sort, setSort] = useState(() => {
    let result = {};
    for (const [key, value] of searchParams.entries()) {
      if (key === 'sort') {
        result[key] = value;
      }
    }
    return result;
  });
  const [filter, setFilter] = useState(() => {
    let result = {};
    for (const [key, value] of searchParams.entries()) {
      if (key !== 'sort' && key !== 'page') {
        result[key] = value;
      }
    }
    return result;
  });

  const changeFilter = useCallback(filterParam => {
    setFilter(filterParam);
    setPageNumber(1);
  }, []);

  const changeSort = useCallback(sortParam => {
    setSort({ sort: sortParam });
    setPageNumber(1);
  }, []);

  const searchPage = useCallback(pageNumber => {
    setPageNumber(pageNumber);
  }, []);

  useEffect(() => {
    setSearchParams({ ...filter, page: pageNumber, ...sort });
    const { search } = window.location;
    dispatch(getAllCars(search));
  }, [pageNumber, filter, sort, dispatch, setSearchParams]);

  const resetFilters = () => {
    setFilter({});
    setSort({});
  };

  return (
    <section className={css.carsPage}>
      <Container>
        <h1 className={css.titlePage}>All cars</h1>
        <HandlePanel
          changeSort={changeSort}
          changeFilter={changeFilter}
          resetFilters={resetFilters}
        />
        {/* {isLoading && <Preloader />} */}
        {carsError && <ErrorComponent errorText={carsError} />}
        {!isLoading && !carsError && cars.length > 0 && (
          <CarsList cars={cars} />
        )}
        {!isLoading && !carsError && cars.length === 0 && (
          <p className={css.messageNotItems}>There is not any items</p>
        )}

        {cars.length > 0 && (
          <PaginationComponent
            total={totalCars}
            searchPage={searchPage}
            options={options.carsOptions}
            sort={sort}
          />
        )}
      </Container>
    </section>
  );
};

export default CarsPage;
