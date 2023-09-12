import css from './UserCarsPage.module.css';
import Container from 'components/Container/Container';
import CarsList from 'components/CarsList/CarsList';
import HandlePanel from 'components/HandlePanel/HandlePanel';
import PaginationComponent from '../../components/Pagination/PaginationComponent';

import { selectTotalCars } from '../../redux/selectors';
import { useCallback, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import options from '../../components/Pagination/options';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllCars,
  getFavoriteCars,
  getUserCars,
} from '../../redux/cars/carsOperations';
import {
  selectAllCars,
  selectIsCarsLoading,
  selectCarsError,
  selectCarsSortBy,
} from '../../redux/selectors';

const UserCarsPage = () => {
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
    // setSearchParams({ page: 1, sort: sortParam });
    /* searchParams.append('sort', sortParam);
    setSearchParams(searchParams); */
  };

  const searchPage = useCallback(pageNumber => {
    // setSearchParams({ page: pageNumber });
    setPageNumber(pageNumber);
  }, []);

  useEffect(() => {
    setSearchParams({ ...filter, page: pageNumber, ...sort });
    const { search } = window.location;
    // console.log(search);
    dispatch(getUserCars(search));
  }, [pageNumber, filter, sort, dispatch, setSearchParams]);

  // console.log(filter, pageNumber, sort);

  return (
    <div className={css.userCarsPage}>
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

export default UserCarsPage;
