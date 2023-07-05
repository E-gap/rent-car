import css from './ItemCar.module.css';
// import { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const ItemCar = ({ oneCar }) => {
  return (
    <li className={css.itemCar}>
      <NavLink to={`/cars/:${oneCar._id}`}>
        <img src={require('../../images/bg30.jpg')} alt="car appearance" />
      </NavLink>
      <p>{oneCar.name}</p>
      <p>{oneCar.price}</p>
    </li>
  );
};

export default ItemCar;

ItemCar.propTypes = {
  // id: PropTypes.number.isRequired,
  name: PropTypes.string,
  price: PropTypes.number,
};
