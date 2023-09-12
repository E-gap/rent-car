//import css from './PaginationComponent.module.css';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
// import propTypes from 'prop-types';
import { useEffect, useState } from 'react';

const PaginationComponent = ({ searchPage, total, options, sort }) => {
  const [numberPage, setNumberPage] = useState(1);

  useEffect(() => {
    const container = document.getElementById('tui-pagination-container');

    const pagination = new Pagination(container, options);
    pagination.reset(total);
    let currentPage = pagination.getCurrentPage();

    setNumberPage(currentPage);

    pagination.on('afterMove', event => {
      currentPage = event.page;
      setNumberPage(currentPage);
    });
  }, [total, options, sort]);

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
