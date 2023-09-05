import css from './QuestionSure.module.css';

const QuestionSure = ({ textQuestion, setIsModalWindowOpen, handleDelete }) => {
  return (
    <div className={css.questionSure}>
      <p className={css.questionText}>{textQuestion}</p>
      <div className={css.buttonsAnswer}>
        <button
          onClick={() => {
            setIsModalWindowOpen(false);
          }}
          className={css.buttonCancel}
        >
          Cancel
        </button>
        <button onClick={handleDelete}>OK</button>
      </div>
    </div>
  );
};

export default QuestionSure;
