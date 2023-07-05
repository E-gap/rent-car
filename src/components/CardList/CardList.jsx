import PropTypes from 'prop-types';
import ItemCard from '../ItemCar/ItemCar';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addScore } from '../../redux/scores/scoresOperations';
import { cardsFromBackend } from './cardsFromBackend';
import moment from 'moment';
import { selectIsLogin } from '../../redux/selectors';
import css from './CardList.module.css';

const CardList = ({ setGameOver, gameOver, setTotalScore, totalScore }) => {
  const [cards, setCards] = useState(() => {
    const shuffledCards = cardsFromBackend.sort(() => Math.random() - 0.5);
    return shuffledCards;
  });
  const [id, setId] = useState('');
  const dispatch = useDispatch();

  const isLogin = useSelector(selectIsLogin);

  useEffect(() => {
    const changeCard = id => {
      const quantityShowedCards = cards.filter(card => card.isShowed === true);

      if (quantityShowedCards.length >= 3) {
        return;
      }
      if (quantityShowedCards.length >= 2) {
        setGameOver('Game Over');
        const resultGame = {
          score: totalScore,
          date: moment().format('DD.MM.YYYY hh:mm:ss'),
        };
        if (isLogin) {
          dispatch(addScore(resultGame));
        }
      }

      const cardsAfterSelect = cards.map((card, index) => {
        if (index === id) {
          return { ...card, isShowed: true };
        } else {
          return card;
        }
      });

      setCards(cardsAfterSelect);
    };

    changeCard(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const changeScore = score => {
    if (gameOver) {
      return;
    } else setTotalScore(totalScore + score);
  };

  return (
    <ul className={css.cardList}>
      {cards.map((card, index) => (
        <ItemCard
          // key=index because every time we start game, we shuffled array of cards
          key={index}
          id={index}
          score={card.score}
          isShowed={card.isShowed}
          changeCard={setId}
          changeScore={changeScore}
        />
      ))}
    </ul>
  );
};

export default CardList;

CardList.propTypes = {
  setGameOver: PropTypes.func.isRequired,
  setTotalScore: PropTypes.func.isRequired,
  gameOver: PropTypes.string,
  totalScore: PropTypes.number,
};
