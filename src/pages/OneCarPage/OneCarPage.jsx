import { BsTrashFill } from 'react-icons/bs';
import css from './OneCarPage.module.css';
import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCar, getOneCar } from '../../redux/cars/carsOperations';
import { changeFavorite } from '../../redux/auth/authOperations';
import Preloader from '../../components/Preloader/Preloader';
import CarDataForm from '../../components/CarDataForm/CarDataForm';
import {
  selectUserFavorites,
  selectUserId,
  selectIsLogin,
} from '../../redux/selectors';
import Container from 'components/Container/Container';
import ErrorComponent from 'components/ErrorComponent/ErrorComponent';
import { MdFavorite } from 'react-icons/md';
import { ModalWindow } from '../../components/ModalWindow/ModalWindow';
import QuestionSure from '../../components/QuestionSure/QuestionSure';
import Notiflix from 'notiflix';
import { HiChevronDoubleLeft } from 'react-icons/hi';
import { BsCardImage } from 'react-icons/bs';

const OneCarPage = () => {
  const [isModalWindowOpen, setIsModalWindowOpen] = useState(false);
  const [oneCar, setOneCar] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id: carId } = useParams();
  const favorites = useSelector(selectUserFavorites);
  const userId = useSelector(selectUserId);
  const isUserLogin = useSelector(selectIsLogin);
  const location = useLocation();

  const getCar = () => {
    getOneCar(carId).then(res => {
      setIsLoading(false);
      if (res.status === 'OK') {
        setError('');
        setOneCar(res.data[0]);
      } else {
        setError('Something went wrong try later');
      }
    });
  };

  useEffect(() => {
    getCar();

    // eslint-disable-next-line
  }, []);

  const { owner } = oneCar;

  const handleFavorite = () => {
    if (!isUserLogin) {
      Notiflix.Notify.failure('Please, log in to add item to favorites ', {
        fontSize: '15px',
        position: 'center-center',
        timeout: 2000,
        width: '400px',
      });
      return;
    }
    dispatch(changeFavorite(carId));
  };

  const handleDelete = () => {
    setIsModalWindowOpen(false);
    dispatch(deleteCar(carId));
    navigate('/cars/all');
  };

  const onKeyDown = e => {
    if (e.target.getAttribute('class').includes('backdrop')) {
      setIsModalWindowOpen(false);
    }

    if (e.code === 'Escape') {
      setIsModalWindowOpen(false);
    }
  };

  const backLinkHref = location.state?.from ?? '/';

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <section className={css.oneCarPage}>
          <Container>
            {error ? (
              <ErrorComponent errorText={error} />
            ) : (
              <div className={css.pageRelative}>
                <Link to={backLinkHref} className={css.linkGoBack}>
                  <HiChevronDoubleLeft className={css.backIcon} />
                  Back
                </Link>
                {oneCar.photo !== 'null' ? (
                  <img
                    src={oneCar.photo}
                    className={css.carPhoto}
                    alt="car appearance"
                  />
                ) : (
                  <BsCardImage className={css.notImageIcon} />
                )}

                <div className={css.mainCarInfo}>
                  <MdFavorite
                    className={
                      favorites.includes(carId)
                        ? `${css.iconFavorite} ${css.favoriteSelected}`
                        : css.iconFavorite
                    }
                    onClick={handleFavorite}
                  />
                  {owner === userId && (
                    <BsTrashFill
                      className={css.iconDelete}
                      onClick={() => {
                        setIsModalWindowOpen(true);
                      }}
                    />
                  )}
                </div>
                <CarDataForm
                  oneCar={oneCar}
                  getCar={getCar}
                  canChange={owner === userId}
                />
              </div>
            )}
          </Container>
        </section>
      )}
      {isModalWindowOpen && (
        <ModalWindow
          setIsModalWindowOpen={setIsModalWindowOpen}
          onKeyDown={onKeyDown}
        >
          <QuestionSure
            textQuestion="Are you sure you want to delete this item ?"
            setIsModalWindowOpen={setIsModalWindowOpen}
            handleDelete={handleDelete}
          />
        </ModalWindow>
      )}
    </>
  );
};

export default OneCarPage;

/* OneCarPage.propTypes = {
  scores: PropTypes.array,
  sign: PropTypes.string,
}; */
