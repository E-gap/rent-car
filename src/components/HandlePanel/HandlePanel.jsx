import css from './HandlePanel.module.css';
import Button from '../Button/Button';
// import { useDispatch } from 'react-redux';
import { useState } from 'react';
// import { getAllCars } from '../../redux/cars/carsOperations';
import FormFilter from '../FormFilter/FormFilter';
import FormSort from '../FormSort/FormSort';
import { ModalWindow } from '../../components/ModalWindow/ModalWindow';

// import { useLocation } from 'react-router-dom';

const HandlePanel = ({ changeSort, changeFilter }) => {
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
    <div className={css.handlePanel}>
      <Button text="Filter" view="filter" handleButton={handlePanelButton} />
      <Button text="Sort" view="sort" handleButton={handlePanelButton} />
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
    </div>
  );
};

export default HandlePanel;
