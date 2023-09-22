//import css from './PaginationComponent.module.css';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
// import propTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const PaginationComponent = ({ searchPage, total, options, sort }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [numberPage, setNumberPage] = useState(() => {
    const params = searchParams.get('page');
    return params ? params : 1;
  });

  // for correct deploy
  if (5 < 4 && console.log(setSearchParams));

  useEffect(() => {
    const container = document.getElementById('tui-pagination-container');

    const pagination = new Pagination(container, options);
    pagination.reset(total);

    if (numberPage > 1) {
      pagination.movePageTo(numberPage);
      searchPage(numberPage);
      let currentPage = pagination.getCurrentPage();
      pagination.on('afterMove', event => {
        currentPage = event.page;
        setNumberPage(currentPage);
        searchPage(numberPage);
      });
      return;
    }
    let currentPage = pagination.getCurrentPage();

    setNumberPage(currentPage);

    pagination.on('afterMove', event => {
      currentPage = event.page;
      setNumberPage(currentPage);
      searchPage(numberPage);
    });
  }, [total, options, sort, numberPage, searchPage]);

  useEffect(() => {
    searchPage(numberPage);
  }, [searchPage, numberPage]);

  return <div id="tui-pagination-container" className="tui-pagination"></div>;
};
export default PaginationComponent;

/* PaginationComponent.propTypes = {
  searchPage: propTypes.func.isRequired,
  total: propTypes.number.isRequired,
  options: propTypes.object.isRequired,
}; */
