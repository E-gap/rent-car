import css from './QuestionSure.module.css';

const QuestionSure = ({ textQuestion }) => {
  return (
    <div className={css.questionSure}>
      <p className={css.questionText}>{textQuestion}</p>
      <div className={css.buttonsAnswer}>
        <button className={css.buttonCancel}>Cancel</button>
        <button>OK</button>
      </div>
    </div>
  );
};

export default QuestionSure;
