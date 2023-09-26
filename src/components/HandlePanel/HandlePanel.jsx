import css from './HandlePanel.module.css';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import { useState } from 'react';
import FormFilter from '../FormFilter/FormFilter';
import FormSort from '../FormSort/FormSort';
import { ModalWindow } from '../../components/ModalWindow/ModalWindow';

const HandlePanel = ({ changeSort, changeFilter, resetFilters }) => {
  const [isModalWindowOpen, setIsModalWindowOpen] = useState(false);
  const [buttonClickOn, setButtonClickOn] = useState(false);

  const onKeyDown = e => {
    if (e.target.getAttribute('class').includes('backdrop')) {
      setIsModalWindowOpen(false);
    }

    if (e.code === 'Escape') {
      setIsModalWindowOpen(false);
    }
  };

  const handlePanelButton = e => {
    if (e.target.getAttribute('class').includes('filter')) {
      setButtonClickOn('filter');
      setIsModalWindowOpen(true);
    } else if (e.target.getAttribute('class').includes('sort')) {
      setIsModalWindowOpen(true);
      setButtonClickOn('sort');
    }
  };

  const closeModal = e => {
    setIsModalWindowOpen(false);
  };

  return (
    <section className={css.handlePanel}>
      <Button
        text="Reset filters and sort"
        view="resetFilters"
        handleButton={resetFilters}
      />
      <Button
        text="Filter"
        view="filterCars"
        handleButton={handlePanelButton}
      />
      <Button text="Sort" view="sortCars" handleButton={handlePanelButton} />
      {isModalWindowOpen && (
        <ModalWindow
          setIsModalWindowOpen={setIsModalWindowOpen}
          onKeyDown={onKeyDown}
        >
          {buttonClickOn === 'filter' ? (
            <FormFilter closeModal={closeModal} changeFilter={changeFilter} />
          ) : (
            <FormSort closeModal={closeModal} changeSort={changeSort} />
          )}
        </ModalWindow>
      )}
    </section>
  );
};

export default HandlePanel;

HandlePanel.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  changeSort: PropTypes.func.isRequired,
  resetFilters: PropTypes.func.isRequired,
};
