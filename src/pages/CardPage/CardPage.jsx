// import css from './CardPage.module.css';
// import Button from '../../components/Button/Button';
// import CardList from '../../components/CardList/CardList';

// import { ModalWindow } from '../../components/ModalWindow/ModalWindow';
// import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refresh } from '../../redux/auth/authOperations';
/* import {
  getAllScores,
  getUserScores,
} from '../../redux/scores/scoresOperations'; */
/* import {
  selectIsLogin,
  selectAllScores,
  selectScoresByUser,
  selectIsUserLoading,
  selectAuthError,
} from '../../redux/selectors'; */
// import FormSign from '../../components/FormSign/FormSign';
// import { Scores } from '../../components/Scores/Scores';
// import { Preloader } from '../../components/Preloader/Preloader';

const CardPage = () => {
  // const [key, setKey] = useState(0);
  // const [gameOver, setGameOver] = useState('');
  // const [totalScore, setTotalScore] = useState(0);

  // const isLogin = useSelector(selectIsLogin);

  // const isUserLoading = useSelector(selectIsUserLoading);
  // const error = useSelector(selectAuthError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  /* const reloadPage = () => {
    setTotalScore(0);
    setGameOver('');
    setKey(Math.random());
  }; */

  /* const closeModal = e => {
    // setIsModalWindowOpen(false);
  }; */

  /* const showScores = e => {
    // setIsModalWindowOpen(true);
    if (e.target.getAttribute('class').includes('AllScores')) {
      // setSign('allScores');
      dispatch(getAllScores());
    } else if (e.target.getAttribute('class').includes('MyScores')) {
      dispatch(getUserScores());
      // setSign('myScores');
    }
  }; */

  return <>dfdffdfd</>;
};

export default CardPage;
